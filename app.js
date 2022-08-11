const express = require('express');
const app = express();
const path = require('path');
const bodyParser= require('body-parser')
const port = 3000;

const fs = require('fs')

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let methodOverride = require('method-override')
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

// Rotas
require("./routes/app.routes")(app);

app.listen(port, () => {
  console.log(`Server running at ${port}`)
})