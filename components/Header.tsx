
import React from 'react';

const Header: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-rose-50 shadow-sm">
      <div className="container mx-auto px-5 py-4 flex justify-between items-center">
        <div 
          className="cursor-pointer flex flex-col" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="font-serif text-xl md:text-2xl tracking-[0.1em] text-rose-800 uppercase leading-none font-semibold">
            SABRINA'S BAKERY
          </div>
          <div className="text-[9px] md:text-[11px] tracking-[0.4em] text-rose-300 uppercase mt-1 font-medium">Homemade</div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <button onClick={() => scrollTo('big-love-box')} className="text-xs font-semibold tracking-[0.2em] text-rose-500 hover:text-rose-800 transition-colors uppercase">Big Love Box</button>
          <button onClick={() => scrollTo('prodotti')} className="text-xs font-semibold tracking-[0.2em] text-rose-400 hover:text-rose-800 transition-colors uppercase">Collezione</button>
          <button onClick={() => scrollTo('personalizzata')} className="text-xs font-semibold tracking-[0.2em] text-rose-400 hover:text-rose-800 transition-colors uppercase">Su Misura</button>
          <button 
            onClick={() => scrollTo('contatti')} 
            className="bg-rose-100 text-rose-900 px-8 py-3 hover:bg-rose-200 transition-all text-xs font-bold tracking-widest uppercase rounded-full shadow-sm"
          >
            Contatti
          </button>
        </nav>

        <button onClick={() => scrollTo('contatti')} className="md:hidden text-[11px] font-bold tracking-[0.2em] bg-rose-50 text-rose-800 px-5 py-2.5 rounded-full border border-rose-100">CONTATTI</button>
      </div>
    </header>
  );
};

export default Header;
