import classNames from "classnames";

import nextIcon from "./../../assets/icons8-chevron-right-100.png";
import Icon from "./../icon/Icon";
import styles from "./ProfileInfo.module.scss";

export const ProfileInfo = ({ info, setIndex, index, numItems }) => {
  const nextSlide = (i) => {
    if (i === numItems - 1) {
      return 0;
    }
    return i + 1;
  };
  return (
    <div className={classNames(styles.container, "animated", "fadeIn")}>
      <div className={styles.title_button}>
        <span className={styles.title}>{info.title}</span>
        <Icon
          icon={nextIcon}
          onClick={() => {
            setIndex(nextSlide(index));
          }}
          position='relative'
          marginTop='4.8%'
          marginLeft='0%'
          id='nextAvatar'
          height='2rem'
          width='2rem'
        />
      </div>
      <span className={classNames(styles.text)}>{info.detail}</span>
      <span className={classNames(styles.text, styles.date)}>{info.date}</span>
    </div>
  );
};
