import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Données statiques des restaurants
const restaurantData = [
  {
    code: "R1",
    nom: "Le Gourmet",
    ville: "Paris",
    telephone: "01 23 45 67 89",
    coordonnee_gps_x: 48.8566,
    coordonnee_gps_y: 2.3522,
  },
  {
    code: "R2",
    nom: "Chez Pierre",
    ville: "Lyon",
    telephone: "04 56 78 90 12",
    coordonnee_gps_x: 45.7640,
    coordonnee_gps_y: 4.8357,
  },
  {
    code: "R3",
    nom: "La Bonne Table",
    ville: "Marseille",
    telephone: "04 91 01 02 03",
    coordonnee_gps_x: 43.2965,
    coordonnee_gps_y: 5.3698,
  },
];

// Correction du problème avec les icônes par défaut de Leaflet
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

class RestaurantMap extends Component {
  state = {
    restaurants: restaurantData,
  };

  render() {
    const { restaurants } = this.state;

    return (
      <div>
        
        <MapContainer center={[48.8566, 2.3522]} zoom={5} style={{ height: "400px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {restaurants.map(restaurant => (
            <Marker key={restaurant.code} position={[restaurant.coordonnee_gps_x, restaurant.coordonnee_gps_y]}>
              <Popup>
                <strong>{restaurant.nom}</strong><br />
                {restaurant.ville}<br />
                {restaurant.telephone}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    );
  }
}

export default RestaurantMap;
