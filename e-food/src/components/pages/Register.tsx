// src/components/Register.tsx
import React, { useState } from 'react';
import authService from '../../services/authService';
import './Login.css'
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
interface FormData {
  username: string;
  password: string;
  nom: string;
  prenom: string;
  adresse: string;
  telephone: string;
  ville: string;
  email: string;
  role:string

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
    role:''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await authService.register(formData);
      console.log('User registered successfully:', response.data);
      navigate('/e-food/auth/login')
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (

    <>

<div className="container-fluid ps-md-0">
  <div className="row g-0">
    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
    <div className="col-md-8 col-lg-6">
      <div className="login d-flex align-items-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-lg-8 mx-auto">
              <h3 className="login-heading mb-4">Welcome back!</h3>

              
              <div className="card mb-3">
                            <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                <h6 className="mb-0 fw-bold ">Basic Form</h6> 
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3 align-items-center">
                                        <div className="col-md-6">
                                            <label  className="form-label">Nom</label>
                                            <input type="text" className="form-control" id="nom" name="nom" onChange={handleChange} value={formData.nom} required/>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Prenom</label>
                                            <input type="text" className="form-control" id="prenom" name="prenom" onChange={handleChange} value={formData.prenom} required/>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Username</label>
                                            <input type="text" className="form-control" id="username" name="username" onChange={handleChange} value={formData.username} required/>
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Password</label>
                                            <input type="text" className="form-control" id="password" name="password" onChange={handleChange} value={formData.password} required/>
                                        </div>
                                        <div className="col-md-6">
                                            <label  className="form-label">Telephone</label>
                                            <input type="text" className="form-control" id="telephone" name="telephone" onChange={handleChange} value={formData.telephone} required/>
                                        </div>
                                        <div className="col-md-6">
                                            <label  className="form-label">Email Address</label>
                                            <input type="email" className="form-control" id="emailaddress" name="email" onChange={handleChange} value={formData.email} required/>
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Adresse</label>
                                            <input type="text" className="form-control" id="adresse" name="adresse" onChange={handleChange} value={formData.adresse} required/>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Ville</label>
                                            <input type="text" className="form-control" id="ville" name="ville" onChange={handleChange} value={formData.ville} required/>
                                        </div>
                                        
                                        <div className="col-md-6">
                                            <label  className="form-label"> File Upload</label>
                                            <input className="form-control" type="file" id="formFileMultiple" multiple required/>
                                        </div>
                                      
                                        <div className="col-md-12">
                                            <label className="form-label">Add Note</label>
                                            <textarea  className="form-control" id="addnote" ></textarea> 
                                        </div>
                                    </div>
                                    
                                    <button type="submit" className="btn btn-secondary mt-4">Submit</button>
                                </form>
                            </div>
                        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
    
    
  );
};

export default Register;
