const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./database');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/usuarios', require('./routes/usuarios'));
app.use('/produtos', require('./routes/produtos'));
app.use('/anuncios', require('./routes/anuncios'));
app.use('/mensagens', require('./routes/mensagens'));
app.use('/transacoes', require('./routes/transacoes'));

app.listen(PORT, () => {
    console.log('Servidor rodando na porta', [PORT]);
});