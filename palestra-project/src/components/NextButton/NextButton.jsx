import styles from "./NextButton.module.scss";

const NextButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <div className={styles.arrow}>
        <div className={styles.arrowTop}></div>
        <div className={styles.arrowBottom}></div>
      </div>
    </button>
  );
};

export default NextButton;
