const express = require('express');

const app = express();

/** List
 */

/* Middleware */

// Setting up template engine
app.set('views', './views');
app.set('view engine', 'pug');

// Setting up static assets
app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));

/* Routes */

// GET request to '/' route
app.get('/', (req, res) => {
  res.render('home', {title: "Temp Home"});
});

// Starting server
const port = 3000;
app.listen(port, () => console.log("Server Started on port " + port));
