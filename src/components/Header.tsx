
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold font-playfair">
              <span className="text-sol">Empório</span> Minas<span> Casa</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-sol transition-colors">Home</Link>
            <a href="#produtos" className="font-medium hover:text-sol transition-colors">Produtos</a>
            <a href="#categorias" className="font-medium hover:text-sol transition-colors">Categorias</a>
            <a href="#sobre" className="font-medium hover:text-sol transition-colors">Sobre Nós</a>
            <a href="#contato" className="font-medium hover:text-sol transition-colors">Contato</a>
            </nav>
                      {/* Cart Icon */}
          <div className="hidden md:flex items-center">
            <button className="p-2 text-black hover:text-sol transition-colors relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-sol text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-medium hover:text-sol transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/produtos" target="_blank" className="font-medium hover:text-sol transition-colors" onClick={() => setIsMenuOpen(false)}>Produtos</Link>
              <Link to="/#categorias" className="font-medium hover:text-sol transition-colors" onClick={() => setIsMenuOpen(false)}>Categorias</Link>
              <Link to="/#sobre" className="font-medium hover:text-sol transition-colors" onClick={() => setIsMenuOpen(false)}>Sobre Nós</Link>
              <Link to="/#contato" className="font-medium hover:text-sol transition-colors" onClick={() => setIsMenuOpen(false)}>Contato</Link>
              <div className="flex items-center">
                <button className="p-2 text-black hover:text-sol transition-colors relative">
                  <ShoppingCart className="h-6 w-6" />
                  <span className="absolute -top-1 -right-1 bg-sol text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">0</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
