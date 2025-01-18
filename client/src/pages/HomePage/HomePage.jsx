// import { useNavigate ,  useLocation} from "react-router-dom";
// import { useEffect, useState } from "react";
// import styles from './Home.module.css';
// import botButton from '../../assets/Safe-Mirror-Button.png';
// import DailyTip from "../../components/DailyTip/DailyTip";


// function Home() {
//   const navigate = useNavigate();
//   const location = useLocation();
 
//   // const message = location.state?.message || 'Welcome!'; // Default message if none is passed
//   // console.log('Message from location:', message); // Debug the message

//   const [message, setMessage] = useState(null); // State to store the message

//   useEffect(() => {
//     // Check if message exists in location.state
//     if (location.state?.message) {
//       setMessage(location.state.message); // Store the message in state
//     }
//   }, [location.state]);


//   const goToBot = () => {
//     navigate("/chatbot");
//   };  
  
//   return (
//     <div className={styles.home}>
//       <h1 className={styles.headline}>Welcome to Safe Mirror!</h1>
//       <h2 className={styles.secondarytext}>Your safe place for conversations to raise self-confidence and body image</h2>
//       <button onClick={goToBot} className={styles.imagebutton}>
//         <img src={botButton} alt="chat-bot" className={styles.botpicture} />
//       </button>
//       <DailyTip initialMessage={message} /> {/* Pass the message to DailyTip */}
//     </div>
//   );
// };

// export default Home;
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
            <h1 className={styles.headline}>Welcome to Safe Mirror!</h1>
            <h2 className={styles.secondarytext}>
                Your safe place for conversations to raise self-confidence and body image
            </h2>
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
                        Click to Log in to access personalized features like the chatbot, daily tips, and more!

                    </div>
                )}
            </div>
            <DailyTip initialMessage={positiveContent} />
        </div>
    );
}

export default Home;
