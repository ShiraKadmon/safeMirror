import axios from 'axios';

export const getPositiveQuestion = async (req, res) => {
  const { userAge } = req.body;

  try {
    const prompt = `
      את בוטית ידידותית שמדברת עם נערות בגילאי ${userAge}.
      שאל אותה שאלות חיוביות כמו "מה את אוהבת בעצמך?" או "איזה כשרון היית רוצה לפתח?".
      תני להן תשובות מעצימות שמתאימות לגילן ולתחושות חיוביות.
    `;

    const response = await axios.post('https://api.gemini.com', {
      prompt,
      model: 'gemini',
      temperature: 0.7, // Creative freedom in answers
      max_tokens: 100,
    });

    const botReply = response.data.choices[0].text.trim();

    res.json({ reply: botReply }); // return the answer to the user
  } catch (error) {
    console.error('Error getting response from Gemini API:', error);
    res.status(500).send('Error getting response from bot.');
  }
};