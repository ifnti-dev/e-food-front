import axios from 'axios';

const API_URL = 'http://localhost:8085/e-food';

interface RegisterUserDto {
  username: string;
  password: string;
  email: string;
}

interface LoginUserDto {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
  expiresIn: number;

}

interface RoleResponse {
  id: number;
  libelle: string;
}

const register = (registerUserDto: RegisterUserDto) => {
  return axios.post(`${API_URL}/auth/signup`, registerUserDto);
};

const login = (loginUserDto: LoginUserDto) => {
  return axios.post<LoginResponse>(`${API_URL}/auth/login`, loginUserDto);
};

const getRole =()=>{
  return axios.get<RoleResponse[]>(`${API_URL}/roles`);
}

export default {
  register,
  login,
  getRole
};
