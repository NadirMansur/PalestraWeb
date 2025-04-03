import React, { useState } from "react";
import dog4 from "../../../assets/petRun10.png";
import dog5 from "../../../assets/petRun11.png";
import dog1 from "../../../assets/petRun7.png";
import dog2 from "../../../assets/petRun8.png";
import dog3 from "../../../assets/petRun9.png";
import { AvatarPerfilCarousel } from "../../avatarPerfilCarousel/AvatarPerfilCarousel";
import { ProfileInfo } from "../../ProfileInfo/ProfileInfo";
import { PetContent } from "./PetContent/PetContent";
import styles from "./PetRun.module.scss";

export const PetRun = () => {
  const [index, setIndex] = useState(0);
  const items = [
    {
      image: dog1,
      alt: "dog1",
    },
    {
      image: dog2,
      alt: "dog2",
    },
    {
      image: dog3,
      alt: "dog3",
    },
    {
      image: dog4,
      alt: "dog4",
    },
    {
      image: dog5,
      alt: "dog5",
    },
  ];
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <AvatarPerfilCarousel
          index={index}
          items={items}
          width='7rem'
          height='7rem'
        />
        <ProfileInfo
          numItems={items.length}
          setIndex={setIndex}
          index={index}
          info={{
            title: "PetRun",
            detail: "Correcaminata con mascotas",
            date: "Próximo evento: 27/04/2025",
          }}
        />
      </div>
      <PetContent />
    </div>
  );
};
