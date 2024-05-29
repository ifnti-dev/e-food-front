import axios from 'axios';

const API_URL = 'http://localhost:8085/e-food/auth';

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

const register = (registerUserDto: RegisterUserDto) => {
  return axios.post(`${API_URL}/signup`, registerUserDto);
};

const login = (loginUserDto: LoginUserDto) => {
  return axios.post<LoginResponse>(`${API_URL}/login`, loginUserDto);
};

export default {
  register,
  login
};
