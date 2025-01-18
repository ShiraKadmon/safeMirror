import { useState } from 'react';
import styles from '../styles/QuizPage.module.css';
import QuizIcon from "/src/assets/quiz-icon2.jpg";
//import { useAuth } from '../../AuthProvider';
import questionIcon from '/src/assets/question-icon.png';
import userIcon from '/src/assets/user-icon.png';
import botIcon from '/src/assets/bot-icon.png';

const QuizPage = () => {
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const userAge = 15; //We will subtract the age from the data base 

  // Function to handle asking a new question
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
          previousQuestions: chatHistory.map(chat => chat.question),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get a response from the server.');
      }

      const data = await response.json();
      // Ensure the question is not already in chat history
      if (data.question && !chatHistory.find(chat => chat.question === data.question)) { 
      setQuestion(data.question);
    } else {
      setQuestion('לא התקבלה שאלה חדשה מהשרת.');
    }
    } catch (error) {
      console.error('Error fetching bot response:', error);
      alert('משהו השתבש, נסי שוב מאוחר יותר.');
    } finally {
      setLoading(false);
    }
  };

  // Function to handle user answer submission
  const handleUserAnswer = async () => {
    if (!userAnswer) return;// Prevent empty answers
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
        <div className={styles.quizHeader}>
          <div className={styles.quizHeaderIconContainer}>
            <img src={QuizIcon} alt="Quiz Icon" className={styles.quizHeaderIcon} />
          </div>
          <h2>שעשועון הבוטית</h2>
        </div>
      {question ? (
        <div className={styles.questionContainer}>
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
      </div>
    ) : (
      <button onClick={handleAskQuestion} disabled={loading}>
        שאלי אותי שאלה
      </button>
    )}

        {loading && <div className={styles.loading}>הבוטית מקלידה...</div>}

        {chatHistory.length > 0 && (
      <div className={styles.chatHistory}>
        {chatHistory.slice().map((chat, index) => (
          <div key={index} className={styles.chatBlock}>
            <div>
              <img src={questionIcon} alt="שאלה" className={styles.icon} /> שאלה: {chat.question}
            </div>
            <div>
              <img src={userIcon} alt="תשובה שלך" className={styles.icon} /> תשובה שלך: {chat.userAnswer}
            </div>
            <div>
              <img src={botIcon} alt="תשובת הבוטית" className={styles.icon} /> תשובת הבוטית: {chat.botResponse}
            </div>
          </div>
        ))}
      </div>
    )}
  </div>  
  );
};

export default QuizPage;
