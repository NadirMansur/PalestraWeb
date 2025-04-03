import classNames from "classnames";
import React, { useState } from "react";
import "../../animation.css";
import NextButton from "../NextButton/NextButton";
import styles from "./largeCarousel.module.scss";

type Item = {
  image: string;
  alt: string;
};

type LargeCarouselProps = {
  items: Item[];
  node: React.ReactNode;
};

export const LargeCarousel: React.FC<LargeCarouselProps> = ({
  items,

  node,
}) => {
  const numItems = items.length;
  const [index, setIndex] = useState(0);
  const [fade1, setFade1] = useState(true);
  const [fade2, setFade2] = useState(false);

  const nextSlide = (i) => {
    if (i === numItems - 1) {
      return 0;
    }
    return i + 1;
  };

  const toogleFadeState = () => {
    setFade1(!fade1);
    setFade2(!fade2);
  };

  return (
    <div
      className={classNames(
        styles.slider,
        "animated",
        fade1 && "fadeIn",
        fade2 && "fadeIn2"
      )}
    >
      <figure className={styles.figure}>
        <div className={styles.slide}>
          <img src={items[index].image} alt={items[index].alt} />
        </div>
      </figure>
      <NextButton
        onClick={() => {
          toogleFadeState();
          setIndex(nextSlide(index));
        }}
      ></NextButton>
      {node && node}
    </div>
  );
};
