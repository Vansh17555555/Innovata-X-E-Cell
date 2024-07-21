import { Client } from 'pg';

// Replace with your NeonDB connection string
const connectionString = 'postgresql://Vansh17555555:kpP5xutT1mNF@ep-fancy-rain-a5ag2ao9.us-east-2.aws.neon.tech/secureflow?sslmode=require';

const client = new Client({
  connectionString,
});

const createTables = async () => {
  try {
    await client.connect();
    console.log('Connected to the database');

    // Create users and payments tables
    await client.query(`
      -- Create the users table
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        age INTEGER NOT NULL,
        wallet_id VARCHAR(255) UNIQUE
      );

      -- Create the payments table
      CREATE TABLE IF NOT EXISTS payments (
        payment_id SERIAL PRIMARY KEY,
        wallet_id VARCHAR(255) NOT NULL,
        amount NUMERIC(10, 2) NOT NULL,
        credit_score INTEGER NOT NULL,
        current_balance NUMERIC(10, 2) NOT NULL,
        CONSTRAINT fk_wallet FOREIGN KEY(wallet_id) REFERENCES users(wallet_id) ON DELETE CASCADE
      );
    `);
    
    console.log('Tables created successfully');
  } catch (err) {
    console.error('Error creating tables:', err);
  } finally {
    await client.end();
    console.log('Connection closed');
  }
};

createTables();
