import { useState, useEffect } from 'react';
import styles from '../styles/UserProfile.module.css';

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
        <div className={styles.userProfileContainer}>
            <div className={styles.userProfileBox}>
                <h2 className={styles.title}>User Profile</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Birth Date:</label>
                        <input
                            type="date"
                            name="birthDate"
                            value={user.birthDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Phone Number:</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={user.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.updateButton}>Update Profile</button>
                </form>
            </div>
        </div>
    );
}

export default UserProfile;
