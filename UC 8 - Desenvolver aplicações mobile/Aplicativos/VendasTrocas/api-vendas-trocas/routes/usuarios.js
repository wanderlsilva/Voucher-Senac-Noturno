const express = require('express');
const router = express.Router();
const connection = require('../database');

router.post('/', (req, res) => {
    const { nome, email, senha, telefone, localizacao, foto_perfil } = req.body;
    const query = 
    'INSERT INTO usuarios (nome, email, senha, telefone, localizacao, foto_perfil) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(query, [nome, email, senha, telefone, localizacao, foto_perfil], (err, results) => {
        if (err) return res.status(500).json({error: err.message });
        res.status(201).json({ id: results.insertId});
    });
});

module.exports = router;