import styles from "./Experience.module.css";
import MotionSection from "../MotionSection";
import profile from "@/public/profile.json";

const experienceData = profile.experience;

const Experience = () => {
  return (
    <MotionSection>
      <section className={styles.experience}>
        <h2 className={styles.heading}>Experience</h2>
        <div className={styles.entry}>
          {experienceData.map((exp, index) => (
            <div className={styles.card} key={index}>
              <h2>{exp.company}</h2>
              <h3>{exp.title}</h3>
              <h4>{exp.period}</h4>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    </MotionSection>
  );
};

export default Experience;
