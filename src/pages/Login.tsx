import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');
  const [carregando, setCarregando] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');
    setSucesso('');
    setCarregando(true);

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        telefone,
        senha
      });

      const { token, nome } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('nome', nome);

      setSucesso('Login realizado com sucesso!');
    } catch (err: any) {
      setErro(err.response?.data?.error || 'Erro ao fazer login.');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 relative">
      
      {/* AVISO SUCESSO - TOPO FIXO */}
      {sucesso && (
        <div className="absolute top-5 w-full flex justify-center z-50">
          <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-3 rounded shadow aviso-sucesso">
            {sucesso}
          </div>
        </div>
      )}

      {/* FORMULÁRIO */}
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {erro && <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{erro}</div>}

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Telefone</label>
          <input
            type="tel"
            className="w-full p-2 border border-gray-300 rounded"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Senha</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={carregando}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {carregando ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
};

export default Login;
