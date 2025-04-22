
import { MessageSquare } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

const ProductCard = ({ id, name, price, image, description }: ProductCardProps) => {
  const whatsappLink = `https://wa.me/5543991081569?text=Olá!%20Gostaria%20de%20comprar%20o%20produto:%20${encodeURIComponent(name)}%20(${id})`;

  return (
    <div className="product-card group">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-playfair font-semibold text-lg mb-1">{name}</h3>
        <p className="text-muted-foreground text-sm mb-2 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="font-bold text-lg">R$ {price.toFixed(2)}</span>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp py-1.5 px-3 text-sm"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Comprar</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
