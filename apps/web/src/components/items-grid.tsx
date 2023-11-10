import styles from "./items-grid.module.css";
import DUMMY_PETS from "../data/dummy-pets.json";
import { Card } from "./card";
import { useState } from "react";
import { Flex, Group, Input, Modal, Radio } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Button } from "./ui/button";

export function ItemsGrid() {
  const [searchTxt, setSearchTxt] = useState("");
  const [items, setItems] = useState(DUMMY_PETS);
  const [text, setText] = useState("");
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      {/* Browse Pets and Filter */}
      <div className={styles.browse_cont}>
        <p className={styles.browse_txt}>
          MEET OUR <span className={styles.col_accent}>PET </span>PALS
        </p>
        <Button style={{ paddingBlock: 10 }} onClick={open}>
          <img src="/filter-icon.svg" className={styles.filter_icon} />
        </Button>
      </div>

      {/* Pets Grid */}
      <div className={styles.grid_container}>
        {items.map((item) => (
          <Card
            id={item.id}
            title={item.name}
            description={item.description}
            img={item.img}
            age={item.age}
            type={item.type}
            key={item.id}
            weight={item.weight}
            gender={item.gender}
            price={item.price}
          />
        ))}
      </div>

      <FilterModal />
    </div>
  );

  /**
   * ----------------------------------------------------
   *    Main Function to handle searching
   * ----------------------------------------------------
   */
  function handleSearch() {
    const slug = searchTxt;
    const strippedSlug = slug.toLowerCase().replace(" ", "");

    const filteredItems = DUMMY_PETS.filter((item) => {
      const strippedTxt = item.name.toLowerCase().replace(" ", "");
      if (strippedTxt.includes(strippedSlug)) return true;
      else return false;
    });

    setItems(filteredItems);
  }

  /**
   * ----------------------------------------------------
   *    Main Function to handle soring and filtering
   * ----------------------------------------------------
   */
  function handleSortChange(type: string) {
    if (type === "name") {
      setText("Sorted by Name");
      const sortedItems = DUMMY_PETS.sort((a, b) => {
        const titleA = a.name.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
        const titleB = b.name.toUpperCase();

        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });

      setItems(sortedItems);
      close();
    }
    if (type === "priceL") {
      setText("Sorted by Price (Low to High)");
      const sortedItems = DUMMY_PETS.sort((a, b) => a.price - b.price);
      setItems(sortedItems);
      close();
    }
    if (type === "priceH") {
      setText("Sorted by Price (High to Low)");
      const sortedItems = DUMMY_PETS.sort((a, b) => b.price - a.price);
      setItems(sortedItems);
      close();
    }

    // Filter by cats or dogs
    if (type === "cats") {
      setText("Showing only Cats");
      const filteredItems = DUMMY_PETS.filter((pet) => pet.type === "cat");
      setItems(filteredItems);
      close();
    }
    if (type === "dogs") {
      setText("Showing only Dogs");
      const filteredItems = DUMMY_PETS.filter((pet) => pet.type === "dog");
      setItems(filteredItems);
      close();
    }
  }

  /**
   * --------------------
   *   Modal Component
   * --------------------
   */
  function FilterModal() {
    return (
      <Modal
        opened={opened}
        onClose={close}
        title="Sort/Filter Pets"
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        {/* Modal content */}
        {text && <p className={styles.filter_txt}>{text}</p>}
        <Flex align={"center"} justify={"space-between"} gap={"sm"}>
          <Input
            style={{ width: "100%" }}
            mb={"md"}
            placeholder="Search by pet names or description"
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.currentTarget.value)}
          />
          <Button size="sm" onClick={handleSearch}>
            Search
          </Button>
        </Flex>
        <div className={styles.modal_box}>
          <div>
            <Radio.Group onChange={handleSortChange}>
              <h4>Sort By</h4>
              <Group
                mt="xs"
                display={"flex"}
                style={{ flexDirection: "column" }}
                align="start"
              >
                <Radio value="name" label="Name" />
                <Radio value="priceL" label="Price (Low to High)" />
                <Radio value="priceH" label="Price (High to Low)" />
              </Group>
            </Radio.Group>
          </div>
          <div>
            <h4>Filter By</h4>
            <Radio.Group onChange={handleSortChange}>
              <Group
                mt="xs"
                display={"flex"}
                style={{ flexDirection: "column" }}
                align="start"
              >
                <Radio value="dogs" label="Dogs" />
                <Radio value="cats" label="Cats" />
              </Group>
            </Radio.Group>
          </div>
        </div>
      </Modal>
    );
  }
}
