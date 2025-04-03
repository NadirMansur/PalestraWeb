import React from "react";
import gal from "./galeria.module.scss";

export type IGalery = Array<Array<string>>;

export const Galeria = ({ galeria }: { galeria: IGalery }) => {
  return (
    <div className={gal["row"]}>
      {galeria.map((columna, i) => {
        return (
          <div className={gal["column"]} key={`column_${i}`}>
            {columna.map((img, i) => {
              return <img alt={`img${i}`} src={img} key={`img${i}`}></img>;
            })}
          </div>
        );
      })}
    </div>
  );
};
