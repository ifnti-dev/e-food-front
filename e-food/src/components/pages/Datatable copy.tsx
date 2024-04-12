// import { useEffect } from 'react';
// import $ from 'jquery'; // Import de jQuery

function Datatable() {
    
    return (
        <>
        <div className="card mb-3">
            <div className="card-header py-3  bg-transparent border-bottom-0 d-flex justify-content-between">
                <h6 className="mb-0 fw-bold">Liste Users</h6>
                <button type="button" className="btn btn-primary"><i className="bi bi-plus-lg"></i>Ajouter</button>
            </div>
            <div className="card-body">
                <table id="patient-table" className="table table-hover align-middle mb-0" style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            {/* <th>Id</th> */}
                            <th>User</th>
                            <th>Role</th>
                            <th>Adress</th>
                            <th>Date Naiss.</th>
                            <th>Contacts</th>
                            <th>Date d'Embauche</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <td>PT-0001</td> */}
                            <td><img src="/imgs/xs/avatar3.jpg" className="avatar sm rounded-circle me-2" alt="profile-image" /><span>Molly </span></td>
                            <td>Gérant</td>
                            <td>Lomé</td>
                            <td>May 13, 2021</td>
                            <td>22 00 11 00</td>
                            <td>
                               02-02-2000
                            </td>
                            <td><span className="badge bg-info">Active</span></td>
                            <td>
                                <div className="dropdown">
                                    <i className="bi bi-three-dots-vertical" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-eye text-secondary"></i> Détail</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-trash3-fill text-danger"></i> Supprimer</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-pencil text-primary"></i> Modifier</a></li>
                                    </ul>
                                </div>
                             </td>

                           
                        </tr>
                        {/* Autres lignes omises pour la brièveté */}
                        <tr>
                            {/* <td>PT-0002</td> */}
                            <td><img src="/imgs/xs/avatar3.jpg" className="avatar sm rounded-circle me-2" alt="profile-image" /><span>Molly </span></td>
                            <td>Vendeur</td>
                            <td>Lomé</td>
                            <td>May 13, 2021</td>
                            <td>22 00 11 00</td>
                            <td>
                               02-02-2000
                            </td>
                            <td><span className="badge bg-info">Active</span></td>
                            <td>
                                <div className="dropdown">
                                    <i className="bi bi-three-dots-vertical" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-eye text-secondary"></i> Détail</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-trash3-fill text-danger"></i> Supprimer</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-pencil text-primary"></i> Modifier</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            {/* <td>PT-0003</td> */}
                            <td><img src="/imgs/xs/avatar3.jpg" className="avatar sm rounded-circle me-2" alt="profile-image" /><span>Molly </span></td>
                            <td>Livreur</td>
                            <td>Lomé</td>
                            <td>May 13, 2021</td>
                            <td>22 00 11 00</td>
                            <td>
                               02-02-2000
                            </td>
                            <td><span className="badge bg-info">Active</span></td>
                            <td>
                                <div className="dropdown">
                                    <i className="bi bi-three-dots-vertical" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-eye text-secondary"></i> Détail</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-trash3-fill text-danger"></i> Supprimer</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-pencil text-primary"></i> Modifier</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            {/* <td>PT-0004</td> */}
                            <td><img src="/imgs/xs/avatar3.jpg" className="avatar sm rounded-circle me-2" alt="profile-image" /><span>Molly </span></td>
                            <td>Caissier</td>
                            <td>Lomé</td>
                            <td>May 13, 2021</td>
                            <td>22 00 11 00</td>
                            <td>
                               02-02-2000
                            </td>
                            <td><span className="badge bg-warning">Deactive</span></td>
                            <td>
                                <div className="dropdown">
                                    <i className="bi bi-three-dots-vertical" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-eye text-secondary"></i> Détail</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-trash3-fill text-danger"></i> Supprimer</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-pencil text-primary"></i> Modifier</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            {/* <td>PT-0005</td> */}
                            <td><img src="/imgs/xs/avatar3.jpg" className="avatar sm rounded-circle me-2" alt="profile-image" /><span>Molly </span></td>
                            <td>Vendeur</td>
                            <td>Lomé</td>
                            <td>May 13, 2021</td>
                            <td>22 00 11 00</td>
                            <td>
                               02-02-2000
                            </td>
                            <td><span className="badge bg-warning">Deactive</span></td>
                            <td>
                                <div className="dropdown">
                                    <i className="bi bi-three-dots-vertical" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-eye text-secondary"></i> Détail</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-trash3-fill text-danger"></i> Supprimer</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-pencil text-primary"></i> Modifier</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            {/* <td>PT-0006</td> */}
                            <td><img src="/imgs/xs/avatar3.jpg" className="avatar sm rounded-circle me-2" alt="profile-image" /><span>Molly </span></td>
                            <td>Livreur</td>
                            <td>Lomé</td>
                            <td>May 13, 2021</td>
                            <td>22 00 11 00</td>
                            <td>
                               02-02-2000
                            </td>
                            <td><span className="badge bg-info">Active</span></td>
                            <td>
                                <div className="dropdown">
                                    <i className="bi bi-three-dots-vertical" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-eye text-secondary"></i> Détail</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-trash3-fill text-danger"></i> Supprimer</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-pencil text-primary"></i> Modifier</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            {/* <td>PT-0007</td> */}
                            <td><img src="/imgs/xs/avatar3.jpg" className="avatar sm rounded-circle me-2" alt="profile-image" /><span>Molly </span></td>
                            <td>Gérant</td>
                            <td>Lomé</td>
                            <td>May 13, 2021</td>
                            <td>22 00 11 00</td>
                            <td>
                               02-02-2000
                            </td>
                            <td><span className="badge bg-info">Active</span></td>
                            <td>
                                <div className="dropdown">
                                    <i className="bi bi-three-dots-vertical" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-eye text-secondary"></i> Détail</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-trash3-fill text-danger"></i> Supprimer</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-pencil text-primary"></i> Modifier</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        {/*  */}
                        <tr>
                            {/* <td>PT-0008</td> */}
                            <td><img src="/imgs/xs/avatar3.jpg" className="avatar sm rounded-circle me-2" alt="profile-image" /><span>Molly </span></td>
                            <td>Caissier</td>
                            <td>Lomé</td>
                            <td>May 13, 2021</td>
                            <td>22 00 11 00</td>
                            <td>
                               02-02-2000
                            </td>
                            <td><span className="badge bg-warning">Deactive</span></td>
                            <td>
                                <div className="dropdown">
                                    <i className="bi bi-three-dots-vertical" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-eye text-secondary"></i> Détail</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-trash3-fill text-danger"></i> Supprimer</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-pencil text-primary"></i> Modifier</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            {/* <td>PT-0009</td> */}
                            <td><img src="/imgs/xs/avatar3.jpg" className="avatar sm rounded-circle me-2" alt="profile-image" /><span>Molly </span></td>
                            <td>Vendeur</td>
                            <td>Lomé</td>
                            <td>May 13, 2021</td>
                            <td>22 00 11 00</td>
                            <td>
                               02-02-2000
                            </td>
                            <td><span className="badge bg-warning">Deactive</span></td>
                            <td>
                                <div className="dropdown">
                                    <i className="bi bi-three-dots-vertical" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-eye text-secondary"></i> Détail</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-trash3-fill text-danger"></i> Supprimer</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-pencil text-primary"></i> Modifier</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            {/* <td>PT-00010</td> */}
                            <td><img src="/imgs/xs/avatar3.jpg" className="avatar sm rounded-circle me-2" alt="profile-image" /><span>Molly </span></td>
                            <td>Livreur</td>
                            <td>Lomé</td>
                            <td>May 13, 2021</td>
                            <td>22 00 11 00</td>
                            <td>
                               02-02-2000
                            </td>
                            <td><span className="badge bg-info">Active</span></td>
                            <td>
                                <div className="dropdown">
                                    <i className="bi bi-three-dots-vertical" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-eye text-secondary"></i> Détail</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-trash3-fill text-danger"></i> Supprimer</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-pencil text-primary"></i> Modifier</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            {/* <td>PT-00011</td> */}
                            <td><img src="/imgs/xs/avatar3.jpg" className="avatar sm rounded-circle me-2" alt="profile-image" /><span>Molly </span></td>
                            <td>Gérant</td>
                            <td>Lomé</td>
                            <td>May 13, 2021</td>
                            <td>22 00 11 00</td>
                            <td>
                               02-02-2000
                            </td>
                            <td><span className="badge bg-info">Active</span></td>
                            <td>
                                <div className="dropdown">
                                    <i className="bi bi-three-dots-vertical" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-eye text-secondary"></i> Détail</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-trash3-fill text-danger"></i> Supprimer</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-pencil text-primary"></i> Modifier</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      
        </>
    )

}
export default Datatable;