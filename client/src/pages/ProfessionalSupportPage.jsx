import styles from '../styles/ProfessionalSupportPage.module.css';
//import professionalSupportIcon from "/src/assets/professional-support-icon.jpg";

const ProfessionalSupportPage = () => {
  return (
    <div className={styles.professionalListContainer}>
      <div className={styles.professionalListHeader}>
        <h2>אנשי מקצוע להתייעצות</h2>
        <div className={styles.chatbotHeaderIcon}></div>
      </div>
      <div className={styles.professionalList}>
        <div className={styles.professionalItem}>
          <h3>פסיכולוגית קלינית</h3>
          <p>התמחות בבעיות דימוי גוף ונפש. זמינה להתייעצות.</p>
          <button className={styles.contactButton}>פני אליי</button>
        </div>
        <div className={styles.professionalItem}>
          <h3>תזונאית</h3>
          <p>מדריכה על תזונה מאוזנת ושמירה על גוף בריא.</p>
          <button className={styles.contactButton}>פני אליי</button>
        </div>
        <div className={styles.professionalItem}>
          <h3>מאמנת אישית</h3>
          <p>התמחות בהעצמה אישית ושיפור ביטחון עצמי.</p>
          <button className={styles.contactButton}>פני אליי</button>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalSupportPage;
