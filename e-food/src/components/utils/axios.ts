import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8085/e-food/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar','Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmaWZpIiwiaWF0IjoxNzIwNDU1MjYzLCJleHAiOjE3MjA0NTg4NjN9.78Dw4yljSVuiEzTdhfx8n01x1FY89AVn8femhZY85d0'}
  });



  export default instance;