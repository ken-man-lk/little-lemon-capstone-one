import React from "react";

//
import styles from "./FoodIntroduction.module.css";

import Basket from "../../images/icons_assets/Basket.svg";

//
const FoodIntroduction = ({ foodImage, foodName, foodPrice, foodDescr }) => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.mainContainer}>
        <div className={styles.flexboxContainer}>
          <img className={styles.foodImage} src={foodImage} alt="food" />

          <div className={styles.foodNameFlexbox}>
            <h3 className={styles.foodName}>{foodName}</h3>
            <p className={styles.foodPrice}>${foodPrice}</p>
          </div>

          <p className={styles.foodDescr}>{foodDescr}</p>
          <button className={styles.btnOrder}>
            Order a delivery
            <img className={styles.deliveryIcon} src={Basket} alt="basket" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodIntroduction;
