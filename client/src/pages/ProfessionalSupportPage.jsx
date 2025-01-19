import styles from '../styles/ProfessionalSupportPage.module.css';
//import professionalSupportIcon from "/src/assets/professional-support-icon.jpg";

const ProfessionalSupportPage = () => {
  return (
    <div className={styles.professionalListContainer}>
      <div className={styles.professionalListHeader}>
      <div className={styles.chatbotHeaderIcon}></div>
        <h2>אנשי מקצוע להתייעצות</h2>
      </div>
      <div className={styles.professionalList}>
        <div className={styles.professionalItem}>
          <div className={styles.rowContainer}>
            <div className={styles.columnContainer}>
              <h3>פסיכולוגית קלינית</h3>
              <p>התמחות בבעיות דימוי גוף ונפש. זמינה להתייעצות.</p>
            </div>
            <button className={styles.contactButton}>פני אליי</button>
          </div>
        </div>
        <div className={styles.professionalItem}>
        <div className={styles.rowContainer}>
            <div className={styles.columnContainer}>
              <h3>תזונאית</h3>
              <p>מדריכה על תזונה מאוזנת ושמירה על גוף בריא.</p>
            </div>
            <button className={styles.contactButton}>פני אליי</button>
          </div>
        </div>
        <div className={styles.professionalItem}>
        <div className={styles.rowContainer}>
            <div className={styles.columnContainer}>
              <h3>מאמנת אישית</h3>
              <p>התמחות בהעצמה אישית ושיפור ביטחון עצמי.</p>
            </div>
            <button className={styles.contactButton}>פני אליי</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalSupportPage;
