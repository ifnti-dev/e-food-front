import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8085/e-food/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar','Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmaWZpIiwiaWF0IjoxNzIwMTc1OTA1LCJleHAiOjE3MjAxNzk1MDV9.t0gf7-0jxNTGTGouctnx97DfmuJTaeJ0waYANbuZqZo'}
  });



  export default instance;