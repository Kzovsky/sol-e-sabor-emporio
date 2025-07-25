import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Admin() {
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [usandoNovaCategoria, setUsandoNovaCategoria] = useState(false);
  const [novaCategoria, setNovaCategoria] = useState('');
  const [erroForm, setErroForm] = useState('');
  const astVer = {
    color: 'red',

  };

  const [form, setForm] = useState({
    name: '', description: '', price: '', image: '', category: '', featured: false
  });

  const [editandoId, setEditandoId] = useState(null);
  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    carregarProdutos();
  }, []);

  const carregarProdutos = async () => {
    try {
      const res = await axios.get('/api/produtos');
      setProdutos(res.data);
      const categoriasUnicas = Array.from(new Set(res.data.map((p) => p.category)));
      setCategorias(categoriasUnicas);
    } catch (err) {
      console.error("Erro ao carregar produtos:", err);
    }
  };

  const handleInput = e => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const adicionarProduto = async () => {
    if (erroForm) {
      setErroForm('');
    }
    if (usandoNovaCategoria && categorias.includes(novaCategoria.trim())) {
      setErroForm("Essa categoria já existe.");
      return;
    }
    if (!form.name || !form.price || !form.image || (!form.category && !novaCategoria)) {
      setErroForm("Preencha todos os campos obrigatórios.");
      return;
    }

    const categoriaFinal = usandoNovaCategoria ? novaCategoria : form.category;

    try {
      await axios.post('/api/produtos', { ...form, category: categoriaFinal });
      setForm({ name: '', description: '', price: '', image: '', category: '', featured: false });
      setNovaCategoria('');
      setUsandoNovaCategoria(false);
      setErroForm('');
      carregarProdutos();
    } catch (err) {
      console.error("Erro ao adicionar produto:", err);
      setErroForm("Erro ao adicionar produto.");
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
    
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Painel de Administração</h1>

      {/* Formulário de adição */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Adicionar Produto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="relative">
            <input
              name="name"
              value={form.name}
              onChange={handleInput}
              placeholder="Nome"
              className="border rounded p-2 w-full"
            />
            <span className="absolute text-lg -top-2 -right-2"style={astVer}>*</span>
          </div>
          <div className="relative">
            <input
              name="price"
              type="number"
              value={form.price}
              onChange={handleInput}
              placeholder="Preço"
              className="border rounded p-2 w-full"
            />
            <span className="absolute text-lg -top-2 -right-2 astVer" style={astVer}>*</span>
          </div>
          <input
            name="image"
            value={form.image}
            onChange={handleInput}
            placeholder="URL da imagem"
            className="border rounded p-2"
          />
          <select
            name="category"
            value={usandoNovaCategoria ? '+nova' : form.category}
            onChange={(e) => {
              if (e.target.value === '+nova') {
                setUsandoNovaCategoria(true);
                setForm({ ...form, category: '' });
              } else {
                setUsandoNovaCategoria(false);
                setForm({ ...form, category: e.target.value });
              }
            }}
            className="border rounded p-2"
          >
            <option value="">Selecione uma categoria</option>
            {categorias.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
            <option value="+nova">+ Criar nova categoria</option>
          </select>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <textarea
              name="description"
              value={form.description}
              onChange={handleInput}
              placeholder="Descrição"
              className="border rounded p-2 w-full resize-none"
              style={{ resize: "none" }}
            />

            {usandoNovaCategoria && (
              <input
                type="text"
                placeholder="Nova categoria"
                value={novaCategoria}
                onChange={(e) => setNovaCategoria(e.target.value)}
                className="border rounded p-2 w-full"
              />
            )}
          </div> {/* FECHAMENTO CORRETO */}
          </div>

        {form.image && (
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-1">Preview da imagem:</p>
            <img src={form.image} alt="preview" className="h-32 object-contain rounded border" />
          </div>
        )}

        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2">
            <input name="featured" type="checkbox" checked={form.featured} onChange={handleInput} />
            Destaque
          </label>
          <button
            onClick={adicionarProduto}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Adicionar Produto
          </button>
          <button
            onClick={() =>
              setForm({
                name: '', description: '', price: '', image: '', category: '', featured: false
              })
            }
            className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
          >
            Resetar
          </button>
        </div>

        {erroForm && (
          <p className="text-red-600 text-sm mt-2">{erroForm}</p>
        )}
      </div>

      {/* Lista de produtos */}
      <h2 className="text-2xl font-semibold mb-4">Produtos</h2>
      {produtos.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {produtos.map(prod => (
            <div key={prod._id} className="border rounded-lg p-4 shadow-sm bg-white">
              {editandoId === prod._id ? (
                <>
                  <input name="name" value={editForm.name} onChange={handleEditInput} className="border rounded p-2 w-full mb-2" />
                  <input name="description" value={editForm.description} onChange={handleEditInput} className="border rounded p-2 w-full mb-2 resize-none !resize-none" />
                  <input name="price" type="number" value={editForm.price} onChange={handleEditInput} className="border rounded p-2 w-full mb-2" />
                  <input name="image" value={editForm.image} onChange={handleEditInput} className="border rounded p-2 w-full mb-2" />
                  <input name="category" value={editForm.category} onChange={handleEditInput} className="border rounded p-2 w-full mb-2" />
                  <label className="flex items-center gap-2 mb-2">
                    <input type="checkbox" name="featured" checked={editForm.featured} onChange={handleEditInput} />
                    Destaque
                  </label>
                  <div className="flex gap-2">
                    <button onClick={salvarEdicao} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Salvar</button>
                    <button onClick={() => setEditandoId(null)} className="bg-gray-300 px-4 py-2 rounded">Cancelar</button>
                  </div>
                </>
              ) : (
                <>
                  <img src={prod.image} alt={prod.name} className="w-full h-40 object-cover mb-2 rounded" />
                  <p className="font-semibold">{prod.name}</p>
                  <p className="text-sm text-gray-600">{prod.description}</p>
                  <p className="text-sm text-gray-700">R$ {Number(prod.price).toFixed(2)}</p>
                  <p className="text-xs text-gray-500">Categoria: {prod.category} | Destaque: {prod.featured ? 'Sim' : 'Não'}</p>
                  <div className="flex gap-2 mt-2">
                    <button onClick={() => startEditar(prod)} className="bg-yellow-500 hover:bg-yellow-600 text-black px-2 py-1 border rounded p-2 w-full mb-2 hover-btn-grey">Editar</button>
                    <button onClick={() => excluirProduto(prod._id)} className="bg-red-600 hover:bg-red-700 text-black px-2 py-1 border rounded p-2 w-full mb-2 hover-btn-red">Excluir</button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
