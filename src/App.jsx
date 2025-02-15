import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import FeaturesNew from './components/FeaturesNew';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsNew from './components/TestimonialsNew';
import TrustedBySection from './components/TrustedBySection';
import Footer from './components/Footer';
import PricingPage from './pages/PricingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-gradient-to-b from-gray-50 to-white">
              <Navbar />
              <Hero />
              {/* <HowItWorks /> */}
              <FeaturesNew />
              <FeaturesSection />
              <TestimonialsNew />
              <TrustedBySection />
              <Footer />
            </div>
          }
        />
        <Route path="/pricing" element={<PricingPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
