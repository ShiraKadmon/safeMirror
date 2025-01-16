import { Routes, Route, Link } from 'react-router';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/HomePage/HomePage'));
const BotPage = lazy(() => import('./pages/BotPage/BotPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const UserProfile = lazy(() => import('./pages/UserProfile'));
const ProfessionalSupportPage = lazy(() => import('./pages/ProfessionalSupportPage'));
const ForumPage = lazy(() => import('./pages/ForumPage'));

//import Home from './pages/HomePage/HomePage';
//import BotPage from './pages/BotPage/BotPage';
//import LoginPage from './pages/LoginPage';
//import SignupPage from './pages/SignupPage';
//import UserProfile from './pages/UserProfile';
//import ProfessionalSupportPage from './pages/ProfessionalSupportPage';
//import ForumPage from './pages/ForumPage';

import styles from './styles/App.module.css';
// import PositiveContentPage from './pages/PositiveContentPage/PositiveContentPage';
import projectLogo from './assets/Safe-Mirror-logo.png'
import ProtectedRoute from "./ProtectedRoute";
import backgroundImage from './assets/background-image.jpg';
import Loading from "./components/Loading.jsx";

function App() {
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
            <Link to="/home" className={styles.appLink}>Home</Link>
            <Link to="/" className={styles.appLink}>Login</Link>
            <Link to="/signup" className={styles.appLink}>Sign Up</Link>
            <Link to="/chatbot" className={styles.appLink}>Chat Bot</Link>
            <Link to="/profile" className={styles.appLink}>Profile</Link>
            <Link to="/professional-support" className={styles.appLink}>Professional-Support</Link>
            <Link to="/forum" className={styles.appLink}>Forum</Link>
          </nav>
        </header>
        <Suspense fallback={<Loading />}>
        <main className={styles.main}>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/chatbot" element={<BotPage />} />          
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/forum" element={<ForumPage />} />
              <Route path="/professional-support" element={< ProfessionalSupportPage />} />
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