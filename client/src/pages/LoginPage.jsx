import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/LoginPage.module.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Add logic to handle login
        console.log(email, password);
    };

    return (
        <div className={styles.loginContainer}>
          <div className={styles.loginBox}>
            <h2 className={styles.title}>Login</h2>
            <form onSubmit={handleLogin} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className={styles.loginButton}>Login</button>
              <p className={styles.signUpText}>
                Not registered yet? <Link to="/signup" className={styles.link}>Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      );
    }
    
    export default LoginPage;