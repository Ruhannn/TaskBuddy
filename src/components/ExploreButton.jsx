/* eslint-disable react/no-unescaped-entities */

import { Link } from 'react-router-dom';

const ExploreButton = () => {
  return (
    <div className="text-center mt-8">
      <Link to="/login" className="bg-green-500 text-white py-2 px-4 rounded-full">
        Let's Explore
      </Link>
    </div>
  );
};

export default ExploreButton;
