import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignupPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        // Here, add logic to handle the sign up, potentially sending data to a server
        console.log(name, email, birthDate, password);  // Log the birth date instead of age
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
                <button type="submit">Sign Up</button>
                <p>Already have an account? <Link to="/login">Log In</Link></p>
            </form>
        </div>
    );
}

export default SignupPage;
