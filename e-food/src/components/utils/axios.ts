import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8085/e-food/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar','Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmaWZpIiwiaWF0IjoxNzIwMDk1OTQzLCJleHAiOjE3MjAwOTk1NDN9.0fTI9aj5_vx1hn1CFTwlIRa2k6Z82JrG5fSU6bBnnYs'}
  });



  export default instance;