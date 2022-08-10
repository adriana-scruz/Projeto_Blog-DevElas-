const conn = require("../infra/db-connection")("infra/receitas.db")
const categoriesDAO = require("../model/categoriesDAO")(conn);

exports.getCategories = (req, res) => {
  categoriesDAO.findAll((err, rows) => {
    if (err) {
      return res.json({ message: "Houve um erro ao consultar os dados", err });
    }
    res.render("categorias", {
      title: "Categorias",
      links: [
        { href: "/", label: "Home" },
        { href: "/receitas", label: "Receitas" },
        { href: "/categorias", label: "Categorias" },
      ],
      categorias: rows,
    });
  });
};