
import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

const Catalogue: React.FC = () => {
  return (
    <section id="prodotti" className="py-24 md:py-32 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16 md:mb-24 space-y-8">
            <h2 className="font-serif text-5xl md:text-8xl text-rose-900 italic text-center leading-tight">La Collezione</h2>
            <div className="w-16 h-[1px] bg-rose-200"></div>
            <p className="text-rose-400 text-xs md:text-sm tracking-[0.3em] uppercase font-bold text-center">Esclusive San Valentino 2026</p>
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