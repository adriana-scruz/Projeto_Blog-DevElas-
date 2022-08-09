const receitasController = require("../controller/receitas.controller");
//const categoriesController = require("./controller/categories.controller");

module.exports = (app) => {
    app.get("/", (req, res) => {
        res.render("index", {
          title: "Página inicial",
          links: [
            { href: "/", label: "Home"},
            { href: "/receitas", label: "Receitas"},
            { href: "/destaques", label: "Destaques"}
          ]
        });
      });
      
    app.get("/receita-individual/:id", (req,res) => {receitasController.getReceitaById(req,res)});
    
    app.get("/receitas",(req,res) => {receitasController.getReceitas(req,res)});
  
    app.get("/adicao_receita", (req, res) => receitasController.getAddReceitasForm(req, res));
    app.post("/save_receita", (req, res) => receitasController.saveReceita(req, res));
  

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

  /*
    app.get("/adicao_receita", (req, res) => {
      res.render("adicao_receita", {
        title: "Adicionar receita",
        links: [
          { href: "/", label: "Home"},
          { href: "/receitas", label: "Receitas"},
          { href: "/destaques", label: "Destaques"}
        ]
      });
    });
    */


}

  