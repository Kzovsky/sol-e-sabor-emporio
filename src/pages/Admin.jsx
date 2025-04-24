import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Admin() {
  const [produtos, setProdutos] = useState([]);
  const [form, setForm] = useState({
    name: '', description: '', price: '', image: '', category: '', featured: false
  });
  const [editandoId, setEditandoId] = useState(null);
  const [editForm, setEditForm] = useState({});

  // Carregar produtos
  useEffect(() => {
    carregarProdutos();
  }, []);

  const carregarProdutos = async () => {
    try {
      const res = await axios.get('/api/produtos');
      console.log("RESPOSTA DA API:", res.data);
      setProdutos(res.data);
    } catch (err) {
      console.error("Erro ao carregar produtos:", err);
    }
  };

  // Manipular inputs do form de adição
  const handleInput = e => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const adicionarProduto = async () => {
    try {
      await axios.post('/api/produtos', form);
      setForm({ name: '', description: '', price: '', image: '', category: '', featured: false });
      carregarProdutos();
    } catch (err) {
      console.error("Erro ao adicionar produto:", err);
    }
  };

  const excluirProduto = async id => {
    try {
      await axios.delete(`/api/produtos/${id}`);
      carregarProdutos();
    } catch (err) {
      console.error("Erro ao excluir produto:", err);
    }
  };

  const startEditar = (produto) => {
    setEditandoId(produto._id);
    setEditForm(produto);
  };

  const handleEditInput = e => {
    const { name, value, type, checked } = e.target;
    setEditForm({ ...editForm, [name]: type === 'checkbox' ? checked : value });
  };

  const salvarEdicao = async () => {
    try {
      await axios.put(`/api/produtos/${editandoId}`, editForm);
      setEditandoId(null);
      carregarProdutos();
    } catch (err) {
      console.error("Erro ao salvar edição:", err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Painel de Administração</h1>

      {/* Formulário de adição */}
      <div className="grid grid-cols-1 gap-2 mb-6 max-w-md">
        <input name="name" value={form.name} onChange={handleInput} placeholder="Nome" />
        <input name="description" value={form.description} onChange={handleInput} placeholder="Descrição" />
        <input name="price" type="number" value={form.price} onChange={handleInput} placeholder="Preço" />
        <input name="image" value={form.image} onChange={handleInput} placeholder="URL da imagem" />
        <input name="category" value={form.category} onChange={handleInput} placeholder="Categoria" />
        <label>
          <input name="featured" type="checkbox" checked={form.featured} onChange={handleInput} /> Destaque?
        </label>
        <button onClick={adicionarProduto}>Adicionar Produto</button>
      </div>

      {/* Lista de produtos */}
      <h2 className="text-xl font-semibold mb-2">Produtos</h2>
      <div className="space-y-4">
        {produtos.length === 0 ? (
          <p>Nenhum produto encontrado.</p>
        ) : (
          produtos.map(prod => (
            <div key={prod._id} className="border p-3 rounded-md flex flex-col gap-1">
              {editandoId === prod._id ? (
                <>
                  <input name="name" value={editForm.name} onChange={handleEditInput} />
                  <input name="description" value={editForm.description} onChange={handleEditInput} />
                  <input name="price" type="number" value={editForm.price} onChange={handleEditInput} />
                  <input name="image" value={editForm.image} onChange={handleEditInput} />
                  <input name="category" value={editForm.category} onChange={handleEditInput} />
                  <label>
                    <input type="checkbox" name="featured" checked={editForm.featured} onChange={handleEditInput} />
                    Destaque?
                  </label>
                  <div className="flex gap-2">
                    <button onClick={salvarEdicao}>Salvar</button>
                    <button onClick={() => setEditandoId(null)}>Cancelar</button>
                  </div>
                </>
              ) : (
                <>
                  <p><strong>{prod.name}</strong> - R$ {prod.price.toFixed(2)}</p>
                  <p>{prod.description}</p>
                  <p>Categoria: {prod.category} | Destaque: {prod.featured ? 'Sim' : 'Não'}</p>
                  <div className="flex gap-2">
                    <button onClick={() => startEditar(prod)}>Editar</button>
                    <button onClick={() => excluirProduto(prod._id)}>Excluir</button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
