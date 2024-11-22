


//Importe do modulo que que interagir com bando de dados 


const mysql = require('mysql2/promise');


//Criando um conexão com banco de dado

const connection = mysql.createPool({
    host: 'localhost',
    
    //  O endereço do servidor onde o banco de dados esta


    port: 3306,   
    
    // Definindo uma porta na qual o servidor MySQL  


    user: 'root',  
    
    
    // Nome de usuário para se conectar ao banco de dados.


    password: 'root', 
    
    //Senha para o usuario especificado
    
   

    database: 'teste_node',
    
    
    
    // Nome do banco de dados que será acessado. 
});



//Exportando para que posa ser usado
module.exports = connection;
