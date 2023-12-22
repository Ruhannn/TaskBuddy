// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <div className="container mx-auto">
        <p>&copy; 2023 Your Task Manager App</p>
        {/* Add social media links */}
        <div className="mt-4">
          <a href="#" className="mr-4">Twitter</a>
          <a href="#" className="mr-4">Facebook</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
