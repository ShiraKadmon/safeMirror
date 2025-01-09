import express from 'express';
import chatRoutes from './routes/chatRoutes.js';

const app = express();

app.use(express.json());  
app.use('/chat', chatRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});