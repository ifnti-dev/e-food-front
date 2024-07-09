import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8085/e-food/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar','Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmaWZpIiwiaWF0IjoxNzIwNTE4Mzg3LCJleHAiOjE3MjA1MjE5ODd9.pPtaF_YGXRlStgE12SdcKVlM2wNlU3E00QNqZSk6Fbw"'}
  });



  export default instance;