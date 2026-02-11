
import { Product, ContactInfo } from './types';

export const CONTACT_DATA: ContactInfo = {
  email: 'homebaking.sabrinas.bakery@gmail.com',
  phone: '3341489125',
  instagram: 'https://www.instagram.com/sabrinasbakery_homemade',
  whatsapp: 'https://wa.me/393341489125',
};

export const FLAVORS = {
  chocoBars: [
    { name: 'Mandorlato d\'Amore', desc: 'Sinfonia di cioccolato al latte e croccanti mandorle tostate.', original: 'Cioccolato al latte e mandorle' },
    { name: 'Sogno Rocher', desc: 'L\'eleganza della nocciola e del wafer in un guscio vellutato.', original: 'Gusto rocher' },
    { name: 'Choco Party', desc: 'Esplosione di allegria con cioccolato e croccanti Smarties colorati.', original: 'Choco Smartis' },
    { name: 'Incanto Lotus', desc: 'L\'aroma inconfondibile del biscotto speziato belga incontra il cioccolato.', original: 'Choco Lotus' },
    { name: 'Midnight Crunch', desc: 'L\'intenso abbraccio tra cioccolato fondente e l\'iconico biscotto Oreo.', original: 'Oreo e fondente' },
    { name: 'Oro Verde & Bianco', desc: 'Sottile equilibrio tra candido cioccolato bianco e puro pistacchio.', original: 'Bianco e pistacchio' },
    { name: 'L\'Esotica Dubai', desc: 'L\'esperienza lussuosa con pasta kataifi e cuore cremoso al pistacchio.', original: 'Dubai Chocobar' },
  ],
  bentoCakes: [
    { name: 'Nuvola Classica', desc: 'Soffice pan di spagna farcito con panna montata e il cuore di Nutella.', original: 'Pan di spagna con nutella e panna' },
    { name: 'Sogno Paradiso', desc: 'Base morbida paradiso con panna fresca e pepite di cioccolato fondente.', original: 'Paradiso con panna e gocce di cioccolato' },
    { name: 'Ambra Speziata', desc: 'Pan di spagna e panna arricchiti dal gusto caramellato dei biscotti Lotus.', original: 'Pan di spagna panna e lotus' },
    { name: 'Passione Vellutata', desc: 'L\'originale Red Velvet con il suo inconfondibile e vellutato cheese frosting.', original: 'Red velvet con cheese frosting' },
    { name: 'Bacio di Mezzanotte', desc: 'Pan di spagna al cioccolato, panna e un\'intensa nocciolata dark.', original: 'Pan di spagna al cioccolato con panna e nocciolata dark' },
    { name: 'Dolce Incanto', desc: 'Pan di spagna, panna e la freschezza della marmellata di fragole.', original: 'Pan di spagna, panna e marmellata di fragola' },
  ],
  preparati: [
    { name: 'Coccole Tropicali', desc: 'Preparato per Cookies al Cocco: morbidi, profumati e irresistibili.', original: 'Cookies al cocco' },
    { name: 'Fascino Rosso', desc: 'Preparato per Cookies Red Velvet: il colore dell\'amore in un biscotto.', original: 'Cookies red velvet' },
    { name: 'Intenso Desiderio', desc: 'Preparato per Cookies al Cioccolato: per i veri amanti del cacao.', original: 'Cookies al cioccolato' },
    { name: 'Triplo Incanto', desc: 'Preparato per Cookies ai Tre Cioccolati: una vera esplosione di dolcezza.', original: 'Cookies ai tre cioccolati' },
  ],
  cookieBox: [
    { name: 'Frolla del Cuore', desc: 'Biscotti al burro artigianali con le tue scritte personalizzate.', original: 'Biscotti al burro personalizzati' },
    { name: 'Occhi d\'Amore', desc: 'Occhi di bue ripieni di Nutella, Fragola, Pistacchio o Lotus.', original: 'Occhi di bue vari gusti' },
    { name: 'Alfabeto Dolce', desc: 'Letterine di frolla al burro per comporre i vostri messaggi speciali.', original: 'Letterine al burro' },
    { name: 'Scegli la Misura', desc: 'Disponibile in versione Small (6 pezzi) o Large (12 pezzi).', original: 'Misure box' },
  ]
};

export const PRODUCTS: Product[] = [
  {
    id: 'bento-cake',
    name: 'HEART BENTO CAKE',
    category: 'Torte',
    description: 'Piccole torte a forma di cuore decorate a mano. Disponibili in 6 gusti indimenticabili.',
    imageUrl: 'assets/heart-bento-cake.jpg',
    flavors: FLAVORS.bentoCakes
  },
  {
    id: 'bake-it-easy',
    name: 'PREPARATO BAKE-IT-EASY',
    category: 'Fai da te',
    description: 'Comode bustine con ingredienti già dosati: basta aggiungere i liquidi e infornare l\'amore.',
    imageUrl: 'assets/preparato-bake-it-easy.jpg',
    flavors: FLAVORS.preparati
  },
  {
    id: 'cookie-box',
    name: 'SWEET COOKIE BOX',
    category: 'Biscotti',
    description: 'Scatola artigianale con biscotti personalizzati e occhi di bue. Disponibile da 6 o 12 pezzi.',
    imageUrl: 'assets/sweet-cookie-box.jpg',
    flavors: FLAVORS.cookieBox
  },
  {
    id: 'choco-bar',
    name: 'CUSTOM CHOCO BAR',
    category: 'Cioccolato',
    description: 'Tavolette di cioccolato belga gourmet in 7 varianti uniche e personalizzabili.',
    imageUrl: 'assets/custom-choco-bar.jpg',
    flavors: FLAVORS.chocoBars
  }
];
