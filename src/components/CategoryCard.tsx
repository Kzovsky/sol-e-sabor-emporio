
interface CategoryCardProps {
  name: string;
  image: string;
  count: number;
}

const CategoryCard = ({ name, image, count }: CategoryCardProps) => {
  return (
    <a href={`#${name.toLowerCase()}`} className="group block relative rounded-lg overflow-hidden h-60">
      {/* Imagem de fundo */}
      <img 
        src={image} 
        alt={name} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 group-hover:from-black/90 group-hover:to-black/40 transition-all duration-300"></div>
      
      {/* Conteúdo */}
      <div className="absolute bottom-0 left-0 p-5 w-full">
        <h3 className="text-white font-playfair text-xl font-bold">{name}</h3>
        <p className="text-sol mt-1">{count} produtos</p>
      </div>
    </a>
  );
};

export default CategoryCard;
