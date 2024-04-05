import React from "react";
import styles from "./Contact.module.css"; // Update the path as necessary

const Contact = () => (
  <div className={styles.contactContainer}>
    <h2 className={styles.heading}>Contact Me</h2>
    <p className={styles.contactInfo}>Phone: 8447145941</p>
    <p className={styles.contactInfo}>Email: deepakkathuria32@gmail.com</p>
    <p className={styles.contactInfo}>
      LinkedIn: <a href="https://linkedin.com/in/deepak-kathuria-b46389104" className={styles.link}>deepak-kathuria-b46389104</a>
    </p>
    <p className={styles.contactInfo}>
      Github: <a href="https://github.com/deepakkathuria" className={styles.link}>deepakkathuria</a>
    </p>
    <p className={styles.contactInfo}>Address: New Delhi</p>
  </div>
);

export default Contact;
