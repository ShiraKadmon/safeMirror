import { useState, useEffect } from 'react';
import './BotPage.css';

const BotPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  
  const userName= "אילה"; //We will subtract the name from the data base
  const userAge = 15; //We will subtract the age from the data base 

  useEffect(() => {
    //Initial message of the bot
    setMessages([
      { text: `שלום ${userName}, מה שלומך? איך אני יכולה לעזור לך?`, sender: 'bot' },
    ]);
  }, []);

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
        <h2>ChatBot</h2>
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
          Send
        </button>
      </div>
    </div>
  );
};

export default BotPage;