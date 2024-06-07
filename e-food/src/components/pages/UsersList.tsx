// src/components/UserList.tsx
import React, { useEffect, useState } from 'react';
import userService, { User } from '../../services/userService';


const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await userService.getUsers();
        setUsers(users);
      } catch (error) {
        setError('Failed to fetch users.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

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
                        <th>Avatar</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>email</th>
                        <th>Role</th>
                        <th>Contact</th>
                        <th>Adresse</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    users.map(user=>(
                    <tr key={user.id}>
                        {/* <td>PT-0001</td> */}
                        <td><img src="/imgs/xs/avatar3.jpg" className="avatar sm rounded-circle me-2" alt="profile-image" /><span>Molly </span></td>
                        <td>{user.nom}</td>
                        <td>{user.prenom}</td>
                        <td>{user.email}</td>
                        <td></td>
                        <td>{user.telephone}</td>

                        <td>
                           {user.adresse}
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
                    ))
                  }
                    
                </tbody>
            </table>
        </div>
    </div>
  
    </>
  );
};

export default UserList;
