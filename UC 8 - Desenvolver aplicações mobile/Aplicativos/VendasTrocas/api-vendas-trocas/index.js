// Importa o framework Express para criar o servidor.
// A função require importa o módulo express, que é um framework popular para criar servidores web em Node.js.
// Ele facilita a criação de rotas, middlewares e o gerenciamento de requisições e respostas HTTP.
const express = require('express');

// Importa o body-parser, um middleware para processar dados enviados no corpo das requisições.
// O body-parser é um middleware que processa o corpo das requisições HTTP (por exemplo, dados enviados via POST ou PUT)
// e os transforma em um formato acessível no código (como JSON).
const bodyParser = require('body-parser');

// Importa o CORS, um middleware para permitir requisições de diferentes origens (domínios).
// O cors (Cross-Origin Resource Sharing) é um middleware que permite que o servidor aceite requisições de diferentes origens (domínios).
//  Isso é útil quando o frontend e o backend estão em servidores diferentes.
const cors = require('cors');

// Importa a conexão com o banco de dados MySQL configurada no arquivo database.js.
// Importa a conexão com o banco de dados MySQL que foi configurada e exportada no arquivo database.js.
// Isso permite que o servidor acesse o banco de dados para realizar operações como consultas e inserções.
const connection = require('./database');

// Cria uma instância do Express.
// Inicializa uma instância do Express, que será usada para configurar o servidor, definir rotas e middlewares.
const app = express();

// Define a porta em que o servidor vai rodar.
// Define a porta 3000 como o endereço em que o servidor estará disponível. Você pode acessar o servidor em http://localhost:3000.
const PORT = 3000;

// Middlewares
// Configura os middlewares globais para o servidor:
//cors(): Permite que o servidor aceite requisições de diferentes origens.
//bodyParser.json(): Habilita o servidor a processar corpos de requisições no formato JSON.
app.use(cors());
app.use(bodyParser.json());

// Rotas
// app.use('/usuarios', ...): Todas as requisições que começam com /usuarios serão direcionadas para o arquivo routes/usuarios.js.
// O mesmo acontece para /produtos, /anuncios, /mensagens e /transacoes.
// Cada arquivo de rota (por exemplo, usuarios.js) contém a lógica para lidar com requisições específicas (GET, POST, PUT, DELETE).
app.use('/usuarios', require('./routes/usuarios'));
app.use('/produtos', require('./routes/produtos'));
app.use('/anuncios', require('./routes/anuncios'));
app.use('/mensagens', require('./routes/mensagens'));
app.use('/transacoes', require('./routes/transacoes'));

// Iniciar servidor
// Inicia o servidor na porta definida (3000). Quando o servidor estiver rodando,
// a mensagem Servidor rodando na porta 3000 será exibida no console.
app.listen(3000, '0.0.0.0', () => {
    console.log('Servidor rodando em http://0.0.0.0:3000');
});