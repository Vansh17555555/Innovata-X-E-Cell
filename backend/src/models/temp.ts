import { Client } from 'pg';

const connectionString = 'postgresql://Vansh17555555:kpP5xutT1mNF@ep-fancy-rain-a5ag2ao9.us-east-2.aws.neon.tech/secureflow?sslmode=require';

const client = new Client({
  connectionString,
});

const updateSchema = async () => {
  try {
    await client.connect();
    console.log('Connected to the database');

    // Add password column to users table
    await client.query(`
      ALTER TABLE users
      ADD COLUMN password VARCHAR(255) NOT NULL;
    `);

    console.log('Schema updated successfully');
  } catch (err) {
    console.error('Error updating schema:', err);
  } finally {
    await client.end();
    console.log('Connection closed');
  }
};

updateSchema();
