import React, { useState } from 'react';
import { ArrowDown, ChevronDown } from 'lucide-react';

interface HeroProps {
  id: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);

  return (
    <section id={id} className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Main content row - bio/buttons aligned with image */}
      <div className="flex flex-col md:flex-row items-end gap-12 md:gap-20">
        {/* Text Content */}
        <div className="flex-1 order-2 md:order-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight mb-6">
            <span className="text-lavender-600">About Me</span>
          </h1>
          <div className="prose prose-2xl text-slate-600 mb-8 max-w-2xl mx-auto md:mx-0 font-sans leading-relaxed">
            <p>
              My name's Julietta Orciuoli and I'm originally from New York City! I am currently pursuing an undergraduate degree in Journalism and Literature at American University. I have a deep love for writing and am able to explore that in a variety of styles across these two majors. As an intersection of both of these passions, I am a blog editor on the schools literary magazine, AmLit. Outside of this work, I love spending time working at a local farmers market and Reeves Field (AU's soccer facility) and very much enjoy to read, bike, curate playlists, and the occasional crossword puzzle.
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

        {/* Image Only */}
        <div className="flex-1 order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Decor squares */}
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-full h-full border-2 border-lavender-300 rounded-2xl z-0"></div>
            <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-full h-full bg-lavender-100 rounded-2xl z-0"></div>

            {/* Main Image */}
            <img
              src={`${import.meta.env.BASE_URL}visuals/about/jo-prof.png`}
              alt="Portrait of Julietta"
              className="relative w-full h-full object-cover rounded-xl shadow-md z-10"
            />
          </div>
        </div>
      </div>

      {/* On Rotation - Curated Playlists (collapsible dropdown) */}
      <div className="mt-10">
        <button
          onClick={() => setIsPlaylistOpen(!isPlaylistOpen)}
          className="text-base font-semibold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2 hover:text-lavender-600 transition-colors cursor-pointer"
        >
          <span>🎧</span> View My Spotify Rotation
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${isPlaylistOpen ? 'rotate-180' : ''}`}
          />
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isPlaylistOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div
            className="flex gap-4 hover:[animation-play-state:paused]"
            style={{
              animation: isPlaylistOpen ? 'scroll 30s linear infinite' : 'none',
            }}
          >
            {/* Duplicate the playlists for seamless infinite loop */}
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-4 shrink-0">
                {[
                  { title: 'bridging', id: '3gcjU3in5sUlXonjgXj0zk' },
                  { title: '1152', id: '7aXR0Wd2wcKkxOg5nKAL52' },
                  { title: 'walk to watkins', id: '2a9XYzAMJA73vTr0aWJ3Xs' },
                  { title: 'quadrangle', id: '7c5kg6kOeabpsMs3e3HkRK' },
                  { title: 'finalsfinalsfinals', id: '0J699LkNL51Tcx8GGkqxTy' },
                  { title: 'ikebukuro', id: '2hbav2ncXUiFX4DhtA4uNE' },
                ].map((playlist) => (
                  <div
                    key={`${setIndex}-${playlist.id}`}
                    className="w-72 shrink-0 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <iframe
                      src={`https://open.spotify.com/embed/playlist/${playlist.id}`}
                      width="100%"
                      height="152"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      title={playlist.title}
                      className="rounded-xl"
                    ></iframe>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-slate-400">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;