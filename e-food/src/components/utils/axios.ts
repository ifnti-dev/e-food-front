import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8085/e-food/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar','Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmaWZpIiwiaWF0IjoxNzIwMTgzOTM1LCJleHAiOjE3MjAxODc1MzV9.iCwBuPn1PEXqFEdVuioKy2L5iELek_qn-8RKcED2dSU'}
  });



  export default instance;