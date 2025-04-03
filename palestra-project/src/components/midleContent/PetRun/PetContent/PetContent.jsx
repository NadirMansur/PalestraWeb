import flyer from "../../../../assets/flyer.png";
import flyer2 from "../../../../assets/petRun2.png";
import flyer4 from "../../../../assets/petRun3.png";
import flyer5 from "../../../../assets/petRun4.png";
import flyer6 from "../../../../assets/petRun5.png";
import { FlyerCarousel } from "../../../FlyerCarousel/FlyerCarousel";
import styles from "./PetContent.module.scss";

export const PetContent = () => {
  return (
    <div className={styles.container}>
      <FlyerCarousel
        items={[
          { image: flyer, alt: "flyer" },
          { image: flyer2, alt: "flyer2" },
          { image: flyer4, alt: "flyer4" },
          { image: flyer5, alt: "flyer5" },
          { image: flyer6, alt: "flyer6" },
        ]}
      />
      <span className={styles.text}>
        Pet Run Palestra es un evento deportivo, familiar y solidario diseñado
        para celebrar y promover el amor y la tenencia responsable de nuestras
        mascotas. Organizado por la ONG Palestra, esta jornada única reúne a
        personas y sus amigos de cuatro patas en un entorno natural, fomentando
        el bienestar, el deporte y la convivencia. Se trata de una correcaminata
        participativa de baja a mediana intensidad, con recorridos accesibles
        que permiten a los tutores compartir una experiencia recreativa con sus
        mascotas sin exigencias de rendimiento. Además de la actividad
        principal, el evento ofrece múltiples servicios y actividades orientadas
        al cuidado y disfrute de los animales, así como espacios de adopción
        responsable, atención veterinaria y exhibiciones. Pet Run Palestra es
        más que un evento deportivo: es una iniciativa que refuerza el vínculo
        entre las personas y sus mascotas, da visibilidad a la labor de refugios
        y proteccionistas y contribuye con acciones solidarias. Todo lo
        recaudado en inscripciones se destina a apoyar las iniciativas de la ONG
        Palestra y a brindar ayuda a quienes dedican su esfuerzo al rescate y
        bienestar animal. ¡Únete a Pet Run Palestra y sé parte de esta
        experiencia única, donde el deporte, la solidaridad y el amor por los
        animales se encuentran en un solo lugar!
      </span>
    </div>
  );
};
