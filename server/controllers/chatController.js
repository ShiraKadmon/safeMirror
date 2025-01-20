import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Function to filter offensive messages in the current user input
const moderateMessage = (message) => {
  const inappropriateWords = ['שמנה', 'רזה מידי', 'מכוערת'];
  for (let word of inappropriateWords) {
    if (message.includes(word)) {
      return true;
    }
  }
  return false;
};

// Function to check if body image has been discussed recently
const hasBodyImageBeenDiscussed = (history) => {
  return history.some(msg => msg.text.includes('שמנה') || msg.text.includes('רזה מידי') || msg.text.includes('מכוערת'));
};

// Main function to process a response
export const getResponseFromGemini = async (history, age) => {
  try {
    // Checking the integrity of the history
    if (!Array.isArray(history) || history.some(msg => !msg.text || !msg.sender)) {
      throw new Error('Invalid history format: Expected an array of messages with text and sender.');
    }

    // Convert history array to text format
    const formattedHistory = history
      .map((msg) => `${msg.sender === 'user' ? 'User' : 'Bot'}: ${msg.text}`)
      .join('\n');

     // Check for inappropriate language only in the current user input
     if (moderateMessage(history[history.length - 1].text)) {
      return 'אני מבינה שיכולות להיות מחשבות כאלו לפעמים, אנחנו לפעמים נוטים להשוות את עצמנו לאנשים אחרים, אבל חשוב לזכור שכולנו ייחודיים ויפהפיים בדרכים שונות. חשוב להקפיד על שיח חיובי ולהימנע מלפגוע בעצמנו או באחרים במילים.';
    }

    // Create the prompt with the formatted history and age and limit answer to 300 characters
    let prompt = `${formattedHistory}\n\nשאלה חדשה: ${history[history.length - 1].text}\nגיל: ${age}\nנושא: דימוי גוף חיובי, ביטחון עצמי, השפעת המדיה.\nמטרה: לעודד דימוי גוף בריא ולהגביר את הערך העצמי.\n\nענה באופן מותאם גיל: אם מדובר בילדה מתחת לגיל 13, ענה בצורה חינוכית, רגועה ובסגנון פשוט, תוך הצעת חיזוקים חיוביים ומילים מעודדות; בגילאי 13-18 ענה בצורה שמתאימה לגיל ההתבגרות, תוך התמקדות בהעצמה אישית, פתרונות אפשריים להתמודדות עם קשיים, ותשובות שיכולות לעזור במצבי לחץ רגשי. חשוב שהתשובה תהיה קשורה ישירות לשאלה ולתחושות של המשתמשת, ולא תספק תשובות גנריות או חפיפות בנושאים שלא הוזכרו בשיחה.\n\n**הגבל את התשובה שלך ל-300 תווים בלבד.**`;

    // If body image has been discussed before, shift the focus of the response to emotional support
    if (hasBodyImageBeenDiscussed(history)) {
      prompt += `\n\nכעת, במקום להתמקד בדימוי הגוף, התשובה צריכה להתייחס יותר לתחושות הרגשיות של המשתמשת, למשל תחושת בדידות, עצב, או קשיים אחרים שהיא חווה.`;
    }

    // Request for GEMINI
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

    // Retrieve content from the response
    const content = response.data.candidates?.[0]?.content;
   
    if (!content) {
      return 'הייתה בעיה בהפקת התשובה, נסה שוב מאוחר יותר.';
    }

    const parsedContent = content.parts?.map(part => part.text).join('\n');
    if (!parsedContent) {
      return 'לא הצלחתי להפיק תשובה. אנא נסה שוב.';
    }

    // Return the response
    return parsedContent;

  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    return 'הייתה בעיה בהפקת התשובה, נסה שוב מאוחר יותר.';
  }
};
