import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Produtos = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Todos os Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((produto) => (
          <ProductCard key={produto.id} {...produto} />
        ))}
      </div>
    </div>
  );
};

export default Produtos;