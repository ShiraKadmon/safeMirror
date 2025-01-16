import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignupPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');  // Add a new state variable for phone number

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
                console.error('Signup failed:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error occurred during signup:', error);
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Birth Date:</label>
                    <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                </div>
                <button type="submit">Sign Up</button>
                <p>Already have an account? <Link to="/login">Log In</Link></p>
            </form>
        </div>
    );
}

export default SignupPage;
