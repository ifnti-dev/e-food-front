import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8085/e-food/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar','Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmaWZpIiwiaWF0IjoxNzE5OTE2NTQxLCJleHAiOjE3MTk5MTY5MDF9.6sTgNSC-hGzPCln-0f83YYR-NSL123_68MT5hepwRBI'}
  });



  export default instance;