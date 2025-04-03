import PropTypes from "prop-types";
import avatar from "./avatarPerfil.module.scss";

const AvatarPerfil = (props) => {
  const { img, alt, width, height } = props;
  return (
    <div
      className={avatar["container"]}
      style={{ width: width, height: height }}
    >
      <img alt={alt} src={img} className={avatar["profile-image"]}></img>
    </div>
  );
};

AvatarPerfil.propTypes = {
  img: PropTypes.string.isRequired,
};

export default AvatarPerfil;
