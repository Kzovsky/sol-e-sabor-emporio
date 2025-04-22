
import { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";
import { Link } from "react-router-dom";
const FeaturedProducts = () => {
  const featuredProducts = products.filter(product => product.featured);
  const [visibleProducts, setVisibleProducts] = useState(4);

  const showMore = () => {
    setVisibleProducts(prev => Math.min(prev + 4, featuredProducts.length));
  };

  return (
    <section id="produtos" className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Produtos em Destaque</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça nossa seleção exclusiva de produtos especiais para uma experiência gastronômica única.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.slice(0, visibleProducts).map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>

        {visibleProducts < featuredProducts.length && (
          <div className="text-center mt-10">

            {/* <button className="btn-primary"onClick={showMore}>
              Ver Mais Produtos
            </button> */}
            <button className="btn-primary">
              <a href=""><Link to="/produtos" target="_blank" className="font-medium">Ver Mais Produtos</Link></a>

            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
