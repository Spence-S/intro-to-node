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

// catch 404 errors
app.use((req, res, next) => {
  const err = new Error();
  err.status = 404;
  err.message = "four oh four! We couldn't find what you were looking for";
  res.send(err);
});

// handle server errors
app.use((err, req, res, next) => {
  err.status = err.status || 500;
  console.error(err.stack);
  res.send(err);
});

app.listen(3000, console.log('listening on port 3000!'));
