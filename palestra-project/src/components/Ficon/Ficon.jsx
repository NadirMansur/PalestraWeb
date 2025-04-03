import styles from "./ImgIcon.module.scss";
export const ImgIcon = ({ src, height, width, alt }) => {
  return (
    <img
      className={styles.icon}
      src={src}
      alt={alt}
      height={height}
      width={width}
    ></img>
  );
};
