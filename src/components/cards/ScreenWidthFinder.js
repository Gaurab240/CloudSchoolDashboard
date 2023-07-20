import React, { useState, useEffect } from 'react';

const ScreenWidthFinder = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Function to update the width on resize
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener on component mount
    window.addEventListener('resize', updateScreenWidth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  return (
    <div>
      <p>Screen width: {screenWidth}px</p>
    </div>
  );
};

export default ScreenWidthFinder;
