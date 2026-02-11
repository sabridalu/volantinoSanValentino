
import React, { useState, useMemo } from 'react';
import { Heart, Plus, Minus, MessageCircle, Percent, Sparkles, Info, Leaf } from 'lucide-react';
import { CONTACT_DATA, FLAVORS } from '../constants';

const BigLoveBox: React.FC = () => {
  const [extraItems, setExtraItems] = useState<{id: string, name: string, quantity: number}[]>([
    { id: 'cookies', name: 'Sweet Cookie Box', quantity: 0 },
    { id: 'choco', name: 'Custom Choco Bar', quantity: 0 },
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setExtraItems(items => items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
    ));
  };

  const selectedExtras = useMemo(() => extraItems.filter(i => i.quantity > 0), [extraItems]);
  const totalExtraQuantity = useMemo(() => extraItems.reduce((acc, item) => acc + item.quantity, 0), [extraItems]);
  
  const discount = useMemo(() => {
    if (totalExtraQuantity === 0) return 10;
    if (totalExtraQuantity >= 1 && totalExtraQuantity <= 2) return 15;
    if (totalExtraQuantity >= 3 && totalExtraQuantity <= 4) return 20;
    return 25; // 5 o più prodotti extra
  }, [totalExtraQuantity]);

  const handleOrderWhatsApp = () => {
    const extrasText = selectedExtras.length > 0 
      ? ` con le seguenti aggiunte:\n${selectedExtras.map(i => {
          if (i.id === 'cookies') return `- ${i.quantity}x ${i.name} (specificare se da 6 o 12 pz)`;
          return `- ${i.quantity}x ${i.name}`;
        }).join('\n')}` 
      : '';
    
    const message = `Ciao Sabrina! Vorrei ordinare la *BIG LOVE BOX* (Bento Cake + 2 Bustine Bake-it-easy)${extrasText}.\n\n*Sconto totale applicato: ${discount}%*\n\nÈ possibile avere la box in versione Senza Glutine o Senza Lattosio? ❤️`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CONTACT_DATA.phone.replace(/\s/g, '')}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="big-love-box" className="py-24 md:py-32 bg-rose-100/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <h2 className="font-serif text-5xl md:text-8xl text-rose-900 italic leading-tight">The Big Love Box</h2>
            <p className="text-rose-600 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
              Personalizza la tua box esclusiva. Più amore aggiungi, più lo sconto diventa speciale!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Box Composition Visual */}
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border-4 border-rose-200 relative overflow-hidden order-2 lg:order-1">
              <div className="absolute top-0 right-0 bg-rose-600 text-white px-8 py-4 rounded-bl-[2rem] font-bold flex items-center gap-2 animate-bounce">
                <Percent size={24} />
                <span className="text-2xl">-{discount}%</span>
              </div>

              <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-rose-50 rounded-full border border-rose-100 shadow-sm">
                <Leaf size={14} className="text-rose-600" />
                <span className="text-[10px] font-bold text-rose-600 uppercase tracking-widest">Disponibile GF & LF</span>
              </div>

              <h3 className="font-serif text-3xl text-rose-800 mb-8 italic">Il tuo Ordine:</h3>
              
              <ul className="space-y-6">
                <li className="flex items-center gap-4 text-lg md:text-xl text-rose-700">
                  <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center text-rose-600">
                    <Heart size={18} fill="currentColor" />
                  </div>
                  1x Heart Bento Cake
                </li>
                <li className="flex items-center gap-4 text-lg md:text-xl text-rose-700">
                  <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center text-rose-600">
                    <Heart size={18} fill="currentColor" />
                  </div>
                  2x Bustine Bake-it-easy
                </li>
                {selectedExtras.map(item => (
                  <li key={item.id} className="flex items-center gap-4 text-lg md:text-xl text-rose-800 font-semibold animate-fade-in">
                    <div className="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center text-white">
                      <Plus size={18} strokeWidth={3} />
                    </div>
                    {item.quantity}x {item.name}
                  </li>
                ))}
              </ul>

              <div className="mt-12 p-6 bg-rose-50 rounded-3xl space-y-3">
                <div className="flex items-center gap-2 text-rose-800 font-bold text-xs uppercase tracking-widest">
                  <Sparkles size={14} />
                  <span>I nostri suggerimenti</span>
                </div>
                <p className="text-[10px] text-rose-400 uppercase leading-relaxed font-medium">
                  Puoi scegliere tra i nostri gusti iconici come la bento <span className="text-rose-800">Passione Vellutata</span> o i preparati <span className="text-rose-800">Fascino Rosso</span> e <span className="text-rose-800">Coccole Tropicali</span>.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-rose-100">
                <button 
                  onClick={handleOrderWhatsApp}
                  className="w-full bg-rose-800 text-white py-6 rounded-full text-sm md:text-base font-bold tracking-[0.3em] uppercase hover:bg-rose-900 transition-all flex items-center justify-center gap-4 shadow-lg"
                >
                  <MessageCircle size={24} />
                  Ordina su WhatsApp
                </button>
                <p className="text-center mt-4 text-[10px] text-rose-300 uppercase tracking-widest font-bold">Definiremo i gusti e le varianti insieme in chat</p>
              </div>
            </div>

            {/* Selection Area */}
            <div className="space-y-8 order-1 lg:order-2">
              <h4 className="text-xs md:text-sm font-bold tracking-[0.3em] text-rose-400 uppercase">Personalizza la tua Big Box:</h4>
              
              <div className="grid gap-6">
                {extraItems.map(item => (
                  <div
                    key={item.id}
                    className={`flex flex-col p-6 md:p-8 rounded-[2rem] border-2 transition-all ${
                      item.quantity > 0 
                        ? 'border-rose-600 bg-rose-50' 
                        : 'border-rose-100 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="space-y-1">
                        <span className={`text-xl md:text-3xl font-serif italic ${item.quantity > 0 ? 'text-rose-900' : 'text-rose-400'}`}>
                          {item.name}
                        </span>
                        <p className="text-[10px] md:text-xs text-rose-300 tracking-widest uppercase font-bold">
                          {item.id === 'cookies' ? 'Disponibile 6 o 12 pezzi' : '7 varianti gourmet'}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 bg-white p-2 rounded-full border border-rose-100 shadow-sm">
                          <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-rose-50 text-rose-800 flex items-center justify-center hover:bg-rose-100 transition-colors"
                          >
                              <Minus size={16} />
                          </button>
                          <span className="font-serif text-xl md:text-2xl text-rose-900 min-w-[20px] text-center">
                              {item.quantity}
                          </span>
                          <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-rose-800 text-white flex items-center justify-center hover:bg-rose-900 transition-colors"
                          >
                              <Plus size={16} />
                          </button>
                      </div>
                    </div>
                    {item.quantity > 0 && (
                      <div className="bg-white/60 rounded-xl p-3 flex items-start gap-3 border border-rose-200 animate-fade-in">
                        <Info size={14} className="text-rose-500 mt-1 shrink-0" />
                        <p className="text-[10px] text-rose-600 font-medium italic">
                          {item.id === 'cookies' 
                            ? "Puoi includere biscotti personalizzati e occhi di bue in vari gusti. Scegli tra la box Small o Large."
                            : "Gusti disponibili: Dubai Chocobar, Mandorlato, Sogno Rocher, Lotus, Oreo, Pistacchio e Choco Party."}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Discount Guide */}
              <div className="p-8 bg-rose-900 text-white rounded-[2rem] space-y-6 shadow-2xl">
                <div className="flex justify-between items-center border-b border-rose-800 pb-4">
                    <p className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase opacity-80">Love Box Rewards</p>
                    <span className="bg-rose-600 px-3 py-1 rounded-full text-[10px] font-bold">Extra: {totalExtraQuantity}</span>
                </div>
                
                <div className="grid grid-cols-4 gap-2">
                  <div className={`text-center transition-all duration-500 ${discount === 10 ? 'scale-110' : 'opacity-30'}`}>
                    <p className="text-xl md:text-2xl font-serif italic">-10%</p>
                    <p className="text-[8px] uppercase tracking-tighter">Base</p>
                  </div>
                  <div className={`text-center transition-all duration-500 ${discount === 15 ? 'scale-110' : 'opacity-30'}`}>
                    <p className="text-xl md:text-2xl font-serif italic">-15%</p>
                    <p className="text-[8px] uppercase tracking-tighter">1-2 Extra</p>
                  </div>
                  <div className={`text-center transition-all duration-500 ${discount === 20 ? 'scale-110' : 'opacity-30'}`}>
                    <p className="text-xl md:text-2xl font-serif italic">-20%</p>
                    <p className="text-[8px] uppercase tracking-tighter">3-4 Extra</p>
                  </div>
                  <div className={`text-center transition-all duration-500 ${discount === 25 ? 'scale-110' : 'opacity-30'}`}>
                    <p className="text-xl md:text-2xl font-serif italic">-25%</p>
                    <p className="text-[8px] uppercase tracking-tighter">5+ Extra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigLoveBox;
