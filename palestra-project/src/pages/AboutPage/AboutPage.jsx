import img1 from "../../assets/1.jpg";
import img10 from "../../assets/10.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img6 from "../../assets/6.jpg";
import img9 from "../../assets/9.jpg";
import { Galeria } from "../../components/Galery/Galery.tsx";
import { MapaPalestra } from "../../components/MapaPalestra/MapaPalestra";
import styles from "./AboutPage.module.scss";

export const AboutPage = ({ headerHeight }) => {
  const galeria = [
    [img2, img6, img4],

    [img9, img10, img3],
  ];
  return (
    <div
      className={styles.page}
      style={{ paddingTop: headerHeight, position: "relative" }}
    >
      <div className={styles.container}>
        <h1>Sobre nostros</h1>
        <img src={img1} alt='palestra' className={styles.img} />

        <div className={styles.card}>
          <div className={styles.galeria_mapa}>
            <div className={styles.galeria}>
              <Galeria galeria={galeria} />
            </div>
          </div>
          <div className={styles.linea}></div>
          <div className={styles.sectionTitle}>
            <p>
              La ONG Palestra de Mar del Plata es una organización que se enfoca
              en realizar actividades solidarias y de ayuda en la comunidad. Con
              20 años de experiencia, Palestra surgió tras el cierre del hogar
              municipal de niños y actualmente da abrigo a 120 niños y
              adolescentes, convirtiéndose en un punto de referencia para los
              vecinos del puerto de la ciudad ¹.
            </p>
            <p>
              Entre sus actividades, Palestra organiza eventos deportivos
              solidarios, como la PetRun, una correcaminata para mascotas, y la
              LoveRunPalestra, un recorrido de 5K por el Corredor Saludable de
              Mar del Plata. También trabajan en colaboración con la
              Municipalidad de General Pueyrredon y la Secretaría de Salud.
            </p>
            <p>
              Además, Palestra ofrece una variedad de programas y servicios,
              incluyendo: - Hogar de niños y adolescentes: brindando alojamiento
              y apoyo a 45 niños y adolescentes. - Centro de día: con una
              guardería para niños de 45 días a 5 años y una escuela de arte
              para niños de 6 a 12 años. - Programas de empoderamiento: como
              "Oye chica", destinado a mujeres víctimas de violencia, y "Volver
              a casa", para personas con problemática de consumo. - Escuela de
              formación: para trabajar habilidades y brindar herramientas de
              autovalimiento.
            </p>
            <p>
              Tambien cuenta con el desarrollo del Club Deportivo Palestra donde
              se practican actividades depostivas para el bienestar fisico de
              los integrantes
            </p>
            <p>
              Si estás interesado en obtener más información sobre la ONG
              Palestra de Mar del Plata, puedes contactarlos a través de sus
              redes sociales o visitar su sede en Cerrito 1280.
            </p>
          </div>
        </div>
        <MapaPalestra width='90%' height='20rem' />
      </div>
    </div>
  );
};
