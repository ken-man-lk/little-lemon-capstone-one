import React from "react";

//
import styles from "./Nav.module.css";

//
import navLogoSvg from "../../images/icons_assets/Logo.svg";

const Nav = () => {
  const navList = [
    {
      name: "Home",
      path: "./",
    },
    {
      name: "About",
      path: "./",
    },
    {
      name: "Menu",
      path: "./",
    },
    {
      name: "Reservations",
      path: "./",
    },
    {
      name: "Order Online",
      path: "./",
    },
    {
      name: "Login",
      path: "./",
    },
  ];

  return (
    <>
      <nav className={styles.mainWrapper}>
        <div className={styles.mainContainer}>
          <img src={navLogoSvg} alt="logoSvg" />
          <ul className={styles.itemContainer}>
            {navList.map((element) => (
              <li key={element.name + element.path}>
                <a href={element.path}>{element.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
