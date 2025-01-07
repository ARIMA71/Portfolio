import React from 'react';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white p-10 text-center mx-auto flex flex-col items-center">
        <section className="">
          <h2 className="text-4xl mb-4">Hi, my name is Abel Trivia Bima Prawira</h2>
          <p className="text-xl">Here I'll show you some of the recent project and skills I have and some other little info</p>
        </section>
        <section className="flex justify-center space-x-4 mt-32 items-center">
          <Link to="/projects">
            <img src={image1} alt="image1" className="w-96 mx-10 h-auto rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl" />
          </Link>
          <Link to="/projects">
            <img src={image2} alt="image2" className="w-96 mx-10 h-auto rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl" />
          </Link>
          <Link to="/projects">
            <img src={image3} alt="image3" className="w-96 mx-10 h-auto rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl" />
          </Link>
        </section>
      </div>
    </>
  );
}

export default Hero;
