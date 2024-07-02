// src/services/api.ts
import axios, { AxiosRequestConfig } from 'axios';
import Restaurant from '../models/Restaurant';

const API_URL = 'http://localhost:8085/e-food/restaurants';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAllRestaurants = async (): Promise<Restaurant[]> => {
  try {

    const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token non trouvé dans le localStorage.');
  }

  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

    const response = await api.get('/ListeRestaurant',config);
    return response.data;
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    throw error;
  }
};

export const createRestaurant = async (formData: FormData) => {
  try {

    const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token non trouvé dans le localStorage.');
  }

  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };
    const response = await api.post('/SaveRestaurant', formData, config);

    return response.data;

  } catch (error) {
    console.error('Error creating restaurant:', error);
    throw error;
  }
};

export const updateRestaurant = async (code: number, restaurantData: Restaurant): Promise<void> => {
  try {

    const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token non trouvé dans le localStorage.');
  }

  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

    await api.put(`/updateRestaurant/${code}`, restaurantData,config);
  } catch (error) {
    console.error('Error updating restaurant:', error);
    throw error;
  }
};

export const deleteRestaurant = async (code: number): Promise<void> => {
  try {

    const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token non trouvé dans le localStorage.');
  }

  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

    await api.delete(`/deleteRestaurant/${code}`,config);
  } catch (error) {
    console.error('Error deleting restaurant:', error);
    throw error;
  }
};

export const getRestaurantById = async (code: number): Promise<Restaurant> => {
  try {

    const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token non trouvé dans le localStorage.');
  }

  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };
  
    const response = await api.get(`/getRestaurantById/${code}`,config);
    return response.data;
  } catch (error) {
    console.error('Error fetching restaurant by id:', error);
    throw error;
  }
};
