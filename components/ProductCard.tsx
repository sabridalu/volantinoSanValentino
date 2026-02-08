
import React from 'react';
import { Product } from '../types';
import { CONTACT_DATA } from '../constants';
import { MessageCircle, Instagram, Mail } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-rose-50 shadow-sm hover:shadow-xl transition-all duration-500">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute top-6 left-6">
            <span className="bg-white/95 backdrop-blur px-4 py-2 rounded-full text-[10px] md:text-xs font-bold tracking-widest text-rose-500 uppercase shadow-md">
                {product.category}
            </span>
        </div>
      </div>
      
      <div className="flex flex-col flex-grow text-center p-8 md:p-10">
        <h3 className="text-2xl md:text-3xl font-serif text-rose-900 mb-4 italic leading-tight">
          {product.name}
        </h3>
        <p className="text-rose-400 text-sm md:text-base font-light leading-relaxed mb-8">
          {product.description}
        </p>
        
        <div className="mt-auto border-t border-rose-50 pt-8 flex flex-col items-center gap-6">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-rose-300 uppercase">Per info e prezzi</span>
            <div className="flex justify-center gap-6 md:gap-10">
                <a 
                    href={CONTACT_DATA.whatsapp}
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 hover:bg-rose-800 hover:text-white transition-all shadow-sm"
                    title="WhatsApp"
                >
                    <MessageCircle size={22} strokeWidth={1.5} />
                </a>
                <a 
                    href={CONTACT_DATA.instagram}
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 hover:bg-rose-800 hover:text-white transition-all shadow-sm"
                    title="Instagram"
                >
                    <Instagram size={22} strokeWidth={1.5} />
                </a>
                <a 
                    href={`mailto:${CONTACT_DATA.email}?subject=Informazione su ${product.name}`}
                    className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 hover:bg-rose-800 hover:text-white transition-all shadow-sm"
                    title="Email"
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
