import { useState } from 'react';
import styles from '../styles/QuizPage.module.css';
import QuizIcon from "/src/assets/quiz-icon2.jpg";
//import { useAuth } from '../../AuthProvider';

const QuizPage = () => {
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const userAge = 15; //We will subtract the age from the data base 

  const handleAskQuestion = async () => {
    setLoading(true);
    setUserAnswer('');
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_API_URL}quiz/question`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({messages: [
          {
            role: "user",
            content: prompt
          }
        ],
          userAge,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get a response from the server.');
      }

      const data = await response.json();
      setQuestion(data.question || "לא התקבלה שאלה מהשרת.");
    } catch (error) {
      console.error('Error fetching bot response:', error);
      alert('משהו השתבש, נסי שוב מאוחר יותר.');
    } finally {
      setLoading(false);
    }
  };

  const handleUserAnswer = async () => {
    if (!userAnswer) return;
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_API_URL}quiz/response`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userAge,
          userAnswer,
          previousQuestion: question,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get a response from the server.');
      }

      const data = await response.json();
      const newChat = {
        question,
        userAnswer,
        botResponse: data.response  || "לא התקבלה תשובה מהשרת.",
      };
      setChatHistory((prevChatHistory) => [...prevChatHistory, newChat]);
      setQuestion('');
      setUserAnswer('');
    } catch (error) {
      console.error('Error fetching empowering response:', error);
      alert('משהו השתבש, נסי שוב מאוחר יותר.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter' && userAnswer) {
      handleUserAnswer();
    }
  };

  return (
    <div className={styles.quizPage}>
        <div>
            <h2>שעשועון הבוטית</h2>
            <div className={styles.quizHeaderIconContainer}>
                <img src={QuizIcon} alt="Quiz Icon" className={styles.quizHeaderIcon} />
            </div>
        </div>
      <div className={styles.questionContainer}>
      {question ? (
        <>
        <div className={styles.question}>שאלה: {question}</div>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="הכניסי תשובה כאן"
          disabled={loading}
          onKeyUp={handleKeyUp}
          className={styles.answerInput}
          autoComplete="off"
        />
        <button onClick={handleUserAnswer} disabled={loading || !userAnswer}>
          שלחי תשובה
        </button>
      </>
    ) : (
      <button onClick={handleAskQuestion} disabled={loading}>
        שאלי אותי שאלה
      </button>
    )}

        {loading && <div className={styles.loading}>הבוטית מקלידה...</div>}
      </div>
      <div className={styles.chatHistory}>
        {chatHistory.map((chat, index) => (
          <div key={index} className={styles.chatBlock}>
            <div>❓ שאלה: {chat.question}</div>
            <div>👩 תשובה שלך: {chat.userAnswer}</div>
            <div>🤖 תשובת הבוט: {chat.botResponse}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;
