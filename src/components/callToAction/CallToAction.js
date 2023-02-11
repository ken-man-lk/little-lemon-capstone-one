import React from "react";
// import { useHistory } from "react-router-dom";

//
import styles from "./CallToAction.module.css";

//
import displayImage from "../../images/icons_assets/restauranfood.jpg";

const CallToAction = () => {
  // const history = useHistory();
  // const onReserveClickHandler = () => {
  //   history.push("./booking");
  // };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.mainContainer}>
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
      </div>
    </div>
  );
};

export default CallToAction;
