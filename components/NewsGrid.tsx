import React, { useState, useEffect } from 'react';
import { NEWS_DATA } from '../constants';
import { fetchRealtimeNews } from '../services/geminiService';
import { ArrowUpRight, Radio, RefreshCw, ExternalLink } from 'lucide-react';
import { NewsItem } from '../types';
import ArticleModal from './ArticleModal';
import Reveal from './Reveal';

const CATEGORIES = ['All', 'Breakthrough', 'Business', 'Policy', 'Research', 'Hardware'];

const NewsGrid: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [newsItems, setNewsItems] = useState<NewsItem[]>(NEWS_DATA); // Init with static for immediate render or fallback
  const [isLoading, setIsLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);
  const [sources, setSources] = useState<string[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  useEffect(() => {
    const loadNews = async () => {
      setIsLoading(true);
      const { news, sources: fetchedSources } = await fetchRealtimeNews();
      
      if (news.length > 0) {
        setNewsItems(news);
        setSources(fetchedSources);
        setIsLive(true);
      } else {
        // Keep static data if fetch returns empty (e.g. no API key)
        setIsLive(false);
      }
      setIsLoading(false);
    };

    loadNews();
  }, []);

  const filteredNews = filter === 'All' 
    ? newsItems 
    : newsItems.filter(item => item.category === filter);

  return (
    <section id="briefing" className="bg-zinc-950 py-12 border-t border-white/10 min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight">
                  Global <span className="text-zinc-600">Feed</span>
                </h2>
                {isLoading ? (
                  <RefreshCw className="w-5 h-5 text-zinc-600 animate-spin" />
                ) : isLive ? (
                   <span className="flex items-center px-2 py-1 bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold uppercase tracking-widest rounded animate-pulse">
                     <Radio className="w-3 h-3 mr-1" /> Live
                   </span>
                ) : (
                   <span className="px-2 py-1 bg-zinc-800 border border-white/5 text-zinc-500 text-[10px] font-bold uppercase tracking-widest rounded">
                     Cached
                   </span>
                )}
              </div>
              <p className="text-zinc-500 text-sm">
                {isLive ? 'Real-time intelligence via Google Search Grounding' : 'Curated selection of top stories'}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-sm font-bold uppercase tracking-wider transition-colors pb-1 border-b-2 ${
                    filter === cat 
                      ? 'text-accent-500 border-accent-500' 
                      : 'text-zinc-500 border-transparent hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* The Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 transition-opacity duration-500 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
          {filteredNews.map((item, index) => (
            <Reveal key={item.id} delay={index * 50}>
              <article 
                className="group cursor-pointer flex flex-col h-full"
                onClick={() => setSelectedArticle(item)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/3] mb-6 bg-zinc-900 border border-white/5 group-hover:border-accent-500/30 transition-colors">
                   <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                   />
                   <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white text-black p-2 rounded-full">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                   </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-3">
                     <span className="text-xs font-mono text-accent-500 uppercase tracking-widest">{item.category}</span>
                     <span className="text-xs text-zinc-500 font-mono">{item.date}</span>
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-white mb-3 leading-tight group-hover:text-accent-500 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Live Sources Footer */}
        {isLive && sources.length > 0 && (
          <Reveal delay={200}>
            <div className="mt-20 pt-8 border-t border-white/10">
              <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4 flex items-center">
                <Radio className="w-3 h-3 mr-2" /> Verified Sources
              </h4>
              <div className="flex flex-wrap gap-4">
                {sources.map((source, i) => (
                  <a 
                    key={i} 
                    href={source} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-xs text-zinc-400 hover:text-accent-500 transition-colors bg-zinc-900 px-3 py-1.5 rounded border border-white/5"
                  >
                    <ExternalLink className="w-3 h-3 mr-1.5" />
                    {new URL(source).hostname.replace('www.', '')}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        )}

      </div>

      <ArticleModal 
        article={selectedArticle} 
        onClose={() => setSelectedArticle(null)} 
      />
    </section>
  );
};

export default NewsGrid;