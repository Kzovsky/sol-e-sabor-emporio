import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "../components/Header";

export default function UserInfo() {
  return (
    <div className="min-h-screen bg-muted/30 text-foreground">
      <Header />
    <div className="bg-white rounded-2xl shadow-md p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-6">Informações de Entrega</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="nome">Nome completo</Label>
          <Input id="nome" placeholder="João da Silva" className="mt-1" />
        </div>

        <div>
          <Label htmlFor="telefone">Telefone / WhatsApp</Label>
          <Input id="telefone" placeholder="(99) 99999-9999" className="mt-1" />
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="endereco">Endereço</Label>
          <Input id="endereco" placeholder="Rua Exemplo, 123 - Bairro" className="mt-1" />
        </div>

        <div>
          <Label htmlFor="cidade">Cidade</Label>
          <Input id="cidade" placeholder="São Paulo" className="mt-1" />
        </div>

        <div>
          <Label htmlFor="estado">Estado</Label>
          <Input id="estado" placeholder="SP" className="mt-1" />
        </div>

        <div>
          <Label htmlFor="cep">CEP</Label>
          <Input id="cep" placeholder="00000-000" className="mt-1" />
        </div>
      </div>
    </div>
    </div>
  );
}
