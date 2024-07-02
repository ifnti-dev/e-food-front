import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8085/e-food/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar','Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmaWZpIiwiaWF0IjoxNzE5OTIzMjY3LCJleHAiOjE3MTk5MjM2Mjd9.WjoHqdYosJ2CHwCrQpj3xus1SFLx2CSxHNNb7q8Q3JE'}
  });



  export default instance;