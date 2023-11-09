import styles from "./items-grid.module.css";
import DUMMY_PETS from "../data/dummy-pets.json";
import { Card } from "./card";
import { useState } from "react";
import { Group, Modal, Radio } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export function ItemsGrid() {
  const [items, setItems] = useState(DUMMY_PETS);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      {/* Browse Pets Text */}
      <div className={styles.browse_cont}>
        <p className={styles.browse_txt}>
          MEET OUR <span className={styles.col_accent}>PET </span>PALS
        </p>
        <button onClick={open}>
          <img src="/filter-icon.svg" className={styles.filter_icon} />
        </button>
      </div>

      {/* Watches Grid */}
      <div className={styles.grid_container}>
        {items.map((item) => (
          <Card
            title={item.name}
            description={item.description}
            img={item.img}
            age={item.age}
            type={item.type}
            key={item.id}
            weight={item.weight}
            gender={item.gender}
          />
        ))}
      </div>

      <FilterModal />
    </div>
  );

  /**
   * ----------------------------------------------------
   *    Main Function to handle soring and filtering
   * ----------------------------------------------------
   */
  function handleSortChange(type: string) {
    if (type === "name") {
    }
    if (type === "desc") {
      const sortedProducts = DUMMY_PETS.sort((a, b) => {
        const descA = a.description.toUpperCase(); // Convert titles to uppercase for case-insensitive sorting
        const descB = b.description.toUpperCase();

        if (descA < descB) {
          return -1;
        }
        if (descA > descB) {
          return 1;
        }
        return 0;
      });

      setItems(sortedProducts);
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
        title="Filter Pets"
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        {/* Modal content */}
        <div className={styles.modal_box}>
          <div>
            <h3>Sort By</h3>
            <Radio.Group onChange={handleSortChange}>
              <Group
                mt="xs"
                display={"flex"}
                style={{ flexDirection: "column" }}
                align="start"
              >
                <Radio value="name" label="Name" />
                <Radio value="price" label="Price" />
                <Radio value="desc" label="Description" />
              </Group>
            </Radio.Group>
          </div>
          <div>
            <h3>Filter By</h3>
            <Radio.Group onChange={handleSortChange}>
              <Group
                mt="xs"
                display={"flex"}
                style={{ flexDirection: "column" }}
                align="start"
              >
                <Radio value="price1" label="Price ($1999 - $3999)" />
                <Radio value="price2" label="Price ($4000 - $6999)" />
                <Radio value="price3" label="Price (More than $7000)" />
              </Group>
            </Radio.Group>
          </div>
        </div>
      </Modal>
    );
  }
}
