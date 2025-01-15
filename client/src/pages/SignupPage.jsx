import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/SignupPage.module.css';

function SignupPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');  // Add a new state variable for phone number

    const handleSignup = (e) => {
        e.preventDefault();
        // Here, add logic to handle the sign up, potentially sending data to a server
        console.log(name, email, birthDate, password,phoneNumber);  // Log the birth date instead of age
    };

    return (
        <div className={styles.signupContainer}>
            <div className={styles.signupBox}>
                <h2 className={styles.title}>Sign Up</h2>
                    <form onSubmit={handleSignup} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label>Name:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Birth Date:</label>
                            <input
                                type="date"
                                value={birthDate}
                                onChange={(e) => setBirthDate(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Phone Number:</label>
                            <input
                                type="Phone Number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className={styles.signupButton}>Sign Up</button>
                        <p className={styles.signInText}>
                            Already have an account? <Link to="/login" className={styles.link}>Log In</Link>
                        </p>
                    </form>
            </div>
        </div>
    );
}

export default SignupPage;
