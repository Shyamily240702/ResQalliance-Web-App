import React from 'react';
import './contactus.css'; // Import CSS file for styling

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <p>
        If you have any questions, suggestions, or inquiries, please feel free to contact us using the information below:
      </p>
      <div className="contact-info">
        <p><strong>Email:</strong> info@resqalliance.com</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Address:</strong> 123 Rescue Street, City, Country</p>
      </div>
    </div>
  );
};

export default ContactUs;
