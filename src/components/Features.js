import React from 'react';
import { FaMobileAlt, FaLock, FaRocket, FaUserFriends } from 'react-icons/fa';
import './Features.css'; // Import your CSS file for styling

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2>Key Features</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="feature">
              <div className="icon">
                <FaMobileAlt />
              </div>
              <div className="content">
                <h3>Responsive Design</h3>
                <p>Works seamlessly on all devices, providing a consistent experience.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature">
              <div className="icon">
                <FaLock />
              </div>
              <div className="content">
                <h3>Secure Encryption</h3>
                <p>Ensures your data is protected with the latest encryption technology.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature">
              <div className="icon">
                <FaRocket />
              </div>
              <div className="content">
                <h3>High Performance</h3>
                <p>Delivers fast loading times and smooth performance even with high usage.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature">
              <div className="icon">
                <FaUserFriends />
              </div>
              <div className="content">
                <h3>User Friendly</h3>
                <p>Intuitive interface that makes it easy for users to navigate and use.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
