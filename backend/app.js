const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('./models/home');
const Home = mongoose.model('Home');

mongoose.connect('mongodb://localhost/next', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Conexão com MongoDB realizado com sucesso!")
}).catch((erro)=>{
    console.log("Erro: Conexão com MongoDB não realizado com sucesso!" + erro);
});

app.get('/home', (req, res) => {
    return res.json({
        error: false,
        mensage: "Informações da página Home"
    })
})

app.post("/home", (req, res) => {
    Home.create(req.body, (err) =>{
        if(err) return res.status(400).json({
            error: true,
            message:"Erro: Conteúdo da página home não cadastrado com sucesso",
        })
    })
    return res.json({
        error: false,
        message:"Conteúdo da página home cadastrado com sucesso",
    })
});

app.listen(8080,() => {
    console.log('Servidor iniciado na porta 8080: http://localhost:8080')
})
