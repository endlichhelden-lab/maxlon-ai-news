import React, { useState } from 'react';
import { Cpu } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Cpu className="h-6 w-6 text-cyan-400" />
              <span className="text-lg font-display font-bold text-white uppercase">Maxlon's <span className="text-cyan-400">AI News</span></span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              Curating the intelligence explosion. We track the papers, the products, and the politics shaping our synthetic future.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Sections</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Headlines</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Deep Dives</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Hardware</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Policy</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4">Connect</h4>
             <ul className="space-y-2 text-sm text-slate-400">
               <li><a href="#" className="hover:text-cyan-400 transition-colors">Twitter / X</a></li>
               <li><a href="#" className="hover:text-cyan-400 transition-colors">Discord</a></li>
               <li><a href="#" className="hover:text-cyan-400 transition-colors">Newsletter</a></li>
               <li><a href="#" className="hover:text-cyan-400 transition-colors">RSS</a></li>
             </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>© 2024 Maxlon's AI News. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;