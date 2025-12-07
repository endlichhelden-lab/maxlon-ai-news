import React, { useEffect } from 'react';
import { X, Clock, Tag, Share2, ArrowUpRight } from 'lucide-react';
import { NewsItem } from '../types';

interface ArticleModalProps {
  article: NewsItem | null;
  onClose: () => void;
}

const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (article) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [article]);

  if (!article) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-float">
        
        {/* Header Image */}
        <div className="relative h-64 sm:h-80 flex-shrink-0">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white rounded-full transition-colors border border-white/10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-bold text-cyan-900 bg-cyan-400 rounded-full uppercase tracking-wide shadow-[0_0_15px_rgba(34,211,238,0.5)]">
              {article.category}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight">
              {article.title}
            </h2>
          </div>
        </div>

        {/* Content Scrollable Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 sm:p-8">
          <div className="flex items-center space-x-4 text-sm text-slate-400 mb-8 border-b border-white/5 pb-6">
            <span className="font-semibold text-slate-200">{article.source}</span>
            <span>•</span>
            <span className="flex items-center"><Clock className="w-4 h-4 mr-1.5" /> {article.date}</span>
          </div>

          <div className="prose prose-invert prose-lg max-w-none text-slate-300">
             {/* Render content paragraphs */}
             {article.content ? (
                article.content.split('\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-4 leading-relaxed">{paragraph.trim()}</p>
                ))
             ) : (
               <p>{article.summary}</p>
             )}
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Related Topics</h4>
            <div className="flex flex-wrap gap-2">
              {article.tags.map(tag => (
                <span key={tag} className="flex items-center text-xs text-cyan-300 bg-cyan-950/30 border border-cyan-500/20 px-3 py-1.5 rounded-md">
                  <Tag className="w-3 h-3 mr-1.5" /> {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-950/50 border-t border-white/10 flex justify-between items-center">
          <div className="flex space-x-3">
             <button className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
               <Share2 className="w-4 h-4" /> <span>Share</span>
             </button>
          </div>
          <button className="flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-2 rounded-full font-bold transition-all">
             <span>Visit Source</span> <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleModal;