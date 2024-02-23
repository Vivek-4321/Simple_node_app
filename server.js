const express = require('express');

// Create Express application
const app = express();

// Define a route for the '/hello' endpoint
app.get('/hello', (req, res) => {
  // Send a JSON response with a "Hello, World!" message
  res.json({ message: 'Hello, World!' });
});

// Define the port to listen on
const port = 3000;

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
