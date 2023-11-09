import styles from "./hero.module.css";

export function Hero() {
  return (
    <div className={styles.hero_container}>
      <div className={styles.text_cont}>
        <h2 className={styles.title}>Rolex Cellini</h2>
        <p className={styles.desc}>
          Exquisite timepiece exemplifies Rolex's dedication to precision and
          luxury, making it a must-have for those with a refined taste in
          watches.
        </p>
        <div className={styles.order_price_cont}>
          <button>Order Now</button>
          <p className={styles.price}>$8,999</p>
        </div>
      </div>
      <img src="/hero-product.webp" className={styles.hero_prod_img} />
    </div>
  );
}
