import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8085/e-food/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar','Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmaWZpIiwiaWF0IjoxNzE5OTE3NDAwLCJleHAiOjE3MTk5MTc3NjB9.eiFAak3WsB9B1jVrEPOEpuH8VvYzphWHcaGw8OI_NVo'}
  });



  export default instance;