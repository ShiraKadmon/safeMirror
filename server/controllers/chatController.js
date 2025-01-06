import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export const getResponseFromGemini = async (query, userAge) => {
  try {
    const prompt = `מטרה: שיח חיובי ומותאם גיל.\n גיל: ${userAge}.\n שאלה: ${query}\n`;

    const response = await axios.post(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              { text: prompt }
            ]
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    // שליפת התוכן מהתשובה
    const content = response.data.candidates[0]?.content?.parts?.map(part => part.text).join('\n');
    console.log('Generated Content:', content);
    return content;

  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
};