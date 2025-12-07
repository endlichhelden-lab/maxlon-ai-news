import React from 'react';
import { REDDIT_THREADS } from '../constants';
import { MessageSquare, ArrowBigUp, Award } from 'lucide-react';
import Reveal from './Reveal';

const RedditFeed: React.FC = () => {
  return (
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Col: Explanation */}
        <Reveal>
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Community Pulse</h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Direct feeds from the researchers, engineers, and enthusiasts debating the bleeding edge on decentralized forums.
            </p>
            
            <div className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border border-orange-500/20 rounded-xl p-6 hover:border-orange-500/40 transition-colors duration-500">
              <h3 className="text-orange-400 font-bold mb-2 flex items-center">
                <Award className="w-5 h-5 mr-2" /> Top Insight
              </h3>
              <p className="text-slate-300 text-sm italic">
                "The gap between open weights and proprietary models is closing faster than anticipated. 2025 will be the year of local inference."
              </p>
              <div className="mt-4 flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-slate-700"></div>
                <span className="text-xs text-slate-500">u/AI_Researcher_99</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right Col: Threads */}
        <div className="lg:col-span-2 space-y-4">
          {REDDIT_THREADS.map((thread, index) => (
            <Reveal key={thread.id} delay={index * 100}>
              <div className="bg-slate-900 border border-white/5 rounded-lg p-5 hover:border-orange-400/30 transition-all duration-300 hover:-translate-x-1 flex gap-4 hover:shadow-[0_0_15px_rgba(251,146,60,0.1)]">
                <div className="flex flex-col items-center space-y-1 min-w-[40px]">
                  <ArrowBigUp className="w-6 h-6 text-slate-500 hover:text-orange-500 cursor-pointer transition-colors" />
                  <span className="text-xs font-bold text-slate-300">{(thread.upvotes / 1000).toFixed(1)}k</span>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs font-bold text-slate-400 hover:text-white cursor-pointer transition-colors">{thread.subreddit}</span>
                    <span className="text-xs text-slate-600">• 4h ago</span>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-200 mb-2 hover:text-cyan-400 cursor-pointer transition-colors">
                    {thread.title}
                  </h4>
                  
                  <div className="bg-slate-950/50 rounded p-3 mb-3 border border-white/5">
                     <p className="text-sm text-slate-400">
                       <span className="text-cyan-500 font-bold text-xs uppercase mr-2">Top Comment:</span>
                       {thread.topInsight}
                     </p>
                  </div>

                  <div className="flex items-center space-x-4 text-xs text-slate-500 font-bold">
                    <button className="flex items-center hover:bg-slate-800 px-2 py-1 rounded transition-colors">
                      <MessageSquare className="w-4 h-4 mr-1.5" /> {thread.comments} Comments
                    </button>
                    <button className="hover:bg-slate-800 px-2 py-1 rounded transition-colors">Share</button>
                    <button className="hover:bg-slate-800 px-2 py-1 rounded transition-colors">Save</button>
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

export default RedditFeed;