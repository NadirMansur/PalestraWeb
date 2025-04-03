import React from "react";
import avatar from "./avatarPerfilCarousel.module.scss";

export const AvatarPerfilCarousel = (props) => {
  const { items, width, height, index } = props;

  return (
    <div
      className={avatar["container"]}
      style={{ width: width, height: height }}
    >
      <div
        className={avatar["containerImg"]}
        style={{ width: width, height: height }}
      >
        <img
          src={items[index].image}
          alt={items[index].alt}
          className={avatar["profile-image"]}
        />
      </div>
    </div>
  );
};
