import { useState, useEffect } from 'react';
import './BotPage.css';
import chatbotIcon from "/src/assets/chatbot-icon.jpg";
import { useAuth } from '../../AuthProvider';


const BotPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  // const { email } = useAuth(); // Access global user data
  const [loading, setLoading] = useState(false);
  
  const {name} = useAuth(); //We will subtract the name from the data base
  //const {age} = useAuth(); //We will subtract the age from the data base 
  const userAge = 15; //We will subtract the age from the data base 

//   useEffect(() => {
//     const getName = async () => {
//         const userName = await fetchUserName(email);
//         setUserName(userName || 'Guest');
//     };

//     getName();
// }, [email]);

// const fetchUserName = async (email) => {
//   try {
//       const response = await fetch(`http://localhost:5000/user/name?email=${email}`);
      
//       if (response.ok) {
//           const data = await response.json();
//           console.log('User name:', data.name);
//           return data.name; // Return the name
//       } else {
//           console.error('Failed to fetch user name:', response.status);
//           return null;
//       }
//   } catch (error) {
//       console.error('Error fetching user name:', error);
//       return null;
//   }
// };

  useEffect(() => {
    //Initial message of the bot
    if (name) {
      // Initial message of the bot
      setMessages([
          { text: `שלום ${name}, מה שלומך? איך אני יכולה לעזור לך?`, sender: 'bot' },
      ]);
  }
  }, [name]);

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = input;
      const updatedMessages = [...messages, { text: userMessage, sender: 'user' }];
      setMessages(updatedMessages);
      setInput('');
      setLoading(true);

      try {
        const response = await fetch(`${import.meta.env.VITE_SERVER_API_URL}chat`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ messages: updatedMessages, userAge }),
        });

        if (!response.ok) {
          throw new Error('Failed to get a response from the server.');
        }

        const data = await response.json();
        setMessages(prevMessages => [...prevMessages, { text: data.reply, sender: 'bot' }]);
      } catch (error) {
        console.error('Error fetching bot response:', error);
        setMessages(prevMessages => [
          ...prevMessages,
          { text: 'Something went wrong. Please try again later.', sender: 'bot' },
        ]);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <div className="chatbot-header-icon-container">
          <img src={chatbotIcon} alt="ChatBot Icon" className="chatbot-header-icon" />
        </div>
        <h2>צ&apos;ט בוטית</h2>
      </div>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chatbot-message-container ${
              msg.sender === 'user' ? 'user-message-container' : 'bot-message-container'
            }`}
          >
              {msg.sender === 'bot' && (
              <div className="chatbot-message-icon">
                <i className="fas fa-robot"></i>
              </div>
            )}
            <div className={`chatbot-message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}>
              {msg.text}
            </div>
            {msg.sender === 'user' && (
              <div className="chatbot-message-icon">
                <i className="fas fa-user"></i>
              </div>
            )}
          </div>
        ))}
        {loading && <div className="bot-loading">הבוטית מקלידה...</div>}
      </div>
      <div className="chatbot-input-container">
        <input
          type="text"
          className="chatbot-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              handleSend();
            }
          }}
          placeholder="תקלידי הודעה... "
        />
        <button className="chatbot-send-button" onClick={handleSend} disabled={loading}>
          שלחי
        </button>
      </div>
    </div>
  );
};

export default BotPage;
