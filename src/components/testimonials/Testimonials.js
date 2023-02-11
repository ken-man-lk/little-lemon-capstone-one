import React from "react";
import styles from "./Testimonials.module.css";

//
import HeadShotIcon from "../../images/icons_assets/headshot_icon.png";

//
const Testimonial = ({ name, icon, message, score }) => {
  return (
    <div className={styles.testimonialCard}>
      <p className={styles.testimonialScore}>{score} / 5</p>
      <img className={styles.testimonialIcon} src={icon} />
      <p className={styles.testimonialName}>{name}</p>
      <p className={styles.testimonialMessage}>{`"${message}"`}</p>
    </div>
  );
};

const Testimonials = () => {
  const comments = [
    {
      id: 0,
      name: "Pete Jeffery.",
      icon: HeadShotIcon,
      message: "This restaurent is very good",
      score: 4.5,
    },
    {
      id: 1,
      name: "John Lee",
      icon: HeadShotIcon,
      message: "This restaurent is the best",
      score: 4.5,
    },
    {
      id: 2,
      name: "Daris Luu.",
      icon: HeadShotIcon,
      message: "Very good services",
      score: 4.5,
    },
    {
      id: 3,
      name: "Danana Tim.",
      icon: HeadShotIcon,
      message: "Price is really reasonable",
      score: 4.5,
    },
  ];

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.mainContainer}>
        <h3 className={styles.title}>Testimonials</h3>
        <div className={styles.testimonialContainer}>
          {comments.map((comment) => (
            <Testimonial
              key={comment.id}
              icon={comment.icon}
              name={comment.name}
              message={comment.message}
              score={comment.score}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
