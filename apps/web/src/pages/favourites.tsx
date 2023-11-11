import { useEffect, useState } from "react";
import { ItemsGrid } from "../components/items-grid";
import DUMMY_PETS from "../data/dummy-pets.json";
import styles from "./favourites.module.css";

export function Favourites() {
  const [data, setData] = useState<typeof DUMMY_PETS>([]);

  useEffect(() => {
    const favs = localStorage.getItem("favourite");
    const favsMap = JSON.parse(favs || "{}");
    const filteredData = DUMMY_PETS.filter((item) => item.id in favsMap);
    setData(filteredData);
  }, []);

  return (
    <div className={styles.container}>
      <ItemsGrid data={data} title="Favourite Pets" />
    </div>
  );
}
