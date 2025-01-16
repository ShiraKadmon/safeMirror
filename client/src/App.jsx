import { Routes, Route, Link } from 'react-router'
import Home from './pages/HomePage/HomePage';
import styles from './styles/App.module.css';
import BotPage from './pages/BotPage/BotPage';
// import PositiveContentPage from './pages/PositiveContentPage/PositiveContentPage';
import projectLogo from './assets/Safe-Mirror-logo.png'
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import UserProfile from './pages/UserProfile';
import ProtectedRoute from "./ProtectedRoute";
import backgroundImage from './assets/background-image.jpg';



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
        </nav>
      </header>
      <main className={styles.main}>
      <Routes>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
                path="/home"
                element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/chatbot"
                element={
                    <ProtectedRoute>
                        <BotPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/profile"
                element={
                    <ProtectedRoute>
                        <UserProfile />
                    </ProtectedRoute>
                }
            />
            <Route path="/" element={<LoginPage />} />
        </Routes>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2025 Safe Mirror</p>
      </footer>
    </div>
  );
}

export default App;