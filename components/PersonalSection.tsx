import React from 'react';
import { Camera, Music, Play } from 'lucide-react';
import { PhotoItem, PlaylistItem } from '../types';

interface PersonalSectionProps {
  id: string;
}

const photos: PhotoItem[] = [
  { id: '1', url: 'https://picsum.photos/400/500?random=10', caption: 'Rainy Tuesdays' },
  { id: '2', url: 'https://picsum.photos/400/300?random=11', caption: 'Library Corners' },
  { id: '3', url: 'https://picsum.photos/400/400?random=12', caption: 'Subway Reads' },
  { id: '4', url: 'https://picsum.photos/400/300?random=13', caption: 'Campus at Dusk' },
];

const playlists: PlaylistItem[] = [
  {
    id: 'p1',
    title: 'Writing Deadlines',
    description: 'Instrumental focus for late nights.',
    coverImage: 'https://picsum.photos/200/200?random=20',
    platform: 'Spotify',
    mood: 'Focus'
  },
  {
    id: 'p2',
    title: 'Sunday Morning Coffee',
    description: 'Jazz, Soul, and soft vocals.',
    coverImage: 'https://picsum.photos/200/200?random=21',
    platform: 'Apple Music',
    mood: 'Relaxed'
  },
  {
    id: 'p3',
    title: 'Main Character Energy',
    description: 'Indie pop for walking to class.',
    coverImage: 'https://picsum.photos/200/200?random=22',
    platform: 'Spotify',
    mood: 'Upbeat'
  }
];

const PersonalSection: React.FC<PersonalSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Background decorative element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-lavender-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4 flex items-center gap-3">
             Photos & Playlists
          </h2>
          <div className="h-1 w-20 bg-lavender-400 rounded-full"></div>
          <p className="mt-4 text-slate-500 max-w-2xl">
            A glimpse into my world through a lens and my headphones.
          </p>
        </div>

        {/* Photos Grid */}
        <div className="mb-16">
           <div className="flex items-center gap-2 mb-6 text-slate-400 uppercase tracking-widest text-xs font-semibold">
                <Camera size={16} />
                <span>Film Roll</span>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {photos.map((photo, idx) => (
               <div key={photo.id} className={`relative group overflow-hidden rounded-lg shadow-sm ${idx === 0 ? 'row-span-2 h-full' : 'h-64'}`}>
                 <img 
                    src={photo.url} 
                    alt={photo.caption} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end">
                    <p className="text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                        {photo.caption}
                    </p>
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* Playlists Row */}
        <div>
            <div className="flex items-center gap-2 mb-6 text-slate-400 uppercase tracking-widest text-xs font-semibold">
                <Music size={16} />
                <span>On Rotation</span>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {playlists.map((playlist) => (
                    <div key={playlist.id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex items-center gap-4 group cursor-pointer">
                        <div className="relative w-20 h-20 flex-shrink-0">
                            <img src={playlist.coverImage} alt={playlist.title} className="w-full h-full object-cover rounded-md shadow-sm" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                                <Play size={24} className="text-white fill-current" />
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="text-base font-bold text-slate-900 truncate">{playlist.title}</h4>
                            <p className="text-xs text-slate-500 mb-1">{playlist.description}</p>
                            <span className={`inline-block px-2 py-0.5 text-[10px] uppercase font-bold tracking-wide rounded-sm ${
                                playlist.platform === 'Spotify' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                            }`}>
                                {playlist.platform}
                            </span>
                        </div>
                    </div>
                ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default PersonalSection;