import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  id: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  return (
    <section id={id} className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">

      {/* Text Content */}
      <div className="flex-1 order-2 md:order-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight mb-6">
          <span className="text-lavender-600">About Me</span>
        </h1>
        <div className="prose prose-lg text-slate-600 mb-8 max-w-2xl mx-auto md:mx-0 font-sans leading-relaxed">
          <p>
            My name's Julietta Orciuoli and I'm originally from New York City! I am currently pursuing an undergraduate degree in Journalism and Literature at American University. I have a deep love for writing and am able to explore that in a variety of styles across these two majors. As an intersection of both of these passions, I am a blog editor on the schools literary magazine, AmLit. I also hold part-time jobs at a farmers market and soccer field where I explore my non-academic passions. Additionally, in my free time I like reading, biking, and doing crosswords.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#work"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 md:py-4 md:text-lg transition-all shadow-lg hover:shadow-xl"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-slate-300 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 md:py-4 md:text-lg transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 order-1 md:order-2 flex justify-center relative">
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          {/* Decor squares */}
          <div className="absolute top-0 right-0 -mr-4 -mt-4 w-full h-full border-2 border-lavender-300 rounded-2xl z-0"></div>
          <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-full h-full bg-lavender-100 rounded-2xl z-0"></div>

          {/* Main Image */}
          <img
            src="/visuals/about/jo-prof.png"
            alt="Portrait of Julietta"
            className="relative w-full h-full object-cover rounded-xl shadow-md z-10"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-slate-400">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;