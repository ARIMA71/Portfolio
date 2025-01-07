import React from 'react';
import Navbar from '../components/navbar';
import image from '../assets/port.JPG';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white p-10 flex flex-col items-center">
        <h2 className="text-3xl mb-8">Contact</h2>
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8 text-center md:text-left">
            <h3 className="text-xl mb-4">Get in Touch</h3>
            <p className="mb-4">You can reach out to me through the following social media platforms or via email:</p>
            <ul className="list-none">
              <li className="mb-2">
                <a
                  href="https://www.linkedin.com/in/abel-bima-26a82a25b/"
                  className="text-white hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://github.com/ARIMA71"
                  className="text-white hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://instagram.com/abel_bima"
                  className="text-white hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="mailto:abelbima4713@gmail.com"
                  className="text-white hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mail
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-2/5 ml-16">
            <img src={image} alt="Contact" className=" rounded-lg shadow-lg w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
