// src/services/UserService.ts
import axios from 'axios';

export interface User {
  id: number;
  nom: string;
  prenom: string;
  username: string;
  telephone: string;
  email: string;
  ville: string;
  adresse: string;
  createdAt: string;
  updatedAt: string;
}

const API_URL = 'http://localhost:8085/e-food';

const getUsers = async (): Promise<User[]> => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

export default { getUsers };
