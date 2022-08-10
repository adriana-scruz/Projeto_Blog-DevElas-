const conn = require("../infra/db-connection")("infra/receitas.db");
const receitasDAO = require("../model/receitasDAO")(conn);
const categoryDAO = require("../model/categoriesDAO")(conn);
const formidable = require("formidable");
const path = require("path");
const fs = require("fs");

exports.getReceitas = (req, res) => {
  receitasDAO.findAll((err, rows) => {
    if (err) {
      return res.json({ message: "Houve um erro ao consultar os dados", err });
    }
    res.render("receitas", {
      title: "Receitas",
      links: [
        { href: "/", label: "Home" },
        { href: "/receitas", label: "Receitas" },
        { href: "/destaques", label: "Destaques" },
      ],
      receitas: rows,
    });
  });
};

exports.getReceitaById = (req, res) => {
  const id = req.params.id;
  receitasDAO.findById(id,(err, rows) => {
    if (err) {
      return res.json({ message: "Houve um erro ao consultar os dados", err });
    }
    res.render("receitas-individual", {
      title: "Receita",
      links: [
        { href: "/", label: "Home" },
        { href: "/receitas", label: "Receitas" },
        { href: "/destaques", label: "Destaques" },
      ],
      receita: rows,
    });
  });
};

/*
exports.getReceitasByCategoryId = (req, res) => {
  const categoryId = req.params.id;
  receitasDAO.findbyCategoryId(categoryId, (err, rows) => {
    if (err) {
      return res.json({ errorMessage: "Houve um erro ao consultar os dados", err });
    }
    
    if (!rows.length) {
      return res.json({ errorMessage: "Produto não encontrado", err });
    }

    res.render("index", { receitas: rows, role: "receitas" });
  })
};*/

exports.getAddReceitasForm = (req, res) => {
  categoryDAO.findAll((err, rows) => {
    if (err) {
      return res.status(500).json({
        errorMessage: "Erro ao consultar os dados.",
        err: err
      });
    }

    res.render("adicao_receita", { categories: rows,
    title: "Nova receita",
    links: [
          { href: "/", label: "Home"},
          { href: "/receitas", label: "Receitas"},
          { href: "/destaques", label: "Destaques"}
        ]});
  })};

exports.saveReceita = (req, res) => {
  const formData = new formidable.IncomingForm();
  console.log(formData);
  formData.parse(req, (err, fields, files) => {
    console.log(fields)
    if (err) {
      return res.status(500).json({
        errorMessage: "Algo errado aconteceu.",
        err: err
      });
    }
    
    const imagesPath = path.join(__dirname, "../public/images/fotos", files.image.newFilename);

    const receita = { ...fields, image: files.image.newFilename };
    
    receitasDAO.saveReceita(receita, (err) => {
      if (err) {
        return res.status(500).json({
          errorMessage: "Erro ao salvar os dados.",
          err: err
        });
      }

      // Salva a imagem no caminho definido, apenas após obter sucesso ao salvar no banco
      fs.renameSync(files.image.filepath, imagesPath);
  
      return res.redirect("/receitas");
    });
  })
}

exports.getEdtReceitasForm = (req, res) => {
  const id = req.params.id;
  receitasDAO.findById(id,(err, rows) => {
    if (err) {
      return res.json({ message: "Houve um erro ao consultar os dados", err });
    }
    res.render("edicao_receita", {
      title: "Receita",
      links: [
        { href: "/", label: "Home" },
        { href: "/receitas", label: "Receitas" },
        { href: "/destaques", label: "Destaques" },
      ],
      receita: rows,
    });
  });
}

exports.editeReceita = (req, res) => {
  const formData = new formidable.IncomingForm();
  console.log(formData);
  formData.parse(req, (err, fields, files) => {
    console.log(fields)
    if (err) {
      return res.status(500).json({
        errorMessage: "Algo errado aconteceu.",
        err: err
      });
    }
    
    const imagesPath = path.join(__dirname, "../public/images/fotos", files.image.newFilename);

    const receita = { ...fields, image: files.image.newFilename };
    
    receitasDAO.editeReceita(receita, (err) => {
      if (err) {
        return res.status(500).json({
          errorMessage: "Erro ao salvar os dados.",
          err: err
        });
      }

      // Salva a imagem no caminho definido, apenas após obter sucesso ao salvar no banco
      fs.renameSync(files.image.filepath, imagesPath);
  
      return res.redirect("/receitas");
    });
  })
}