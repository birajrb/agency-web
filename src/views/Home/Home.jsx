import cx from "classnames";
import banner from "../../assets/images/hero-banner.png";
import styles from "./styles.module.css";

function Home() {
  return (
    <div className={styles.main}>
      <article>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.content}>
              <p className={styles.subtitle}>EXPERT EDUCATION & VISA SERVICES</p>
              <h2 className={cx(styles.title, "h2")}>Let’s Plan your Career Together</h2>
              <p className={styles.heroText}>
                We specialise in providing a wide range of services to students aspiring to study in
                Australia from counselling them in choosing the right institution and helping with
                their visa application to welcoming them in Australia and helping them settle with
                the Australian life.
              </p>
              <button className="btn">Learn More</button>
              <figure className={styles.banner}>
                <img
                  src={banner}
                  alt="i"
                  width="694"
                  height="529"
                  loading="lazy"
                  className="w-100"
                />
              </figure>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

export default Home;
