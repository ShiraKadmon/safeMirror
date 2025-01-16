import { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthProvider';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setIsLoggedIn, setEmailg } = useAuth(); // Ensure setUser is destructured

    


    const handleLogin = async (e) => {
        e.preventDefault();
    
        const loginData = { email, password }; // Ensure these variables are defined in your component's state
    
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
                console.log('Message:', result.message); // Log the specific message
                setIsLoggedIn(true);
                setEmailg(email); // Set user data globally
                navigate('/home', { state: { message: result.message } }); // Pass the message
            } else {
                console.error('Login failed:', response.status, response.statusText);
                alert('Login failed. Please check your email and password.');
            }
        } catch (error) {
            console.error('Error occurred during login:', error);
        }
    };
    


    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Login</button>
                <p>Not registered yet? <Link to="/signup">Sign Up</Link></p>
            </form>
        </div>
    );
}

export default LoginPage;
