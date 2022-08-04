const express = require('express');
const app = express();
const path = require('path');
const bodyParser= require('body-parser')
const port = 3000;

const fs = require('fs')

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Página inicial",
    links: [
      { href: "/index", label: "Home"},
      { href: "/receitas", label: "Receitas"},
      { href: "/destaques", label: "Destaques"}
    ]
  });
});

app.get("/receitas", (req, res) => {
  res.render("receitas", {
    title: "Receitas",
    links: [
      { href: "/index", label: "Home"},
      { href: "/receitas", label: "Receitas"},
      { href: "/destaques", label: "Destaques"}
    ]
  });
});

app.get("/destaques", (req, res) => {
  res.render("destaques", {
    title: "Destaques",
    links: [
      { href: "/index", label: "Home"},
      { href: "/receitas", label: "Receitas"},
      { href: "/destaques", label: "Destaques"}
    ]
  });
});

app.listen(port, () => {
  console.log(`Server running at ${port}`)
})