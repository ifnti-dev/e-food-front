import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Restaurant from '../../models/Restaurant';
import { createRestaurant, deleteRestaurant, getAllRestaurants, getRestaurantById, updateRestaurant } from '../../services/RestaurantService';

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
    jour_ouverture: '',
    etat: '',
    coordonnee_gps_x: 0,
    coordonnee_gps_y: 0,
  });
  const [previewImage, setPreviewImage] = useState<string>(''); // State pour prévisualisation de l'image

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
      [name]: value,
    });
  };

 

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        const formData = new FormData();
        formData.append('restaurant', JSON.stringify(newRestaurant));

        await createRestaurant(formData); // Assurez-vous que createRestaurant prend en charge FormData
        setNewRestaurant({
            code: 0,
            nom: '',
            ville: '',
            adresse: '',
            telephone: '',
            heure_ouverture: '',
            heure_fermeture: '',
            jour_ouverture: '',
            etat: '',
            coordonnee_gps_x: 0,
            coordonnee_gps_y: 0,
        });
        setPreviewImage(''); // Réinitialiser la prévisualisation de l'image
        fetchRestaurants();
    } catch (error) {
        console.error('Error creating restaurant:', error);
    }
};


  const handleUpdate = async (code: number) => {
    try {
      const restaurantToUpdate = await getRestaurantById(code);
      setNewRestaurant(restaurantToUpdate);
      await updateRestaurant(code, newRestaurant);
      setNewRestaurant({
        code: 0,
        nom: '',
        ville: '',
        adresse: '',
        telephone: '',
        heure_ouverture: '',
        heure_fermeture: '',
        jour_ouverture: '',
        etat: '',
        coordonnee_gps_x: 0,
        coordonnee_gps_y: 0,
      });
      setPreviewImage('');
      fetchRestaurants();
    } catch (error) {
      console.error('Error updating restaurant:', error);
    }
  };

  const handleDelete = async (code: number) => {
    try {
      await deleteRestaurant(code);
      fetchRestaurants();
    } catch (error) {
      console.error('Error deleting restaurant:', error);
    }
  };

  return (
    <>
      <div className="body d-flex py-lg-3 py-md-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            {/* Header de la section */}
            <div className="border-0 mb-4">
              <div className="card-header p-0 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="fw-bold py-3 mb-0">Restaurants</h3>
                <div className="d-flex py-2 project-tab flex-wrap w-sm-100">
                  <button type="button" className="btn btn-dark w-sm-100" data-bs-toggle="modal" data-bs-target="#createproject">
                    <i className="fs-5 bi bi-plus-circle me-2 fs-6"></i>Create Restaurant
                  </button>
                  <ul className="nav nav-tabs tab-body-header rounded ms-3 prtab-set w-sm-100" role="tablist">
                    <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#All-list" role="tab">All</a></li>
                    <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#Started-list" role="tab">Started</a></li>
                    <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#Approval-list" role="tab">Approval</a></li>
                    <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#Completed-list" role="tab">Completed</a></li>
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
                          <img className="card-img-top" src="" alt="" />
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mt-0">
                              <div className="lesson_name">
                                <h6 className="mb-0 fw-bold fs-6 mb-2">{restaurant.nom}</h6>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                  <i className="bi bi-geo-alt"></i>{restaurant.ville}
                                  <span className="small light-danger-bg p-1 rounded"><i className="bi bi-clock"></i>{restaurant.etat}</span>
                                </div>
                              </div>
                            </div>
                            <div className="dividers-block"></div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div></div>
                              <div className="btn-group" role="group" aria-label="Basic outlined example">
                                <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#"><i className="bi bi-eye text-secondary"></i></button>
                                <button type="button" className="btn btn-outline-secondary" onClick={() => handleUpdate(restaurant.code)} data-bs-toggle="modal" data-bs-target="#editproject"><i className="fs-5 bi bi-pencil text-primary"></i></button>
                                <button type="button" className="btn btn-outline-secondary" onClick={() => handleDelete(restaurant.code)} data-bs-toggle="modal" data-bs-target="#deleteproject"><i className="bi bi-trash3-fill text-danger"></i></button>
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
        </div>
      </div>

      {/* Modal pour ajouter un restaurant */}
      <div className="modal fade" id="createproject" tabIndex={-1} aria-labelledby="createprojectLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="createprojectLabel">Add Restaurant</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                {/* Champs de formulaire pour ajouter un restaurant */}
                <div className="row">
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="restaurantName" className="form-label">Name</label>
                      <input type="text" className="form-control" id="restaurantName" name="nom" value={newRestaurant.nom} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="restaurantCity" className="form-label">City</label>
                      <input type="text" className="form-control" id="restaurantCity" name="ville" value={newRestaurant.ville} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="restaurantAddress" className="form-label">Address</label>
                      <input type="text" className="form-control" id="restaurantAddress" name="adresse" value={newRestaurant.adresse} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="restaurantPhone" className="form-label">Phone</label>
                      <input type="text" className="form-control" id="restaurantPhone" name="telephone" value={newRestaurant.telephone} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="restaurantOpening" className="form-label">Opening Hours</label>
                      <input type="text" className="form-control" id="restaurantOpening" name="heure_ouverture" value={newRestaurant.heure_ouverture} onChange={handleInputChange} required />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="restaurantClosing" className="form-label">Closing Hours</label>
                      <input type="text" className="form-control" id="restaurantClosing" name="heure_fermeture" value={newRestaurant.heure_fermeture} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="restaurantOpeningDay" className="form-label">Opening Day</label>
                      <input type="text" className="form-control" id="restaurantOpeningDay" name="jour_ouverture" value={newRestaurant.jour_ouverture} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="restaurantState" className="form-label">State</label>
                      <input type="text" className="form-control" id="restaurantState" name="etat" value={newRestaurant.etat} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="restaurantLatitude" className="form-label">Latitude</label>
                      <input type="number" className="form-control" id="restaurantLatitude" name="coordonnee_gps_x" value={newRestaurant.coordonnee_gps_x} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="restaurantLongitude" className="form-label">Longitude</label>
                      <input type="number" className="form-control" id="restaurantLongitude" name="coordonnee_gps_y" value={newRestaurant.coordonnee_gps_y} onChange={handleInputChange} required />
                    </div>
                  </div>
                </div>
                {/* <div className="mb-3">
                  <label htmlFor="restaurantImage" className="form-label">Profile Photo</label>
                  <input type="file" className="form-control" id="restaurantImage" name="photoProfil"  accept="image/jpeg, image/png" onChange={handleFileInputChange} required />
                  {previewImage && <img src={previewImage} alt="Preview" className="img-thumbnail mt-2" style={{ maxWidth: '200px' }} />}
                </div> */}
                <button type="submit" className="btn btn-dark">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal pour éditer un restaurant */}
      <div className="modal fade" id="editproject" tabIndex={-1} aria-labelledby="editprojectLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="editprojectLabel">Edit Restaurant</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                {/* Champs de formulaire pour éditer un restaurant */}
                <div className="row">
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="editrestaurantName" className="form-label">Name</label>
                      <input type="text" className="form-control" id="editrestaurantName" name="nom" value={newRestaurant.nom} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="editrestaurantCity" className="form-label">City</label>
                      <input type="text" className="form-control" id="editrestaurantCity" name="ville" value={newRestaurant.ville} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="editrestaurantAddress" className="form-label">Address</label>
                      <input type="text" className="form-control" id="editrestaurantAddress" name="adresse" value={newRestaurant.adresse} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="editrestaurantPhone" className="form-label">Phone</label>
                      <input type="text" className="form-control" id="editrestaurantPhone" name="telephone" value={newRestaurant.telephone} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="editrestaurantOpening" className="form-label">Opening Hours</label>
                      <input type="text" className="form-control" id="editrestaurantOpening" name="heure_ouverture" value={newRestaurant.heure_ouverture} onChange={handleInputChange} required />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="editrestaurantClosing" className="form-label">Closing Hours</label>
                      <input type="text" className="form-control" id="editrestaurantClosing" name="heure_fermeture" value={newRestaurant.heure_fermeture} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="editrestaurantOpeningDay" className="form-label">Opening Day</label>
                      <input type="text" className="form-control" id="editrestaurantOpeningDay" name="jour_ouverture" value={newRestaurant.jour_ouverture} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="editrestaurantState" className="form-label">State</label>
                      <input type="text" className="form-control" id="editrestaurantState" name="etat" value={newRestaurant.etat} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="editrestaurantLatitude" className="form-label">Latitude</label>
                      <input type="number" className="form-control" id="editrestaurantLatitude" name="coordonnee_gps_x" value={newRestaurant.coordonnee_gps_x} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="editrestaurantLongitude" className="form-label">Longitude</label>
                      <input type="number" className="form-control" id="editrestaurantLongitude" name="coordonnee_gps_y" value={newRestaurant.coordonnee_gps_y} onChange={handleInputChange} required />
                    </div>
                  </div>
                </div>
                {/* <div className="mb-3">
                  <label htmlFor="editrestaurantImage" className="form-label">Profile Photo</label>
                  <input type="file" className="form-control" id="editrestaurantImage" name="photoProfil" onChange={handleFileInputChange} required />
                  {previewImage && <img src={previewImage} alt="Preview" className="img-thumbnail mt-2" style={{ maxWidth: '200px' }} />}
                </div> */}
                <button type="submit" className="btn btn-dark">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal pour supprimer un restaurant */}
      <div className="modal fade" id="deleteproject" tabIndex={-1} aria-labelledby="deleteprojectLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="deleteprojectLabel">Delete Restaurant</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
              <p>Are you sure you want to delete this restaurant?</p>
              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
              <button type="button" onClick={() => handleDelete(newRestaurant.code)} className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Rest;
