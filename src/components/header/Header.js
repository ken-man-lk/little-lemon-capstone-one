import React from "react";
import styles from "./Header.module.css";
import Nav from "../nav";

const Header = () => {
  return (
    <div className={styles.mainWrapper}>
      <header className={styles.mainContainer}>
        <Nav />
      </header>
    </div>
  );
};

export default Header;
