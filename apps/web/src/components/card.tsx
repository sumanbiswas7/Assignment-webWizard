import styles from "./card.module.css";

export function Card({
  description,
  img,
  title,
  age,
  type,
  weight,
  gender,
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <img className={styles.cover_img} src={img} />
      </div>

      <div className={styles.info_cont}>
        <h4 className={styles.info_title}>{title}</h4>
        <p className={styles.info_desc}>{description}</p>

        <div className={styles.sub_info_cont}>
          <div>
            <p className={styles.prop}>
              <span className={styles.acc_col}>Gender</span> {gender}
            </p>
            <p className={styles.prop}>
              <span className={styles.acc_col}>Age</span> {age} years
            </p>
            <p className={styles.prop}>
              <span className={styles.acc_col}>Weight</span> {weight}
            </p>
          </div>
          
          {type === "dog" ? (
            <img src="/dog-symbol.svg" className={styles.symbol_img} />
          ) : null}
          {type === "cat" ? (
            <img src="/cat-symbol.svg" className={styles.symbol_img} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

interface Props {
  img: string;
  title: string;
  description: string;
  age: number;
  type: string;
  weight: string;
  gender: string;
}
