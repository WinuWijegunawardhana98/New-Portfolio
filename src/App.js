import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import './App.css'; 
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <Router > 
      <div className="App">
       
        <Header />

        
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/about" element={<About />} />  
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
