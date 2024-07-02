import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8085/e-food/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar','Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmaWZpIiwiaWF0IjoxNzE5OTA3NTYzLCJleHAiOjE3MTk5MDc5MjN9.c4eyZbuG3ERx9PmJdykz0mHHcAEWykDrOKka3kQ_2kc'}
  });



  export default instance;