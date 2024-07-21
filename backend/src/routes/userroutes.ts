import { NextFunction, Request, Response, Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid'; // Import UUID v4 function
import client from '../db'; // Adjust the path as needed

const router = Router();

// Set JWT secret directly
const JWT_SECRET = 'your_jwt_secret'; // Replace with your actual secret

// Signup Route
router.post('/signup', async (req, res) => {
  const { name, email, password, age } = req.body;

  if (!password || typeof password !== 'string') {
    return res.status(400).send('Password is required and must be a string');
  }

  try {
    // Generate a unique wallet_id
    const wallet_id = uuidv4();

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user into the database
    await client.query(
      'INSERT INTO users (name, email, password, age, wallet_id) VALUES ($1, $2, $3, $4, $5)',
      [name, email, hashedPassword, age, wallet_id]
    );

    res.status(201).send('User created');
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).send('Error creating user');
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);

    if (result.rows.length > 0) {
      const user = result.rows[0];

      // Compare password
      const match = await bcrypt.compare(password, user.password);

      if (match) {
        // Create a JWT token
        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
      } else {
        res.status(401).send('Invalid credentials');
      }
    } else {
      res.status(404).send('User not found');
    }
  } catch (err) {
    console.error('Error logging in:', err);
    res.status(500).send('Error logging in');
  }
});

// Middleware for token verification
const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    (req as any).user = user;
    next();
  });
};

// Protected Route
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM users WHERE id = $1', [(req as any).user.userId]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).send('User not found');
    }
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).send('Error fetching user');
  }
});

export default router;
