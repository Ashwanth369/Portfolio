import styles from "./Education.module.css";
import MotionSection from "../MotionSection";
import profile from "@/public/profile.json";

const educationData = profile.education;

const Education = () => {
  return (
    <MotionSection>
      <section className={styles.education}>
        <h2 className={styles.heading}>Education</h2>
        <div className={styles.entry}>
          {educationData.map((edu, index) => (
            <div className={styles.card} key={index}>
              <h2>{edu.institution} </h2>
              <h3>{edu.degree}</h3>
              <h4>{edu.period}</h4>
              <p>Coursework: {edu.description}</p>
            </div>
          ))}
        </div>
      </section>
    </MotionSection>
  );
};

export default Education;
