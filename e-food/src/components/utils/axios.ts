import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8085/e-food/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar','Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmaWZpIiwiaWF0IjoxNzIwMTk5ODUwLCJleHAiOjE3MjAyMDM0NTB9.kmMkLahdhgj4cgDNkWka8sFSzCqASwKbqZp99wCajQk'}
  });



  export default instance;