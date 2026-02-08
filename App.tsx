
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BigLoveBox from './components/BigLoveBox';
import Catalogue from './components/Catalogue';
import ContactSection from './components/ContactSection';
import CustomCakeForm from './components/CustomCakeForm';
import { Heart } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-rose-100 selection:text-rose-900">
      <Header />
      
      <main>
        <Hero />
        <BigLoveBox />
        <Catalogue />
        <CustomCakeForm />
        <ContactSection />
      </main>

      <footer className="py-16 bg-rose-50 text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="font-serif text-rose-800 mb-2 text-2xl tracking-[0.1em] uppercase font-bold">
             SABRINA'S BAKERY
          </div>
          <p className="text-rose-400 text-lg italic mb-8 font-serif">
            Artigianalità e cuore in ogni dettaglio.
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <Heart size={20} fill="#fecdd3" className="text-rose-200 animate-pulse" />
            <Heart size={20} fill="#fecdd3" className="text-rose-200 animate-pulse delay-100" />
            <Heart size={20} fill="#fecdd3" className="text-rose-200 animate-pulse delay-200" />
          </div>

          <div className="text-rose-300 text-[10px] font-bold uppercase tracking-[0.4em]">
            © 2026 Sabrina's Bakery Homemade
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;