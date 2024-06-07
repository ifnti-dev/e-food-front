import axios, { AxiosRequestConfig } from 'axios';

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
  // Récupérer le token du localStorage
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('Token non trouvé dans le localStorage.');
  }

  // Configuration de la requête avec le token dans les headers
  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${token}`, // Ajoute le token dans le header Authorization
    }
  };

  try {
    const response = await axios.get(`${API_URL}/users`, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default { getUsers };
