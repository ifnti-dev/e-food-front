// src/components/Login.tsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import authService from '../../services/authService';

interface FormData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: ''
  });

  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

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
      const response = await authService.login(formData);
      console.log('User authenticated successfully:', response.data);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('expiresIn', response.data.expiresIn.toString());
      navigate('/'); // Redirection vers le tableau de bord
    } catch (error) {
      setError('Invalid username or password');
      console.error('Error authenticating user:', error);
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
                  <h3 className="login-heading mb-4">Welcome back!</h3>
                  {error && <div className="alert alert-danger">{error}</div>}
                  <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        name="username"
                        onChange={handleChange}
                        value={formData.username}
                        required
                      />
                      <label>Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                        required
                      />
                      <label>Password</label>
                    </div>
                    <div className="form-check mb-3 d-flex justify-content-between m-2">
                      <div>
                        <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                        <label className="form-check-label">Remember password</label>
                      </div>
                      <Link to="/e-food/register">Sign up</Link>
                    </div>
                    <div className="d-grid">
                      <button className="btn btn-lg btn-secondary btn-login text-uppercase fw-bold mb-2" type="submit">
                        Sign in
                      </button>
                      <div className="text-center">
                        <a className="small" href="#">Forgot password?</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
