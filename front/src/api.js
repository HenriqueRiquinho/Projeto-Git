import axios from 'axios' 
//importando a biblioteca Axios, para realizar requisições HTTP





const api = axios.create({
    baseURL: 'http://localhost:3003/'
})



const api = axios.create({
    baseURL: 'http://localhost:3003/'
})


//criando instancia do axios com configuração padrão, Defindo a URL para todos as requisições.






//Exporta api padrão
export default api;