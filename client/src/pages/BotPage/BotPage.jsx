import React, { useState } from 'react';
import './BotPage.css';

const BotPage = () => {
    const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
        setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');

      // Simulate bot response
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: 'This is a bot response!', sender: 'bot' }]);
      }, 1000);
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
          className={`chatbot-message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
        >
          {msg.text}
        </div>
      ))}
    </div>
    <div className="chatbot-input-container">
      <input
        type="text"
        className="chatbot-input"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button className="chatbot-send-button" onClick={handleSend}>
        Send
      </button>
    </div>
  </div>
);
}

export default BotPage;