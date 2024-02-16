import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Import CSS file for styling
import Home from './components/home';
import AboutUs from './components/aboutus';
import ContactUs from './components/contactus';
import Register from './components/register';
import SignUp from './components/signup';
import Login from './components/login';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>ResQalliance</h1>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/register">Register</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; {new Date().getFullYear()} ResQalliance. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
