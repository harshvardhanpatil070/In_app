import React from 'react';
import PhoneFrame from './PhoneFrame';
import screenshot1 from './screenshot.png';
import screenshot2 from './screenshot.png';
// Import more screenshots as needed

const MainApp = () => {
  const screenshots = [screenshot1, screenshot2]; // Add more screenshots as needed
  return (
    <div >
      <PhoneFrame screenshots={screenshots} />
    </div>
  );
};

export default MainApp;