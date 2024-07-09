// Menus.tsx
import React from 'react';
import MenuList from './MenuList';
import { Menu } from './Menu';

const Menus: React.FC = () => {
  // Exemple de données de menus
  const menus: Menu[] = [
    {
      id: 1,
      name: 'Menu du Chef',
      status: 'Disponible',
      preparationTime: '30 minutes',
      elements: ['Entrée', 'Plat principal', 'Dessert'],
      images: [
        'https://st5.depositphotos.com/3300441/68632/i/450/depositphotos_686320106-stock-photo-two-bowls-chow-mein-mein.jpg',
        'https://st.depositphotos.com/1799455/4320/i/950/depositphotos_43200637-stock-photo-sushi-salmon-and-tuna-sushi.jpg',
        'https://st2.depositphotos.com/1027720/7836/i/950/depositphotos_78364128-stock-photo-japanese-sukiyaki-dish.jpg',
      ],
      price: 25,
    },
    {
      id: 2,
      name: 'Menu Végétarien',
      status: 'Épuisé',
      preparationTime: '25 minutes',
      elements: ['Entrée', 'Plat principal', 'Dessert'],
      images: [
        'https://st.depositphotos.com/1799455/4320/i/950/depositphotos_43200637-stock-photo-sushi-salmon-and-tuna-sushi.jpg',
        'https://st2.depositphotos.com/1027720/7836/i/950/depositphotos_78364128-stock-photo-japanese-sukiyaki-dish.jpg',
      ],
      price: 60,
    },
    // Ajoute d'autres menus si nécessaire
    {
        id: 3,
        name: 'Menu Végétarien',
        status: 'Épuisé',
        preparationTime: '25 minutes',
        elements: ['Entrée', 'Plat principal', 'Dessert'],
        images: [
          'https://st.depositphotos.com/1799455/4320/i/950/depositphotos_43200637-stock-photo-sushi-salmon-and-tuna-sushi.jpg',
          'https://st2.depositphotos.com/1027720/7836/i/950/depositphotos_78364128-stock-photo-japanese-sukiyaki-dish.jpg',
        ],
        price: 25,
      },
      {
        id: 4,
        name: 'Menu Végétarien',
        status: 'Épuisé',
        preparationTime: '25 minutes',
        elements: ['Entrée', 'Plat principal', 'Dessert'],
        images: [
          'https://st.depositphotos.com/1799455/4320/i/950/depositphotos_43200637-stock-photo-sushi-salmon-and-tuna-sushi.jpg',
          'https://st2.depositphotos.com/1027720/7836/i/950/depositphotos_78364128-stock-photo-japanese-sukiyaki-dish.jpg',
        ],
        price: 120,
      },
      {
        id: 5,
        name: 'Menu Végétarien',
        status: 'Épuisé',
        preparationTime: '25 minutes',
        elements: ['Entrée', 'Plat principal', 'Dessert'],
        images: [
          'https://st.depositphotos.com/1799455/4320/i/950/depositphotos_43200637-stock-photo-sushi-salmon-and-tuna-sushi.jpg',
          'https://st2.depositphotos.com/1027720/7836/i/950/depositphotos_78364128-stock-photo-japanese-sukiyaki-dish.jpg',
        ],
        price: 150,
      },
      {
        id: 6,
        name: 'Menu Végétarien',
        status: 'Épuisé',
        preparationTime: '25 minutes',
        elements: ['Entrée', 'Plat principal', 'Dessert'],
        images: [
          'https://st.depositphotos.com/1799455/4320/i/950/depositphotos_43200637-stock-photo-sushi-salmon-and-tuna-sushi.jpg',
          'https://st2.depositphotos.com/1027720/7836/i/950/depositphotos_78364128-stock-photo-japanese-sukiyaki-dish.jpg',
        ],
        price: 20,
      },
      {
        id: 7,
        name: 'Menu Végétarien',
        status: 'Épuisé',
        preparationTime: '25 minutes',
        elements: ['Entrée', 'Plat principal', 'Dessert'],
        images: [
          
          'https://st2.depositphotos.com/1027720/7836/i/950/depositphotos_78364128-stock-photo-japanese-sukiyaki-dish.jpg',
        ],
        price: 200,
      },
  ];

  return (
    <div className="menus-container">
      {/* <h1>Liste des menus</h1> */}
      <MenuList menus={menus} />
    </div>
  );
};

export default Menus;
