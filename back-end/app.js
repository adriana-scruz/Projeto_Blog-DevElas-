const express = require('express');
const app = express();
const path = require('path');
const bodyParser= require('body-parser');
const sqlite3 = require('sqlite3');
const port = 4000;

const fs = require('fs')

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const db = new sqlite3.Database('receitas.db');

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/',(req,res) =>{
  res.redirect('/index');
});

//Inicio copia:

// Altera todo o objeto
/*
app.put("/alunas/:id", (req, res) => {
  const idParam = req.params.id;

  const { name, email, senha, idade, username, id } = req.body;

  if (!name || !email || !senha || !idade || !username) {
      return res.status(402).json({ errormessage: "Alguns campos obrigatórios não foram enviados." });
  }


  db.get(
      `SELECT * FROM alunas WHERE id = ?`,
      idParam,
      (err,row) => {
          if(err){
              return res.status(500).json({errorMessage: 'Houve um erro na consulta'});
          }
          
          if(!row){
              return res.status(404).json({errorMessage: 'Essa aluna não existe'});
          }
          else{
              db.run(
                  `UPDATE alunas SET name = ?, email = ?, senha = ?, idade = ?, username = ?
                  WHERE id = ?`,
                  [name,email,senha,idade,username,idParam],
                  (err) =>{
                      if(err){
                          return res.status(500).json('Erro na atualização da aluna')
                      }
                      return res.status(204).send()
                  }
              )
          }
      }
      
  )
});
  
// Altera apenas as informaçoes passadas
app.patch("/alunas/:id", (req, res) => {
  const idParam = req.params.id;

  db.get(
    `SELECT * FROM alunas WHERE id = ?`, idParam, (err, row) => {
      if(err){
        return res.status(500).json({errorMessage: "Houve um erro ao consultar o dado."});
      }

      if (!row) {
        return res.status(404).json({ errormessage: "Aluna não encontrada." });
      }

      const userToUpdate = { ...row, ...req.body };
      const { name, email, senha, idade, username } = userToUpdate;

      db.run(
        `UPDATE alunas SET name = ?, email = ?, senha = ?, idade = ?, username = ?
         WHERE id = ?`,
        [ name, email, senha, idade, username, idParam ],
        (err2) => {
          if(err2){
            return res.status(500).json({errorMessage: "Houve um erro ao consultar o dado."});
          }
    
          return res.status(204).send()
        }
      );
    }
  )
});

*/
//Fim copia

/* Forma antiga com html
app.get('/adicao_receita', (req,res) =>{
    res.sendFile(__dirname + '/index.html');
})*/

app.get("/index", (req, res) => {
  res.render("index", {
    title: "Página inicial",
    links: [
      { href: "/index", label: "Home"},
      { href: "/receitas", label: "Receitas"},
      { href: "/destaques", label: "Destaques"}
    ]
  });
});

//Lista todas as receitas salvas em uma categoria
app.get('/receitas/:categoria',(req,res) =>{
  const categoria = req.params.categoria;
  db.all(
      `SELECT * FROM receitas WHERE categoria= ?`, categoria,
       (err,rows) => {
          if(err){
              return res.json({errorMessage: "Houve um erro ao consultar os dados.",
          err:err});
          }
          return res.json(rows)   
      }
  )
});

app.get("/adicao_receita", (req, res) => {
  res.render("adicao_receita", {
    title: "Adicionar receita",
    links: [
      { href: "/index", label: "Home"},
      { href: "/receitas", label: "Receitas"},
      { href: "/destaques", label: "Destaques"}
    ]
  });
});

app.post('/novoPost', (req, res) => {
    if (!req.body || !Object.keys(req.body).length) {
      return res.status(404).json({ errormessage: "Receita não enviada no corpo da requisição." });
    }
  
    const {autor,receita,categoria} = req.body;
  
    db.run(
        `INSERT INTO receitas (autor,receita,categoria)
        VALUES(?,?,?)`,
        [autor,receita,categoria],
        (err) => {
            if(err){
                return res.status(500).json({errorMessage:"Erro ao submeter receita.",
            err:err})
            }
            return res.status(201).json({errorMessage: "Receita adicionada com sucesso"})
        }
        )
  })

// Exclui uma aluna através do id - /alunos/3fa48176-e014-11ec-9d64-0242ac120004
app.delete('/del/:id', (req, res) => {
  const idParam = req.params.id;

  db.get(
    `SELECT * FROM receitas WHERE id = ?`, idParam, (err, row) => {
      if(err){
        return res.status(500).json({errorMessage: "Houve um erro ao consultar o dado."});
      }

      if (!row) {
        return res.status(404).json({ errormessage: "Receita não encontrada." });
      }

      db.run(
          `DELETE FROM receitas WHERE id=?;`,
        idParam,
        (err2) => {
          if(err2){
            return res.status(500).json({errorMessage: "Houve um erro ao deletar o dado."});
          }
    
          return res.status(204).send('Exclusão concluída com sucesso!')
        }
      );
    }
  )

});

app.listen(port, function() {
    console.log('listening on 4000')
  })