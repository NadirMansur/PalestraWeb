import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";

export const MenuCallback = ({ buttons }) => {
  return (
    <nav className={styles.mainNav}>
      <ul className={styles.nav}>
        {buttons &&
          buttons.map((button) => {
            return (
              <li key={`${button.to}_${button.label}`}>
                <div key={`${button.label}`} onClick={button.callback}>
                  <p
                    className={classNames(
                      styles.hoverUnderlineAnimation,
                      styles.center
                    )}
                  >
                    {button.label}
                  </p>
                </div>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};
