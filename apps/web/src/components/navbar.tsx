import styles from "./navbar.module.css";
import { Button } from "./ui/button";

export function NavBar(): JSX.Element {
  return (
    <nav className={styles.container}>
      <div className={styles.flex_row_cont}>
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
      </div>

      <div className={styles.flex_row_cont}>
        <Button>SIGN UP</Button>
        <Button variant="secondary">LOG IN</Button>
      </div>

      <div className={styles.bottom_gradient} />
    </nav>
  );
}
