
import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';
import { Leaf, Info, Star } from 'lucide-react';

const Catalogue: React.FC = () => {
  return (
    <section id="prodotti" className="py-24 md:py-32 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16 md:mb-24 space-y-8">
            <h2 className="font-serif text-5xl md:text-8xl text-rose-900 italic text-center leading-tight">La Collezione</h2>
            <div className="w-16 h-[1px] bg-rose-200"></div>
            <p className="text-rose-400 text-xs md:text-sm tracking-[0.3em] uppercase font-bold text-center">Esclusive San Valentino 2026</p>
        </div>

        {/* Highlight Banner per Intolleranze - Più evidente */}
        <div className="max-w-4xl mx-auto mb-20 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-600 text-white px-6 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase z-10 shadow-lg flex items-center gap-2">
            <Star size={12} fill="currentColor" /> Importante <Star size={12} fill="currentColor" />
          </div>
          <div className="bg-rose-50 border-2 border-rose-100 rounded-[2.5rem] p-10 md:p-14 flex flex-col md:flex-row items-center gap-10 shadow-sm overflow-hidden relative">
            <div className="absolute top-0 right-0 opacity-[0.03] text-rose-900 pointer-events-none translate-x-1/4 -translate-y-1/4">
                <Leaf size={300} />
            </div>
            
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-rose-100">
              <Leaf className="text-rose-600" size={36} />
            </div>
            
            <div className="text-center md:text-left space-y-4 relative z-10">
              <h4 className="font-serif text-3xl text-rose-900 italic">Un Amore Senza Limiti</h4>
              <p className="text-rose-700 font-light leading-relaxed text-lg">
                Vogliamo che tutti possano festeggiare. <strong>Ogni nostra creazione</strong> può essere realizzata in versione:
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-2">
                <span className="bg-rose-800 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest shadow-md">Senza Glutine</span>
                <span className="bg-rose-800 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest shadow-md">Senza Lattosio</span>
              </div>
              <p className="text-rose-400 text-xs italic mt-2">Basterà specificarlo durante la tua richiesta o nel form dedicato.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-24 md:mt-40 border-t border-rose-50 pt-20 text-center">
            <div className="max-w-lg mx-auto space-y-8">
                <h3 className="font-serif text-3xl md:text-4xl italic text-rose-800">Richiedi il Listino</h3>
                <p className="text-rose-500 text-sm md:text-lg font-light leading-relaxed">
                    Per conoscere i prezzi e le varianti disponibili, contattaci direttamente. Saremo felici di aiutarti a scegliere il regalo perfetto.
                </p>
                <button 
                  onClick={() => document.getElementById('contatti')?.scrollIntoView({behavior: 'smooth'})}
                  className="text-rose-800 border-b-2 border-rose-800 pb-2 text-xs md:text-sm font-bold tracking-[0.3em] uppercase hover:text-rose-500 hover:border-rose-500 transition-all"
                >
                    Contattaci per i Prezzi
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
