import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import "../../animation.css";
import { Menu } from "../menu/index.tsx";
import styles from "./LockHeader.module.scss";

const LockHeader = ({
  onHeightChange = undefined,
  slideInDown = false,
  fadeIn = false,
  lightSpeedIn = false,
  fixed = false,
  marca,
}: {
  marca: React.ReactNode;
  slideInDown?: boolean;
  fadeIn?: boolean;
  lightSpeedIn?: boolean;
  fixed?: boolean;
  onHeightChange?: (height: number) => void | null;
}) => {
  const [isSmall, setIsSmall] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Cambia el estado dependiendo de la posición del scroll
      if (window.scrollY > 50) {
        setIsSmall(true);
      } else {
        setIsSmall(false);
      }
    };

    // Escucha el evento de scroll
    window.addEventListener("scroll", handleScroll);

    const updateHeaderHeight = () => {
      if (headerRef.current) {
        onHeightChange && onHeightChange(headerRef.current.offsetHeight); // Envía la altura al padre
      }
    };

    updateHeaderHeight(); // Llama al montar
    window.addEventListener("resize", updateHeaderHeight); // Recalcula al redimensionar

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, [onHeightChange]);

  return (
    <header
      ref={headerRef}
      className={classNames(
        styles.header,
        fixed && styles.fixed,
        { [styles.small]: isSmall && fixed },
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
