import styles from "./styles.module.css";

function Hero({ title = "Hero" }) {
  return <div className={styles.hero}>{title}</div>;
}

export default Hero;
