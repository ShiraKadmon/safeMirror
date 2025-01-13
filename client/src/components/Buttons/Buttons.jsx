import { Link } from 'react-router'
import styles from './Buttons.module.css';
import React from "react";


const apiUrl = import.meta.env.VITE_SERVER_API_URL;

const BotButton = () => {      
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <Link to="/chatbot" className={styles.button}>Chat Bot</Link>
      </div>
      <div className={styles.buttonContainer}>
        <Link to="/positivecontent" className={styles.button}>Positive Content</Link>
      </div>
      <div className={styles.buttonContainer}>
        <Link to="/tools" className={styles.button}>Tools</Link>
      </div>
    </div>
  );
};

export default BotButton;