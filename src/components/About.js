import React from 'react';
import './About.css'; // Import your CSS file for styling
import Screenshot from '../images/ca.PNG'
const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Us</h2>
        <div className="row">
          <div className="col-md-6">
            <img src={Screenshot} alt="Team" className="team-photo" />
          </div>
          <div className="col-md-6">
      
            <p>Welcome to Andhar Bahar, the premier destination for Andar Bahar enthusiasts! Our app is designed to bring the excitement and thrill of the traditional Indian card game right to your fingertips. Whether you're a seasoned player or a newcomer looking to learn, Andhar bahar offers an immersive and engaging experience for everyone.</p>
           
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
