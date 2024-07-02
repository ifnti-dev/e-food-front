import axios from "axios";

const un_axios = axios.create({
    baseURL: 'http://localhost:8085/e-food/api/v1/publicites',
    timeout: 3000,
    headers: {'X-Custom-Header': 'foobar'}
  });



  export default un_axios;