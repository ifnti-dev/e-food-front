import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8085/e-food/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar','Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmaWZpIiwiaWF0IjoxNzIwMDg2MjEyLCJleHAiOjE3MjAwODk4MTJ9.JdQC0ziOaksmlZN4myaIZmwLoY5xQHsihlk8BU1Nemo'}
  });



  export default instance;