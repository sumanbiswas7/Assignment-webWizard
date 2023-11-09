import styles from "./hero.module.css";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <div className={styles.hero_container}>
      <div className={styles.text_cont}>
        <h2 className={styles.title}>
          WELCOME TO THE <br />
          <span className={styles.col_accent}>ULTIMATE</span> DESTINATION FOR{" "}
          <br />
          <span className={styles.col_accent}>PET</span> LOVERS
        </h2>

        <p className={styles.desc}>
          Where Tails Wag and Whiskers Purr with Delight! Explore a World of Pet
          Delights and Discover What Makes Your Furry Friend Smile
        </p>

        <div className={styles.flex_row_cont}>
          <Button size="lg">Enquire</Button>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => window.open("https:sumanbiswas.vercel.app")}
          >
            Call Us
          </Button>
        </div>
      </div>

      <div className={styles.gradient_circle}>
        <img src="/hero.png" className={styles.hero_prod_img} />
      </div>
    </div>
  );
}
