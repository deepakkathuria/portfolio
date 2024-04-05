import React from "react";
import styles from "./AboutMe.module.css"; // Update the path as necessary

const AboutMe = () => (
  <div className={styles.aboutContainer}>
    <h2 className={styles.heading}>About Me</h2>
    <p className={styles.paragraph}>
      Hello! I'm Deepak Kathuria, a passionate Software Developer based in New Delhi. With a
      background in computer science, I've spent the last few years honing my skills in full-stack development, specializing in React, Node.js, and modern JavaScript frameworks.
    </p>
    <p className={styles.paragraph}>
      My journey in the tech industry began during my college days, where I developed a keen interest in coding and technology. This interest quickly evolved into a passion, leading me to pursue software development professionally. Over the years, I've worked on various projects, ranging from web applications to mobile apps, contributing both as a front-end and back-end developer.
    </p>
    <p className={styles.paragraph}>
      I'm always eager to learn new technologies and methodologies that can help improve my work and contribute to my team's success. When I'm not coding, you'll find me exploring the latest tech trends, playing video games, or dabbling in photography.
    </p>
    <p className={styles.paragraph}>
      I'm currently looking to connect with other tech enthusiasts and companies that share my passion for innovation and excellence in software development. Feel free to reach out to me through my contact page!
    </p>
  </div>
);

export default AboutMe;
