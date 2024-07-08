import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8085/e-food/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar','Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmaWZpIiwiaWF0IjoxNzIwNDM3NzA2LCJleHAiOjE3MjA0NDEzMDZ9.b5n_dHEXQvOUqIuXjvq2U-P2yipXAD8ioaOiameG6Z0'}
  });



  export default instance;