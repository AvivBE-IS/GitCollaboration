// Basic Express server boilerplate
const express = require('express');
const path = require('path');
// Create an instance of an Express application

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname, 'dist')));

// GET /message route that returns a secret message
app.get('/message', (req, res) => {
  res.send('The owl hoots at midnight.');
});

// Fallback route to serve index.html for SPA routing (optional)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


