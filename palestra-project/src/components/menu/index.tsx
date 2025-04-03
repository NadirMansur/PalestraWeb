import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router";
import styles from "./styles.module.scss";

export const Menu = ({ buttons }) => {
  return (
    <nav className={styles.mainNav}>
      <ul className={styles.nav}>
        {buttons &&
          buttons.map((button) => {
            return (
              <li key={`${button.to}_${button.label}`}>
                <NavLink key={`${button.label}`} to={`${button.to}`}>
                  <p
                    className={classNames(
                      styles.hoverUnderlineAnimation,
                      styles.center
                    )}
                  >
                    {button.label}
                  </p>
                </NavLink>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};
