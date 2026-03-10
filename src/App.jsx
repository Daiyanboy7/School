import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar, Footer } from './components/Navigation';
import SideNav from './components/SideNav';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admission from './pages/Admission';
import Contact from './pages/Contact';
import ChairmanMessage from './pages/ChairmanMessage';
import PrincipalMessage from './pages/PrincipalMessage';
import Teachers from './pages/Teachers';

// SEO & UX Helper: This ensures the page starts at the top and updates the title
function ScrollAndTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Fix for SPAs: scroll to top on page change

    // Dynamic Title Logic for SEO
    const pageTitles = {
      '/': 'Sena Public School & College (SPSC) | Savar Cantt',
      '/about': 'About Us | Sena Public School & College',
      '/academics': 'Academics & Curriculum | SPSC Savar',
      '/admission': 'Admission Information 2026 | SPSC Savar',
      '/contact': 'Contact Us | Sena Public School & College',
      '/chairman-message': 'Message from Chairman | SPSC',
      '/principal-message': 'Message from Principal | SPSC',
      '/teachers': 'Our Faculty & Teachers | SPSC Savar',
    };

    document.title = pageTitles[pathname] || 'Sena Public School & College';
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white"> {/* Ensuring AMOLED black theme */}
      <ScrollAndTitle />
      <Navbar />
      <SideNav />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }} // Subtle lift animation
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/chairman-message" element={<ChairmanMessage />} />
              <Route path="/principal-message" element={<PrincipalMessage />} />
              <Route path="/teachers" element={<Teachers />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
