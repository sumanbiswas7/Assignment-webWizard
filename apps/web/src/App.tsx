import styles from "./App.module.css";
import { Hero } from "./components/hero";
import { NavBar } from "./components/navbar";
import { ProductsGrid } from "./components/products-grid";

function App() {
  return (
    <div>
      <NavBar />

      <main className={styles.main_cont}>
        <Hero />

        {/* Products */}
        {/* <ProductsGrid /> */}
      </main>
    </div>
  );
}

export default App;
