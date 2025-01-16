import { Routes, Route, Link } from 'react-router'
import Home from './pages/HomePage/HomePage';
import styles from './styles/App.module.css';
import BotPage from './pages/BotPage/BotPage';
//import PositiveContentPage from './pages/PositiveContentPage/PositiveContentPage';
import projectLogo from './assets/Safe-Mirror-logo.png'
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import UserProfile from './pages/UserProfile';
import ForumPage from './pages/ForumPage';

function App() {
  return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src={projectLogo} alt="Logo" className={styles.appLogo} />
          <nav className={styles.appNav}>
            <Link to="/home" className={styles.appLink}>Home</Link>
            <Link to="/" className={styles.appLink}>Login</Link>
            <Link to="/signup" className={styles.appLink}>Sign Up</Link>
            <Link to="/forum" className={styles.appLink}>Forum</Link>
            <Link to="/chatbot" className={styles.appLink}>Chat Bot</Link>
            <Link to="/profile" className={styles.appLink}>Profile</Link>
          </nav>
        </header>
        <main className={styles.main}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/chatbot" element={<BotPage />} />          
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forum" element={<ForumPage />} />
          </Routes>
        </main>
        <footer className={styles.footer}>
          <p>&copy;SafeMirror 2025</p>
        </footer>
      </div>
  );
}

export default App;