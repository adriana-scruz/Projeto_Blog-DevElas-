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
        { href: "/categorias", label: "Categorias" },
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
        { href: "/categorias", label: "Categorias" },
      ],
      receita: rows,
    });
  });
};

exports.getReceitasByCategoryId = (req, res) => {
  const categoryId = req.params.id;
  receitasDAO.findbyCategoryId(categoryId, (err, rows) => {
    if (err) {
      return res.json({ errorMessage: "Houve um erro ao consultar os dados", err });
    }
    if (!rows.length) {
      return res.json({ errorMessage: "Ainda não há receitas nessa categoria", err });
    }

    res.render("receitas", {
    title: "Receita",
    links: [
      { href: "/", label: "Home" },
      { href: "/receitas", label: "Receitas" },
      { href: "/categorias", label: "Categorias" },
    ],
    receitas: rows});
  })
};

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
          { href: "/categorias", label: "categorias"}
        ]});
  })};

exports.saveReceita = (req, res) => {
  const formData = new formidable.IncomingForm();
  formData.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json({
        errorMessage: "Algo errado aconteceu.",
        err: err
      });
    }
    
    const imagesPath = path.join(__dirname, "../public/images/fotos-receita", files.image.newFilename);

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
  })};

exports.editeReceita = (req, res) => {
  const id = req.params.id;
  const formData = new formidable.IncomingForm();
  
  receitasDAO.findById(id, (err, row)=> {
    if (err) {
      return res.status(500).json({
        errorMessage: "Houve um erro ao consultar uns dados.",
        err: err
      });
    }

    if (!row) {
      return res.status(500).json({
        errorMessage: "Produto não encontrado.",
        err: err
      });
    }

    formData.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(500).json({
          errorMessage: "Algo errado aconteceu.",
          err: err
        });
      }
      const imagesPath = path.join(__dirname, "../public/images/fotos-receita", files.image.newFilename);

      const receita = {...row, ...fields, image: files.image.newFilename};
      
      const convert1 = JSON.stringify(receita);
      const convert2 = JSON.parse(convert1)
      console.log(`Aqui receita do controller ${convert2}`)


    receitasDAO.editeReceita(id, receita, (err) => {
      if (err) {
        return res.status(500).json({
          errorMessage: "Houve um erro ao consultar uns dados.",
          err: err
        });
      }

      fs.renameSync(files.image.filepath, imagesPath);
      return res.redirect("/receitas");

    });

  })

})}

exports.getDeleteReceitaForm = (req, res) => {
  const id = req.params.id;
  receitasDAO.findById(id,(err, rows) => {
    if (err) {
      return res.json({ message: "Houve um erro ao consultar os dados", err });
    }
    res.render("delete_receita", {
      title: "Deletar receita",
      links: [
        { href: "/", label: "Home" },
        { href: "/receitas", label: "Receitas" },
        { href: "/categorias", label: "Categorias" },
      ],
      receita: rows,
    });
  });
};

exports.deleteReceita = (req, res) => {
  const formData = new formidable.IncomingForm();
  formData.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json({
        errorMessage: "Algo inesperado aconteceu.",
        err: err
      });
    }
    const id = parseInt(fields.id);
    console.log(id)

    receitasDAO.deleteReceita(id,(err) => {
      if (err) {
        return res.json({ message: "Houve um erro ao deletar a receita", err });
      }
      res.status(204).redirect('/receitas')
    });
  })
};