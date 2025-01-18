import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthProvider';
import styles from '../styles/LoginPage.module.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setIsLoggedIn, setEmailg ,setName,setAge ,setPositiveContent} = useAuth(); // Ensure setUser is destructured

    const handleLogin = async (e) => {
        e.preventDefault();

        const loginData = { email, password };

        try {
            const response = await fetch('http://localhost:5000/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Login successful:', result);
                setIsLoggedIn(true);
                setName(result.userName);
                console.log('User name:', result.userName);
                setEmailg(email);
                console.log('Age:', result.age);
                setAge(result.age);
                setPositiveContent(result.message);
                navigate('/home'); // Pass the message
            } else {
                console.error('Login failed:', response.status, response.statusText);
                alert('Login failed. Please check your email and password.');
            }
        } catch (error) {
            console.error('Error occurred during login:', error);
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <h2 className={styles.title}>התחברות</h2>
                <form onSubmit={handleLogin} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">אימייל:</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">סיסמא:</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.loginButton}>התחברי</button>
                    <p className={styles.signUpText}>
                        לא נרשמת עוד? <Link to="/signup" className={styles.link}>הרשמי</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
