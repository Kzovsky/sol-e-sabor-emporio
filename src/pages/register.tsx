import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');
  const [carregando, setCarregando] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');
    setSucesso('');
    setCarregando(true);

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        nome: nome + ' ' + sobrenome,
        telefone,
        senha
      });

      setSucesso(response.data.message || 'Usuário registrado com sucesso!');

      setNome('');
      setSobrenome('');
      setTelefone('');
      setSenha('');
    } catch (err: any) {
      setErro(err.response?.data?.error || 'Erro ao registrar usuário.');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Registrar-se</h2>

        {erro && <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{erro}</div>}
        {sucesso && <div className="bg-green-100 text-green-700 p-2 mb-4 rounded">{sucesso}</div>}

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Nome</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Sobrenome</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            required
          />
        </div>

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
          {carregando ? 'Registrando...' : 'Registrar'}
        </button>
      </form>
    </div>
  );
};

export default Register;
