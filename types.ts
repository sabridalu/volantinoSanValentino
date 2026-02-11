
export interface ProductFlavor {
  name: string;
  desc: string;
  original?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  flavors?: ProductFlavor[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  instagram: string;
  whatsapp: string;
}