
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
    image: "/imgs/azeite.jpg",
    description: "Azeite extra virgem de primeira prensagem a frio. Acidez máxima de 0,2%, sabor frutado e suave.",
    category: "Azeites e Óleos",
    featured: true
  },
  {
    id: "p002",
    name: "Mel de Lavanda Orgânico",
    price: 45.50,
    image: "/imgs/mel-silvestre.jpg",
    description: "Mel orgânico de lavanda, colhido em campos naturais. Sabor delicado e aroma floral.",
    category: "Orgânicos",
    featured: true
  },
  {
    id: "p003",
    name: "Vinho Tinto Reserva Especial",
    price: 129.90,
    image: "/imgs/16870_1.webp",
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
    name: "Café torrado Gourmet",
    price: 49.90,
    image: "/imgs/2568070_1.jpg",
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
  },
  {
    id: "p009",
    name: "Farinha de Amêndoas Fina",
    price: 34.90,
    image: "https://images.unsplash.com/photo-1615484477748-9185cb5099d3?q=80&w=2787",
    description: "Farinha sem glúten de amêndoas para receitas low-carb.",
    category: "Grãos e Farinhas",
    featured: false
  },
  {
    id: "p010",
    name: "Suco de Uva Integral",
    price: 19.90,
    image: "https://images.unsplash.com/photo-1615485145705-7c4e0e5e4f1a?q=80&w=2787",
    description: "Suco 100% uva, sem adição de açúcar ou conservantes.",
    category: "Bebidas Naturais",
    featured: false
  },
  {
    id: "p011",
    name: "Nozes Chilenas Premium",
    price: 49.50,
    image: "https://images.unsplash.com/photo-1604908176831-cd7f73530071?q=80&w=2787",
    description: "Nozes inteiras, saborosas e crocantes.",
    category: "Castanhas e Frutas Secas",
    featured: true
  },
  {
    id: "p012",
    name: "Bolacha de Arroz Integral",
    price: 12.90,
    image: "https://images.unsplash.com/photo-1624378435489-bfd138bfa5b9?q=80&w=2787",
    description: "Snacks leves, sem glúten e com baixo teor de sódio.",
    category: "Snacks Saudáveis",
    featured: false
  },
  {
    id: "p013",
    name: "Óleo de Coco Extra Virgem",
    price: 27.90,
    image: "/imgs/oleo_coco.jpg",
    description: "Ideal para cozinhar e cuidados com a pele.",
    category: "Azeites e Óleos",
    featured: false
  },
  {
    id: "p014",
    name: "Água com Gás Aromatizada de Limão",
    price: 6.90,
    image: "https://images.unsplash.com/photo-1606978681410-84dc2f9c9c62?q=80&w=2787",
    description: "Água gaseificada com leve sabor de limão natural.",
    category: "Bebidas Naturais",
    featured: false
  },
  {
    id: "p015",
    name: "Granola Crocante com Castanhas",
    price: 22.90,
    image: "https://images.unsplash.com/photo-1606755962773-16e44554aa6d?q=80&w=2787",
    description: "Mix de grãos e castanhas levemente adoçado com mel.",
    category: "Cereais e Grãos",
    featured: false
  },
  {
    id: "p016",
    name: "Vinagre Balsâmico Italiano",
    price: 39.90,
    image: "https://images.unsplash.com/photo-1590080877490-3ab697d4c1e7?q=80&w=2787",
    description: "Envelhecido por 5 anos, ideal para saladas e molhos.",
    category: "Temperos e Condimentos",
    featured: true
  },
  {
    id: "p017",
    name: "Barra de Proteína Vegana",
    price: 14.50,
    image: "https://images.unsplash.com/photo-1624378435094-cb626cc8e5b2?q=80&w=2787",
    description: "Barra rica em proteína vegetal com sabor de cacau.",
    category: "Snacks Saudáveis",
    featured: true
  },
  {
    id: "p018",
    name: "Goiabada Cascão Artesanal",
    price: 17.90,
    image: "https://images.unsplash.com/photo-1624204314223-16cc3eb6e4c3?q=80&w=2787",
    description: "Goiabada firme e caseira, ideal para sobremesas.",
    category: "Doces e Sobremesas",
    featured: true
  },
  ...Array.from({ length: 20 }, (_, i) => {
    const baseId = i + 19;
    return {
      id: `p${baseId.toString().padStart(3, "0")}`,
      name: `Produto Gourmet ${baseId}`,
      price: 20 + i * 3.5,
      image: `https://source.unsplash.com/300x300/?gourmet,food&sig=${baseId}`,
      description: `Descrição detalhada do Produto Gourmet ${baseId}.`,
      category: ["Chocolates", "Queijos", "Massas", "Orgânicos", "Snacks Saudáveis"][i % 5],
      featured: i % 2 === 0
    };
  })
];

export const categories = [
  {
    name: "Azeites e Óleos",
    image: "/imgs/azeite.jpg",
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
  },
  
];
