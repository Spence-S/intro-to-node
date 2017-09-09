const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// template engine
app.set('view engine', 'pug');

// static files
app.use('/html', express.static(path.join(__dirname, 'public')));

// routes
app.get('/', (req, res, next) => {
  res.send('Hello FCC!');
});

app.get('/pug', (req, res, next) => {
  res.render('home', { title: 'title is a local!' });
});

app.post('/', (req, res, next) => {
  fs.appendFile('names.txt', req.body.name, err => {
    if (err) throw err;
  });
  res.send(req.body);
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
