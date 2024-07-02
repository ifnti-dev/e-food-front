import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8085/e-food/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar','Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmaWZpIiwiaWF0IjoxNzE5OTM1MTk0LCJleHAiOjE3MTk5MzU1NTR9.9fOgTfhs8c3Z0qna2ulTo80FzqReW4DFoqQejC-2fJA'}
  });



  export default instance;