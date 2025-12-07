import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import Reveal from './Reveal';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full min-h-[90vh] flex items-center pt-20 overflow-hidden">
      
      {/* Structural Grid Lines (Subtle) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-px h-full bg-white/5 absolute left-6 md:left-12"></div>
        <div className="w-px h-full bg-white/5 absolute right-6 md:right-12"></div>
      </div>

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Headline Area */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <Reveal>
              <div className="inline-block mb-6">
                <span className="text-accent-500 font-mono text-xs tracking-widest uppercase font-bold border border-accent-500/30 px-3 py-1">
                  System Status: Accelerated
                </span>
              </div>
            </Reveal>
            
            <Reveal delay={100}>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white leading-[0.9] tracking-tight mb-8">
                INTELLIGENCE <br />
                <span className="text-zinc-500">REFINED.</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl leading-relaxed font-light">
                The signal in the noise. We track the trajectory of artificial intelligence, from silicon architecture to policy framework.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-12 flex flex-wrap gap-6">
                <button className="group bg-white text-zinc-950 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent-500 hover:text-white transition-all flex items-center">
                  Latest Briefing
                  <ArrowDownRight className="ml-2 w-4 h-4 group-hover:rotate-45 transition-transform" />
                </button>
                <button className="text-white border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-white hover:bg-white/5 transition-all">
                  Access Archive
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right Column - Data/Abstract */}
          <div className="lg:col-span-4 flex flex-col justify-end pb-12">
             <Reveal delay={400}>
                <div className="border-t border-white/20 pt-6">
                  <h3 className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-2">Current Focus</h3>
                  <ul className="space-y-2 text-lg font-display font-medium text-white">
                    <li className="flex items-center justify-between group cursor-pointer border-b border-white/5 pb-2">
                      <span>Reasoning Models</span>
                      <ArrowDownRight className="w-4 h-4 text-zinc-600 group-hover:text-accent-500" />
                    </li>
                    <li className="flex items-center justify-between group cursor-pointer border-b border-white/5 pb-2">
                      <span>Hardware Limits</span>
                      <ArrowDownRight className="w-4 h-4 text-zinc-600 group-hover:text-accent-500" />
                    </li>
                    <li className="flex items-center justify-between group cursor-pointer border-b border-white/5 pb-2">
                      <span>Open Weights</span>
                      <ArrowDownRight className="w-4 h-4 text-zinc-600 group-hover:text-accent-500" />
                    </li>
                  </ul>
                </div>
             </Reveal>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;