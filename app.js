const express = require('express');
const fs = require('fs');

const app = express();

/* Middleware */

// Setting up template engine
app.set('views', './views');
app.set('view engine', 'pug');

// Setting up static assets
app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));

/* Vars */
const books = JSON.parse(fs.readFileSync('./books.json', 'utf-8'));

/* Routes */

// GET request to '/' route
app.get('/', (req, res, next) => {
  res.render('home', {title: "Books", books: books});
  next();
});

app.get('/:book', (req, res, next) => {
  book = books[req.params.book];
  title = 'Political Commentaries in "' + book.title + '"';
  res.render('comments', {title: title, comments: book.comments});
  next();
});

// Starting server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server Started on port " + port));
