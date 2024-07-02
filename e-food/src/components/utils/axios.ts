import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8085/e-food/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar','Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmaWZpIiwiaWF0IjoxNzE5OTMwMzY0LCJleHAiOjE3MTk5MzA3MjR9.73NEn4AIEKOu-cjLZtJJmVBOmFf5N70NhEfLTLgoWBo'}
  });



  export default instance;