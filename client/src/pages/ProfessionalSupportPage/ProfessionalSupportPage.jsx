import { useState } from 'react';
import styles from './ProfessionalSupportPage.module.css';
import ContactButton from './ContactButton';
import ContactWindow from '../../components/ContactWindow/ContactWindow';

const ProfessionalSupportPage = () => {
  const [windowState, setWindowState] = useState({ isOpen: false, content: null });

  const openWindow = (newContent) => {
    setWindowState({ isOpen: true, content: newContent });
  };

  const closeWindow = () => setWindowState({ isOpen: false, content: null });

  return (
    <div className={styles.rowContainer}>
      <div className={styles.professionalListContainer}>
        <div className={styles.professionalListHeader}>
        <div className={styles.chatbotHeaderIcon}></div>
          <h2>אנשי מקצוע להתייעצות</h2>
        </div>
        <div className={styles.professionalList}>
          <div className={styles.scrollableContent}>
            {/* Item 1 */}
            <div className={styles.professionalItem}>
              <div className={styles.rowContainer}>
                <div className={styles.columnContainer}>
                  <h3>עלם</h3>
                  <p>לנערים ונערות במצבי סיכון</p>
                </div>
                <ContactButton 
                  openWindow={() => openWindow(<p>פרטי יצירת קשר: 054-942-4062</p>)} 
                  buttonText={"פני אלינו"} 
                />
              </div>
            </div>

            {/* Item 2 */}
            <div className={styles.professionalItem}>
              <div className={styles.rowContainer}>
                <div className={styles.columnContainer}>
                  <p>המרכז הלאומי להגנה על ילדים ברשת</p>
                </div>
                <ContactButton 
                  openWindow={() => openWindow(<p>פרטי יצירת קשר: מוקד 105</p>)} 
                  buttonText={"פני אלינו"} 
                />
              </div>
            </div>

            {/* Item 3 */}
            <div className={styles.professionalItem}>
              <div className={styles.rowContainer}>
                <div className={styles.columnContainer}>
                  <h3>קו הסיוע לאינטרנט בטוח</h3>
                  <p>לפניות בנושא פגיעה ברשת תוכלו לפנות אלינו</p>
                </div>
                <ContactButton 
                  openWindow={() => openWindow(<p>פרטי יצירת קשר: 054-8-858911 בוואטספ או טלפונית</p>)} 
                  buttonText={"פני אלינו"} 
                />
              </div>
            </div>

            {/* Item 4 */}
            <div className={styles.professionalItem}>
              <div className={styles.rowContainer}>
                <div className={styles.columnContainer}>
                  <h3>ערן</h3>
                  <p>שירות הומניטרי המציע עזרה ראשונה נפשית</p>
                </div>
                <ContactButton 
                  openWindow={() => openWindow(<p>פרטי יצירת קשר: 1202 קו חם</p>)} 
                  buttonText={"פני אלינו"} 
                />
              </div>
            </div>

            {/* Item 5 */}
            <div className={styles.professionalItem}>
              <div className={styles.rowContainer}>
                <div className={styles.columnContainer}>
                  <h3>איגי</h3>
                  <p>ארגון נוער גאה</p>
                </div>
                <ContactButton 
                  openWindow={() => openWindow(<p>פרטי יצירת קשר: "דיגי 1" 054-911-9726, "דיגי 2" 054-911-9718</p>)} 
                  buttonText={"פני אלינו"} 
                />
              </div>
            </div>

            {/* Item 6 */}
            <div className={styles.professionalItem}>
              <div className={styles.rowContainer}>
                <div className={styles.columnContainer}>
                  <h3>נען</h3>
                  <p>נוער מקשיב לנוער, לפניות מצוקה של בני נוער</p>
                </div>
                <ContactButton 
                  openWindow={() => openWindow(<p>פרטי יצירת קשר: 1-800-22-3011, ימים א'-ה' 20:00-17:00</p>)} 
                  buttonText={"פני אלינו"} 
                />
              </div>
            </div>

            {/* Item 7 */}
            <div className={styles.professionalItem}>
              <div className={styles.rowContainer}>
                <div className={styles.columnContainer}>
                  <h3>יד ביד</h3>
                  <p>אוזן קשבת לנוער ולילדים במצוקה</p>
                </div>
                <ContactButton 
                  openWindow={() => openWindow(<p>פרטי יצירת קשר: 03-6203141, 24 שעות ביממה</p>)} 
                  buttonText={"פני אלינו"} 
                />
              </div>
            </div>
          </div>
        </div>

        {/* ContactWindow will open with dynamic content */}
        <ContactWindow 
          isOpen={windowState.isOpen} 
          closeWindow={closeWindow} 
          content={windowState.content} 
        />
      </div>
      <div className={styles.professionalListContainer}>
        <div className={styles.professionalListHeader}>
        <div className={styles.womanHeaderIcon}></div>
          <h2>נשים מעוררות השראה</h2>
        </div>
        <div className={styles.professionalList}>
          <div className={styles.scrollableContent}>
            {/* Item 1 */}
            <div className={styles.professionalItem}>
                <div className={styles.columnContainer}>
                <h3> <a className={styles.professionalLink} href="https://www.instagram.com/ofek_rishon/" target="_blank" rel="noopener noreferrer">@ofek_rishon</a></h3>
                <p>בחורה צעירה, אקטיביסטית שפועלת לקידום הפסקת חרם על ילדים ברחבי הארץ. מפקדת סיירת החרם ומרצה לקידום הנושא. </p>
                </div>
            </div>
             {/* Item 2 */}
             <div className={styles.professionalItem}>
                <div className={styles.columnContainer}>
                <h3> <a className={styles.professionalLink} href="https://www.instagram.com/tamari.netzer/" target="_blank" rel="noopener noreferrer">@tamari_netzer</a></h3>
                <p>דוגמנית למידות גדולות שמקדמת דימוי גוף חיובי וממליצה על חנויות אשר מציעות מגוון מידות</p>
                </div>
            </div>

            {/* Item 3 */}
            <div className={styles.professionalItem}>
                <div className={styles.columnContainer}>
                <h3> <a className={styles.professionalLink} href="https://www.instagram.com/lori__stern/" target="_blank" rel="noopener noreferrer">@lori_stern</a></h3>
                <p>בחורה צעירה, אקטיביסטית לקידום דימוי גוף חיובי, דוגמנית למידות גדולות שהופיעה ב'ווג'.</p>
                </div>
            </div>

            {/* Item 4 */}
            <div className={styles.professionalItem}>
                <div className={styles.columnContainer}>
                  <h3> <a className={styles.professionalLink} href="https://www.instagram.com/thenakediaries/" target="_blank" rel="noopener noreferrer">@thenakediaries</a></h3>
                  <p>עמוד אינסטגרם המציג צילומים של נשים במגוון מבני גוף, מוצאים וגילאים מבני לכסות את סימוני המתיחה, הבטן, הפצעונים או כל חלק אחר בגוף שאנו נוהגות להיות ביקורתיות כלפיו.</p>
                </div>
            </div>

            {/* Item 5 */}
            <div className={styles.professionalItem}>
                <div className={styles.columnContainer}>
                  <h3> <a className={styles.professionalLink} href="https://www.instagram.com/paularosenberg/" target="_blank" rel="noopener noreferrer">@paularosenberg </a></h3>
                      <p>פאולה רוזנברג, אמא, רעיה, אשת תקשורת, מרצה, חושפת את רגעי ההצלה לצד הקשיים שביום יום ומדברת על דימוי גוף חיובי בכל הזדמנות. </p>           
                </div>
            </div>

            {/* Item 6 */}
            <div className={styles.professionalItem}>
                <div className={styles.columnContainer}>
                  <h3> <a className={styles.professionalLink} href="https://www.instagram.com/maya.leevy/" target="_blank" rel="noopener noreferrer">@maya.leevy</a></h3>
                    <p>מדברת בצורה הומוריסטית על דימוי גוף, הטרדות מיניות, על פמיניזם וחופש. </p>            
                </div>
            </div>
            {/* Item 7 */}
            <div className={styles.professionalItem}>
              <div className={styles.columnContainer}>
                <h3><a className={styles.professionalLink} href="https://www.instagram.com/danaemercer/" target="_blank" rel="noopener noreferrer">@danaemercer</a></h3>
                <p>מקדמת דימוי גוף חיובי וחופשת את האשליות שברשתות החברתיות ובעולם השיווק.</p>
              </div>
            </div>

            {/* Item 8 */}
            <div className={styles.professionalItem}>
              <div className={styles.columnContainer}>
                <h3><a className={styles.professionalLink} href="https://www.instagram.com/naama_pd/" target="_blank" rel="noopener noreferrer">@naama_pd</a></h3>
                <p>נעמה פסקה דיוויס, עוסקת בדימוי גוף, בשמנופוביה ובהדרת מידות ממוצעות וגדולות בתעשיית האופנה.</p>
              </div>
            </div>

            {/* Item 9 */}
            <div className={styles.professionalItem}>
              <div className={styles.columnContainer}>
                <h3><a className={styles.professionalLink} href="https://www.instagram.com/raysegev/" target="_blank" rel="noopener noreferrer">@raysegev</a></h3>
                <p>ממובילות המאבק לשינוי אידיאל היופי בישראל, נחשבת לדוגמנית ה'פלאס סייז' הישראלית הראשונה, יוצרת תוכן ובעלת פודקאסט.</p>
              </div>
            </div>

            {/* Item 10 */}
            <div className={styles.professionalItem}>
              <div className={styles.columnContainer}>
                <h3><a className={styles.professionalLink} href="https://www.instagram.com/zorikit/" target="_blank" rel="noopener noreferrer">@zorikit</a></h3>
                <p>זוהר מקדמת דימוי גוף חיובי ומנהלת את קהילה "השמנמנות של זוריק" המקדמת את הנושא @thiccbyzorik.</p>
              </div>
            </div>

            {/* Item 11 */}
            <div className={styles.professionalItem}>
              <div className={styles.columnContainer}>
                <h3><a className={styles.professionalLink} href="https://www.instagram.com/mayadagan/" target="_blank" rel="noopener noreferrer">@mayadagan</a></h3>
                <p>מיה חולקת ברשתות את היום-יום שלה ומדברת על דימוי גוף, מלחמה שמנופוביה, מיניות, וזכויות נשים.</p>
              </div>
            </div>

            {/* Item 12 */}
            <div className={styles.professionalItem}>
              <div className={styles.columnContainer}>
                <h3><a className={styles.professionalLink} href="https://www.instagram.com/maayan_keret/" target="_blank" rel="noopener noreferrer">@maayan_keret</a></h3>
                <p>מעין קרת הייתה דוגמנית בינלאומית וכיום פועלת לחיזוק דימוי גוף חיובי של נערות ונשים.</p>
              </div>
            </div>

            {/* Item 13 */}
            <div className={styles.professionalItem}>
              <div className={styles.columnContainer}>
                <h3><a className={styles.professionalLink} href="https://www.instagram.com/laly_ophir/" target="_blank" rel="noopener noreferrer">@laly_ophir</a></h3>
                <p>ללי אופיר עוסקת בדימוי גוף, קבלה ואהבה עצמית ומיניות בריאה.</p>
              </div>
            </div>

            {/* Item 14 */}
            <div className={styles.professionalItem}>
              <div className={styles.columnContainer}>
                <h3><a className={styles.professionalLink} href="https://www.instagram.com/jillianmercado/" target="_blank" rel="noopener noreferrer">@jillianmercado</a></h3>
                <p>ג'יליאן היא דוגמנית שחיה המתנהלת על כיסא גלגלים ומאתגרת את סטנדרט היופי בתעשיית האופנה.</p>
              </div>
            </div>

            {/* Item 15 */}
            <div className={styles.professionalItem}>
              <div className={styles.columnContainer}>
                <h3><a className={styles.professionalLink} href="https://www.instagram.com/keah_maria/" target="_blank" rel="noopener noreferrer">@keah_maria</a></h3>
                <p>קיה היא סופרת, עיתונאית ופעילה לקידום זכויות בעלי.ות מוגבלויות. היא חולקת בחוויותיה כאישה עם מוגבלות ומדברת על נושאים חברתיים כמו זכויות להטב"ק.</p>
              </div>
            </div>

            {/* Item 16 */}
            <div className={styles.professionalItem}>
              <div className={styles.columnContainer}>
                <h3><a className={styles.professionalLink} href="https://www.instagram.com/estysegal/" target="_blank" rel="noopener noreferrer">@estysegal</a></h3>
                <p>בגיל 16התגלה בגופה של אסתי סרטן ולאחר ניתוחים וטיפולים היא החליטה לקטוע את רגלה ולתעד את התהליך. היא מספרת על החיים לאחר הקטיעה ומעוררת השראה בשיתוף טיוליה בעולם.</p>
              </div>
            </div>

            {/* Item 17 */}
            <div className={styles.professionalItem}>
              <div className={styles.columnContainer}>
                <h3><a className={styles.professionalLink} href="https://www.instagram.com/autienelle/" target="_blank" rel="noopener noreferrer">@autienelle</a></h3>
                <p>לורן בחורה אוטיסטית, פעילה למען צדק חברתי לקבלה של הקהילה הנוירודיברגנטית (קהילת הגיוון הנוירולוגי).</p>
              </div>
            </div>
        </div>
        </div>
      </div>
      </div>
  );
};

export default ProfessionalSupportPage;
