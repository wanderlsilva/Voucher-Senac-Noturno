const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'vendas_trocas'
});

connection.connect((err) => {
    if (err){
        console.error('Erro ao conectar ao MySQL: ', err);
    }else{
        console.log('Conectado ao MySQL!');
    }
});

module.exports = connection;