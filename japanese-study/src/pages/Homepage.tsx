import React from 'react';
import Navbar from '../components/Navbar';
import SolidButton from '@components/SolidButton';

const Homepage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center my-6 text-white">
        <h1 className="leading-tight">Online Japanese Lessons</h1>
        <h1 className="mb-4">
          Learn From <span className="text-primary">Expert</span>
        </h1>
        <p className="paragraph-width text-center mb-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex iure sit
          veritatis delectus praesentium fugit maiores provident, sed, et, illum
          doloribus ducimus eius necessitatibus.
        </p>
        <SolidButton color="primary" size="large" label="Get Started" />
      </div>
    </>
  );
};

export default Homepage;
