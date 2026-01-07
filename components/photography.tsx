import React from 'react';

interface PhotographySectionProps {
    id: string;
}

const photos = [
    `${import.meta.env.BASE_URL}visuals/photography/photo1.png`, `${import.meta.env.BASE_URL}visuals/photography/photo2.png`,
    `${import.meta.env.BASE_URL}visuals/photography/photo3.png`, `${import.meta.env.BASE_URL}visuals/photography/photo4.png`,
    `${import.meta.env.BASE_URL}visuals/photography/photo5.png`, `${import.meta.env.BASE_URL}visuals/photography/photo7.png`,
    `${import.meta.env.BASE_URL}visuals/photography/photo8.png`, `${import.meta.env.BASE_URL}visuals/photography/photo9.png`,
];

const PhotographySection: React.FC<PhotographySectionProps> = ({ id }) => {
    return (
        <section id={id} className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background decorative element */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-lavender-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4 flex items-center gap-3">
                        My Recent Captures
                    </h2>
                    <div className="h-1 w-20 bg-lavender-400 rounded-full"></div>
                </div>

                {/* Photos Grid - Dramatic Scattered Masonry Layout */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
                    {photos.map((photoUrl, idx) => {
                        // Varying aspect ratios to create organic height differences
                        const aspectClasses = [
                            'aspect-[3/4]',   // photo 1 - tall portrait
                            'aspect-[4/3]',   // photo 2 - landscape
                            'aspect-[3/2]',   // photo 3 - very tall
                            'aspect-[1/1]',   // photo 4 - square
                            'aspect-[4/5]',   // photo 5 - portrait
                            'aspect-[3/2]',   // photo 6 - wide landscape
                            'aspect-[5/7]',   // photo 7 - tall
                            'aspect-[16/9]',  // photo 8 - cinematic wide
                        ];
                        // Large varied margins for dramatic scatter
                        const marginClasses = [
                            'mt-0',
                            'mt-16',
                            'mt-4',
                            'mt-24',
                            'mt-8',
                            'mt-20',
                            'mt-2',
                            'mt-12',
                        ];
                        return (
                            <div
                                key={idx}
                                className={`relative group overflow-hidden rounded-xl shadow-lg break-inside-avoid mb-8 ${marginClasses[idx] || 'mt-0'}`}
                            >
                                <div className={`${aspectClasses[idx] || 'aspect-[4/5]'} w-full`}>
                                    <img
                                        src={photoUrl}
                                        alt={`Photo ${idx + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default PhotographySection;
