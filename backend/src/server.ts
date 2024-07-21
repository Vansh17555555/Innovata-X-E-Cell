import express, { Express } from 'express';
import cors from 'cors';
import userRoutes from './routes/userroutes'; // Import user routes
import client from './db';

const app: Express = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', userRoutes); // Use user routes

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
