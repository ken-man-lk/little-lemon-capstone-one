import React from "react";

//
import styles from "./HomePageIntroduction.module.css";
import displayImage from "../../images/icons_assets/restauranfood.jpg";

//
const HomePageIntroduction = () => {
  return (
    <>
      <div className={styles.flexbox}>
        <div className={styles.leftContent}>
          <h3 className={styles.title}>Little Lemon</h3>
          <h4 className={styles.subtitle}>Chicago</h4>
          <p className={styles.description}>
            We are a family owned Moditerranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className={styles.reserveBtn}>
            <a href={"./booking"}>Reserve a Table</a>
          </button>
        </div>
        <div className={styles.rightContent}>
          <img
            className={styles.displayImage}
            src={displayImage}
            alt="displayImage"
          />
        </div>
      </div>
    </>
  );
};

export default HomePageIntroduction;
