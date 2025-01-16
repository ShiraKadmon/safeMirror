// src/pages/PositiveQuestionsPage.jsx
import { useState } from 'react';
import styles from '../styles/PositiveQuestionsPage.module.css';

const PositiveQuestionsPage = () => {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const userAge = 15; //We will subtract the age from the data base 

  const handleAskQuestion = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_API_URL}/positive-questions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userAge,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to get a response from the server.');
      }
      const data = await response.json();
      setResponse(data.reply);  // bot response
    } catch (error) {
      console.error('Error fetching bot response:', error);
      setResponse('משהו השתבש, נסי שוב מאוחר יותר.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.positiveQuestionsPage}>
      <h2>שעשועון הבוטית</h2>
      <div className={styles.questionContainer}>
        <button onClick={handleAskQuestion} disabled={loading}>
          שאלי אותי שאלה
        </button>
        {loading && <div className={styles.loading}>הבוטית מקלידה...</div>}
        {response && <div className={styles.response}>{response}</div>}
      </div>
    </div>
  );
};

export default PositiveQuestionsPage;
