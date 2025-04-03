import PropTypes from "prop-types";
import styles from "./Icon.module.scss";

const Icon = ({
  icon,
  onClick,
  position,
  marginLeft,
  marginTop,
  id,
  width,
  height,
}) => {
  return (
    <div
      className={styles.container}
      onClick={onClick}
      id={id}
      style={{
        width: width,
        height: height,
        position: position,
        marginLeft: marginLeft,
        marginTop: marginTop,
      }}
    >
      <img
        style={{
          position: "relative",
          width: "50%",
          marginBlock: "10%",
          filter: "invert(38%) sepia(74%) saturate(548%) hue-rotate(200deg)",
        }}
        src={icon}
        alt='icono'
      ></img>
    </div>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  position: PropTypes.string.isRequired,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default Icon;
