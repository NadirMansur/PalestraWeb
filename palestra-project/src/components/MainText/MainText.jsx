import classNames from "classnames";
import styles from "./MainText.module.scss";

const MainText = () => {
  return (
    <div className={classNames(styles.textContainer)}>
      <div className={styles.content}>
        <div className={classNames(styles.text1)}>Palestra ONG</div>
        <div className={classNames(styles.text2Container)}>
          <p className={classNames(styles.text2)}>
            Somos una organización no gubernamental que se enfoca en realizar
            actividades solidarias y de ayuda en la comunidad.
          </p>
          <p className={classNames(styles.text2)}>
            Desde el año 2004, asistimos a niños, adolescentes y jóvenes con
            diferentes actividades con grupos de ayuda mutua dirigidos por
            psicólogos sociales. Trabajamos en forma integral, sumando
            actividades deportivas, artísticas, y capacitándonos para el ámbito
            laboral.
          </p>
          <p className={classNames(styles.text2)}>
            Entre las actividades realizadas por la ONG Palestra se encuentra la
            PetRun, una correcaminata solidaria para mascotas que se realizó en
            el Parque Camet en abril de 2023 y 2024.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainText;
