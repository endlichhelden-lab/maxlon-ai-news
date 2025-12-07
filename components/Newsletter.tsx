import React, { useState } from 'react';
import { generateNewsletterEmail } from '../services/geminiService';
import { ArrowRight, Check } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus('loading');
      try {
        await generateNewsletterEmail(email); // Mock call
        setTimeout(() => setStatus('success'), 1500);
      } catch (err) {
        setStatus('idle');
      }
    }
  };

  return (
    <section className="py-32 bg-zinc-50 text-zinc-950">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="md:w-1/2">
           <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-none mb-6">
             The Daily <br/><span className="text-accent-600">Protocol</span>
           </h2>
           <p className="text-lg md:text-xl text-zinc-600 max-w-md">
             Essential intelligence. No noise. Delivered to your inbox every morning at 0800 UTC.
           </p>
        </div>

        <div className="md:w-1/2 w-full max-w-md">
           {status === 'success' ? (
              <div className="bg-zinc-900 text-white p-8">
                 <Check className="w-8 h-8 text-accent-500 mb-4" />
                 <h3 className="text-2xl font-bold mb-2">Confirmed.</h3>
                 <p className="text-zinc-400">You are now on the list.</p>
              </div>
           ) : (
             <form onSubmit={handleSubmit} className="relative">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-zinc-300 py-4 text-xl font-medium focus:outline-none focus:border-zinc-950 transition-colors placeholder-zinc-400 rounded-none text-zinc-950"
                  required
                />
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-sm font-bold uppercase tracking-widest flex items-center hover:text-accent-600 transition-colors"
                >
                  {status === 'loading' ? 'Processing' : 'Subscribe'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
             </form>
           )}
           <p className="mt-4 text-xs text-zinc-400">
             We respect your attention. Unsubscribe at any time.
           </p>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;