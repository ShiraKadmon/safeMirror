import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import Home from './pages/HomePage/HomePage';
import styles from './styles/App.module.css';
import BotPage from './pages/BotPage/BotPage';
import ToolsPage from './pages/ToolsPage/ToolsPage';
import PositiveContentPage from './pages/PositiveContentPage/PositiveContentPage';

import projectLogo from './assets/Safe-Mirror-logo.png'

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src={projectLogo} alt="Logo" className={styles.appLogo} />
          <nav className={styles.appNav}>
            <Link to="/" className={styles.appLink}>Home</Link>
            <Link to="/" className={styles.appLink}>Log In</Link>
            <Link to="/" className={styles.appLink}>Sign Up</Link>
            <Link to="/" className={styles.appLink}>Daily Tip</Link>
            <Link to="/" className={styles.appLink}>Chat Bot</Link>
          </nav>
        </header>
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chatbot" element={<BotPage />} />
            <Route path="/positivecontent" element={<PositiveContentPage />} />
            <Route path="/tools" element={<ToolsPage />} />
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