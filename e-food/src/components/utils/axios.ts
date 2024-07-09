import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8085/e-food/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar','Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmaWZpIiwiaWF0IjoxNzIwNTE0NzM3LCJleHAiOjE3MjA1MTgzMzd9.7Na7ViVxMIoU1IlQHfljgBwcEOAWQQjW_liJC7ZqacI'}
  });



  export default instance;