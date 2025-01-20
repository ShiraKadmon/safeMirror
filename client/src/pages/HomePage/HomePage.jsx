import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider"; // Import AuthProvider for authentication
import styles from "./Home.module.css";
import botButton from "../../assets/Safe-Mirror-Button.png";
import DailyTip from "../../components/DailyTip/DailyTip";

function Home() {
    const navigate = useNavigate();
    // const location = useLocation();
    const { isLoggedIn } = useAuth(); // Check if the user is logged in
    const {positiveContent} = useAuth();


    const goToBot = () => {
        if (isLoggedIn) {
            navigate("/chatbot"); // Navigate to chatbot if logged in
        }
    };

    const gotologin = () => { 
        navigate("/login");
    }

    return (
        <div className={styles.home}>
            <h1 className={styles.headline}>ברוכה הבאה ל-SafeMirror</h1>
            <h2 className={styles.secondarytext}>
            המקום הבטוח שלך להתמודדות עם אתגרי הרשתות החברתיות, לחיזוק הביטחון העצמי, לשיפור דימוי הגוף, וללמידה מעצימה.            </h2>
            <div
                className={styles.imageButtonWrapper}
                onClick={isLoggedIn ? goToBot : gotologin} // Only handle click if logged in
            >
                <img
                    src={botButton}
                    alt="chat-bot"
                    className={`${styles.botpicture} ${!isLoggedIn ? styles.requiresLogin : ""}`}
                />
                {!isLoggedIn && (
                    <div className={styles.overlay}>
                        לחצי כדי להתחבר ולגשת לתכונות מותאמות אישית כמו הצאטבוט, טיפים יומיים ועוד!
                    </div>
                )}
            </div>
            <DailyTip initialMessage={positiveContent} />
        </div>
    );
}

export default Home;
