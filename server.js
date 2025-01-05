const express = require('express');
const path = require('path');

const app = express();

// Middleware to serve static files from the React app's build folder
app.use(express.static(path.join(__dirname, 'build')));

// Catch-all route to serve the React app for all requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Define the port to run the server
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
