import React, { useState } from 'react';
import { CURRICULUM_MODULES } from '../data/curriculumData';
import { X, ChevronRight, CheckCircle2, Circle } from 'lucide-react';
import Reveal from './Reveal';

interface CurriculumViewProps {
  onClose: () => void;
}

const CurriculumView: React.FC<CurriculumViewProps> = ({ onClose }) => {
  const [activeModuleId, setActiveModuleId] = useState(CURRICULUM_MODULES[0].id);
  const activeModule = CURRICULUM_MODULES.find(m => m.id === activeModuleId) || CURRICULUM_MODULES[0];

  return (
    <div className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col md:flex-row overflow-hidden animate-in fade-in duration-300">
      
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-white/10 bg-zinc-900">
        <span className="font-display font-bold text-white uppercase">Curriculum Mode</span>
        <button onClick={onClose} className="text-white p-2">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar Navigation */}
      <div className="w-full md:w-80 bg-zinc-900 border-r border-white/10 flex flex-col h-full overflow-y-auto hide-scrollbar">
        <div className="p-6 border-b border-white/10 hidden md:flex items-center justify-between">
           <div>
             <h2 className="text-lg font-display font-bold text-white">Applied AI</h2>
             <p className="text-xs text-zinc-500 uppercase tracking-widest">Mastery Track</p>
           </div>
           <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
             <X className="w-5 h-5" />
           </button>
        </div>

        <div className="flex-1 py-4">
          {CURRICULUM_MODULES.map((module) => (
            <button
              key={module.id}
              onClick={() => setActiveModuleId(module.id)}
              className={`w-full text-left px-6 py-4 flex items-center justify-between group transition-all ${
                activeModuleId === module.id 
                  ? 'bg-white/5 border-l-2 border-accent-500' 
                  : 'border-l-2 border-transparent hover:bg-white/5'
              }`}
            >
              <div className="flex items-center space-x-3 overflow-hidden">
                <span className={`flex-shrink-0 ${activeModuleId === module.id ? 'text-accent-500' : 'text-zinc-600 group-hover:text-zinc-400'}`}>
                  {module.icon}
                </span>
                <span className={`text-sm font-medium truncate ${activeModuleId === module.id ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                  {module.title}
                </span>
              </div>
              {activeModuleId === module.id && (
                <ChevronRight className="w-4 h-4 text-accent-500" />
              )}
            </button>
          ))}
        </div>
        
        <div className="p-6 border-t border-white/10">
          <div className="flex items-center space-x-2 text-xs text-zinc-500 mb-2">
            <CheckCircle2 className="w-4 h-4 text-accent-500" />
            <span>Updates Weekly</span>
          </div>
          <p className="text-[10px] text-zinc-600 leading-tight">
            Curriculum adapted from MIT, Stanford, and Google Research internal handbooks.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-zinc-950 relative">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
          
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-xs font-mono text-zinc-500 uppercase tracking-widest mb-8">
             <span>Module</span>
             <ChevronRight className="w-3 h-3" />
             <span className="text-accent-500">{activeModule.title}</span>
          </div>

          {/* Module Content */}
          <div key={activeModule.id} className="prose prose-invert prose-lg max-w-none">
             {activeModule.content}
          </div>

          {/* Navigation Footer */}
          <div className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center">
             <button 
               className="text-sm font-bold text-zinc-500 hover:text-white uppercase tracking-widest transition-colors disabled:opacity-50"
               disabled={CURRICULUM_MODULES.indexOf(activeModule) === 0}
               onClick={() => {
                 const idx = CURRICULUM_MODULES.indexOf(activeModule);
                 if (idx > 0) setActiveModuleId(CURRICULUM_MODULES[idx - 1].id);
               }}
             >
               &larr; Previous
             </button>
             <button 
               className="text-sm font-bold bg-white text-zinc-950 px-6 py-3 hover:bg-accent-500 hover:text-white uppercase tracking-widest transition-colors disabled:opacity-50"
               disabled={CURRICULUM_MODULES.indexOf(activeModule) === CURRICULUM_MODULES.length - 1}
               onClick={() => {
                 const idx = CURRICULUM_MODULES.indexOf(activeModule);
                 if (idx < CURRICULUM_MODULES.length - 1) setActiveModuleId(CURRICULUM_MODULES[idx + 1].id);
               }}
             >
               Next Module &rarr;
             </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CurriculumView;