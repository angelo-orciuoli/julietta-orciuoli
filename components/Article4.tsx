import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const Article4: React.FC = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-md border-b border-lavender-200 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto h-20 flex items-center">
                    <a
                        href="/"
                        className="inline-flex items-center text-lavender-600 hover:text-lavender-800 font-medium transition-colors"
                    >
                        <ArrowLeft size={16} className="mr-2" />
                        Back to all articles
                    </a>
                </div>
            </header>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Article Header */}
                <header className="mb-8">
                    <p className="text-sm text-lavender-600 font-medium uppercase tracking-wide mb-3">
                        February 6, 2024
                    </p>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-slate-900 leading-tight mb-6">
                        Food Insecurity: The secret epidemic plaguing American University
                    </h1>
                    <div className="flex items-center gap-4 text-slate-500">
                        <span className="font-medium">By Julietta Orciuoli</span>
                    </div>
                </header>

                {/* Article Body */}
                <div className="prose prose-lg max-w-none font-sans text-slate-700 leading-relaxed">
                    <p>
                        [Replace this with your article content]
                    </p>

                    <hr className="mt-8 border-t border-slate-300" />
                </div>
            </article>
        </div>
    );
};

export default Article4;
