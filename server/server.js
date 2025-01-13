import express from 'express';
import chatRoutes from './routes/chatRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';

const app = express();

app.use(express.json());  
app.use('/chat', chatRoutes);
app.use('/notifications', notificationRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/*
import { sendNotification } from './controllers/notificationController.js';

(async () => {
  try {
    const phoneNumber = '+972547080155';
    const message = 'נסיון שליחת הודעה ישירות מהפונקציה';
    const result = await sendNotification(phoneNumber, message);
    console.log('Notification Test Result:', result);
  } catch (error) {
    console.error('Error in Notification Test:', error.message);
  }
})();
*/
