import { Routes, Route, Link, useNavigate  } from 'react-router';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/HomePage/HomePage'));
const BotPage = lazy(() => import('./pages/BotPage/BotPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const UserProfile = lazy(() => import('./pages/UserProfile'));
const ProfessionalSupportPage = lazy(() => import('./pages/ProfessionalSupportPage'));
const ForumPage = lazy(() => import('./pages/ForumPage'));
const QuizPage = lazy(() => import('./pages/QuizPage.jsx'));
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));

//import Home from './pages/HomePage/HomePage';
//import BotPage from './pages/BotPage/BotPage';
//import LoginPage from './pages/LoginPage';
//import SignupPage from './pages/SignupPage';
//import UserProfile from './pages/UserProfile';
//import ProfessionalSupportPage from './pages/ProfessionalSupportPage';
//import ForumPage from './pages/ForumPage';
//import PositiveQuestionsPage from './pages/PositiveQuestionsPage';

import styles from './styles/App.module.css';
// import PositiveContentPage from './pages/PositiveContentPage/PositiveContentPage';
import projectLogo from './assets/Safe-Mirror-logo.png';
import homeIcon from './assets/home-icon.png';
import backgroundImage from './assets/background-image.jpg';
import Loading from "./components/Loading.jsx";
import { useAuth } from "./AuthProvider";

function App() {
  const { isLoggedIn,setIsLoggedIn } = useAuth();
  const navigate = useNavigate();


  const handleLogout = () => {
    setIsLoggedIn(false); // Set isLoggedIn to false
    navigate("/login"); // Redirect to the login page
    };
  return (
      <div className={styles.app}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <header className={styles.appHeader}>
          <img src={projectLogo} alt="Logo" className={styles.appLogo} />
          <nav className={styles.appNav}>
          {isLoggedIn && (  <Link to="/login" onClick={handleLogout} className={styles.appLink}>
                יציאה
            </Link>)}
          <Link to="/about" className={styles.appLink}>על הפרוייקט</Link>
                    
            {isLoggedIn && (<Link to={isLoggedIn ? "/profile" : "#"} className={styles.appLink}>פרופיל
            </Link>)}
            <Link to="/professional-support" className={styles.appLink}>תמיכה מקצועית</Link>
            <Link to={isLoggedIn ? "/forum" : "#"} className={styles.appLink}>פורום
            {!isLoggedIn && <span>🔒</span>}</Link>

            <Link
                to={isLoggedIn ? "/quiz" : "#"}
                className={styles.appLink}
            >
                שעשועון
                {!isLoggedIn && <span>🔒</span>}
            </Link>   
            <Link
                to={isLoggedIn ? "/chatbot" : "#"}
                className={styles.appLink}
            >
                בוטית
                {!isLoggedIn && <span>🔒</span>}
            </Link>
            {!isLoggedIn && (<Link to="/signup" className={styles.appLink}>הרשמה</Link>)}
            {!isLoggedIn && (<Link to="/login" className={styles.appLink}>כניסה</Link>)}
            <Link to="/home" className={styles.appLink}>
            <img src={homeIcon} alt="Home" className={styles.icon} />
          </Link>
          </nav>
        </header>
        <Suspense fallback={<Loading />}>
        <main className={styles.main}>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/chatbot" element={<BotPage />} />          
              <Route path="/quiz" element={<QuizPage />} />          
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/quiz" element={<QuizPage />}/>
              <Route path="/forum" element={<ForumPage />} />
              <Route path="/professional-support" element={< ProfessionalSupportPage />} />
              <Route path="/about" element={< AboutPage />} />
            </Routes>
        </main>
        </Suspense>
        <footer className={styles.footer}>
          <p>&copy;SafeMirror 2025</p>
        </footer>
      </div>
    );
  }

export default App;