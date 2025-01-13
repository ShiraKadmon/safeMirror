import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js'; // Import the routes
import awarenessNotificationRoutes from './routes/awarenessNotificationRoutes.js';
import {scheduleDailyNotifications} from './controllers/scheduledNotificationController.js';


dotenv.config();

const app = express();

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

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
