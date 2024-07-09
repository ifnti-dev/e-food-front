import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8085/e-food/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar','Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmaWZpIiwiaWF0IjoxNzIwNTI4MTAwLCJleHAiOjE3MjA1MzE3MDB9.4Q3HVNg07N2Drl1ATh9fpP-yrjzClPcLiQ2L17mkY3E"'}
  });



  export default instance;