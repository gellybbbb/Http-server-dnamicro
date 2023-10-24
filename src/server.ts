import express, { Request, Response } from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';

// Define an interface for user data
interface UserData {
  first_name: string;
  last_name: string;
}

const app = express();
const port = 3000;

app.use(bodyParser.json()); // Parse JSON requests

// Define a route for saving user information with a POST request
app.post('/save', (req: Request, res: Response) => {
  const userData: UserData = req.body; // Explicitly specify the type
  // Save user information to a JSON file
  fs.readFile('./src/user.json', 'utf8', (err, data) => {
    if (err) {
      // If the file doesn't exist, create an empty array
      const users: UserData[] = []; // Use the UserData type
      users.push(userData);
      fs.writeFile('./src/user.json', JSON.stringify(users, null, 2), (err) => {
        if (err) {
          res.status(500).send('Error saving user information');
        } else {
          res.send('User information saved successfully');
        }
      });
    } else {
      // If the file exists, append the new user data
      const users: UserData[] = JSON.parse(data);
      users.push(userData);
      fs.writeFile('./src/user.json', JSON.stringify(users, null, 2), (err) => {
        if (err) {
          res.status(500).send('Error saving user information');
        } else {
          res.send('User information saved successfully');
        }
      });
    }
  });
});

// Define a route for getting all user information with a GET request
app.get('/get', (req: Request, res: Response) => {
  fs.readFile('./src/user.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading user information');
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
