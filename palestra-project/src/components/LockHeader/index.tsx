import classNames from "classnames";
import React from "react";
import "../../animation.css";
import { Menu } from "../menu/index.tsx";
import styles from "./LockHeader.module.scss";

const LockHeader = ({
  slideInDown = false,
  fadeIn = false,
  lightSpeedIn = false,
  marca,
}: {
  marca: React.ReactNode;
  slideInDown?: boolean;
  fadeIn?: boolean;
  lightSpeedIn?: boolean;
}) => {
  return (
    <header
      className={classNames(
        styles.header,
        slideInDown && "slideInDown",
        fadeIn && "fadeIn",
        lightSpeedIn && "lightSpeedIn",
        "animated"
      )}
    >
      <div className={styles.container}>
        <div className={styles.row}>
          {marca}
          <div className={styles.menuContainter}>
            <Menu
              buttons={[
                { label: "Home", to: "/" },
                { label: "Sobre nosotros", to: "/about" },
                { label: "Contactanos", to: "/contact" },
              ]}
            />{" "}
          </div>
        </div>
      </div>
    </header>
  );
};

export default LockHeader;
