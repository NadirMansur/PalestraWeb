import React, { useState } from "react";
import Icon from "../icon/Icon";
import nextIcon from "./../../assets/icons8-chevron-right-100.png";
import styles from "./FylerCarousel.module.scss";

export const FlyerCarousel = (props) => {
  const { items, width, height } = props;

  const numItems = items.length;
  const [index, setIndex] = useState(0);

  const nextSlide = (i) => {
    if (i === numItems - 1) {
      return 0;
    }
    return i + 1;
  };

  return (
    <div
      className={styles["container"]}
      style={{ width: width, height: height }}
    >
      <div
        style={{ width: width, height: height }}
        className={styles.imgContainer}
      >
        <img
          className={styles.profileImage}
          src={items[index].image}
          alt={items[index].alt}
        ></img>
      </div>
      <Icon
        icon={nextIcon}
        onClick={() => {
          setIndex(nextSlide(index));
        }}
        position='relative'
        marginTop='0'
        marginLeft='0'
        id='nextPetRun'
        height='3rem'
        width='3rem'
      />
    </div>
  );
};
