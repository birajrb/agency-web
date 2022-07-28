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
              <h2 className={styles.title}>
                Expert Education and Visa Services (EEVS) is a leading education and migration
                consultant agency with a global presence in 12 countries.
              </h2>
              <p className={styles.subtitle}>
                We specialise in providing a wide range of services to students aspiring to study in
                Australia from counselling them in choosing the right institution and helping with
                their visa application to welcoming them in Australia and helping them settle with
                the Australian life. Since 2003, our team of registered migration agents, qualified
                education counsellors, career counsellors, solicitors and taxation experts have
                provided end-to-end services to more than 40,000 and counting international students
                and helped them materialise their Australian dreams. We don’t sell dreams, we help
                students in making better choices and guide them towards materialising their goals
                by offering viable study and career counselling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
