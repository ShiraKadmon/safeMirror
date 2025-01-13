import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import Home from './pages/HomePage/HomePage';
import styles from './styles/App.module.css';
import BotPage from './pages/BotPage/BotPage';
import ToolsPage from './pages/ToolsPage/ToolsPage';
import PositiveContentPage from './pages/PositiveContentPage/PositiveContentPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import UserProfile from './components/UserProfile';
import projectLogo from './assets/project-logo.png'

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src={projectLogo} alt="Logo" className={styles.appLogo} />
          <nav className={styles.appNav}>
            <Link to="/" className={styles.appLink}>Home</Link>
            <Link to="/login" className={styles.appLink}>Login</Link>
            <Link to="/signup" className={styles.appLink}>Sign Up</Link>
            <Link to="/chatbot" className={styles.appLink}>Chat Bot</Link>
            <Link to="/profile" className={styles.appLink}>Profile</Link>
          </nav>
        </header>
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chatbot" element={<BotPage />} />          
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </main>
        <footer className={styles.footer}>
          <p>&copy; 2025 Safe Mirror</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;