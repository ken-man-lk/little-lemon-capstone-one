import React from "react";
import styles from "./Footer.module.css";
//
import FooterLogo from "../../images/icons_assets/Logo.svg";

const ColumnFlexBox = ({ title, links }) => {
  return (
    <>
      <div className={styles.columnFlexBox}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.columnFlexBox}>
          <ul>
            {links.map((link) => (
              <li key={link.name}>
                <a className={styles.link} href={link.path}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  const navigations = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/",
    },
    {
      name: "Menu",
      path: "/",
    },
    {
      name: "Reservations",
      path: "/",
    },
    {
      name: "Order Online",
      path: "/",
    },
    {
      name: "Login",
      path: "/",
    },
  ];

  const contacts = [
    {
      name: "Phone Number",
      path: "/",
    },
    {
      name: "Email",
      path: "/",
    },
    {
      name: "Address",
      path: "/",
    },
  ];

  const socialMedia = [
    {
      name: "Instagram",
      path: "/",
    },
    {
      name: "LinkedIn",
      path: "/",
    },
    {
      name: "Pinterest",
      path: "/",
    },
  ];

  return (
    <>
      <div className={styles.footerContainer}>
        <img className={styles.footerLogo} src={FooterLogo} />
        <div className={styles.flexBoxContainer}>
          <ColumnFlexBox title={"Navigation"} links={navigations} />
          <ColumnFlexBox title={"Contacts"} links={contacts} />
          <ColumnFlexBox title={"Social Media"} links={socialMedia} />
        </div>
      </div>
    </>
  );
};

export default Footer;
