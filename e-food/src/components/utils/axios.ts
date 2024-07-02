import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8085/e-food/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar','Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmaWZpIiwiaWF0IjoxNzE5OTM5MzU5LCJleHAiOjE3MTk5Mzk3MTl9.CFwOw5VHML59uXut55vAYZ-fIobCksnqASsFn4MH0DI'}
  });



  export default instance;