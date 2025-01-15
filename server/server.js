import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js'; // Import the routes
//import {scheduleDailyNotifications} from './controllers/scheduledNotificationController.js';
import chatRoutes from './routes/chatRoutes.js';


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
  console.log("✅ connect to the database :", mongoose.connection.name);
  return null;
})
.catch(err => { console.error('Error connecting to MongoDB:', err)
throw err; });

app.use('/user', userRoutes);
app.use('/chat', chatRoutes);


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


