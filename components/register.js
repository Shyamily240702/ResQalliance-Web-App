import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css'; // Import CSS file for styling

const Register = () => {
  const [formData, setFormData] = useState({
    agencyName: '',
    address: '',
    contacts: '',
    id: '',
    latitude: '',
    longitude: '',
    equipmentList: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here (e.g., send data to backend)
    console.log('Registration submitted:', formData);
    // Redirect to home page after registration
    navigate('/');
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="agencyName">Agency Name:</label>
          <input type="text" id="agencyName" name="agencyName" value={formData.agencyName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="contacts">Contacts:</label>
          <input type="text" id="contacts" name="contacts" value={formData.contacts} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="latitude">Latitude:</label>
          <input type="text" id="latitude" name="latitude" value={formData.latitude} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="longitude">Longitude:</label>
          <input type="text" id="longitude" name="longitude" value={formData.longitude} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="equipmentList">Equipment List:</label>
          <input type="text" id="equipmentList" name="equipmentList" value={formData.equipmentList} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
