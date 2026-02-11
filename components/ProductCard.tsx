
import React, { useState } from 'react';
import { Product } from '../types';
import { CONTACT_DATA } from '../constants';
import { MessageCircle, Instagram, Mail, ChevronDown, ChevronUp, Sparkles, Leaf } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showFlavors, setShowFlavors] = useState(false);

  const getWhatsAppLink = () => {
    let text = `Ciao Sabrina! Vorrei ordinare il prodotto *${product.name}* della collezione di San Valentino. ❤️`;
    
    if (product.id === 'cookie-box') {
      text += `\n\nSarei interessato alla versione (indica Small da 6 o Large da 12): [SCRIVI QUI LA TAGLIA]`;
    }
    
    text += `\n\nÈ possibile richiederlo in variante Senza Glutine o Senza Lattosio? Grazie!`;
    
    return `https://wa.me/${CONTACT_DATA.phone.replace(/\s/g, '')}?text=${encodeURIComponent(text)}`;
  };

  const getEmailLink = () => {
    const subject = `Prenotazione San Valentino: ${product.name}`;
    let body = `Ciao Sabrina,\n\nvorrei ricevere maggiori informazioni o prenotare il prodotto "${product.name}".\n\n`;
    
    if (product.id === 'cookie-box') {
      body += `Sarei interessato alla versione:\n[ ] Small (6 pezzi)\n[ ] Large (12 pezzi)\n\n`;
    }
    
    body += `Richiesta varianti alimentari:\n[ ] Senza Glutine\n[ ] Senza Lattosio\n\nAttendo tue per i dettagli, grazie!`;
    
    return `mailto:${CONTACT_DATA.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const getInstagramLink = () => {
    // Instagram doesn't support pre-filled DMs via URL, so we link to profile
    return CONTACT_DATA.instagram;
  };

  return (
    <div className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-rose-50 shadow-sm hover:shadow-xl transition-all duration-500">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute top-6 left-6">
            <span className="bg-white/95 backdrop-blur px-4 py-2 rounded-full text-[10px] md:text-xs font-bold tracking-widest text-rose-500 uppercase shadow-md inline-block">
                {product.category}
            </span>
        </div>
      </div>
      
      <div className="flex flex-col flex-grow p-8 md:p-10">
        <div className="text-center mb-4">
          <h3 className="text-2xl md:text-3xl font-serif text-rose-900 italic leading-tight mb-2">
            {product.name}
          </h3>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-50 rounded-full border border-rose-100">
            <Leaf size={12} className="text-rose-600" />
            <span className="text-[10px] font-bold text-rose-600 uppercase tracking-tight">Senza Glutine & Lattosio disp.</span>
          </div>
        </div>

        <p className="text-rose-400 text-sm md:text-base font-light leading-relaxed mb-6 text-center">
          {product.description}
        </p>

        {product.flavors && (
          <div className="mb-8">
            <button 
              onClick={() => setShowFlavors(!showFlavors)}
              className="w-full flex items-center justify-between py-4 px-6 bg-rose-50/50 rounded-2xl text-rose-800 text-xs font-bold tracking-widest uppercase hover:bg-rose-100 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Sparkles size={14} />
                <span>Scopri i Gusti</span>
              </div>
              {showFlavors ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            {showFlavors && (
              <div className="mt-4 space-y-4 animate-fade-in max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                {product.flavors.map((flavor, idx) => (
                  <div key={idx} className="border-l-2 border-rose-200 pl-4 py-1">
                    <p className="text-rose-900 font-serif italic text-base leading-none mb-1">{flavor.name}</p>
                    <p className="text-rose-400 text-xs leading-relaxed">{flavor.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        
        <div className="mt-auto border-t border-rose-50 pt-8 flex flex-col items-center gap-6">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-rose-300 uppercase">Prenota ora</span>
            <div className="flex justify-center gap-6 md:gap-10">
                <a 
                    href={getWhatsAppLink()}
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 hover:bg-rose-800 hover:text-white transition-all shadow-sm"
                    title="Invia messaggio WhatsApp"
                >
                    <MessageCircle size={22} strokeWidth={1.5} />
                </a>
                <a 
                    href={getInstagramLink()}
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 hover:bg-rose-800 hover:text-white transition-all shadow-sm"
                    title="Scrivici su Instagram"
                >
                    <Instagram size={22} strokeWidth={1.5} />
                </a>
                <a 
                    href={getEmailLink()}
                    className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 hover:bg-rose-800 hover:text-white transition-all shadow-sm"
                    title="Invia Email"
                >
                    <Mail size={22} strokeWidth={1.5} />
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
