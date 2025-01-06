/*
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import dotenv from 'dotenv';
import rubberDuckRoutes from './routes/rubberDucks.js'; // Import the routes

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
console.log("API Key:", process.env.HUGGINGFACE_API_KEY);

const app = express();

app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images'))); // Serve static images

app.use(cors({
  origin: process.env.CLIENT_URL
}));

// Use the routes file for all `/ducks` routes
app.use('/ducks', rubberDuckRoutes);

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
*/

/*
import express from 'express';
import chatRoutes from './routes/chatRoutes.js';

const app = express();

app.use(express.json());

app.use('/chat', chatRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
*/


import express from 'express';
import chatRoutes from './routes/chatRoutes.js';
import { getResponseFromGemini } from './controllers/chatController.js'; 

const app = express();

app.use(express.json());  
app.use('/chat', chatRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  
  getResponseFromGemini('מה זה בינה מלאכותית?', 5);
});