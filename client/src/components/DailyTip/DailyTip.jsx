import React from "react";
import styles from "./DailyTip.module.css";

const DailyTip = () => {
  const tip = "Always use strong and unique passwords for your online accounts!";

  return (
    <div className={styles.container}>
    <div className={styles.header}>
      <h1 className={styles.headertext}>Positive Content</h1>
    </div>
    <div className={styles.content}>
      <p className={styles.content}>{tip}</p>
    </div>
  </div>
  );
};

export default DailyTip;
