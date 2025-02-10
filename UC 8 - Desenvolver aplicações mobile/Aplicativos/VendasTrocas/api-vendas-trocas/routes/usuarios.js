// Importa o framework Express para criar o roteador.
// A função require importa o módulo express, que é usado para criar o roteador e definir as rotas.
const express = require('express');

// Cria uma instância do roteador do Express.
// O método express.Router() cria um novo roteador. Ele permite definir rotas específicas e depois associá-las à aplicação principal.
const router = express.Router();

// Importa a conexão com o banco de dados MySQL configurada no arquivo database.js.
// Importa a conexão com o banco de dados MySQL que foi configurada e exportada no arquivo database.js.
// Isso permite que o roteador acesse o banco de dados para realizar operações como consultas e inserções.
const connection = require('../database');

// Rota para cadastrar um novo usuário (POST /usuarios)
// Define uma rota POST para cadastrar um novo usuário:
// router.post('/', ...): Define uma rota POST para o caminho /usuarios. Quando uma requisição POST é feita para /usuarios, essa função é executada.
// req.body: Obtém os dados enviados no corpo da requisição (por exemplo, via formulário ou JSON).
// const { nome, email, senha, telefone, localizacao, foto_perfil } = req.body;: Desestrutura os dados do corpo da requisição em variáveis individuais.
// const query = ...: Define a consulta SQL para inserir um novo usuário na tabela usuarios.
// connection.query(query, [...], (err, results) => { ... }): Executa a consulta SQL no banco de dados. Os valores das variáveis são passados como parâmetros para evitar SQL injection.
// if (err) return res.status(500).json({ error: err.message });: Se ocorrer um erro, retorna uma resposta com status 500 (Internal Server Error) e uma mensagem de erro.
// res.status(201).json({ id: results.insertId });: Se a inserção for bem-sucedida, retorna uma resposta com status 201 (Created) e o ID do usuário cadastrado.
router.post('/', (req, res) => {
    const { nome, email, senha, telefone, localizacao, foto_perfil } = req.body;
    const query = 
    'INSERT INTO usuarios (nome, email, senha, telefone, localizacao, foto_perfil) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(query, [nome, email, senha, telefone, localizacao, foto_perfil], (err, results) => {
        if (err) return res.status(500).json({error: err.message });
        res.status(201).json({ id: results.insertId});
    });
});

// Rota para autenticação de usuário
app.post("/login", (req, res) => {
    const { email, senha } = req.body;
    const sql = "SELECT * FROM usuarios WHERE email = ? AND senha = ?";
    db.query(sql, [email, senha], (err, results) => {
        if (err) return res.status(500).json({ error: "Erro no servidor" });

        if (results.length > 0) {
            res.json({ success: true, message: "Login realizado!", user: results[0] });
        } else {
            res.status(401).json({ success: false, message: "Email ou senha inválidos" });
        }
    });
});

// Rota para listar todos os usuários (GET /usuarios)
// Define uma rota GET para listar todos os usuários:
// router.get('/', ...): Define uma rota GET para o caminho /usuarios. Quando uma requisição GET é feita para /usuarios, essa função é executada.
// connection.query('SELECT * FROM usuarios', ...): Executa uma consulta SQL para selecionar todos os registros da tabela usuarios.
// if (err) return res.status(500).json({ error: err.message });: Se ocorrer um erro, retorna uma resposta com status 500 (Internal Server Error) e uma mensagem de erro.
// res.json(results);: Se a consulta for bem-sucedida, retorna os resultados no formato JSON.
router.get('/', (req, res) => {
    connection.query('SELECT * FROM usuarios', (err, results) => {
        if(err) return res.status(500).json({ error: err.message});
        res.json(results);
    });
});

// Exporta o roteador para ser usado em outros arquivos.
// Exporta o roteador para que ele possa ser importado e utilizado em outros arquivos, como no arquivo principal da aplicação (index.js).
module.exports = router;