// Importa a biblioteca mysql2, que permite interagir com um banco de dados MySQL.
// A linha acima importa o módulo mysql2, que é uma biblioteca Node.js
// usada para se conectar e executar operações em um banco de dados MySQL.
// Essa biblioteca é uma evolução do mysql, com suporte a Promises e outros recursos modernos.
const mysql = require('mysql2');

// Cria uma conexão com o banco de dados MySQL usando as credenciais fornecidas.
// É criada uma conexão com o banco de dados MySQL.
// O método createConnection recebe um objeto de configuração com os seguintes parâmetros
const connection = mysql.createConnection({
    host: '127.0.0.1', // Endereço do servidor do banco de dados.
    user: 'root', // Nome de usuário do banco de dados.
    password: '', // Senha do banco de dados.
    database: 'vendas_trocas' // Nome do banco de dados que será utilizado.
});

// Estabelece a conexão com o banco de dados.
// A função connect() inicia a conexão com o banco de dados MySQL usando as credenciais fornecidas anteriormente.
// Se a conexão for bem-sucedida, o banco de dados estará pronto para receber consultas. Caso contrário, um erro será lançado.
connection.connect((err) => {
    if (err){
        console.error('Erro ao conectar ao MySQL: ', err);
    }else{
        console.log('Conectado ao MySQL!');
    }
});

// Exporta a conexão para ser usada em outros arquivos.
// No Node.js, module.exports é um objeto especial usado para exportar valores, funções, objetos ou classes de um módulo.
// Quando você importa um módulo em outro arquivo usando require, o valor de module.exports é o que será retornado.
module.exports = connection;