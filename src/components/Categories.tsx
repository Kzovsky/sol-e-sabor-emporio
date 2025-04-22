
import CategoryCard from "./CategoryCard";
import { categories } from "../data/products";

const Categories = () => {
  return (
    <section id="categorias" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Nossas Categorias</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore nossa variedade de produtos organizados por categorias para facilitar sua experiência de compra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard 
              key={index}
              name={category.name}
              image={category.image}
              count={category.count}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
