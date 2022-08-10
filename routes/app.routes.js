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
    
    app.get("/edicao_receita/:id", (req, res) => receitasController.getEdtReceitasForm(req, res));
    app.post("/receita_editada/:id", (req, res) => receitasController.editeReceita(req,res));

    app.get("/delete_receita/:id", (req, res) => receitasController.getDeleteReceitaForm(req, res))
    app.delete("/receita_excluida", (req, res) => receitasController.deleteReceita(req,res));

}

  