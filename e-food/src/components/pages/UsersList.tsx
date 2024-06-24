import React, { useEffect, useState } from 'react';
import userService, { User, Role } from '../../services/userService';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [showModal, setShowModal] = useState<'add' | 'update' | 'show' | 'delete' | null>(null);
  const [formData, setFormData] = useState<Partial<User>>({
    nom: '',
    prenom: '',
    username: '',
    password: '',
    telephone: '',
    email: '',
    adresse: '',
    ville: '',
    role_id: 0,
  });
  const [roles, setRoles] = useState<Role[]>([]);

  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await userService.getUsers();
        setUsers(usersData);
      } catch (error) {
        setError('Failed to fetch users.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const rolesData = await userService.getRoles();
        setRoles(rolesData);
      } catch (error) {
        console.error('Failed to fetch roles:', error);
      }
    };

    fetchRoles();
  }, []);

  const handleShow = async (user: User) => {
    setCurrentUser(user);
    setShowModal('show');
  };

  const handleUpdate = async (user: User) => {
    setCurrentUser(user);
    setFormData(user);
    setShowModal('update');
  };

  const handleDelete = async (user: User) => {
    setCurrentUser(user);
    setShowModal('delete');
  };

  const handleAdd = () => {
    setCurrentUser(null);
    setFormData({
      nom: '',
      prenom: '',
      username: '',
      password: '',
      telephone: '',
      email: '',
      adresse: '',
      ville: '',
      role_id: 0,
    });
    setShowModal('add');
  };

  const confirmDelete = async () => {
    if (currentUser) {
      try {
        await userService.deleteUser(currentUser.id);
        setUsers(users.filter(u => u.id !== currentUser.id));
        setShowModal(null);
      } catch (error) {
        setError('Failed to delete user.');
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (showModal === 'add') {
        const newUser = await userService.addUser(formData as User);
        setUsers([...users, newUser]);
      } else if (currentUser && showModal === 'update') {
        const updatedUser = await userService.updateUser(currentUser.id, formData);
        setUsers(users.map(user => (user.id === currentUser.id ? updatedUser : user)));
      }
      setShowModal(null);
    } catch (error) {
      setError('Failed to save user.');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div className="card mb-3">
        <div className="card-header py-3 bg-transparent border-bottom-0 d-flex justify-content-between">
          <h6 className="mb-0 fw-bold">Liste Utilisateurs</h6>
          <button type="button" className="btn btn-primary" onClick={handleAdd}>
            <i className="bi bi-plus-lg"></i> Ajouter
          </button>
        </div>
        <div className="card-body">
          <table className="table table-hover align-middle mb-0" style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Rôle</th>
                <th>Contact</th>
                <th>Adresse</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>
                    <img src="/imgs/xs/avatar3.jpg" className="avatar sm rounded-circle me-2" alt="profile-image" />
                    <span>Molly</span>
                  </td>
                  <td>{user.nom}</td>
                  <td>{user.prenom}</td>
                  <td>{user.email}</td>
                  <td></td>
                  <td>{user.telephone}</td>
                  <td>{user.adresse}</td>
                  <td><span className="badge bg-info">Active</span></td>
                  <td>
                    <div className="dropdown">
                      <i className="bi bi-three-dots-vertical" id={`dropdownMenuButton-${user.id}`} data-bs-toggle="dropdown" aria-expanded="false"></i>
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby={`dropdownMenuButton-${user.id}`}>
                        <li><a className="dropdown-item" href="#" onClick={() => handleShow(user)}><i className="bi bi-eye text-secondary"></i> Détail</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => handleDelete(user)}><i className="bi bi-trash3-fill text-danger"></i> Supprimer</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => handleUpdate(user)}><i className="bi bi-pencil text-primary"></i> Modifier</a></li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal === 'show' && currentUser && (
        <div className="modal show d-block modal-dialog-centered">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Détails Utilisateur</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(null)}></button>
              </div>
              <div className="modal-body">
                <p>Nom: {currentUser.nom}</p>
                <p>Prénom: {currentUser.prenom}</p>
                <p>Email: {currentUser.email}</p>
                <p>Contact: {currentUser.telephone}</p>
                <p>Adresse: {currentUser.adresse}</p>
                <p>Rôle: </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(null)}>Fermer</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {(showModal === 'add' || showModal === 'update') && (
        <div className="modal show d-block modal-dialog-centered">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{showModal === 'add' ? 'Ajouter Utilisateur' : 'Modifier Utilisateur'}</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(null)}></button>
              </div>
              <div className="modal-body">
                <div className="card mb-3">
                  <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                    <h6 className="mb-0 fw-bold">{showModal === 'add' ? 'Ajouter Utilisateur' : 'Modifier Utilisateur'}</h6>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="row g-3 align-items-center">
                        <div className="col-md-6">
                          <label className="form-label">Nom</label>
                          <input type="text" className="form-control" id="nom" name="nom" onChange={handleChange} value={formData.nom} required />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Prenom</label>
                          <input type="text" className="form-control" id="prenom" name="prenom" onChange={handleChange} value={formData.prenom} required />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Username</label>
                          <input type="text" className="form-control" id="username" name="username" onChange={handleChange} value={formData.username} required />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Password</label>
                          <input type="text" className="form-control" id="password" name="password" onChange={handleChange} value={formData.password} required />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Telephone</label>
                          <input type="text" className="form-control" id="telephone" name="telephone" onChange={handleChange} value={formData.telephone} required />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Email Address</label>
                          <input type="email" className="form-control" id="emailaddress" name="email" onChange={handleChange} value={formData.email} required />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Adresse</label>
                          <input type="text" className="form-control" id="adresse" name="adresse" onChange={handleChange} value={formData.adresse} required />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Ville</label>
                          <input type="text" className="form-control" id="ville" name="ville" onChange={handleChange} value={formData.ville} required />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Rôle</label>
                          <select className="form-control" id="role_id" name="role_id" onChange={handleChange} value={formData.role_id} required>
                            <option value={0} disabled>Choisir un rôle</option>
                            {roles.map(role => (
                              <option key={role.id} value={role.id}>{role.libelle}</option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">File Upload</label>
                          <input className="form-control" type="file" id="formFileMultiple" />
                        </div>
                      </div>
                      <button type="submit" className="btn btn-secondary mt-4">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(null)}>Fermer</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal === 'delete' && currentUser && (
        <div className="modal show d-block modal-dialog-centered">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirmer la Suppression</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(null)}></button>
              </div>
              <div className="modal-body">
                <p>Êtes-vous sûr de vouloir supprimer l'utilisateur {currentUser.nom} {currentUser.prenom}?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(null)}>Annuler</button>
                <button type="button" className="btn btn-danger" onClick={confirmDelete}>Supprimer</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserList;
