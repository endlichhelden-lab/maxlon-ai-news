import React, { useState } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <Hexagon className="h-6 w-6 text-white stroke-[3] group-hover:text-accent-500 transition-colors" />
            <span className="text-xl font-display font-bold tracking-wider text-white uppercase group-hover:opacity-80 transition-opacity">
              Maxlon
            </span>
          </div>

          {/* Desktop Nav - Minimal */}
          <div className="hidden md:flex items-center space-x-12">
            {['Briefing', 'Watchlist', 'Education', 'Deep Dives'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-wide"
              >
                {item}
              </a>
            ))}
            
            <button className="bg-white text-zinc-950 px-5 py-2 text-sm font-bold uppercase tracking-wide hover:bg-accent-500 hover:text-white transition-colors">
              Subscribe
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-white/10 absolute w-full">
          <div className="px-6 py-8 space-y-4 flex flex-col">
             {['Briefing', 'Watchlist', 'Education', 'Deep Dives'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-xl font-display font-bold text-white uppercase tracking-wider hover:text-accent-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;