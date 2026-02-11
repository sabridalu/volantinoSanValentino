
import React from 'react';
import { CONTACT_DATA } from '../constants';
import { Mail, Instagram, MessageCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const getWhatsAppGeneral = () => {
    const text = "Ciao Sabrina! Ho visto il tuo catalogo di San Valentino e vorrei chiederti alcune informazioni sui tuoi dolci. ❤️";
    return `https://wa.me/${CONTACT_DATA.phone.replace(/\s/g, '')}?text=${encodeURIComponent(text)}`;
  };

  const getEmailGeneral = () => {
    const subject = "Informazioni Catalogo San Valentino";
    const body = "Ciao Sabrina,\n\nho visitato il sito di Sabrina's Bakery e sarei interessato a saperne di più sulla collezione di San Valentino.\n\nPotresti inviarmi il listino prezzi aggiornato?\n\nGrazie mille!";
    return `mailto:${CONTACT_DATA.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contatti" className="py-24 md:py-32 bg-rose-950 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24">
                <div className="space-y-8 text-center md:text-left">
                    <h2 className="font-serif text-5xl md:text-6xl italic leading-tight">Restiamo in <br className="hidden md:block"/> Contatto</h2>
                    <p className="text-rose-100/70 font-light leading-relaxed text-base md:text-lg">
                        Scrivici per prenotare la tua dolce box o per ricevere il catalogo completo con tutti i prezzi e i gusti disponibili.
                    </p>
                </div>

                <div className="space-y-10">
                    <div className="grid gap-8">
                        <a href={getWhatsAppGeneral()} target="_blank" className="flex items-center gap-6 group p-6 bg-white/5 rounded-[2rem] hover:bg-white/10 transition-all border border-white/5">
                            <MessageCircle size={24} className="text-rose-300" />
                            <div className="space-y-1">
                                <p className="text-[10px] md:text-xs tracking-widest uppercase text-rose-400 font-bold">WhatsApp</p>
                                <p className="text-base md:text-lg font-light">{CONTACT_DATA.phone}</p>
                            </div>
                        </a>
                        <a href={CONTACT_DATA.instagram} target="_blank" className="flex items-center gap-6 group p-6 bg-white/5 rounded-[2rem] hover:bg-white/10 transition-all border border-white/5">
                            <Instagram size={24} className="text-rose-300" />
                            <div className="space-y-1">
                                <p className="text-[10px] md:text-xs tracking-widest uppercase text-rose-400 font-bold">Instagram DM</p>
                                <p className="text-base md:text-lg font-light">@sabrinasbakery_homemade</p>
                            </div>
                        </a>
                        <a href={getEmailGeneral()} className="flex items-center gap-6 group p-6 bg-white/5 rounded-[2rem] hover:bg-white/10 transition-all border border-white/5">
                            <Mail size={24} className="text-rose-300" />
                            <div className="space-y-1">
                                <p className="text-[10px] md:text-xs tracking-widest uppercase text-rose-400 font-bold">Email</p>
                                <p className="text-base md:text-lg font-light truncate max-w-[200px] sm:max-w-none">{CONTACT_DATA.email}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
