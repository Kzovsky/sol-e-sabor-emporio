//import { useCart } from "../hooks/useCart"; // supondo que você tenha um hook para acessar os dados
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
const Resumo = () => {
  const navigate = useNavigate();

  // Mock de dados - substitua pelos reais
  const produtos = [
    { nome: "Produto A", qtd: 5, preco: 10 },
    { nome: "Produto B", qtd: 2, preco: 25 },
    { nome: "Produto C", qtd: 1, preco: 30 },
  ];

  const cliente = {
    nome: "João da Silva",
    contato: "(11) 99999-9999",
    endereco: "Rua Exemplo, 123 – Bairro",
    entrega: true,
  };

  const valorTotal = produtos.reduce((total, p) => total + p.qtd * p.preco, 0);

  const enviarParaWhatsapp = () => {
    const texto = encodeURIComponent(`
Olá! Gostaria de finalizar a compra:

${produtos.map(p => `• ${p.nome}: ${p.qtd} x R$ ${p.preco.toFixed(2)} = R$ ${(p.qtd * p.preco).toFixed(2)}`).join('\n')}

Valor total: R$ ${valorTotal.toFixed(2)}

Nome: ${cliente.nome}
Contato: ${cliente.contato}
${cliente.entrega ? `Endereço: ${cliente.endereco}` : ''}
    `);
    window.open(`https://wa.me/5511999999999?text=${texto}`, "_blank");
  };

return (
        <div className="min-h-screen bg-muted/30 text-foreground">
      <Header />
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
          <p><strong>Contato:</strong> {cliente.contato}</p>
          {cliente.entrega && (
            <p><strong>Endereço:</strong> {cliente.endereco}</p>
          )}
          <input type="checkbox" id="entrega" checked={cliente.entrega} readOnly className="mt-2" />
          <label htmlFor="entrega" className="ml-2">Entrega</label>
        </div>

        <div className="mt-4 border-t pt-4">
          <p className="font-bold text-lg mb-2">Valor total: R$ {valorTotal.toFixed(2)}</p>

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
  </div>
);

};

export default Resumo;
