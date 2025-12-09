const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the Client/src/app directory
app.use(express.static(path.join(__dirname, '../Client/src/app')));

// Route for home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Client/src/app/Home/home.html'));
});

// Route for personal page
app.get('/personal', (req, res) => {
    res.sendFile(path.join(__dirname, '../Client/src/app/Personal/personal.html'));
});

// Route for ppcalc page
app.get('/ppcalc', (req, res) => {
    res.sendFile(path.join(__dirname, '../Client/src/app/PPCalc/ppcalc.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
