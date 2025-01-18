// import PropTypes from 'prop-types';
// import styles from './DailyTip.module.css';

// const DailyTip = ({ initialMessage }) => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.header}>
//         <h1 className={styles.headertext}>Positive Content</h1>
//       </div>
//       <div className={styles.content}>
//         <p>{initialMessage}</p>
//       </div>
//     </div>
//   );
// };

// // Define the propTypes for DailyTip
// DailyTip.propTypes = {
//   initialMessage: PropTypes.string.isRequired, // Ensure initialMessage is a required string
// };

// export default DailyTip;
import PropTypes from "prop-types";
import { useAuth } from "../../AuthProvider"; // Import AuthProvider for authentication
import { useNavigate } from "react-router-dom";
import styles from "./DailyTip.module.css";

const DailyTip = ({ initialMessage }) => {
  const { isLoggedIn } = useAuth(); // Check the login status
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate("/login", { state: { message: "Please log in to see more positive content." } });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.headertext}>Positive Content</h1>
      </div>
      <div className={styles.content}>
        {isLoggedIn ? (
          <p>{initialMessage}</p>
        ) : (
          <div className={styles.notLoggedIn}>
            <ul className={styles.benefits}>
              <li>Daily motivational quotes</li>
              <li>Tips to boost self-esteem</li>
            </ul>
            <button className={styles.loginButton} onClick={redirectToLogin}>
              Log In to Unlock More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Define the propTypes for DailyTip
DailyTip.propTypes = {
  initialMessage: PropTypes.string.isRequired, // Ensure initialMessage is a required string
};

export default DailyTip;
