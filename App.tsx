import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/about';
import WorkSection from './components/work';
import PhotographySection from './components/photography';
import ContactSection from './components/contact';
import Footer from './components/Footer';
import Article1 from './components/articles/Article1';
import Article2 from './components/articles/Article2';
import Article3 from './components/articles/Article3';
import Article4 from './components/articles/Article4';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Handle hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#article-1') {
        setCurrentPage('article-1');
      } else if (hash === '#article-2') {
        setCurrentPage('article-2');
      } else if (hash === '#article-3') {
        setCurrentPage('article-3');
      } else if (hash === '#article-4') {
        setCurrentPage('article-4');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange(); // Check on mount
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Simple scroll spy to update active nav link
  useEffect(() => {
    if (currentPage !== 'home') return;

    const handleScroll = () => {
      const sections = ['about', 'work', 'photography', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  // Render article pages
  if (currentPage === 'article-1') {
    return <Article1 />;
  }
  if (currentPage === 'article-2') {
    return <Article2 />;
  }
  if (currentPage === 'article-3') {
    return <Article3 />;
  }
  if (currentPage === 'article-4') {
    return <Article4 />;
  }

  // Render main portfolio
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar activeSection={activeSection} />

      <main className="flex-grow">
        <Hero id="about" />
        <WorkSection id="work" />
        <PhotographySection id="photography" />
        <ContactSection id="contact" />
      </main>

      <Footer />
    </div>
  );
};

export default App;