import { useState, useEffect } from 'react';
import { useAuth } from "../AuthProvider";
import styles from '../styles/UserProfile.module.css'; // Import the styles

function UserProfile() {
    const [user, setUser] = useState(null);
    const { email ,name,setName} = useAuth(); // Access global user data
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/user/details?email=${email}`);
                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                    setError('');
                } else {
                    const errorResponse = await response.json();
                    setError(errorResponse.error || 'Failed to fetch user details');
                    setUser(null);
                }
            } catch (err) {
                console.error('Error fetching user details:', err);
                setError('An error occurred while fetching user details');
                setUser(null);
            }
        };

        fetchUserData();
    }, [email]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/user/update", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    name: user.name,
                    birthDate: formatDate(user.birthDate),
                    phoneNumber: user.phoneNumber,
                }),
            });
            if(user.name != name){
                setName(user.name);
            }

            if (response.ok) {
                alert("הפרופיל עודכן בהצלחה");
            } else {
                alert("העדכון נכשל. בבקשה נסי שוב");
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("קרתה שגיאה במהלך העדכון");
        }
    };

    const formatDate = (isoDateString) => {
        const date = new Date(isoDateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    return (
        <div className={styles.userProfileContainer}>
            <div className={styles.userProfileBox}>
                <h2 className={styles.title}>פרופיל משתמשת</h2>
                {user ? (
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label>שם:</label>
                            <input type="text" name="name" value={user.name} onChange={handleChange} required />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>אימייל:</label>
                            <input type="text" name="email" value={email} readOnly />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>תאריך לידה:</label>
                            <input
                                type="date"
                                name="birthDate"
                                value={formatDate(user.birthDate)}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>מספר טלפון:</label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={user.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className={styles.updateButton}>
                            עדכני פרופיל
                        </button>
                    </form>
                ) : (
                    <p className={styles.loadingText}>טוען פרטי משתמש</p>
                )}
                {error && <p className={styles.errorText}>{error}</p>}
            </div>
        </div>
    );
}

export default UserProfile;
