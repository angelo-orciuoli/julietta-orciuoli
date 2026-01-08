import React from 'react';
import { Video, Headphones } from 'lucide-react';
import { Article } from '../types';

interface WorkSectionProps {
  id: string;
}

const articles: Article[] = [
  {
    id: '1',
    title: "The Muslim Student Union at American University struggles to find support and funding but still shows up for their community regardless",
    date: 'April 9, 2024',
    image: `${import.meta.env.BASE_URL}visuals/work/article1.png`
  },
  {
    id: '2',
    title: "American University students have a false sense of safety in DCs second most dangerous ward",
    date: 'March 18, 2024',
    image: `${import.meta.env.BASE_URL}visuals/work/article2.png`
  },
  {
    id: '3',
    title: "The proposed historic district in Chevy Chase is still being debated and causing tension within the community",
    date: 'February 19, 2024',
    image: `${import.meta.env.BASE_URL}visuals/work/article3.png`
  },
  {
    id: '4',
    title: "Food Insecurity: The secret epidemic plaguing American University",
    date: 'February 6, 2024',
    image: `${import.meta.env.BASE_URL}visuals/work/article4.png`
  }
];

const mediaStories = [
  {
    id: '5',
    type: 'video',
    title: "Muslim Students’ Ramadan Experience at AU",
    date: 'April 16, 2024',
    icon: Video
  },
  {
    id: '6',
    type: 'audio',
    title: "Audio story on a campus couple: An AU meet-cute",
    date: 'May 1, 2024',
    icon: Headphones
  }
];

const WorkSection: React.FC<WorkSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Articles & Stories</h2>
          <div className="h-1 w-20 bg-lavender-400 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <a
              key={article.id}
              href={`#article-${article.id}`}
              className="group flex flex-col bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-slate-100 cursor-pointer"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="text-xs text-slate-400 mb-2 font-sans uppercase tracking-wide">
                  {article.date}
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 group-hover:text-lavender-700 transition-colors leading-snug">
                  {article.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* Media Stories - Half height cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {mediaStories.map((story) => (
            <a
              key={story.id}
              href={`#story-${story.id}`}
              className="group flex items-center gap-4 bg-slate-50 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 border border-slate-100 cursor-pointer"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-lavender-100 rounded-xl flex items-center justify-center group-hover:bg-lavender-200 transition-colors">
                <story.icon size={24} className="text-lavender-600" />
              </div>
              <div className="flex flex-col">
                <div className="text-xs text-slate-400 mb-2 font-sans uppercase tracking-wide">
                  {story.date}
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-lavender-700 transition-colors leading-snug">
                  {story.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;