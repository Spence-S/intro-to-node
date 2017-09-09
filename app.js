const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.send('Hello FCC!');
});

app.listen(3000, console.log('listening on port 3000!'));
