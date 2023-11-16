// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingSection from './components/LandingSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import ShowcaseSection from './components/ShowcaseSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          {/* The LandingSection can remain outside since it might be always displayed */}
          <LandingSection />
        </header>
        <main>
          {/* Routes define the different sections that will be displayed based on the URL path */}
          <Routes>
            <Route path="/" element={<AboutSection />} />
            <Route path="/features" element={<FeaturesSection />} />
            <Route path="/showcase" element={<ShowcaseSection />} />
            <Route path="/testimonials" element={<TestimonialsSection />} />
            <Route path="/contact" element={<ContactSection />} />
            {/* Add additional routes here */}
          </Routes>
        </main>
        <footer>
          {/* Footer content goes here */}
          <p>© 2023 Traffic Safety Project. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
