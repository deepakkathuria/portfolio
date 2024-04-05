import React from "react";
import styles from "./Experience.module.css"; // Update the path as necessary
import { useSpring, animated } from "@react-spring/web";

const experiences = [
  {
    title: "Software Developer / SportzWiki",
    period: "April 2023 - Present",
    responsibilities: [
      "Created an admin panel similar to WordPress using React and Node.js, ensuring a user-friendly and responsive interface for content management.",
      "Integrated third-party APIs seamlessly into the frontend, enhancing the platform's functionality and data retrieval capabilities.",
      "Developed custom scripts using Node.js to fetch and synchronize data from WordPress, optimizing data transfer processes and improving data accuracy.",
      "Primarily responsible for backend development, including database design using Sequelize, ensuring efficient data storage, retrieval, and management.",
      "Created APIs for the frontend according to the UI design and integrated it using Next.js.",
      "Implemented caching mechanisms for the APIs to optimize data retrieval and enhance overall system performance, resulting in faster response times and improved user experience.",
    ],
  },
  {
    title: "Software Developer / Cognitensor",
    period: "May 2021 - April 2023",
    responsibilities: [
      "Developing and fixing of bugs and features as per client requests.",
      "Creating New Dashboards (Sales performance Analytics, Product Recommendation) on in-house product i.e., CogniViz.",
      "Developing UI as per the client need.",
      "Worked on React Native Mobile App for our product CogniViz.",
      "Implemented auto mail triggering feature from the platform to Users.",
      "Used Node.js API for database integration using Knex and Express.",
      "Implemented the Export functionality for component in PNG and CSV format.",
      "Dynamic React ag-grid for data visualization.",
      "Managing Database (Postgres).",
      "Handling AWS deployments and pipelines.",
    ],
  },
  {
    title: "Fullstack Intern / Cognitensor",
    period: "March 2021 - May 2021",
    responsibilities: [
      "Created backend for Website Using Flask.",
      "Backend Integration With Front end.",
      "Routing and maintaining sqlite databases.",
      "Troubleshooting the issues and patching the bugs in a website.",
    ],
  },
];

const Experience = () => {
  const fadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Experience</h2>
      {experiences.map((exp, index) => (
        <animated.div
          style={fadeIn}
          key={index}
          className={styles.experienceContainer}
        >
          <h3 className={styles.title}>{exp.title}</h3>
          <p className={styles.period}>{exp.period}</p>
          <ul>
            {exp.responsibilities.map((item, idx) => (
              <li key={idx} className={styles.responsibility}>
                {item}
              </li>
            ))}
          </ul>
        </animated.div>
      ))}
    </div>
  );
};

export default Experience;
