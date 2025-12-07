import React from 'react';
import { VIDEOS } from '../constants';
import { PlayCircle } from 'lucide-react';
import Reveal from './Reveal';

const VideoCarousel: React.FC = () => {
  return (
    <section id="deep-dives" className="py-20 bg-slate-950/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex justify-between items-end mb-8">
             <h2 className="text-3xl font-display font-bold text-white">Deep Dive Media</h2>
             <a href="#" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">View All Media &rarr;</a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEOS.map((video, index) => (
            <Reveal key={video.id} delay={index * 100}>
              <div className="group cursor-pointer">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10 group-hover:border-cyan-500/50 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.2)]">
                  <img src={video.thumbnailUrl} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <PlayCircle className="w-12 h-12 text-white/80 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 rounded text-xs font-mono text-white">
                    {video.duration}
                  </div>
                </div>
                <div className="flex space-x-3">
                   <div className="w-10 h-10 rounded-full bg-slate-800 flex-shrink-0 border border-white/10"></div>
                   <div>
                      <h3 className="text-base font-bold text-white leading-tight mb-1 group-hover:text-cyan-400 transition-colors">{video.title}</h3>
                      <p className="text-sm text-slate-400">{video.channel} • {video.views} views</p>
                   </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;