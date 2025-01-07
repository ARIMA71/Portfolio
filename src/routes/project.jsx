import React from 'react';
import Navbar from '../components/navbar';
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

const Projects = () => {
  return (
    <>
    <Navbar />
    <section className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 p-10 text-white">
      <h2 className="text-3xl mb-4 text-white text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {/* Tambahkan proyek Anda di sini */}
        <div className="bg-gradient-to-r from-black to-gray-800 p-4 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl mb-2">Project 1</h3>
          <p>Description of project 1.</p>
          <img src={image1} alt="image1" className="p-5 w-auto h-auto rounded-lg cursor-pointer" />
        </div>
        <div className="bg-gradient-to-r from-black to-gray-800 p-4 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl mb-2">Project 2</h3>
          <p>Description of project 2.</p>
          <img src={image2} alt="image2" className="p-5 w-auto h-auto rounded-lg cursor-pointer" />
        </div>
        <a 
          className="bg-gradient-to-r from-black to-gray-800 p-4 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          href="https://drive.google.com/drive/u/1/folders/1s7l32YevXGNug1d2avUc4rxWMeSZHmrO">
          <h3 className="text-xl mb-2">Project 3</h3>
          <p>Description of project 3.</p>
          <img src={image3} alt="image3" className="p-5 w-auto h-auto rounded-lg cursor-pointer" />
        </a>
      </div>
    </section>
    </>
  );
}

export default Projects;
