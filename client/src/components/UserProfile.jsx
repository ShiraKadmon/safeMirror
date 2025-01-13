import { useState, useEffect } from 'react';

function UserProfile() {
    // Initial state with placeholder data, assuming user is already authenticated
    const [user, setUser] = useState({
        name: '',
        email: '',
        birthDate: '',
        phoneNumber: ''
    });

    // Simulate fetching data from a server on component mount
    useEffect(() => {
        // Fetch user data from an API or from local storage
        const fetchUserData = async () => {
            // Example data, replace with actual API call
            const userData = {
                name: 'John Doe',
                email: 'john.doe@example.com',
                birthDate: '1990-01-01',
                phoneNumber: '123-456-7890'
            };
            setUser(userData);
        };

        fetchUserData();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would handle sending the updated data back to the server
        console.log('Updated User:', user);
        alert('Profile updated successfully!');
    };

    return (
        <div>
            <h2>User Profile</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={user.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={user.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Birth Date:</label>
                    <input type="date" name="birthDate" value={user.birthDate} onChange={handleChange} required />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="tel" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} required />
                </div>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
}

export default UserProfile;
