const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'blog'
});

db.connect((erro) =>{
    if (erro){
        console.error('Erro ao conectar ao banco de dados:', erro);
        return;
    }
    console.log('Conectado ao banco de dados.')
});

app.listen(3000, () => console.log('Servidor na porta 3000'));