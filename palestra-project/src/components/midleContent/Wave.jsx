import classNames from "classnames";
import styles from "./MidleWaveContent.module.scss";

const Wave = (props) => {
  return (
    <div className={(classNames(styles.osean), props.footer && styles.footer)}>
      <div className={classNames(styles.wave, props.footer && styles.footerWawe)}></div>
    </div>
  );
};

export default Wave;
