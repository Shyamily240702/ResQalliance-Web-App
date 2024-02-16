import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Import CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
     
    

      {/* Main content */}
      <div className="main-content">
        <h1>Welcome to ResQalliance</h1>
        <p>ResQalliance is a platform for rescue agencies to collaborate and coordinate their efforts.</p>
        <div className="buttons-container">
          <Link to="/signup" className="btn">Sign Up</Link>
          <Link to="/login" className="btn">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
