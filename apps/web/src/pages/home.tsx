import styles from "./home.module.css";
import { Hero } from "./../components/hero";
import { NavBar } from "./../components/navbar";
import { ItemsGrid } from "./../components/items-grid";

export default function Home() {
  return (
    <main>
      <NavBar />

      <main className={styles.main_cont}>
        <Hero />
        {/* Pets */}
        <ItemsGrid />
      </main>
    </main>
  );
}
