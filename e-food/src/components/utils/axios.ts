import axios from "axios";


const getConfig = (): string => {
  const token = localStorage.getItem('token');
  if (!token) {
    return "null";
  }
  return  token
      
};

const token = getConfig();

const instance = axios.create({
    baseURL: 'http://localhost:8085/e-food/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar','Authorization':`Bearer ${token}`}
  });



  export default instance;