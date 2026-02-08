
import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { CONTACT_DATA } from '../constants';

const CustomCakeForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', description: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Richiesta Torta Custom - ${formData.name}`;
    const body = `Ciao Sabrina's Bakery,\n\nVorrei richiedere una creazione personalizzata.\n\nNome: ${formData.name}\nEmail: ${formData.email}\n\nDettagli della richiesta:\n${formData.description}\n\nAttendo un vostro riscontro per il preventivo.`;
    
    // Inseriamo l'email dell'utente in CC così riceve una copia quando invia l'email
    const mailtoUrl = `mailto:${CONTACT_DATA.email}?cc=${formData.email}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 8000);
    setFormData({ name: '', email: '', description: '' });
  };

  return (
    <section id="personalizzata" className="py-24 md:py-32 px-4 md:px-6 bg-rose-50/20">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12 md:mb-16 space-y-6">
            <h2 className="font-serif text-5xl md:text-7xl text-rose-900 italic">Creazioni su Misura</h2>
            <p className="text-rose-500 text-sm md:text-base font-light tracking-wide max-w-md mx-auto leading-relaxed">
                Ogni storia d'amore merita un dolce unico. Raccontaci la tua idea e riceverai una copia della richiesta via email.
            </p>
        </div>

        <div className="bg-white border border-rose-100 p-8 md:p-14 rounded-[2.5rem] shadow-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-6 animate-pulse">
              <div className="w-20 h-20 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 size={40} strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                <p className="font-serif text-3xl italic text-rose-900">Richiesta Pronta!</p>
                <p className="text-rose-400 text-sm md:text-base leading-relaxed">
                  Abbiamo preparato la tua email. <br/>
                  <strong>Controlla l'app della posta</strong> sul tuo telefono per confermare l'invio e ricevere la tua copia in CC.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid gap-10">
                <div className="space-y-2 border-b border-rose-100 focus-within:border-rose-400 transition-colors">
                  <label className="text-[11px] md:text-xs font-bold text-rose-400 uppercase tracking-[0.2em]">Il tuo Nome</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Scrivi qui..."
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-none py-3 text-rose-900 focus:ring-0 outline-none placeholder:text-rose-100 text-base md:text-lg"
                  />
                </div>
                <div className="space-y-2 border-b border-rose-100 focus-within:border-rose-400 transition-colors">
                  <label className="text-[11px] md:text-xs font-bold text-rose-400 uppercase tracking-[0.2em]">La tua Email (per la copia)</label>
                  <input 
                    required
                    type="email" 
                    placeholder="esempio@email.it"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border-none py-3 text-rose-900 focus:ring-0 outline-none placeholder:text-rose-100 text-base md:text-lg"
                  />
                </div>
              </div>
              
              <div className="space-y-2 border-b border-rose-100 focus-within:border-rose-400 transition-colors">
                <label className="text-[11px] md:text-xs font-bold text-rose-400 uppercase tracking-[0.2em]">Descrivici il tuo dolce</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Gusti, colori, scritte o decorazioni particolari..."
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                  className="w-full bg-transparent border-none py-3 text-rose-900 focus:ring-0 outline-none placeholder:text-rose-100 text-base md:text-lg resize-none"
                />
              </div>

              <div className="text-center pt-6">
                <button 
                    type="submit"
                    className="w-full bg-rose-700 text-white py-6 text-xs md:text-sm font-bold tracking-[0.3em] uppercase hover:bg-rose-800 transition-all shadow-xl rounded-full flex items-center justify-center gap-3"
                >
                    <Send size={18} />
                    Invia e ricevi copia
                </button>
                <p className="mt-6 text-[10px] md:text-xs text-rose-300 tracking-widest uppercase italic">
                  Si aprirà automaticamente la tua app email
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default CustomCakeForm;
