
import { Product, ContactInfo } from './types';

export const CONTACT_DATA: ContactInfo = {
  email: 'homebaking.sabrinas.bakery@gmail.com',
  phone: '3341489125',
  instagram: 'https://www.instagram.com/sabrinasbakery_homemade',
  whatsapp: 'https://wa.me/393341489125',
};

export const PRODUCTS: Product[] = [
  {
    id: 'bento-cake',
    name: 'HEART BENTO CAKE',
    category: 'Torte',
    description: 'Piccole torte artigianali a forma di cuore. Soffici, decorate a mano con scritte personalizzate. Il formato perfetto per un momento intimo di pura dolcezza.',
    imageUrl: 'assets/heart-bento-cake.jpg'
  },
  {
    id: 'bake-it-easy',
    name: 'PREPARATO BAKE-IT-EASY',
    category: 'Fai da te',
    description: 'Il nostro iconico preparato in barattolo. Tutti gli ingredienti secchi dosati alla perfezione per sfornare biscotti o brownies caldi in pochi minuti.',
    imageUrl: 'assets/preparato-bake-it-easy.jpg'
  },
  {
    id: 'cookie-box',
    name: 'SWEET COOKIE BOX',
    category: 'Biscotti',
    description: 'Selezione di biscotti decorati a mano. Ogni frollino è un piccolo quadro d\'amore, realizzato con burro di alta qualità e decorazioni in ghiaccia reale.',
    imageUrl: 'assets/sweet-cookie-box.jpg'
  },
  {
    id: 'choco-bar',
    name: 'CUSTOM CHOCO BAR',
    category: 'Cioccolato',
    description: 'Tavolette di cioccolato belga decorate con frutta secca, zuccherini e messaggi d\'amore. Un classico intramontabile reinterpretato con stile.',
    imageUrl: 'assets/custom-choco-bar.jpg'
  }
];
