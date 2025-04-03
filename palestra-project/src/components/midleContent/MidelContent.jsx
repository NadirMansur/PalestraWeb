import { useState } from "react";
import { MenuCallback } from "./../menuBoolean/index.tsx";
import styles from "./MidelContent.module.scss";
import { PetRun } from "./PetRun/PetRun.jsx";

const MidelContent = () => {
  const [viewNextEvent, setViewNextEvent] = useState(true);
  const [viewCalendar, setViewCalendar] = useState(false);

  const hideContent = () => {
    setViewCalendar(false);
    setViewNextEvent(false);
  };

  const show = (show) => {
    hideContent();
    if (show === "next") {
      setViewNextEvent(true);
    }
    if (show === "calendar") {
      setViewCalendar(true);
    }
  };

  return (
    <div className={styles.container}>
      <MenuCallback
        buttons={[
          {
            label: "Próximos eventos",
            callback: () => {
              show("next");
            },
          },
          {
            label: "Cartelera",
            callback: () => {
              show("calendar");
            },
          },
        ]}
      />
      {viewNextEvent && <PetRun />}
      {viewCalendar && <div>CARTELERA</div>}
    </div>
  );
};

export default MidelContent;
