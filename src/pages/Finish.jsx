import Header from "../components/Header";

export default function CheckoutPage() {
  return (
<div className="min-h-screen bg-muted/30 text-foreground">
  <Header />

  <div className="container-custom py-10">
    <h1 className="text-2xl font-bold mb-8">Meu carrinho (4 itens)</h1>

    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
      {/* Coluna esquerda: Lista de itens */}
      <div className="bg-white rounded-xl shadow-sm border border-border p-6">
        <div className="grid grid-cols-3 font-semibold text-sm border-b pb-2 mb-4 text-muted-foreground">
          <span className="col-span-2">Item</span>
          <span className="text-right">Valor</span>
        </div>

        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="grid grid-cols-3 items-center border-b border-border py-4"
          >
            <div className="col-span-2 flex items-center gap-4">
              <img
                src="https://via.placeholder.com/60"
                alt={`Produto ${item}`}
                className="w-16 h-16 rounded-md object-cover"
              />
              <div>
                <p className="font-medium">1º Território Race - 90{item}</p>
                <button
                  type="button"
                  className="bg-red-600 hover:bg-red-700 text-black px-2 py-1 border rounded p-2 w-full mb-2 hover-btn-red"
                >
                  Remover
                </button>
              </div>
            </div>
            <div className="text-right font-semibold">R$ 12,00</div>
          </div>
        ))}
      </div>

      {/* Coluna direita: Resumo */}
      <div className="w-full bg-white rounded-xl shadow-sm border border-border p-6 h-fit">
        <h2 className="text-lg font-semibold mb-4">Resumo do carrinho</h2>
        <div className="flex justify-between text-sm mb-2">
          <span>Itens (4)</span>
          <span>R$ 48,00</span>
        </div>
        <div className="flex justify-between text-sm mb-4">
          <span>Desconto</span>
          <span>-</span>
        </div>
        <div className="flex justify-between font-semibold text-base mb-6">
          <span>Total a pagar</span>
          <span>R$ 48,00</span>
        </div>
        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition">
          Continuar compra →
        </button>
        <p className="text-xs text-muted-foreground text-center mt-2">
          Compra segura e protegida
        </p>
      </div>
    </div>
  </div>
</div>


  );
}
