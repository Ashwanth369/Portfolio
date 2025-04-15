import Image from "next/image";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.imageContainer}>
        <div className={styles.textOverlay}>
          <h1 className={styles.heading}>Hello, I’m Ashwanth Kumar</h1>
          <p className={styles.description}>
            A software engineer who loves turning complex ideas into clean,
            efficient, and scalable code. Over the past few years, I’ve built
            full-stack applications, cloud-native systems, and real-time
            platforms that power everything from analytics dashboards to
            collaborative developer tools. I work comfortably across the stack —
            crafting intuitive frontends with React/Next.js, designing robust
            backends with Python, Java, and Spring Boot, and deploying to the
            cloud with AWS, Docker, and Kubernetes. I care deeply about
            performance, clean architecture, and writing code that lasts.
            Outside of core software engineering, I occasionally dive into
            machine learning and data science — building forecasting models,
            optimizing systems, and experimenting with LLMs when I get the
            chance.
          </p>
        </div>
        <Image
          src="/me.jpg"
          alt="My Picture"
          layout="fill"
          objectFit="cover"
          className={styles.pic}
        />
      </div>
    </section>
  );
};

export default About;
