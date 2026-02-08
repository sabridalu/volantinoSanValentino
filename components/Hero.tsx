
import React from 'react';

const Hero: React.FC = () => {
  const scrollToProdotti = () => {
    const element = document.getElementById('prodotti');
    if(element) window.scrollTo({ top: element.offsetTop - 70, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-rose-50/30">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-8 md:space-y-10 fade-in text-center lg:text-left order-2 lg:order-1">
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <span className="w-10 md:w-14 h-[1px] bg-rose-200"></span>
            <span className="text-[11px] md:text-xs tracking-[0.4em] text-rose-400 uppercase font-bold">Valentine's Collection</span>
          </div>
          
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-rose-900 leading-[1.1] italic">
            Un Amore da <br/>
            <span className="not-italic text-rose-800">Assaporare</span>
          </h1>
          
          <p className="text-rose-700/70 text-lg md:text-2xl font-light leading-relaxed max-w-md mx-auto lg:mx-0">
            L'eccellenza della pasticceria artigianale racchiusa in un gesto di puro amore.
          </p>
          
          <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button 
              onClick={scrollToProdotti}
              className="bg-rose-800 text-white px-12 py-6 text-xs font-bold tracking-[0.3em] uppercase hover:bg-rose-900 transition-all shadow-xl rounded-full"
            >
              Scopri i Dolci
            </button>
            <button 
              onClick={() => document.getElementById('personalizzata')?.scrollIntoView({behavior:'smooth'})}
              className="bg-white border border-rose-200 text-rose-800 px-12 py-6 text-xs font-bold tracking-[0.3em] uppercase hover:bg-rose-50 transition-all rounded-full"
            >
              Torta Custom
            </button>
          </div>
        </div>

        <div className="relative fade-in order-1 lg:order-2 flex justify-center">
             <div className="w-full max-w-[340px] md:max-w-lg aspect-[4/5] relative overflow-hidden rounded-[2.5rem] md:rounded-[4rem] shadow-2xl border-4 border-white">
                <img 
                    src="assets/hero-valentines.jpg" 
                    className="w-full h-full object-cover transition-transform duration-[5s] hover:scale-110"
                    alt="San Valentino Premium Collection"
                />
                <div className="absolute inset-0 bg-rose-900/5"></div>
             </div>
             <div className="absolute -bottom-6 -left-6 bg-white p-8 border border-rose-50 hidden lg:block max-w-xs shadow-2xl rounded-3xl">
                <p className="font-accent text-2xl italic text-rose-700 leading-tight">"Creato con amore, nel cuore del nostro laboratorio."</p>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
