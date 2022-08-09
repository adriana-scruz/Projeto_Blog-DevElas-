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

// Rotas
require("./routes/app.routes")(app);

/*
app.get("/adicao_receita", (req, res) => {
  res.render("adicao_receita", {
    title: "Nova receita",
    links: [
      { href: "/", label: "Home"},
      { href: "/receitas", label: "Receitas"},
      { href: "/destaques", label: "Destaques"}
    ]
  });
});

app.get("/destaques", (req, res) => {
  res.render("destaques", {
    title: "Destaques",
    links: [
      { href: "/", label: "Home"},
      { href: "/receitas", label: "Receitas"},
      { href: "/destaques", label: "Destaques"}
    ]
  });
});

app.get("/edicao_receita", (req, res) => {
  res.render("edicao_receita", {
    title: "Editar receita",
    links: [
      { href: "/", label: "Home"},
      { href: "/receitas", label: "Receitas"},
      { href: "/destaques", label: "Destaques"}
    ]
  });
});

*/

app.listen(port, () => {
  console.log(`Server running at ${port}`)
})