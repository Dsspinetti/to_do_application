import { createConnection } from 'mysql2'; // Import at the top
import express from 'express';
const app = express();
const port = 3001; // Change this to the desired port number

const dbConnection = createConnection({
  host: 'localhost', // Replace with the actual hostname of your MySQL server
  user: 'root',
  password: '',
  database: 'todo_app',
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
