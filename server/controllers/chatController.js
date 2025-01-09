import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const dailyTips = [
  "הטיפ של היום: חשוב להעריך את עצמך כפי שאת, גם אם זה לא תמיד קל.",
  "המדיה החברתית יכולה להיות מבלבלת. חשוב לזכור שמה שנראה שם לא תמיד משקף את המציאות.",
  "לא משנה איך את נראית, את מדהימה בדיוק כפי שאת!"
];

const analyzeSentiment = (text) => {
  if (text.includes('לא אוהבת את עצמי') || text.includes('מרגישה רע')) {
    return 'אני מבינה שזה קשה, חשוב להיזכר שאת מדהימה בדיוק כפי שאת!';
  }
  return 'מה איתך היום? איך את מרגישה?';
};

const moderateMessage = (message) => {
  const inappropriateWords = ['שמנה', 'רזה מידי', 'מכוערת'];
  for (let word of inappropriateWords) {
    if (message.includes(word)) {
      return true;
    }
  }
  return false;
};

  const getResponseBasedOnAge = (userAge, query) => {
    if (userAge < 13) {
      return `אה, אני רואה שזו שאלה מעניינת! גיל 12 ומטה אוהבים לדעת על איך להיות חברים טובים!`;
    }
    if (userAge >= 13 && userAge < 18) {
      return `בגיל שלך זה חשוב לדעת איך להתמודד עם כל הלחצים החברתיים. אני כאן לעזור!`;
    }
    return `את/ה מבוגר/ת, זה הזמן לחשוב על איך לשפר את הדימוי שלך ולתמוך בעצמך!`;
  };

export const getResponseFromGemini = async (query, userAge) => {
  try {
    if (moderateMessage(query)) {
      return 'הודעה זו מכילה שפה פוגענית. אנא הקפדי על שיח חיובי!';
    }

    const prompt = `שאלה: ${query}\n גיל: ${userAge}\nנושא: דימוי גוף חיובי, ביטחון עצמי, השפעת המדיה.\n מטרה: לעודד דימוי גוף בריא ולהגביר את הערך העצמי.\n`;

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

    const content = response.data.candidates[0]?.content?.parts?.map(part => part.text).join('\n');

    if (!content) {
      return 'הייתה בעיה בהפקת התשובה, נסה שוב מאוחר יותר.';
    }

    const ageResponse = getResponseBasedOnAge(userAge, query);
    const sentimentResponse = analyzeSentiment(query);

    return `${content}\n\n${ageResponse}\n${sentimentResponse}`;

  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    return 'הייתה בעיה בהפקת התשובה, נסה שוב מאוחר יותר.';
  }
};