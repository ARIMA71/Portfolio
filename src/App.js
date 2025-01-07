import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './routes/hero';
import Projects from './routes/project';
import About from './routes/about';
import Contact from './routes/contact';

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Hero />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contacts" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
