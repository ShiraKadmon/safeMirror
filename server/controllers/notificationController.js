import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const ultramsgUrl = `https://api.ultramsg.com/instance${process.env.ULTRAMSG_INSTANCE_ID}/messages/chat`;
const token = process.env.ULTRAMSG_TOKEN;

export const sendNotification = async (phoneNumber, message) => {
  try {  
    const data = new URLSearchParams();
    data.append('token', token);
    data.append('to', phoneNumber);
    data.append('body', message);

    const response = await axios.post(ultramsgUrl, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return response.data.sent
      ? 'ההודעה נשלחה בהצלחה!'
      : 'הייתה בעיה בשליחת ההודעה. נסה שוב מאוחר יותר.';
  } catch (error) {
    console.error('Error sending notification:', error.message);
    return 'הייתה בעיה בשליחת ההודעה. נסה שוב מאוחר יותר.';
  }
};
