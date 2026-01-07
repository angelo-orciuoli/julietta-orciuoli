import React from 'react';
import { ExternalLink } from 'lucide-react';
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

const WorkSection: React.FC<WorkSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Select Articles</h2>
          <div className="h-1 w-20 bg-lavender-400 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-slate-100"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-xs text-slate-400 mb-2 font-sans uppercase tracking-wide">
                    {article.date}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 group-hover:text-lavender-700 transition-colors leading-snug">
                    {article.title}
                  </h3>
                </div>

                <div className="pt-4 mt-auto border-t border-slate-200">
                  <a
                    href={`#article-${article.id}`}
                    className="inline-flex items-center text-sm font-semibold text-lavender-600 hover:text-lavender-800 transition-colors"
                  >
                    Read Article <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;