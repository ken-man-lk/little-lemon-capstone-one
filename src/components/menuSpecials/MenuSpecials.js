import React from "react";

//
import FoodIntroduction from "../foodIntroduction";

//
import styles from "./MenuSpecials.module.css";

//
import imgGreekSalad from "../../images/icons_assets/greek salad.jpg";
import imgBruchetta from "../../images/icons_assets/bruchetta.png";
import imgLemonDessert from "../../images/icons_assets/greek salad.jpg";

//
const MenuSpecials = () => {
  const menus = [
    {
      foodImage: imgGreekSalad,
      foodName: "Greek salad",
      foodPrice: "12.99",
      foodDescr:
        "The famous greek salad of crispy lettuce, peppers, olives and out Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
    },
    {
      foodImage: imgBruchetta,
      foodName: "Bruchetta",
      foodPrice: "5.99",
      foodDescr:
        "Our Brushetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
    },
    {
      foodImage: imgLemonDessert,
      foodName: "Lemon Dessert",
      foodPrice: "5.00",
      foodDescr:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
    },
  ];

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.mainContainer}>
        <div className={styles.topBar}>
          <h2 className={styles.title}>This weeks specials!</h2>
          <button className={styles.btnOnlineMenu}>Online Menu</button>
        </div>
        <div className={styles.menuGrid}>
          {menus.map((menu) => (
            <FoodIntroduction
              key={menu.foodName + menu.foodPrice}
              foodImage={menu.foodImage}
              foodName={menu.foodName}
              foodPrice={menu.foodPrice}
              foodDescr={menu.foodDescr}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSpecials;
