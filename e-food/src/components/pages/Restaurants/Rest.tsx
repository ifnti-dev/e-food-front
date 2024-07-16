import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Restaurant from '../../../models/Restaurant';
import { createRestaurant, deleteRestaurant, getAllRestaurants, getRestaurantById, updateRestaurant } from '../../../services/RestaurantService';
import Swal from 'sweetalert2';
import RestaurantsList from './RestaurantMap';
import RestaurantMap from './RestaurantMap';

const Rest: React.FC = () => {
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
    coordonnee_gps_x: 0.0,
    coordonnee_gps_y: 0.0,
  });
  const [editRestaurant, setEditRestaurant] = useState<Restaurant | null>(null);
  const [alert, setAlert] = useState<{ type: string, message: string } | null>(null);
  const [restoLocation, setRestoLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const joursDeLaSemaine = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  useEffect(() => {
    fetchRestaurants();
  }, []);

  useEffect(() => {
    if (restoLocation) {
      if (editRestaurant) {
        setEditRestaurant({
          ...editRestaurant,
          coordonnee_gps_x: restoLocation.latitude,
          coordonnee_gps_y: restoLocation.longitude,
        });
      } else {
        setNewRestaurant({
          ...newRestaurant,
          coordonnee_gps_x: restoLocation.latitude,
          coordonnee_gps_y: restoLocation.longitude,
        });
      }
    }
  }, [restoLocation]);

  const getRestoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setRestoLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

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
    if (editRestaurant) {
      setEditRestaurant({
        ...editRestaurant,
        [name]: name === 'coordonnee_gps_x' || name === 'coordonnee_gps_y' ? parseFloat(value) : value,
      });
    } else {
      setNewRestaurant({
        ...newRestaurant,
        [name]: name === 'coordonnee_gps_x' || name === 'coordonnee_gps_y' ? parseFloat(value) : value,
      });
    }
  };

  const handleJourOuvertureChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const jours = editRestaurant ? editRestaurant.jour_ouverture : newRestaurant.jour_ouverture;
    const updatedJours = checked
      ? [...jours, value]
      : jours.filter(jour => jour !== value);

    if (editRestaurant) {
      setEditRestaurant({
        ...editRestaurant,
        jour_ouverture: updatedJours,
      });
    } else {
      setNewRestaurant({
        ...newRestaurant,
        jour_ouverture: updatedJours,
      });
    }
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (editRestaurant) {
      setEditRestaurant({
        ...editRestaurant,
        [name]: value,
      });
    } else {
      setNewRestaurant({
        ...newRestaurant,
        [name]: value,
      });
    }
  };

  const handleCreateSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
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
        coordonnee_gps_x: 0.0,
        coordonnee_gps_y: 0.0,
      });
      fetchRestaurants();
      Swal.fire({
        icon: 'success',
        title: 'Restaurant créé avec succès!',
        showConfirmButton: false,
        timer: 1500
      });
      closeModal('#createRestaurantModal');
    } catch (error) {
      console.error('Erreur lors de la création du restaurant :', error);
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Erreur lors de la création du restaurant.',
      });
    }
  };

  const handleUpdateSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editRestaurant) {
      try {
        await updateRestaurant(editRestaurant.code, editRestaurant);
        setEditRestaurant(null);
        fetchRestaurants();
        Swal.fire({
          icon: 'success',
          title: 'Restaurant mis à jour avec succès!',
          showConfirmButton: false,
          timer: 1500
        });
        closeModal('#editRestaurantModal');
      } catch (error) {
        console.error('Erreur lors de la mise à jour du restaurant :', error);
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Erreur lors de la mise à jour du restaurant.',
        });
      }
    }
  };

  const handleEditClick = async (code: number) => {
    try {
      const restaurantToEdit = await getRestaurantById(code);
      setEditRestaurant(restaurantToEdit);
    } catch (error) {
      console.error('Erreur lors de la récupération du restaurant :', error);
    }
  };

  const handleDelete = async (code: number) => {
    try {
      const result = await Swal.fire({
        title: 'Êtes-vous sûr?',
        text: 'Vous ne pourrez pas revenir en arrière!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui, supprimer!'
      });
      if (result.isConfirmed) {
        await deleteRestaurant(code);
        fetchRestaurants();
        Swal.fire('Supprimé!', 'Le restaurant a été supprimé.', 'success');
      }
    } catch (error) {
      console.error('Erreur lors de la suppression du restaurant :', error);
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Erreur lors de la suppression du restaurant.',
      });
    }
  };

  const closeModal = (modalId: string) => {
    const modal = document.querySelector(modalId) as HTMLElement;
    const modalInstance = (window as any).bootstrap.Modal.getInstance(modal);
    modalInstance.hide();
  };

  return (
    <>
      {alert && (
        <div className={`alert alert-${alert.type === 'success' ? 'success' : 'danger'}`} role="alert">
          {alert.message}
        </div>
      )}

      <div className="body d-flex py-lg-3 py-md-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="border-0 mb-4">
              <div className="card-header p-0 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="fw-bold py-3 mb-0">Restaurants</h3>
                <div className="d-flex py-2 project-tab flex-wrap w-sm-100">
                  <button type="button" className="btn btn-dark w-sm-100" data-bs-toggle="modal" data-bs-target="#createRestaurantModal">
                    <i className="fs-5 bi bi-plus-circle me-2 fs-6"></i>Créer un restaurant
                  </button>
                  <ul className="nav nav-tabs tab-body-header rounded ms-3 prtab-set w-sm-100" role="tablist">
                    <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#All-list" role="tab">Tous</a></li>
                    <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#Started-list" role="tab">Démarré</a></li>
                    <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#Approval-list" role="tab">En attente</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        <RestaurantMap/>

          <div className="tab-content">
            <div className="tab-pane fade show active" id="All-list">
              <div className="row g-3 gy-5 py-3 row-deck">
                {restaurants.map((restaurant) => (
                  <div key={restaurant.code} className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                    <div className="card teacher-card">
                      <div className="card-body d-flex">
                        <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
                          <img src="assets/images/lg/avatar3.jpg" alt="" className="avatar xl rounded-circle img-thumbnail shadow-sm" />
                          <div className="about-info d-flex align-items-center mt-1 justify-content-center flex-column">
                            <h6 className="mb-0 fw-bold d-block fs-6 mt-2">{restaurant.nom}</h6>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="d-flex align-items-center">
                            <h6 className="mb-0 fw-bold d-block fs-6 mt-2">{restaurant.nom}</h6>
                            <div className="badge bg-warning ms-2">{restaurant.etat}</div>
                          </div>
                          <div className="content my-3">
                            <p className="text-muted"><i className="bi bi-geo-alt"></i> {restaurant.ville}</p>
                            <p className="text-muted"><i className="bi bi-telephone"></i> {restaurant.telephone}</p>
                          </div>
                          <div className="row g-2 pt-2">
                            <div className="col-xl-12">
                              <div className="d-flex align-items-center justify-content-center">
                                <button
                                  className="btn btn-sm btn-success me-2"
                                  data-bs-toggle="modal"
                                  data-bs-target="#editRestaurantModal"
                                  onClick={() => handleEditClick(restaurant.code)}
                                >
                                  <i className="bi bi-pencil-square"></i>
                                </button>
                                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(restaurant.code)}>
                                  <i className="bi bi-trash"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="modal fade" id="createRestaurantModal" tabIndex={-1} aria-hidden="true">
              <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Créer un Restaurant</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <form onSubmit={handleCreateSubmit}>
                    <div className="modal-body">
                      <div className="mb-3">
                        <label htmlFor="nom" className="form-label">Nom du Restaurant</label>
                        <input
                          type="text"
                          className="form-control"
                          id="nom"
                          name="nom"
                          value={newRestaurant.nom}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="ville" className="form-label">Ville</label>
                        <input
                          type="text"
                          className="form-control"
                          id="ville"
                          name="ville"
                          value={newRestaurant.ville}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="adresse" className="form-label">Adresse</label>
                        <input
                          type="text"
                          className="form-control"
                          id="adresse"
                          name="adresse"
                          value={newRestaurant.adresse}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="telephone" className="form-label">Téléphone</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="telephone"
                          name="telephone"
                          value={newRestaurant.telephone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="heure_ouverture" className="form-label">Heure d'ouverture</label>
                        <input
                          type="time"
                          className="form-control"
                          id="heure_ouverture"
                          name="heure_ouverture"
                          value={newRestaurant.heure_ouverture}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="heure_fermeture" className="form-label">Heure de fermeture</label>
                        <input
                          type="time"
                          className="form-control"
                          id="heure_fermeture"
                          name="heure_fermeture"
                          value={newRestaurant.heure_fermeture}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Jours d'ouverture</label>
                        <div className="d-flex flex-wrap">
                          {joursDeLaSemaine.map(jour => (
                            <div key={jour} className="form-check me-3">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value={jour}
                                id={`jour_${jour}`}
                                checked={newRestaurant.jour_ouverture.includes(jour)}
                                onChange={handleJourOuvertureChange}
                              />
                              <label className="form-check-label" htmlFor={`jour_${jour}`}>
                                {jour}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="etat" className="form-label">État</label>
                        <select
                          className="form-select"
                          id="etat"
                          name="etat"
                          value={newRestaurant.etat}
                          onChange={handleSelectChange}
                          required
                        >
                          <option value="">Sélectionnez l'état</option>
                          <option value="En attente">En attente</option>
                          <option value="Démarré">Démarré</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="coordonnee_gps_x" className="form-label">Coordonnée GPS X</label>
                        <input
                          type="number"
                          className="form-control"
                          id="coordonnee_gps_x"
                          name="coordonnee_gps_x"
                          value={newRestaurant.coordonnee_gps_x}
                          onChange={handleInputChange}
                          required
                          step="any"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="coordonnee_gps_y" className="form-label">Coordonnée GPS Y</label>
                        <input
                          type="number"
                          className="form-control"
                          id="coordonnee_gps_y"
                          name="coordonnee_gps_y"
                          value={newRestaurant.coordonnee_gps_y}
                          onChange={handleInputChange}
                          required
                          step="any"
                        />
                      </div>
                      <button type="button" className="btn btn-primary" onClick={getRestoLocation}>
                        Utiliser ma position actuelle
                      </button>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                      <button type="submit" className="btn btn-primary">Créer</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {editRestaurant && (
              <div className="modal fade" id="editRestaurantModal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Modifier le Restaurant</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={handleUpdateSubmit}>
                      <div className="modal-body">
                        <div className="mb-3">
                          <label htmlFor="nom" className="form-label">Nom du Restaurant</label>
                          <input
                            type="text"
                            className="form-control"
                            id="nom"
                            name="nom"
                            value={editRestaurant.nom}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="ville" className="form-label">Ville</label>
                          <input
                            type="text"
                            className="form-control"
                            id="ville"
                            name="ville"
                            value={editRestaurant.ville}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="adresse" className="form-label">Adresse</label>
                          <input
                            type="text"
                            className="form-control"
                            id="adresse"
                            name="adresse"
                            value={editRestaurant.adresse}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="telephone" className="form-label">Téléphone</label>
                          <input
                            type="tel"
                            className="form-control"
                            id="telephone"
                            name="telephone"
                            value={editRestaurant.telephone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="heure_ouverture" className="form-label">Heure d'ouverture</label>
                          <input
                            type="time"
                            className="form-control"
                            id="heure_ouverture"
                            name="heure_ouverture"
                            value={editRestaurant.heure_ouverture}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="heure_fermeture" className="form-label">Heure de fermeture</label>
                          <input
                            type="time"
                            className="form-control"
                            id="heure_fermeture"
                            name="heure_fermeture"
                            value={editRestaurant.heure_fermeture}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Jours d'ouverture</label>
                          <div className="d-flex flex-wrap">
                            {joursDeLaSemaine.map(jour => (
                              <div key={jour} className="form-check me-3">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value={jour}
                                  id={`jour_${jour}`}
                                  checked={editRestaurant.jour_ouverture.includes(jour)}
                                  onChange={handleJourOuvertureChange}
                                />
                                <label className="form-check-label" htmlFor={`jour_${jour}`}>
                                  {jour}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="etat" className="form-label">État</label>
                          <select
                            className="form-select"
                            id="etat"
                            name="etat"
                            value={editRestaurant.etat}
                            onChange={handleSelectChange}
                            required
                          >
                            <option value="">Sélectionnez l'état</option>
                            <option value="En attente">En attente</option>
                            <option value="Démarré">Démarré</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="coordonnee_gps_x" className="form-label">Coordonnée GPS X</label>
                          <input
                            type="number"
                            className="form-control"
                            id="coordonnee_gps_x"
                            name="coordonnee_gps_x"
                            value={editRestaurant.coordonnee_gps_x}
                            onChange={handleInputChange}
                            required
                            step="any"
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="coordonnee_gps_y" className="form-label">Coordonnée GPS Y</label>
                          <input
                            type="number"
                            className="form-control"
                            id="coordonnee_gps_y"
                            name="coordonnee_gps_y"
                            value={editRestaurant.coordonnee_gps_y}
                            onChange={handleInputChange}
                            required
                            step="any"
                          />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={getRestoLocation}>
                          Utiliser ma position actuelle
                        </button>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                        <button type="submit" className="btn btn-primary">Mettre à jour</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Rest;
