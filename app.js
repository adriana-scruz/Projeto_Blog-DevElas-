const express = require('express');
const app = express();
const bodyParser= require('body-parser')
const port = 3000;

const fs = require('fs')

function novaReceita(receita){
    let rawdata = fs.readFileSync('./receitas.json');
    //parsing o arquivo JSON em um objeto JS
    let colecaoReceitas = JSON.parse(rawdata);
    colecaoReceitas.push(receita)
    let data = JSON.stringify(colecaoReceitas);
    fs.writeFileSync('./receitas.json', data);
    return colecaoReceitas
}

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/novoPost', (req, res) => {
    console.log('Post funciona!');
    const colecaoReceitas = novaReceita(req.body);
    res.send(colecaoReceitas)
    //res.send(req.body)
  })

app.listen(port, function() {
    console.log('listening on 3000')
  })