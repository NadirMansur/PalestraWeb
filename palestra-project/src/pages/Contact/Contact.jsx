import ClockIcon from "./../../assets/icons8-clock-100.png";
import ContactIcon from "./../../assets/icons8-contacto-100.png";
import MailIcon from "./../../assets/icons8-correo-100-white.png";
import HomePointIcon from "./../../assets/icons8-navigator-100.png";
import PhoneIcon from "./../../assets/icons8-teléfono-100-white.png";
import { ImgIcon } from "./../../components/Ficon/Ficon";
import styles from "./Contact.module.scss";

export const Contact = ({ headerHeight }) => {
  return (
    <div
      className={styles.section}
      style={{ paddingTop: headerHeight, position: "relative" }}
    >
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <ImgIcon src={ContactIcon} alt='contacto' height='50' width='50' />
          <span>Contacto</span>
        </div>
        <div className={styles.linea}></div>
        <div className={styles.sectionContent}>
          <div className={styles.sectionTitle}>
            <ImgIcon
              src={HomePointIcon}
              alt=''
              height='50'
              width='50'
            ></ImgIcon>
            <span>cerrito 1280, Mar del Plata, Argentina</span>
          </div>
          <div className={styles.sectionTitle}>
            <ImgIcon src={PhoneIcon} alt='' height='50' width='50'></ImgIcon>
            <span>0223 595-4153</span>
          </div>
          <div className={styles.sectionTitle}>
            <ImgIcon src={MailIcon} alt='' height='50' width='50'></ImgIcon>
            <span>asocpalestra@hotmail.com</span>
          </div>
          <div className={styles.sectionTitle}>
            <ImgIcon src={ClockIcon} alt='' height='50' width='50'></ImgIcon>
            <span>Siempre abierto</span>
          </div>
        </div>
      </div>
    </div>
  );
};
