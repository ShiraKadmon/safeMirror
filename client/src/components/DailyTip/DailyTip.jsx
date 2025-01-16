import styles from "./DailyTip.module.css";
import { useEffect, useState } from "react";


const DailyTip = () => {
  // const tip = "Always use strong and unique passwords for your online accounts!";
  const [tip, setTip] = useState("");
  const ageGroup = "17-18";

  useEffect(() => {
      const fetchTip = async () => {
          try {
              const response = await fetch(`http://localhost:5000/awarenessNotification/awarenessNotification?ageGroup=${ageGroup}`); // Adjust the URL as needed
              if (response.ok) {
                  const data = await response.json();
                  setTip(data);
              } else {
                  console.error("Failed to fetch the tip:", response.statusText);
              }
          } catch (error) {
              console.error("Error fetching the tip:", error);
          }
      };

      fetchTip();
  }, []);

  return (
    <div className={styles.container}>
    <div className={styles.header}>
      <h1 className={styles.headertext}>Positive Content</h1>
    </div>
    <div className={styles.content}>
      <p>{tip || "Loading tip..."}</p>
    </div>
  </div>
  );
};

export default DailyTip;
