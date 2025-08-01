import { useState } from "react";
import Header from "../components/Header";
import { ShoppingCart, User, CheckCircle } from "lucide-react";

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { title: "Produtos", icon: <ShoppingCart size={16} /> },
    { title: "Dados", icon: <User size={16} /> },
    { title: "Resumo", icon: <CheckCircle size={16} /> },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen bg-muted/30 text-foreground">
      <Header />

      <div className="container-custom py-10">
        {/* LINHA DO TEMPO */}
        <div className="flex justify-between items-center mb-10 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 text-center">
              <div
                className={`mx-auto w-8 h-8 rounded-full flex items-center justify-center ${
                  index <= currentStep ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                {step.icon}
              </div>
              <p
                className={`text-xs mt-1 ${
                  index === currentStep ? "text-blue-600 font-medium" : "text-gray-500"
                }`}
              >
                {step.title}
              </p>
            </div>
          ))}
        </div>

        {/* CONTEÚDO DAS ETAPAS */}
        {currentStep === 0 && (
          <>
            <h1 className="text-2xl font-bold mb-8">Meu carrinho (4 itens)</h1>
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
              {/* Coluna esquerda: Lista de itens */}
              <div className="bg-white rounded-2xl shadow-sm border border-border p-6">
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
                          className="bg-red-100 hover:bg-red-200 text-red-600 text-xs px-2 py-1 rounded mt-2"
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
              <div className="w-full bg-white rounded-2xl shadow-sm border border-border p-6 h-fit">
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
                <button
                  onClick={handleNext}
                  className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
                >
                  Continuar compra
                </button>
              </div>
            </div>
          </>
        )}

        {/* Etapa 2 e 3 podem ser colocadas aqui depois */}
        {currentStep === 1 && (
          <div className="bg-white rounded-2xl shadow-md p-6 max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">Informações do Cliente</h2>
            {/* Inputs de nome, endereço, telefone etc */}
            <button
              onClick={handleNext}
              className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Próximo
            </button>
          </div>
        )}

        {currentStep === 2 && (
          <div className="bg-white rounded-2xl shadow-md p-6 max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">Resumo Final</h2>
            {/* Listagem final e botão do WhatsApp */}
            <button
              onClick={() =>
                window.open(`https://wa.me/55SEUNUMERO?text=${encodeURIComponent("Quero finalizar minha compra!")}`, "_blank")
              }
              className="mt-6 bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Finalizar no WhatsApp
            </button>
          </div>
        )}

        {/* NAVEGAÇÃO GERAL */}
        <div className="flex justify-between mt-10 max-w-3xl mx-auto">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className="px-4 py-2 bg-gray-300 text-black rounded-md disabled:opacity-50"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
