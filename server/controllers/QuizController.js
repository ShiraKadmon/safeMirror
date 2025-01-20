import axios from 'axios'; 
import dotenv from 'dotenv';

dotenv.config();

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export const getPositiveQuestion = async (req, res) => {
  const { age, previousQuestions  } = req.body;

  // Validate age and previousQuestions parameters
  if (!age || typeof age !== 'number') {
    console.error('Invalid age:', age);
    return res.status(400).json({ error: 'גיל המשתמשת חסר או לא תקין.' });
  }

  if (!previousQuestions || !Array.isArray(previousQuestions)) {
    console.error('Invalid previousQuestions:', previousQuestions);
    return res.status(400).json({ error: 'היסטוריית השאלות חסרה או לא תקינה.' });
  }

  try {
    // Create the prompt for the Gemini API based on age and previousQuestions
    const prompt = `
    את בוטית ידידותית שמדברת עם נערות בגילאי ${age}.
    שאלי שאלה חיובית ומעצימה אחת בלבד שתגרום לה להרגיש טוב עם עצמה, לדוגמה: "מה את אוהבת בעצמך?" או "איזה כשרון היית רוצה לפתח?".
    אל תחזרי על שאלה ששאלת בעבר או על שאלה דומה. נסי להיות יצירתית ומגוונת בניסוח.
    אלו השאלות שכבר שאלת: ${previousQuestions.join(', ')}.
    הגבילי את התשובה ל-300 תווים בלבד.
    `;

    // Call the Gemini API to generate the question
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

      // Extract the question from the response
        const botQuestion = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'לא הצלחתי להפיק שאלה.';
        res.json({ question: botQuestion });
      } catch (error) {
        console.error('Error getting question from Gemini API:', error.response?.data || error.message);
        res.status(500).json({ error: 'שגיאה בהפקת שאלה מהבוט, נסי שוב מאוחר יותר.' });
      }
    };

export const getEmpoweringResponse = async (req, res) => {
    const { age, userAnswer, previousQuestion } = req.body;
  
    if (!userAnswer || !age || typeof age !== 'number' || !previousQuestion) {
      return res.status(400).json({ error: 'נתונים חסרים או לא תקינים.' });
    }
  
    try {
      // Create the prompt for the Gemini API to generate an empowering response
      const prompt = `
        את בוטית ידידותית שמדברת עם נערות בגיל ${age}.
        השאלה ששאלת: "${previousQuestion}".
        התשובה של המשתמשת: "${userAnswer}".
        תני תשובה מעצימה וממוקדת שתגרום למשתמשת להרגיש טוב עם עצמה. הגבל את התשובה ל-300 תווים בלבד.
      `;
  
       // Call the Gemini API to generate the empowering response
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
  
    // Extract the empowering response from the API response
    const empoweringResponse = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'לא הצלחתי להפיק תשובה.';
    res.json({ response: empoweringResponse });
  } catch (error) {
    console.error('Error getting response from Gemini API:', error.response?.data || error.message);
    res.status(500).json({ error: 'שגיאה בהפקת תשובה מהבוט, נסי שוב מאוחר יותר.' });
  }
};