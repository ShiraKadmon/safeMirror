
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css'; 
import App from './App.jsx';
import { DuckProvider } from './context/DuckContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DuckProvider>
      <App /> 
    </DuckProvider>
  </React.StrictMode>
);

/*
import { Configuration, OpenAIApi } from 'openai';

const config = new Configuration({
  apiKey: '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',
})

const openai = new OpenAIApi(config);

async function sendToChatGPT(message) {
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'user', content: message }
    ]
  })
  return response;
}

(async () => {
  const response = await sendToChatGPT('מתי הוקמה מדינת ישראל?');
  console.log(response.data.choices[0].message.content);
})()
  */

/*
//try to run this-

import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true,
});

async function sendToChatGPT(message) {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: 'user', content: message }
    ],
  });
  return completion;
}

(async () => {
  const response = await sendToChatGPT('מתי הוקמה מדינת ישראל?');
  console.log(response.data.choices[0].message.content);
})();
*/