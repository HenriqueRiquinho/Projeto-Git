

//Importe de conexão com banco de dados.
const connection = require('./connection');

//Uma função assincrona para buscar os registro.
const getAllItems = async () => {
    try {



      //  Uma consulta sql para selcionar todos os registro
        const [query] = await connection.execute('SELECT * FROM teste_node.book');
        
       

        // O retorno da consulta

        return query;
    } catch (error) {


        // Manda uma mensagem de erro caso ocorra uma falha quando for buscar.
        throw new Error(Erro ao buscar itens: ${error.message});
    }
};



//Definindo uma assicrona para colocar um novo resgistro.


async function insertItem(title, author) {
    try {
       
        //Defeino uma consulta sql para colocar um registro.


        const insertQuery = "INSERT INTO book (title, author) VALUES (?, ?)";
        
     

        //Array contem valor que pode ser subtituidos

        const values = [title, author];

     
        // Executando uma consulta sql 


        const [result] = await connection.execute(insertQuery, values);
        
      

        //Retornando o resultado da operação


        return result;
    } catch (error) {


       

        //Laçando uma mensagem de erro


        throw new Error(Erro ao inserir item: ${error.message});
    }
}



//Definide uma função assicrona para atualizar o registro.

const updateItem = async (id, title, author) => {
    try {
      

        // Definindo uma consulta sql para atualizar o title e authuor


        const updateQuery = "UPDATE book SET title = ?, author = ? WHERE id = ?";

        


        // array contem valor que pode ser subtituidos


        const values = [title, author, id];

      

        //Excutando uma consulta sql


        const [result] = await connection.execute(updateQuery, values);
        
       

        //Retornando o resultado de operação 

        return result;
    } catch (error) {
     

        //Lançando uma mensagem de erro
        throw new Error(Erro ao atualizar item: ${error.message});
    }
};



//Definino uma função assincrona para excluir im registro
const deleteItem = async (id) => {
    try {
      

        //Definindo uma consulta sql para deletar um registro


        const deleteQuery = "DELETE FROM book WHERE id = ?";

     
        //Array tem um valor ide que sera subustituido 
        const values = [id];

       


        //Excutando uma consulta sql delelada 

        const [result] = await connection.execute(deleteQuery, values);
        
      

        //Retornando uma consulta que geralmente incui o número de deletadas
        return result;
    } catch (error) {
     

        //Lançar uma mensagem de erro
        throw new Error(Erro ao excluir item: ${error.message});
    }
};




//Exporta as funções, perminando que seja usado em outros códigos


module.exports = { getAllItems, insertItem, updateItem, deleteItem };