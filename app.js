const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// static files
app.use('/html', express.static(path.join(__dirname, 'public')));

// routes
app.get('/', (req, res, next) => {
  res.send('Hello FCC!');
});

app.listen(3000, console.log('listening on port 3000!'));
