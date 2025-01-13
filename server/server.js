import express from 'express';
import chatRoutes from './routes/chatRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import rubberDuckRoutes from './routes/rubberDucks.js'; // Import the routes
import userRoutes from './routes/userRoutes.js'; // Import the routes

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

app.use(express.json());  
app.use('/chat', chatRoutes);
app.use('/notifications', notificationRoutes);
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images'))); // Serve static images

app.use(cors({
  origin: process.env.CLIENT_URL
}));

// connect to mongo

mongoose.connect(process.env.MONGODB_URL, {
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));


// Use the routes file for all `/ducks` routes
app.use('/ducks', rubberDuckRoutes);
app.use('/user', userRoutes);

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
