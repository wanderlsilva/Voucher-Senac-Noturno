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

//CRUD USUARIO
app.get('/usuarios', (req, res) => {
    db.query('SELECT * FROM usuarios', (erro, results) => {
        if (erro) throw erro;
        res.json(results);
    });
});

app.post('/usuarios', (req, res) => {
    const {nome, email} = req.body;
    db.query('INSERT INTO usuarios (nome, email) VALUES (?,?)', [nome, email], (erro, result) => {
        if(erro) throw erro;
        res.json({id_usuarios: result.insertId, nome, email});
    });
});

app.put('/usuarios/:id_usuario', (req, res) => {
    const { id_usuario } = req.params;
    const { nome, email } = req.body;
    db.query('UPDATE usuarios SET nome = ?, email = ? WHERE id_usuario = ?', [nome, email, id_usuario], (erro) => {
        if (erro) throw erro;
        res.json({ message: 'Usuário atualizado com sucesso.' });
    });
});

app.delete('/usuarios/:id_usuario', (req, res) => {
     const { id_usuario } = req.params;
    db.query('DELETE FROM usuarios WHERE id_usuario = ?', [id_usuario], (erro) => {
        if (erro) throw erro;
        res.json({ message: 'Usuário deletado com sucesso.' });
    });
});

//POST CRUD

db.connect((erro) =>{
    if (erro){
        console.error('Erro ao conectar ao banco de dados:', erro);
        return;
    }
    console.log('Conectado ao banco de dados.')
});

app.listen(3000, () => console.log('Servidor na porta 3000'));