import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Julietta Orciuoli
        </div>
      </div>
    </footer>
  );
};

export default Footer;