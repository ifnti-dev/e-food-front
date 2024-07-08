// src/components/Register.tsx
import React, { useState } from 'react';
import authService from '../../services/authService';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';

interface FormData {
  username: string;
  password: string;
  nom: string;
  prenom: string;
  adresse: string;
  telephone: string;
  ville: string;
  email: string;
  role: string;
}

interface RoleDTO {
  id: number;
  libelle: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
    nom: '',
    prenom: '',
    adresse: '',
    telephone: '',
    ville: '',
    email: '',
    role: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.nom) newErrors.nom = 'Nom is required';
    if (!formData.prenom) newErrors.prenom = 'Prenom is required';
    if (!formData.adresse) newErrors.adresse = 'Adresse is required';
    if (!formData.telephone) newErrors.telephone = 'Telephone is required';
    if (!formData.ville) newErrors.ville = 'Ville is required';
    if (!formData.email) newErrors.email = 'Email is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    try {
      const response = await authService.register(formData);
      navigate('/e-food/login');
      console.log('User registered successfully:', response.data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="container-fluid ps-md-0">
      <div className="row g-0">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h3 className="login-heading mb-4">Welcome!</h3>
                  <div className="card mb-3">
                    <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                      <h6 className="mb-0 fw-bold "></h6>
                    </div>
                    <div className="card-body">
                      <form onSubmit={handleSubmit}>
                        <div className="row g-3 align-items-center">
                          <div className="col-md-6">
                            <label className="form-label">Nom</label>
                            <input
                              type="text"
                              className="form-control"
                              id="nom"
                              name="nom"
                              onChange={handleChange}
                              value={formData.nom}
                              required
                            />
                            {errors.nom && <div className="text-danger">{errors.nom}</div>}
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Prenom</label>
                            <input
                              type="text"
                              className="form-control"
                              id="prenom"
                              name="prenom"
                              onChange={handleChange}
                              value={formData.prenom}
                              required
                            />
                            {errors.prenom && <div className="text-danger">{errors.prenom}</div>}
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input
                              type="text"
                              className="form-control"
                              id="username"
                              name="username"
                              onChange={handleChange}
                              value={formData.username}
                              required
                            />
                            {errors.username && <div className="text-danger">{errors.username}</div>}
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                              type="password"
                              className="form-control"
                              id="password"
                              name="password"
                              onChange={handleChange}
                              value={formData.password}
                              required
                            />
                            {errors.password && <div className="text-danger">{errors.password}</div>}
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Telephone</label>
                            <input
                              type="text"
                              className="form-control"
                              id="telephone"
                              name="telephone"
                              onChange={handleChange}
                              value={formData.telephone}
                              required
                            />
                            {errors.telephone && <div className="text-danger">{errors.telephone}</div>}
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Email Address</label>
                            <input
                              type="email"
                              className="form-control"
                              id="emailaddress"
                              name="email"
                              onChange={handleChange}
                              value={formData.email}
                              required
                            />
                            {errors.email && <div className="text-danger">{errors.email}</div>}
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Adresse</label>
                            <input
                              type="text"
                              className="form-control"
                              id="adresse"
                              name="adresse"
                              onChange={handleChange}
                              value={formData.adresse}
                              required
                            />
                            {errors.adresse && <div className="text-danger">{errors.adresse}</div>}
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Ville</label>
                            <input
                              type="text"
                              className="form-control"
                              id="ville"
                              name="ville"
                              onChange={handleChange}
                              value={formData.ville}
                              required
                            />
                            {errors.ville && <div className="text-danger">{errors.ville}</div>}
                          </div>
                          {/* <div className="col-md-6">
                            <label className="form-label">File Upload</label>
                            <input className="form-control" type="file" id="formFileMultiple" multiple required />
                          </div> */}
                        </div>
                        <button type="submit" className="btn btn-secondary mt-4">Submit</button>
                      </form>
                      <div className="mt-3">
                        <p>
                          Already have an account? <Link to="/e-food/login">Login here</Link>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
