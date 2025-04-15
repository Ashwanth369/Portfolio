import styles from "./TechStack.module.css";
import profile from "@/public/profile.json";
import Image from "next/image";

const stack = profile.techStack;

const TechStack = () => {
  return (
    <section className={styles.tech}>
      <h2 className={styles.heading}>Tech Stack</h2>
      <ul className={styles.stack}>
        {stack.map((tech) => (
          <li key={tech.name} className={styles.item}>
            <a
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.techLink}
            >
              <Image src={tech.icon} alt={tech.name} className={styles.icon} />
              {tech.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TechStack;
