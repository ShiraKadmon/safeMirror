import express from 'express';
import chatRoutes from './routes/chatRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';
// import path from 'path';
// import { fileURLToPath } from 'url';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js'; // Import the routes
import awarenessNotificationRoutes from './routes/awarenessNotificationRoutes.js';
import {scheduleDailyNotifications} from './controllers/scheduledNotificationController.js';


dotenv.config();

const app = express();

app.use(cors()); // Allow all origins

app.use(express.json());  
app.use('/chat', chatRoutes);
app.use('/notifications', notificationRoutes);

app.use(express.json());

app.use(cors({
  origin: process.env.CLIENT_URL
}));

// connect to mongo
mongoose.connect(process.env.MONGODB_URL, {
})
.then(() => {console.log('Connected to MongoDB')
  scheduleDailyNotifications();
  return null;
})
.catch(err => { console.error('Error connecting to MongoDB:', err)
throw err; });


// Use the routes file for all `/ducks` routes
app.use('/user', userRoutes);
app.use('/awarenessNotification', awarenessNotificationRoutes);

const PORT = 5000;
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
