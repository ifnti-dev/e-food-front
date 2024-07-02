import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8085/e-food/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar','Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmaWZpIiwiaWF0IjoxNzE5OTM3NzUzLCJleHAiOjE3MTk5MzgxMTN9.ik8S9N1zBicwnOHYXnS31y-yw-dyZdjbSAf9NaJhxXs'}
  });



  export default instance;