import React, { useState } from 'react';
import { EDU_CONCEPTS, TOOL_GUIDES, EDU_VIDEOS, COMPANY_LEARNING_VIDEOS } from '../constants';
import { Brain, MessageSquare, Database, Layers, ChevronRight, PlayCircle, BookOpen, Terminal, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import Reveal from './Reveal';

// Note: State for launching the full curriculum is handled in App.tsx or via a callback prop if we strictly followed prop drilling,
// but for this implementation I'll dispatch a custom event or let App pass a prop.
// For simplicity in this edit, I will assume App passes a prop `onOpenCurriculum`. 
// However, since I cannot change the Props interface without breaking the build if I don't update the parent, 
// I will dispatch a window event or add the prop if I update App.tsx simultaneously (which I am).

interface EducationSectionProps {
  onOpenCurriculum?: () => void;
}

const EducationSection: React.FC<EducationSectionProps> = ({ onOpenCurriculum }) => {
  const [activeToolId, setActiveToolId] = useState(TOOL_GUIDES[0].id);
  const activeTool = TOOL_GUIDES.find(t => t.id === activeToolId) || TOOL_GUIDES[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Brain': return <Brain className="w-8 h-8 text-violet-400" />;
      case 'MessageSquare': return <MessageSquare className="w-8 h-8 text-cyan-400" />;
      case 'Database': return <Database className="w-8 h-8 text-emerald-400" />;
      default: return <Layers className="w-8 h-8 text-slate-400" />;
    }
  };

  return (
    <section id="education" className="py-24 bg-slate-900/30 backdrop-blur-sm relative overflow-hidden">
      {/* Background decoration - subtle tint */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl font-display font-bold text-white mb-4">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Education Hub</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl">
                From zero to neural hero. Master the concepts, learn the tools, and deploy the future.
              </p>
            </div>
            
            <button 
              onClick={onOpenCurriculum}
              className="group flex items-center bg-white text-zinc-950 px-6 py-4 font-bold uppercase tracking-widest hover:bg-accent-500 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <BookOpen className="w-5 h-5 mr-3" />
              Launch Full Curriculum
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </Reveal>

        {/* 1. Starter Pack Concepts */}
        <div className="mb-20">
          <Reveal>
            <div className="flex items-center space-x-2 mb-8">
              <Zap className="w-5 h-5 text-accent-500" />
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">Quick Start: Core Concepts</h3>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDU_CONCEPTS.map((concept, index) => (
              <Reveal key={concept.id} delay={index * 100}>
                <div className="bg-slate-900/50 border border-white/10 rounded-xl p-8 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-2 group backdrop-blur-md shadow-lg hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.15)]">
                  <div className="mb-6 p-4 bg-slate-950 rounded-lg inline-block border border-white/5 group-hover:border-cyan-500/20 transition-colors group-hover:scale-110 duration-300">
                    {getIcon(concept.iconName)}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{concept.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{concept.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 2. Tool Command Center */}
        <div className="mb-20">
          <Reveal>
            <div className="flex items-center space-x-2 mb-8">
              <Terminal className="w-5 h-5 text-violet-400" />
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">Command Center: Product Guides</h3>
            </div>
            
            <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px] shadow-2xl">
              {/* Sidebar Selector */}
              <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-white/10 bg-slate-950/50 overflow-y-auto max-h-[500px] custom-scrollbar">
                {TOOL_GUIDES.map((tool) => (
                  <button
                    key={tool.id}
                    onClick={() => setActiveToolId(tool.id)}
                    className={`w-full text-left px-8 py-6 border-l-4 transition-all flex justify-between items-center group ${
                      activeToolId === tool.id 
                        ? 'border-cyan-500 bg-white/5 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]' 
                        : 'border-transparent hover:bg-white/5'
                    }`}
                  >
                    <div>
                      <span className={`block font-bold text-lg mb-1 transition-colors ${activeToolId === tool.id ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                        {tool.toolName}
                      </span>
                      <span className="text-xs text-slate-500 uppercase tracking-widest">{tool.company}</span>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeToolId === tool.id ? 'text-cyan-400 translate-x-1' : 'text-slate-600 group-hover:translate-x-1'}`} />
                  </button>
                ))}
              </div>

              {/* Content Area */}
              <div className="flex-1 p-8 md:p-12 bg-gradient-to-br from-slate-900/50 to-transparent overflow-y-auto">
                 <div className="animate-in fade-in slide-in-from-right-4 duration-500" key={activeToolId}>
                    <div className="flex items-center space-x-4 mb-6">
                      <h3 className="text-3xl font-display font-bold text-white">{activeTool.toolName}</h3>
                      <span className="px-3 py-1 bg-violet-500/20 text-violet-300 text-xs font-bold rounded-full border border-violet-500/30 shadow-[0_0_10px_rgba(139,92,246,0.2)]">
                        PRO LEVEL
                      </span>
                    </div>
                    
                    <p className="text-lg text-slate-300 mb-8 leading-relaxed border-b border-white/10 pb-8">
                      {activeTool.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div>
                        <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-4">Best Used For</h4>
                        <ul className="space-y-3">
                          {activeTool.bestFor.map((item, idx) => (
                            <li key={idx} className="flex items-center text-slate-300">
                              <CheckCircle2 className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                         <h4 className="text-sm font-bold text-violet-400 uppercase tracking-widest mb-4">Power User Tips</h4>
                         <ul className="space-y-4">
                          {activeTool.tips.map((tip, idx) => (
                            <li key={idx} className="flex items-start text-slate-400 text-sm bg-slate-950/50 p-3 rounded-lg border border-white/5 hover:border-violet-500/30 transition-colors">
                              <span className="font-mono text-violet-500 font-bold mr-3">0{idx + 1}.</span>
                              {tip}
                            </li>
                          ))}
                         </ul>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 3. Official Company Guides (New Section) */}
        <div className="mb-20">
          <Reveal>
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Direct from the Source: Official Guides</h3>
              </div>
              <p className="text-slate-400 text-sm max-w-2xl ml-7">
                Masterclass tutorials directly from <span className="text-slate-200 font-semibold">OpenAI, Google DeepMind, Anthropic, and Meta AI</span>. Learn how to use their products from the engineers who built them.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_LEARNING_VIDEOS.map((video, index) => (
              <Reveal key={video.id} delay={index * 100}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10 group-hover:border-emerald-500/50 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.0)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <img src={video.thumbnailUrl} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                      <PlayCircle className="w-12 h-12 text-white/80 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <div className="absolute top-2 right-2 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded text-[10px] font-bold text-emerald-400 uppercase tracking-wider flex items-center">
                      <ShieldCheck className="w-3 h-3 mr-1" />
                      Official
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 rounded text-xs font-mono text-white">
                      {video.duration}
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-white leading-tight mb-1 group-hover:text-emerald-400 transition-colors line-clamp-2">{video.title}</h3>
                  <p className="text-xs text-slate-500 font-medium">{video.channel}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationSection;