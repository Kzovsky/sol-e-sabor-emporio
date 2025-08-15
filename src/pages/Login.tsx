import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://172.17.2.159:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ telefone, senha }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Erro no login");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("nome", data.nome);

      const redirectTo = location.state?.from?.pathname || "/";
      navigate(redirectTo, { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Entrar</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Telefone</label>
          <input
            type="text"
            placeholder="Digite seu telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Entrar
        </button>
        <p className="mt-4 text-center">
          Não tem uma conta?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Registrar-se
          </a>
        </p>
      </form>
    </div>
  );
}
