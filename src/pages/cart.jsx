import { useState } from "react";
import Header from "../components/Header";
import { ShoppingCart, User, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(0);

  // Estado dos dados do cliente
  const [cliente, setCliente] = useState({
    nome: "",
    telefone: "",
    endereco: "",
    cidade: "",
    estado: "",
    cep: "",
    entrega: true,
  });

  const produtos = [
    { nome: "Produto A", qtd: 5, preco: 10 },
    { nome: "Produto B", qtd: 2, preco: 25 },
    { nome: "Produto C", qtd: 1, preco: 30 },
  ];

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

  const valorTotal = produtos.reduce(
    (total, p) => total + p.qtd * p.preco,
    0
  );

  const enviarParaWhatsapp = () => {
    const texto = encodeURIComponent(`
Olá! Gostaria de finalizar a compra:

${produtos
  .map(
    (p) =>
      `• ${p.nome}: ${p.qtd} x R$ ${p.preco.toFixed(2)} = R$ ${(p.qtd * p.preco).toFixed(2)}`
  )
  .join("\n")}

Valor total: R$ ${valorTotal.toFixed(2)}

Nome: ${cliente.nome}
Contato: ${cliente.telefone}
${cliente.entrega ? `Endereço: ${cliente.endereco}, ${cliente.cidade} - ${cliente.estado}, CEP: ${cliente.cep}` : ""}
    `);
    window.open(`https://wa.me/5511999999999?text=${texto}`, "_blank");
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
                  index <= currentStep
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step.icon}
              </div>
              <p
                className={`text-xs mt-1 ${
                  index === currentStep
                    ? "text-blue-600 font-medium"
                    : "text-gray-500"
                }`}
              >
                {step.title}
              </p>
            </div>
          ))}
        </div>

        {/* ETAPA 1 - CARRINHO */}
        {currentStep === 0 && (
          <>
            <h1 className="text-2xl font-bold mb-8">Meu carrinho ({produtos.length} itens)</h1>
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
              {/* Lista de produtos */}
              <div className="bg-white rounded-2xl shadow-sm border border-border p-6">
                <div className="grid grid-cols-3 font-semibold text-sm border-b pb-2 mb-4 text-muted-foreground">
                  <span className="col-span-2">Item</span>
                  <span className="text-right">Valor</span>
                </div>

                {produtos.map((p, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-3 items-center border-b border-border py-4"
                  >
                    <div className="col-span-2 flex items-center gap-4">
                      <img
                        src="https://via.placeholder.com/60"
                        alt={p.nome}
                        className="w-16 h-16 rounded-md object-cover"
                      />
                      <div>
                        <p className="font-medium">{p.nome}</p>
                        <button
                          type="button"
                          className="bg-red-100 hover:bg-red-200 text-red-600 text-xs px-2 py-1 rounded mt-2"
                        >
                          Remover
                        </button>
                      </div>
                    </div>
                    <div className="text-right font-semibold">
                      R$ {(p.qtd * p.preco).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Resumo */}
              <div className="w-full bg-white rounded-2xl shadow-sm border border-border p-6 h-fit">
                <h2 className="text-lg font-semibold mb-4">Resumo do carrinho</h2>
                <div className="flex justify-between text-sm mb-2">
                  <span>Itens ({produtos.length})</span>
                  <span>R$ {valorTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm mb-4">
                  <span>Desconto</span>
                  <span>-</span>
                </div>
                <div className="flex justify-between font-semibold text-base mb-6">
                  <span>Total a pagar</span>
                  <span>R$ {valorTotal.toFixed(2)}</span>
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

        {/* ETAPA 2 - DADOS CLIENTE */}
        {currentStep === 1 && (
          <div className="bg-white rounded-2xl shadow-md p-6 max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold mb-6">Informações de Entrega</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nome">Nome completo</Label>
                <Input
                  id="nome"
                  value={cliente.nome}
                  onChange={(e) => setCliente({ ...cliente, nome: e.target.value })}
                  placeholder="João da Silva"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="telefone">Telefone / WhatsApp</Label>
                <Input
                  id="telefone"
                  value={cliente.telefone}
                  onChange={(e) => setCliente({ ...cliente, telefone: e.target.value })}
                  placeholder="(99) 99999-9999"
                  className="mt-1"
                />
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="endereco">Endereço</Label>
                <Input
                  id="endereco"
                  value={cliente.endereco}
                  onChange={(e) => setCliente({ ...cliente, endereco: e.target.value })}
                  placeholder="Rua Exemplo, 123 - Bairro"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="cidade">Cidade</Label>
                <Input
                  id="cidade"
                  value={cliente.cidade}
                  onChange={(e) => setCliente({ ...cliente, cidade: e.target.value })}
                  placeholder="São Paulo"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="estado">Estado</Label>
                <Input
                  id="estado"
                  value={cliente.estado}
                  onChange={(e) => setCliente({ ...cliente, estado: e.target.value })}
                  placeholder="SP"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="cep">CEP</Label>
                <Input
                  id="cep"
                  value={cliente.cep}
                  onChange={(e) => setCliente({ ...cliente, cep: e.target.value })}
                  placeholder="00000-000"
                  className="mt-1"
                />
              </div>
            </div>

            <button
              onClick={handleNext}
              className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Próximo
            </button>
          </div>
        )}

        {/* ETAPA 3 - RESUMO FINAL */}
        {currentStep === 2 && (
          <div className="bg-gray-100 rounded-2xl p-6 w-full max-w-7xl mx-auto mt-4">
            <h2 className="text-xl font-semibold mb-4">Resumo:</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {/* Lista de Produtos */}
              <div className="flex flex-col gap-3">
                {produtos.map((produto, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 border border-gray-300"
                  >
                    <p className="font-semibold">{produto.nome}</p>
                    <p className="text-sm text-gray-600">
                      qtde: {produto.qtd} | valor un: R$ {produto.preco.toFixed(2)} | valor total: R$ {(produto.qtd * produto.preco).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Dados Cliente + Total + Botão */}
              <div className="bg-white rounded-xl p-4 border border-gray-300 flex flex-col justify-between">
                <div className="mb-4">
                  <p><strong>Nome:</strong> {cliente.nome}</p>
                  <p><strong>Contato:</strong> {cliente.telefone}</p>
                  {cliente.entrega && (
                    <p><strong>Endereço:</strong> {cliente.endereco}, {cliente.cidade} - {cliente.estado}, CEP: {cliente.cep}</p>
                  )}
                  <input
                    type="checkbox"
                    id="entrega"
                    checked={cliente.entrega}
                    onChange={(e) =>
                      setCliente({ ...cliente, entrega: e.target.checked })
                    }
                    className="mt-2"
                  />
                  <label htmlFor="entrega" className="ml-2">Entrega</label>
                </div>

                <div className="mt-4 border-t pt-4">
                  <p className="font-bold text-lg mb-2">
                    Valor total: R$ {valorTotal.toFixed(2)}
                  </p>

                  <button
                    onClick={enviarParaWhatsapp}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg w-full hover:bg-green-700 transition"
                  >
                    Finalizar pelo WhatsApp
                  </button>
                </div>
              </div>
            </div>
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
          {currentStep < steps.length - 1 && (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Próximo
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
