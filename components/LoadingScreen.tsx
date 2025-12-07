import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // A shorter, punchier load time
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Allow fade out
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-zinc-950 flex flex-col items-center justify-center transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="flex flex-col items-center">
        {/* Minimalist Pulse */}
        <div className="w-16 h-1 bg-white mb-6 animate-pulse"></div>
        
        <h1 className="text-3xl font-display font-bold tracking-widest text-white uppercase">
          Maxlon
        </h1>
        <p className="text-xs text-zinc-500 mt-2 tracking-widest-xl uppercase font-medium">
          Intelligence / Refined
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;