import styles from "./Projects.module.css";
import MotionSection from "../MotionSection";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import profile from "@/public/profile.json";

const projects = profile.projects;

const Projects = () => {
  return (
    <MotionSection>
      <section className={styles.projects}>
        <h2 className={styles.heading}>Projects</h2>

        {projects.map((project, index) => (
          <div className={styles.entry} key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Image
              src={project.image}
              alt={`${project.title} Preview`}
              width={800}
              height={450}
              className={styles.image}
            />
            <div className={styles.row}>
              <ul className={styles.techStack}>
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubButton}
                >
                  <FaGithub className={styles.icon} /> <span>View Code</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
    </MotionSection>
  );
};

export default Projects;
