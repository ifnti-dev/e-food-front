import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Restaurant from '../../../models/Restaurant';
import { createRestaurant, deleteRestaurant, getAllRestaurants, getRestaurantById, updateRestaurant } from '../../../services/RestaurantService';
import Swal from 'sweetalert2';


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
    const { value } = e.target;
    const jours = value.split(',').map((jour) => jour.trim());
    if (editRestaurant) {
      setEditRestaurant({
        ...editRestaurant,
        jour_ouverture: jours,
      });
    } else {
      setNewRestaurant({
        ...newRestaurant,
        jour_ouverture: jours,
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
                    <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#Approval-list" role="tab">Approbation</a></li>
                    <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#Completed-list" role="tab">Terminé</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 flex-column">
              <div className="tab-content mt-4">
                <div className="tab-pane fade show active" id="All-list">
                  <div className="row g-3 gy-5 py-3 row-deck">
                    {restaurants.map((restaurant) => (
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6" key={restaurant.code}>
                        <div className="card">
                          <img className="card-img-top" src="/imgs/resto.jpg" alt="" />
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mt-0">
                              <div className="lesson_name">
                                <h6 className="mb-0 fw-bold fs-6 mb-2">{restaurant.nom}</h6>
                                <ul>
                                  <li className='d-flex justify-content-end'><span className="small light-danger-bg p-1 rounded"><i className="bi bi-clock"></i>{restaurant.etat}</span></li>
                                  <li><i className="bi bi-geo-alt"></i>{restaurant.ville}</li>
                                  <li><i className="bi bi-phone"></i>{restaurant.telephone}</li>
                                </ul>
                              </div>
                            </div>
                            <div className="dividers-block"></div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div></div>
                              <div className="btn-group" role="group" aria-label="Basic outlined example">
                                <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#"><i className="bi bi-eye text-secondary"></i></button>
                                <button type="button" className="btn btn-outline-secondary" onClick={() => handleEditClick(restaurant.code)} data-bs-toggle="modal" data-bs-target="#editRestaurantModal"><i className="fs-5 bi bi-pencil-square text-primary"></i></button>
                                <button type="button" className="btn btn-outline-secondary" onClick={() => handleDelete(restaurant.code)}><i className="fs-5 bi bi-trash text-danger"></i></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="createRestaurantModal" tabIndex={-1} aria-labelledby="createRestaurantModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <form onSubmit={handleCreateSubmit}>
                  <div className="modal-header">
                    <h5 className="modal-title" id="createRestaurantModalLabel">Créer un restaurant</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="row mb-3">
                      <label htmlFor="nom" className="col-sm-3 col-form-label">Nom</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" id="nom" name="nom" value={newRestaurant.nom} onChange={handleInputChange} required />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="ville" className="col-sm-3 col-form-label">Ville</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" id="ville" name="ville" value={newRestaurant.ville} onChange={handleInputChange} required />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="adresse" className="col-sm-3 col-form-label">Adresse</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" id="adresse" name="adresse" value={newRestaurant.adresse} onChange={handleInputChange} required />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="telephone" className="col-sm-3 col-form-label">Téléphone</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" id="telephone" name="telephone" value={newRestaurant.telephone} onChange={handleInputChange} required />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="heure_ouverture" className="col-sm-3 col-form-label">Heure d'ouverture</label>
                      <div className="col-sm-9">
                        <input type="time" className="form-control" id="heure_ouverture" name="heure_ouverture" value={newRestaurant.heure_ouverture} onChange={handleInputChange} required />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="heure_fermeture" className="col-sm-3 col-form-label">Heure de fermeture</label>
                      <div className="col-sm-9">
                        <input type="time" className="form-control" id="heure_fermeture" name="heure_fermeture" value={newRestaurant.heure_fermeture} onChange={handleInputChange} required />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="jour_ouverture" className="col-sm-3 col-form-label">Jour d'ouverture</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" id="jour_ouverture" name="jour_ouverture" value={newRestaurant.jour_ouverture.join(', ')} onChange={handleJourOuvertureChange} required />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="etat" className="col-sm-3 col-form-label">État</label>
                      <div className="col-sm-9">
                        <select
                          className="form-select"
                          id="etat"
                          name="etat"
                          value={newRestaurant.etat}
                          onChange={handleSelectChange}
                          required
                        >
                          <option value="">Sélectionnez l'état</option>
                          <option value="Ouvert">Ouvert</option>
                          <option value="Fermé">Fermé</option>
                          <option value="En attente">En attente</option>
                        </select>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="coordonnee_gps_x" className="col-sm-3 col-form-label">Coordonnée GPS X</label>
                      <div className="col-sm-9">
                        <input type="number" className="form-control" id="coordonnee_gps_x" name="coordonnee_gps_x" value={newRestaurant.coordonnee_gps_x} onChange={handleInputChange} step="any" required />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="coordonnee_gps_y" className="col-sm-3 col-form-label">Coordonnée GPS Y</label>
                      <div className="col-sm-9">
                        <input type="number" className="form-control" id="coordonnee_gps_y" name="coordonnee_gps_y" value={newRestaurant.coordonnee_gps_y} onChange={handleInputChange} step="any" required />
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                    <button type="submit" className="btn btn-primary">Enregistrer</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {editRestaurant && (
            <div className="modal fade" id="editRestaurantModal" tabIndex={-1} aria-labelledby="editRestaurantModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                  <form onSubmit={handleUpdateSubmit}>
                    <div className="modal-header">
                      <h5 className="modal-title" id="editRestaurantModalLabel">Modifier le restaurant</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div className="row mb-3">
                        <label htmlFor="nom" className="col-sm-3 col-form-label">Nom</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" id="nom" name="nom" value={editRestaurant.nom} onChange={handleInputChange} required />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="ville" className="col-sm-3 col-form-label">Ville</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" id="ville" name="ville" value={editRestaurant.ville} onChange={handleInputChange} required />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="adresse" className="col-sm-3 col-form-label">Adresse</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" id="adresse" name="adresse" value={editRestaurant.adresse} onChange={handleInputChange} required />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="telephone" className="col-sm-3 col-form-label">Téléphone</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" id="telephone" name="telephone" value={editRestaurant.telephone} onChange={handleInputChange} required />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="heure_ouverture" className="col-sm-3 col-form-label">Heure d'ouverture</label>
                        <div className="col-sm-9">
                          <input type="time" className="form-control" id="heure_ouverture" name="heure_ouverture" value={editRestaurant.heure_ouverture} onChange={handleInputChange} required />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="heure_fermeture" className="col-sm-3 col-form-label">Heure de fermeture</label>
                        <div className="col-sm-9">
                          <input type="time" className="form-control" id="heure_fermeture" name="heure_fermeture" value={editRestaurant.heure_fermeture} onChange={handleInputChange} required />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="jour_ouverture" className="col-sm-3 col-form-label">Jour d'ouverture</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" id="jour_ouverture" name="jour_ouverture" value={editRestaurant.jour_ouverture.join(', ')} onChange={handleJourOuvertureChange} required />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="etat" className="col-sm-3 col-form-label">État</label>
                        <div className="col-sm-9">
                          <select
                            className="form-select"
                            id="etat"
                            name="etat"
                            value={editRestaurant.etat}
                            onChange={handleSelectChange}
                            required
                          >
                            <option value="">Sélectionnez l'état</option>
                            <option value="Ouvert">Ouvert</option>
                            <option value="Fermé">Fermé</option>
                            <option value="En attente">En attente</option>
                          </select>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="coordonnee_gps_x" className="col-sm-3 col-form-label">Coordonnée GPS X</label>
                        <div className="col-sm-9">
                          <input type="number" className="form-control" id="coordonnee_gps_x" name="coordonnee_gps_x" value={editRestaurant.coordonnee_gps_x} onChange={handleInputChange} step="any" required />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="coordonnee_gps_y" className="col-sm-3 col-form-label">Coordonnée GPS Y</label>
                        <div className="col-sm-9">
                          <input type="number" className="form-control" id="coordonnee_gps_y" name="coordonnee_gps_y" value={editRestaurant.coordonnee_gps_y} onChange={handleInputChange} step="any" required />
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                      <button type="submit" className="btn btn-primary">Enregistrer</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Rest;

