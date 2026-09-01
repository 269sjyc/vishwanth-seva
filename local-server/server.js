const express = require('express');
const path = require('path');
const app = express();

// Serve static files from parent folder (where index.html and bus.jpeg are)
app.use(express.static(path.join(__dirname, '..')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('');
  console.log('  Vishwanath Seva is running!');
  console.log('  Open: http://localhost:' + PORT);
  console.log('  Press Ctrl+C to stop.');
});
