import React from 'react';
import './Home.css'; // Import your CSS file for styling
import Screenshot from '../images/ca.PNG'

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Welcome to Andhar Bahar</h1>
            <p>Experience the thrill of our app with unique features tailored just for you</p>
            <button className="btn-primary">Download Now</button>
          </div>
          <div className="col-md-6">
            <img src={Screenshot} alt="App Screenshot" className="app-screenshot" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
