import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/SignupPage.module.css'; // Import the styles

function SignupPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();

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
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
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
