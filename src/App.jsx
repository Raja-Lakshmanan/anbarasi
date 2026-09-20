import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Expertise from './components/Expertise';
import Insights from './components/Insights';
import Credentials from './components/Credentials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="bg-[#080808] text-[#F2F0EA] min-h-screen relative font-sans selection:bg-[#C8A45D] selection:text-[#080808]">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Expertise />
        <Insights />
        <Credentials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
