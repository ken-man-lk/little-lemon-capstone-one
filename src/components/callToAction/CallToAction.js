import React from "react";
//
import styles from "./CallToAction.module.css";

//
const CallToAction = (props) => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.mainContainer}>{props.children}</div>
    </div>
  );
};

export default CallToAction;
