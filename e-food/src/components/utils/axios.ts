import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8085/e-food/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar','Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmaWZpIiwiaWF0IjoxNzE5OTM4NjYzLCJleHAiOjE3MTk5MzkwMjN9.-n62rgDwjD_wsPXE2qN0Y-mtHA5opgd5J2TUaylkDuI'}
  });



  export default instance;