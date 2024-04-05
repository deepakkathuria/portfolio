import React from "react";
import styles from "./Project.module.css"; // Update the path as necessary

const projects = [
  {
    title: "HTML, CSS, JavaScript Website",
    description: "A responsive and interactive website showcasing web development skills.",
    link: "https://medhanya.com"
  },
  {
    title: "Blog Project using Python and Django",
    description: "A personal blog project highlighting my ability to create full-featured web applications.",
    link: "https://deepakblogproject.pythonanywhere.com/"
  },
  {
    title: "4i Enterprise Application (Credit Rating)",
    description: "Contributed to the User Management Module using Node.js and Sequelize, and developed API endpoints for integration.",
    period: "Oct'22-Current",
    responsibilities: [
      "Actively participating in external stand-up calls.",
      "Initial R&D on External Integration with 4i Application.",
      "Worked on User Management Module from scratch.",
      "Developed API endpoints and integration."
    ]
  }
];

const Projects = () => (
  <div className={styles.projectsContainer}>
    <h2 className={styles.heading}>Projects</h2>
    {projects.map((project, index) => (
      <div key={index} className={styles.projectItem}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.link && (
          <p>
            Project Link: <a href={project.link} className={styles.link}>{project.link}</a>
          </p>
        )}
        {project.responsibilities && (
          <ul>
            {project.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
);

export default Projects;
