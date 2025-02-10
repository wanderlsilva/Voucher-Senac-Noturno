// Importando o axios, que é um cliente HTTP usado para fazer chamadas à API.
// O axios facilita requisições GET, POST, PUT, DELETE, entre outras.
import axios from 'axios';

//axios.create({ ... }): Cria uma instância personalizada do axios.
// baseURL: 'http://localhost:3000': Define a URL base para todas as requisições feitas com essa instância.
// Se a API está rodando localmente, essa URL aponta para o servidor backend na porta 3000.
// Em um ambiente de produção, essa URL precisa ser alterada para o domínio real da API.
const api = axios.create({
    baseURL: "http://10.0.2.2:3000",
});

// Aqui estamos exportando a instância api, permitindo que ela seja importada e usada em outros arquivos do projeto.
export default api;