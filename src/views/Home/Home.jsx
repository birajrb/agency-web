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
              <p className={styles.subtitle}>We Are Product Designer From UK</p>
              <h2 className={cx(styles.title, "h2")}>We Design Interfaces That Users Love</h2>
              <p className={styles.heroText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus asperiores
                quae tempora sunt nostrum hic ab consequuntur tempore fugit delectus, sequi et
                laudantium, suscipit saepe quidem, voluptas possimus vero.
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
