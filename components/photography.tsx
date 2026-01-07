import React from 'react';

interface PhotographySectionProps {
    id: string;
}

const photos = [
    '/visuals/photography/photo1.png',
    '/visuals/photography/photo2.png',
    '/visuals/photography/photo3.png',
    '/visuals/photography/photo4.png',
    '/visuals/photography/photo5.png',
    '/visuals/photography/photo7.png',
    '/visuals/photography/photo8.png',
    '/visuals/photography/photo9.png',
];

const PhotographySection: React.FC<PhotographySectionProps> = ({ id }) => {
    return (
        <section id={id} className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background decorative element */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-lavender-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4 flex items-center gap-3">
                        Photography
                    </h2>
                    <div className="h-1 w-20 bg-lavender-400 rounded-full"></div>
                </div>

                {/* Photos Grid - Masonry Style */}
                <div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 auto-rows-[200px]">
                        {photos.map((photoUrl, idx) => {
                            // Scatter pattern: some photos span 2 rows, creating visual variety
                            const spanClasses = [
                                'md:col-span-2 md:row-span-2', // photo 1 - large
                                'md:row-span-1',               // photo 2 - normal
                                'md:row-span-2',               // photo 3 - tall
                                'md:row-span-1',               // photo 4 - normal
                                'md:row-span-1',               // photo 5 - normal
                                'md:row-span-2',               // photo 7 - tall
                                'md:row-span-1',               // photo 8 - normal
                                'md:col-span-2 md:row-span-2', // photo 9 - large
                            ];
                            return (
                                <div
                                    key={idx}
                                    className={`relative group overflow-hidden rounded-xl shadow-md ${spanClasses[idx] || ''}`}
                                >
                                    <img
                                        src={photoUrl}
                                        alt={`Photo ${idx + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PhotographySection;
