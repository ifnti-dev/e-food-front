import axios, { AxiosRequestConfig } from 'axios';

export interface Role {
  id: number;
  libelle: string;
}

export interface User {
  id: number;
  nom: string;
  prenom: string;
  username: string;
  password: string;
  telephone: string;
  email: string;
  ville: string;
  adresse: string;
  createdAt: string;
  updatedAt: string;
  role_id: number;
}


const API_URL = 'http://localhost:8085/e-food';




const getRoleById = async (role_id: number, config: AxiosRequestConfig): Promise<Role> => {
  try {
    const response = await axios.get(`${API_URL}/roles/${role_id}`, config);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch role with ID ${role_id}`);
  }
};


const getRoles = async (): Promise<Role[]> => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token non trouvé dans le localStorage.');
  }

  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.get(`${API_URL}/roles`, config);
    return response.data as Role[];
  } catch (error) {
    throw error;
  }
};




const getUsers = async (): Promise<User[]> => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token non trouvé dans le localStorage.');
  }

  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  const response = await axios.get(`${API_URL}/users`, config);
    const users = response.data as User[];
    console.log(response.data);

    // Fetch roles for each user
    // const usersWithRoles = await Promise.all(users.map(async user => {
    //   const role = await getRoleById(user.role_id, config);
      
      
    //   console.log(role);
    // }));

  try {
    const response = await axios.get(`${API_URL}/users`, config);
    const users = response.data as User[];

    // Fetch roles for each user
    // const usersWithRoles = await Promise.all(users.map(async user => {
    //   const role = await getRoleById(user.role_id, config);
      
      
    //   return { ...user, role };
    // }));

    return users;
  } catch (error) {
    throw error;
  }
};


const addUser = async (user: User): Promise<User> => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token non trouvé dans le localStorage.');
  }

  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  try {
    const response = await axios.post(`${API_URL}/auth/signup`, user, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id: number, user: Partial<User>): Promise<User> => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token non trouvé dans le localStorage.');
  }

  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  try {
    const response = await axios.put(`${API_URL}/users/${id}`, user, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id: number): Promise<void> => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token non trouvé dans le localStorage.');
  }

  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  try {
    await axios.delete(`${API_URL}/users/${id}`, config);
  } catch (error) {
    throw error;
  }
};

export default { getUsers, addUser, updateUser, deleteUser,getRoleById,getRoles};
