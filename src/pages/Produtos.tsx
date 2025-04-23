import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header"; // ✅ Importação do Header

const Produtos = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "">("");
  const [filtered, setFiltered] = useState(products);

  const applyFilters = () => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (minPrice !== "") {
      result = result.filter((p) => p.price >= parseFloat(minPrice));
    }

    if (maxPrice !== "") {
      result = result.filter((p) => p.price <= parseFloat(maxPrice));
    }

    if (sortOrder === "asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "desc") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFiltered(result);
  };

  const groupedProducts = filtered.reduce<Record<string, typeof products>>((acc, produto) => {
    if (!acc[produto.category]) acc[produto.category] = [];
    acc[produto.category].push(produto);
    return acc;
  }, {});

  return (
    <>
      <Header /> 

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Todos os Produtos</h1>

        {/* Filtros */}
        <div className="bg-gray-100 p-4 rounded-lg mb-8">
          <div className="flex flex-wrap gap-4 mb-4">
            <select
              value={selectedCategory || ""}
              onChange={(e) => setSelectedCategory(e.target.value || null)}
              className="p-2 rounded border"
            >
              <option value="">Todas as Categorias</option>
              {Array.from(new Set(products.map((p) => p.category))).map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <input
              type="number"
              placeholder="Preço Mínimo"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="p-2 rounded border w-32"
            />
            <input
              type="number"
              placeholder="Preço Máximo"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="p-2 rounded border w-32"
            />

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as "asc" | "desc" | "")}
              className="p-2 rounded border"
            >
              <option value="">Ordem Padrão</option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>

            <button
              onClick={applyFilters}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Aplicar Filtros
            </button>
          </div>
        </div>

        {Object.entries(groupedProducts).map(([categoria, produtos]) => (
          <div key={categoria} className="mb-10">
            <h2 className="text-2xl font-bold text-green-800 mb-4">{categoria}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {produtos.map((produto) => (
                <ProductCard key={produto.id} {...produto} />
              ))}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="text-center text-gray-600 mt-10">
            Nenhum produto encontrado com os filtros selecionados.
          </p>
        )}
      </div>
    </>
  );
};

export default Produtos;
