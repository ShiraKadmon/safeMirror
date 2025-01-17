import axios from 'axios'; 
import dotenv from 'dotenv';

dotenv.config();

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export const getPositiveQuestion = async (req, res) => {
  const { userAge } = req.body;

  if (!userAge || typeof userAge !== 'number') {
    console.error('Invalid age:', userAge);
    return res.status(400).json({ error: 'גיל המשתמשת חסר או לא תקין.' });
  }

  try {
    const prompt = `
      את בוטית ידידותית שמדברת עם נערות בגילאי ${userAge}.
      שאלי שאלה חיובית ומעצימה אחת בלבד שתגרום לה להרגיש טוב עם עצמה, לדוגמה: "מה את אוהבת בעצמך?" או "איזה כשרון היית רוצה לפתח?".
      הגבל את התשובה ל-300 תווים בלבד.
    `;

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
            'Content-Type': 'application/json',
          },
        }
      );
  

        console.log('Gemini API full response:', JSON.stringify(response.data, null, 2));
        console.log('Gemini API response:', response.data);

        const botQuestion = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'לא הצלחתי להפיק שאלה.';
        res.json({ question: botQuestion });
      } catch (error) {
        console.error('Error getting question from Gemini API:', error.response?.data || error.message);
        res.status(500).json({ error: 'שגיאה בהפקת שאלה מהבוט, נסי שוב מאוחר יותר.' });
      }
    };

export const getEmpoweringResponse = async (req, res) => {
    const { userAge, userAnswer, previousQuestion } = req.body;
  
    if (!userAnswer || !userAge || typeof userAge !== 'number' || !previousQuestion) {
      return res.status(400).json({ error: 'נתונים חסרים או לא תקינים.' });
    }
  
    try {
      const prompt = `
        את בוטית ידידותית שמדברת עם נערות בגיל ${userAge}.
        השאלה ששאלת: "${previousQuestion}".
        התשובה של המשתמשת: "${userAnswer}".
        תני תשובה מעצימה וממוקדת שתגרום למשתמשת להרגיש טוב עם עצמה. הגבל את התשובה ל-300 תווים בלבד.
      `;
  
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
              'Content-Type': 'application/json',
            },
          }
        );
  
          console.log('Gemini API full response:', JSON.stringify(response.data, null, 2));
          console.log('Gemini API response:', response.data);
  
          const empoweringResponse = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'לא הצלחתי להפיק תשובה.';
    res.json({ response: empoweringResponse });
  } catch (error) {
    console.error('Error getting response from Gemini API:', error.response?.data || error.message);
    res.status(500).json({ error: 'שגיאה בהפקת תשובה מהבוט, נסי שוב מאוחר יותר.' });
  }
};