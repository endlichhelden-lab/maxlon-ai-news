import React from 'react';
import { COMPANIES, MARKET_DATA } from '../constants';
import { ArrowUpRight, TrendingUp, TrendingDown } from 'lucide-react';
import Reveal from './Reveal';

const CompanyWatch: React.FC = () => {
  return (
    <section id="watchlist" className="bg-zinc-900 text-white py-24">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        
        <Reveal>
          <div className="border-b border-white/10 pb-8 mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">
              Market <span className="text-zinc-500">Performance</span>
            </h2>
          </div>
        </Reveal>

        {/* Ticker Tape */}
        <div className="w-full overflow-hidden border-y border-white/5 bg-zinc-950 py-4 mb-16">
          <div className="animate-marquee flex gap-16 whitespace-nowrap">
             {[...MARKET_DATA, ...MARKET_DATA].map((asset, i) => (
                <div key={i} className="flex items-center space-x-4 font-mono text-sm">
                   <span className="font-bold text-white">{asset.symbol}</span>
                   <span className="text-zinc-400">{asset.price}</span>
                   <span className={`${asset.isPositive ? 'text-accent-500' : 'text-zinc-600'} flex items-center`}>
                      {asset.isPositive ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                      {asset.change}
                   </span>
                </div>
             ))}
          </div>
        </div>

        {/* Company Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {COMPANIES.map((company) => (
            <div key={company.id} className="bg-zinc-900 p-8 group hover:bg-zinc-800 transition-colors duration-300">
               <div className="flex justify-between items-start mb-6">
                 <div className="w-3 h-3 bg-accent-500 rounded-sm"></div>
                 {company.fundingBadge && (
                   <span className="text-[10px] font-mono border border-white/20 px-2 py-1 text-zinc-400">
                     {company.fundingBadge}
                   </span>
                 )}
               </div>

               <h3 className="text-2xl font-bold font-display mb-2">{company.name}</h3>
               <p className="text-sm text-zinc-400 mb-8 min-h-[3rem]">{company.description}</p>

               <div className="space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-600">Latest Signals</h4>
                  {company.updates.map((update) => (
                    <div key={update.id} className="border-l border-white/10 pl-3">
                       <p className="text-sm font-medium text-white group-hover:text-accent-400 transition-colors">{update.title}</p>
                       <p className="text-xs text-zinc-500 mt-1">{update.date}</p>
                    </div>
                  ))}
               </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CompanyWatch;