import React from "react";
import styles from "./Skill.module.css"; // Update the path as necessary

const skills = [
  "JavaScript",
  "PostgreSQL",
  "Node.js",
  "React",
  "Sequelize",
  "Express",
  "Fastify",
  "AWS",
  "Python",
  "HTML",
  "CSS"
];

const Skills = () => (
  <div className={styles.skillsContainer}>
    <h2 className={styles.heading}>Skills</h2>
    <ul className={styles.skillsList}>
      {skills.map((skill, index) => (
        <li key={index} className={styles.skillItem}>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default Skills;
