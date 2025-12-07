import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewsGrid from './components/NewsGrid';
import CompanyWatch from './components/CompanyWatch';
import RedditFeed from './components/RedditFeed';
import VideoCarousel from './components/VideoCarousel';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import EducationSection from './components/EducationSection';
import ImmersiveBackground from './components/ImmersiveBackground';
import BackToTop from './components/BackToTop';
import LoadingScreen from './components/LoadingScreen';
import CurriculumView from './components/CurriculumView';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showCurriculum, setShowCurriculum] = useState(false);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      {showCurriculum && <CurriculumView onClose={() => setShowCurriculum(false)} />}

      <div className={`min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-accent-500 selection:text-white transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {!showCurriculum && (
          <>
            <ImmersiveBackground />
            <Navbar />
            <main className="relative z-10 flex flex-col gap-24 sm:gap-32 pb-24">
              <Hero />
              <NewsGrid />
              <CompanyWatch />
              <EducationSection onOpenCurriculum={() => setShowCurriculum(true)} />
              <VideoCarousel />
              <RedditFeed />
              <Newsletter />
            </main>
            <Footer />
            <BackToTop />
          </>
        )}
      </div>
    </>
  );
};

export default App;