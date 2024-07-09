import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { createRestaurant, deleteRestaurant, getAllRestaurants, getRestaurantById, updateRestaurant } from "../../services/RestaurantService";
import Restaurant from "../../models/Restaurant";
import "./Restaurant.css";

const RestaurantUI: React.FC = () =>{
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [newRestaurant, setNewRestaurant] = useState<Restaurant>({
    code: 0,
    nom: '',
    ville: '',
    adresse: '',
    telephone: '',
    heure_ouverture: '',
    heure_fermeture: '',
    jour_ouverture: [],
    etat: '',
    coordonnee_gps_x: 0,
    coordonnee_gps_y: 0,
  });

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const fetchedRestaurants = await getAllRestaurants();
      setRestaurants(fetchedRestaurants);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewRestaurant({
      ...newRestaurant,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
        formData.append('restaurant', JSON.stringify(newRestaurant));
      await createRestaurant(newRestaurant);
      setNewRestaurant({
        code: 0,
        nom: '',
        ville: '',
        adresse: '',
        telephone: '',
        heure_ouverture: '',
        heure_fermeture: '',
        jour_ouverture: [],
        etat: '',
        coordonnee_gps_x: 0,
        coordonnee_gps_y: 0,
      }); // Clear form
      fetchRestaurants(); // Refresh restaurant list
    } catch (error) {
      console.error('Error creating restaurant:', error);
    }
  };

  const handleUpdate = async (code: number) => {
    try {
      // Fetch restaurant by id
      const restaurantToUpdate = await getRestaurantById(code);
      // Update the fields
      setNewRestaurant(restaurantToUpdate);
      // Make API call to update
      await updateRestaurant(code, newRestaurant);
      // Clear the form
      setNewRestaurant({
        code: 0,
        nom: '',
        ville: '',
        adresse: '',
        telephone: '',
        heure_ouverture: '',
        heure_fermeture: '',
        jour_ouverture: [],
        etat: '',
        coordonnee_gps_x: 0,
        coordonnee_gps_y: 0,
      });
      // Refresh the list
      fetchRestaurants();
    } catch (error) {
      console.error('Error updating restaurant:', error);
    }
  };

  const handleDelete = async (code: number) => {
    try {
      await deleteRestaurant(code);
      fetchRestaurants(); // Refresh restaurant list
    } catch (error) {
      console.error('Error deleting restaurant:', error);
    }
  };

  return (
    <div className="App">
      <h1>Restaurant Management System</h1>
      <div>
        <h2>Liste des Restaurants</h2>
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant.code}>
              {restaurant.nom} - {restaurant.ville}
              <button onClick={() => handleUpdate(restaurant.code)}>Modifier</button>
              <button onClick={() => handleDelete(restaurant.code)}>Supprimer</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Ajouter un Restaurant</h2>
        <form onSubmit={handleSubmit}>
          <label>Nom:</label>
          <input type="text" name="nom" value={newRestaurant.nom} onChange={handleInputChange} required />
          <label>Ville:</label>
          <input type="text" name="ville" value={newRestaurant.ville} onChange={handleInputChange} required />
          <label>Adresse:</label>
          <input type="text" name="adresse" value={newRestaurant.adresse} onChange={handleInputChange} required />
          <label>Téléphone:</label>

          <input type="text" name="telephone" value={newRestaurant.telephone} onChange={handleInputChange} required />
          <input type="text" name="heure_ouverture" value={newRestaurant.heure_ouverture} onChange={handleInputChange} required />
          <input type="text" name="heure_fermeture" value={newRestaurant.heure_fermeture} onChange={handleInputChange} required />
          <input type="text" name="etat" value={newRestaurant.etat} onChange={handleInputChange} required />

          <input type="number" name="coordonnee_gps_x" value={newRestaurant.coordonnee_gps_x} onChange={handleInputChange} required />
          <input type="number" name="coordonnee_gps_y" value={newRestaurant.coordonnee_gps_y} onChange={handleInputChange} required />



          <button type="submit">Ajouter</button>
        </form>
      </div>
    </div>
  );
};
export default RestaurantUI;
