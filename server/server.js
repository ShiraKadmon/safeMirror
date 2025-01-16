import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import chatRoutes from './routes/chatRoutes.js';
import userRoutes from './routes/userRoutes.js';
import forumRoutes from './routes/forumRoutes.js';


dotenv.config();

const app = express();

// Enable CORS for requests from 'http://localhost:3000'
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
}));

app.use(express.json());

// connect to mongo
mongoose.connect(process.env.MONGODB_URL, {
})
.then(() => {console.log('Connected to MongoDB')
  console.log("✅ connect to the database :", mongoose.connection.name);
  return null;
})
.catch(err => { console.error('Error connecting to MongoDB:', err)
throw err; });

app.use('/chat', chatRoutes);
app.use('/user', userRoutes);
app.use('/forum', forumRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


