import styles from '../styles/AboutPage.module.css';

function About() {
  return (
    <div className={styles.about}>
      <h1 className={styles.headline}>על הפרוייקט</h1>
      <p className={styles.text}>
        פרוייקט <strong>safeMirror</strong> נוצר מתוך אהבה גדולה ורצון להשפיע. הוא פותח כחלק מאתגר ההאקתון <strong>BeSafe</strong> של חברת <strong>AppsFlyer</strong> בשיתוף עם עמותת <strong>QueenB</strong>, במטרה לספק מענה חינוכי וטכנולוגי לנערות וילדות המתמודדות עם אתגרי המדיה החברתית.
      </p>
      <p className={styles.text}>
        העולם הדיגיטלי הוא חלק בלתי נפרד מחיי היומיום, אך לצד יתרונותיו, הוא עלול להציב אתגרים כמו חשיפה לתכנים פוגעניים המשפיעים לרעה על הדימוי העצמי והביטחון האישי. <strong>safeMirror</strong> כאן כדי לשנות זאת.
      </p>
      <h2 className={styles.subHeadline}>החזון שלנו</h2>
      <p className={styles.text}>
        לספק פלטפורמה מעצימה המעניקה לנערות וילדות כלים מעשיים לשיפור הדימוי העצמי ולחיזוק הביטחון.
      </p>
      <h2 className={styles.subHeadline}>מה ייחודי בפרוייקט?</h2>
      <ul className={styles.list}>
        <li>
          <strong>חוויית משתמש מותאמת אישית:</strong> בזכות שילוב ה-<strong>GEMINI API</strong>, התכנים מותאמים לגילה של המשתמשת, ומציעים חוויות רלוונטיות ואישיות.
        </li>
        <li>
          <strong>מערכת רספונסיבית:</strong> הממשק המתקדם שלנו תוכנן כך שיתאים לכל מכשיר ולכל גיל, ויעניק חוויית שימוש נוחה ומהנה.
        </li>
        <li>
          <strong>תכנים חיוביים ומעצימים:</strong> המערכת מציעה שאלונים אינטראקטיביים, הודעות מוטיבציה וכלים פרקטיים שמטרתם לחזק את תחושת הערך העצמי וליצור סביבה בטוחה ומעודדת.
        </li>
      </ul>
      <h2 className={styles.subheadline}>תודות</h2>
      <p className={styles.text}>
        פרוייקט זה הוא תוצאה של עבודה מסורה ושיתוף פעולה יוצא דופן.
        <br />
        תודה ענקית למתכנתות המוכשרות: <strong>אילה אור, גילי ויסברג, רותם מזרחי ושירה קדמון.</strong>.
        <br />
        ותודה מיוחדת למנטורית המדהימה שלנו מורן הרצלינגר, שהאמינה בנו והובילה אותנו לאורך הדרך.
      </p>
      <p className={styles.footer}>כל הזכויות שמורות. פרוייקט <strong>safeMirror</strong> מופק כחלק מ-<strong>BeSafe</strong>.</p>
    </div>
  );
}

export default About;
