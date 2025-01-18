import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/SignupPage.module.css';

function SignupPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordError(
                 '.הסיסמה חייבת להיות באורך של לפחות 8 תווים וכוללת אותיות רישיות וקטנות, מספר וסימן מיוחד'
            );
            return false;
        } else {
            setPasswordError('');
            return true;
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        
    if (password !== confirmPassword) {
        setConfirmPasswordError('Passwords do not match!');
        return;
    } else {
        setConfirmPasswordError('');
    }

    if (!validatePassword(password)) {
        alert('Password is too  weak!');
        return;
    }

        // Create the data object to send to the server
        const signupData = {
            name,
            email,
            birthDate,
            password,
            phoneNumber,
        };

        try {
            // Use fetch to send a POST request to the local server
            const response = await fetch('http://localhost:5000/user/signup', {
                method: 'POST', // HTTP method
                headers: {
                    'Content-Type': 'application/json', // Inform the server the data format being sent
                },
                body: JSON.stringify(signupData), // Convert the data to JSON
            });

            // Check if the response is successful
            if (response.ok) {
                const result = await response.json(); // Parse the JSON response
                console.log('Signup successful:', result);
            } else {
                const errorData = await response.json();
                console.error('Signup failed:', response.status, response.statusText);
                alert(errorData.error); // הצגת ההודעה למשתמש
            }
        } catch (error) {
            console.error('Error occurred during signup:', error);
        }
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
                            onChange={(e) => {
                                setPassword(e.target.value);
                                validatePassword(e.target.value);
                            }}
                            required
                        />
                        {passwordError && (
                            <p className={styles.errorText}>{passwordError}</p>
                        )}
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        {confirmPasswordError && (
                            <p className={styles.errorText}>{confirmPasswordError}</p>
                        )}
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Phone Number:</label>
                        <input
                            type="text"
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