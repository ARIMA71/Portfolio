import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-black p-4 shadow-xl">
      <div className="flex justify-between items-center">
        <Link data-testid="hero-page" to={'/'} className='mx-4 text-white text-xl transform transition-transform duration-300 hover:text-gray-500'>My Portfolio</Link>
        <div className="flex">
          <Link data-testid="about-page" to={'/about'} className='text-white text-lg mx-4 transform transition-transform duration-300 hover:text-gray-500'>About</Link>
          <Link data-testid="projects-page" to={'/projects'} className='text-white text-lg mx-4 transform transition-transform duration-300 hover:text-gray-500'>Projects</Link>
          <Link data-testid="contacts-page" to={'/contacts'} className='text-white text-lg mx-4 transform transition-transform duration-300 hover:text-gray-500'>Contact Me</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
