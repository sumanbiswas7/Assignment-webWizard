import styles from "./profile.module.css";
import DUMMY_PETS from "../data/dummy-pets.json";
import { Button } from "../components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { IconHeartFilled, IconHeartPlus } from "@tabler/icons-react";
import { useState } from "react";

export default function Profile() {
  let param = useParams();
  const id = param.id || 0;

  const [favourite, setFavourite] = useState(false);
  const navigate = useNavigate();
  const item = DUMMY_PETS.find((pet) => pet.id == id);

  function handleAddToFavClick() {
    setFavourite(!favourite);
  }

  return (
    <div className={styles.page_cont}>
      <span className={styles.btn_span}>
        <Button onClick={() => navigate("/")}>Go Back</Button>
      </span>

      <div className={styles.container}>
        {/* Profile Image */}
        <div className={styles.img_container}>
          <img className={styles.cover_img} src={item?.img} />
        </div>

        {/* Description */}
        <div className={styles.info_cont}>
          <h4 className={styles.info_title}>{item?.name}</h4>
          <p className={styles.info_desc}>{item?.description}</p>

          <div className={styles.sub_info_cont}>
            <div>
              <p className={styles.prop}>
                <span className={styles.acc_col}>Gender</span> {item?.gender}
              </p>
              <p className={styles.prop}>
                <span className={styles.acc_col}>Age</span> {item?.age} years
              </p>
              <p className={styles.prop}>
                <span className={styles.acc_col}>Weight</span> {item?.weight}
              </p>
            </div>

            <p className={styles.price}>₹{item?.price.toLocaleString()}/-</p>

            {item?.type === "dog" ? (
              <img src="/dog-symbol.svg" className={styles.symbol_img} />
            ) : null}
            {item?.type === "cat" ? (
              <img src="/cat-symbol.svg" className={styles.symbol_img} />
            ) : null}
          </div>

          {/* Enquiry and Fav Buttons */}
          <div className={styles.row_cont}>
            <Button>Approach to buy</Button>
            <Button variant="round" onClick={handleAddToFavClick}>
              {favourite ? (
                <IconHeartFilled color="#404040" size={18} />
              ) : (
                <IconHeartPlus color="#404040" size={18} />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
