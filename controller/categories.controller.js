const conn = require("../infra/db-connection")("infra/receitas.db")
const categoriesDAO = require("../model/categoriesDAO")(conn);

exports.getCategories = (req, res) => {
  categoriesDAO.findAll(conn,(err, rows) => {
    if (err) {
      return res.json({ message: "Houve um erro ao consultar os dados", err });
    }
    res.json({ categories: rows});
  });
};