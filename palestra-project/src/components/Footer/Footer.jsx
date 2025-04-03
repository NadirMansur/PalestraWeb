import React from "react";
import Wave from "../midleContent/Wave";
import ContactIcon from "./../../assets/icons8-contacto-100-back.png";
import MailIcon from "./../../assets/icons8-correo-100.png";
import HomePointIcon from "./../../assets/icons8-navegación-100.png";
import ClockIcon from "./../../assets/icons8-reloj-100.png";
import PhoneIcon from "./../../assets/icons8-teléfono-100.png";
import { ImgIcon } from "./../../components/Ficon/Ficon";

import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.container}>
      <Wave footer />
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>
            &copy; {new Date().getFullYear()} PalestraONG. Todos los derechos
            reservados.
          </p>
          <div className={styles.section}>
            <div className={styles.sectionTitle}>
              <ImgIcon
                className={styles.icon}
                src={ContactIcon}
                alt=''
                height='20'
                width='20'
              ></ImgIcon>
              <span>Contacto</span>
            </div>
            <div className={styles.sectionContent}>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <ImgIcon
                  className={styles.icon}
                  src={HomePointIcon}
                  height='20'
                  width='20'
                />
                <a
                  href='https://www.google.com/maps?q=Cerrito+1280,+Mar+del+Plata,+Argentina'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Cerrito 1280, Mar del Plata, Argentina
                </a>
              </div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <ImgIcon
                  className={styles.icon}
                  src={PhoneIcon}
                  alt=''
                  height='20'
                  width='20'
                ></ImgIcon>
                <span>0223 595-4153</span>
              </div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <ImgIcon
                  className={styles.icon}
                  src={MailIcon}
                  alt=''
                  height='20'
                  width='20'
                ></ImgIcon>
                <span>asocpalestra@hotmail.com</span>
              </div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <ImgIcon
                  className={styles.icon}
                  src={ClockIcon}
                  alt=''
                  height='20'
                  width='20'
                ></ImgIcon>
                <span>Siempre abierto</span>
              </div>
            </div>
          </div>
          <div className={styles.sectionContent}>
            <p>
              Derechos sobre iconografia:
              <a href='https://iconos8.es/' className={styles.a}>
                <p>https://iconos8.es/</p>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
