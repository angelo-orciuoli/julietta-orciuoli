import React, { useState } from 'react';
import { Menu, X, Linkedin, Mail } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'My Work', href: '#work', id: 'work' },
    { name: 'Photography', href: '#photography', id: 'photography' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-lavender-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-lavender-500 rounded-full flex items-center justify-center text-white">
              <span className="font-serif font-bold text-lg">JO</span>
            </div>
            <span className="font-serif font-semibold text-xl tracking-tight text-slate-800">
              Julietta Orciuoli
            </span>
            <div className="flex items-center gap-2 ml-1">
              <a
                href="https://www.linkedin.com/in/julietta-orciuoli-737665253/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-slate-400 hover:text-lavender-600 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:jrorciuoli@gmail.com"
                onClick={(e) => e.stopPropagation()}
                className="text-slate-400 hover:text-lavender-600 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-lavender-600 font-sans ${activeSection === link.id ? 'text-lavender-700 border-b-2 border-lavender-400 pb-1' : 'text-slate-500'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-lavender-600 focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-lavender-100 shadow-sm">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${activeSection === link.id
                  ? 'text-lavender-800 bg-lavender-50'
                  : 'text-slate-600 hover:text-lavender-600 hover:bg-slate-50'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;