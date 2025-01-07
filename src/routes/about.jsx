import React from 'react';
import bgImage from '../assets/pake2.png';
import Navbar from '../components/navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <section className="p-10 min-h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white">
        <div className="container mx-auto flex flex-col items-center md:flex-row">
          <div className="md:w-2/5 mb-8 md:mb-0">
            <img src={bgImage} alt="About Me" className="rounded-lg shadow-lg w-full h-auto object-cover" />
          </div>
          <div className="md:w-1/2 md:ml-10">
            <h2 className="text-3xl mb-4">About Me</h2>
            <p className="text-lg leading-relaxed">
            I am an informatics student who has study a web developing with a passion for creating beautiful and functional websites. I'm also joining various organisations on campus such as photographer & videographer, event design and
            decoration, and social media. I also have good negotiation skills and strong leadership skills.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
