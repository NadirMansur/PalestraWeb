// HomePage.js
import React from "react";
import foto1 from "../../assets/foto1.jpg";
import foto2 from "../../assets/foto2.jpg";
import foto3 from "../../assets/foto3.jpg";
import grupo1 from "../../assets/grupo1.jpg";
import { LargeCarousel } from "../../components/largeCarousel/LargeCarousel.tsx";
import MainText from "../../components/MainText/MainText.jsx";
import MidelContent from "../../components/midleContent/MidelContent.jsx";
import Wave from "../../components/midleContent/Wave.jsx";

const HomePage = ({ headerHeight }) => {
  return (
    <div
      id='content'
      style={{ paddingTop: headerHeight, position: "relative" }}
    >
      <LargeCarousel
        node={<MainText />}
        items={[
          {
            alt: "imagen1",
            image: foto1,
          },
          {
            alt: "imagen2",
            image: foto3,
          },
          {
            alt: "imagen3",
            image: foto2,
          },
          {
            alt: "imagen4",
            image: grupo1,
          },
        ]}
      />

      <Wave />
      <MidelContent />
    </div>
  );
};

export default HomePage;
