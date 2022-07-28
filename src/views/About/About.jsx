import { Hero } from "../../components/Hero";
import styles from "./styles.module.css";

function About() {
  return (
    <div>
      <Hero title="About" />
      <div className="container">
        <div className="section">
          <div className={styles.container}>
            <div className={styles.imageContainer}>
              <img src="/aus.jpg" className={styles.img} />
            </div>
            <div className={styles.detailContainer}>
              <h2 className={styles.title}>Title</h2>
              <p className={styles.subtitle}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, perferendis
                eum. Modi aliquid doloremque possimus, iure corporis vitae rem laudantium ab itaque
                quaerat esse! Quibusdam similique laboriosam voluptates error totam. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Accusantium facere ipsam illo
                doloremque ad praesentium id, necessitatibus quos autem magnam magni fuga dolores
                corrupti reprehenderit nostrum ullam ab excepturi porro?Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus minus ex harum
                consectetur sequi amet vero neque dolore, cum ipsa, est quibusdam itaque a
                perspiciatis optio dolores modi dolor accusamus!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
