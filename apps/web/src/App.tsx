import styles from "./App.module.css";
import { Hero } from "./components/hero";
import { NavBar } from "./components/navbar";
import { ItemsGrid } from "./components/items-grid";

function App() {
  return (
    <div>
      <NavBar />

      <main className={styles.main_cont}>
        <Hero />

        {/* Pets */}
        <ItemsGrid />
      </main>
    </div>
  );
}

export default App;
