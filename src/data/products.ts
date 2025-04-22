
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "p001",
    name: "Azeite Extra Virgem Premium",
    price: 79.90,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=2942&auto=format&fit=crop",
    description: "Azeite extra virgem de primeira prensagem a frio. Acidez máxima de 0,2%, sabor frutado e suave.",
    category: "Azeites e Óleos",
    featured: true
  },
  {
    id: "p002",
    name: "Mel de Lavanda Orgânico",
    price: 45.50,
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=2787&auto=format&fit=crop",
    description: "Mel orgânico de lavanda, colhido em campos naturais. Sabor delicado e aroma floral.",
    category: "Orgânicos",
    featured: true
  },
  {
    id: "p003",
    name: "Vinho Tinto Reserva Especial",
    price: 129.90,
    image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?q=80&w=2940&auto=format&fit=crop",
    description: "Vinho tinto encorpado com notas de frutas vermelhas e especiarias. Envelhecido em barris de carvalho.",
    category: "Vinhos e Espumantes",
    featured: true
  },
  {
    id: "p004",
    name: "Queijo Brie Francês",
    price: 59.90,
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=2940&auto=format&fit=crop",
    description: "Queijo macio de casca branca e miolo cremoso. Sabor suave e textura aveludada.",
    category: "Queijos",
    featured: true
  },
  {
    id: "p005",
    name: "Chocolate Amargo 85% Cacau",
    price: 28.90,
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=3024&auto=format&fit=crop",
    description: "Chocolate amargo premium com 85% de cacau. Baixo teor de açúcar, sabor intenso e encorpado.",
    category: "Chocolates",
    featured: true
  },
  {
    id: "p006",
    name: "Café Especial Torrado em Grãos",
    price: 49.90,
    image: "https://images.unsplash.com/photo-1587049352847-4cafc6c8d66f?q=80&w=2787&auto=format&fit=crop",
    description: "Café de origem única, torra média. Notas de chocolate, caramelo e frutas vermelhas.",
    category: "Cafés Especiais",
    featured: true
  },
  {
    id: "p007",
    name: "Massa Italiana Artesanal",
    price: 32.50,
    image: "https://images.unsplash.com/photo-1603729336521-74b1e54a92df?q=80&w=2834&auto=format&fit=crop",
    description: "Massa artesanal italiana, produzida com sêmola de trigo durum e água. Secagem lenta tradicional.",
    category: "Massas",
    featured: false
  },
  {
    id: "p008",
    name: "Geleia de Frutas Vermelhas",
    price: 25.90,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=2927&auto=format&fit=crop",
    description: "Geleia artesanal de frutas vermelhas, baixo teor de açúcar. Perfeita para acompanhar queijos e torradas.",
    category: "Geleias e Conservas",
    featured: false
  }
];

export const categories = [
  {
    name: "Azeites e Óleos",
    image: "https://images.unsplash.com/photo-1565999103945-9f12a1488df5?q=80&w=2940&auto=format&fit=crop",
    count: 8
  },
  {
    name: "Vinhos e Espumantes",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2940&auto=format&fit=crop",
    count: 15
  },
  {
    name: "Queijos",
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=2873&auto=format&fit=crop",
    count: 12
  },
  {
    name: "Cafés Especiais",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2787&auto=format&fit=crop",
    count: 6
  }
];
