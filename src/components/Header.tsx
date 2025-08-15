import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Menu, X, ShoppingCart, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();

  const isOnHome = location.pathname === "/";

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();

    if (!isOnHome) {
      navigate("/", { state: { scrollTo: sectionId } });
      setIsMenuOpen(false);
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["produtos", "sobre", "contato"];
      let current = "";

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    if (isOnHome) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOnHome]);

  return (
    <header className="bg-black shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
            <h1 className="text-white text-2xl font-bold font-playfair">
              <span className="text-sol">Empório</span> Minas<span> Casa</span>
            </h1>
          </a>

          {/* nav P */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className={`text-white font-medium hover:text-sol transition-colors ${
                isOnHome && !activeSection ? "text-yellow-500" : ""
              }`}
            >
              Home
            </a>
            <a
              href="#produtos"
              onClick={(e) => handleNavClick(e, "produtos")}
              className={`text-white font-medium hover:text-sol transition-colors ${
                activeSection === "produtos" ? "text-yellow-500" : ""
              }`}
            >
              Produtos
            </a>
            <a
              href="#sobre"
              onClick={(e) => handleNavClick(e, "sobre")}
              className={`text-white font-medium hover:text-sol transition-colors ${
                activeSection === "sobre" ? "text-yellow-500" : ""
              }`}
            >
              Sobre Nós
            </a>
            <a
              href="#contato"
              onClick={(e) => handleNavClick(e, "contato")}
              className={`text-white font-medium hover:text-sol transition-colors ${
                activeSection === "contato" ? "text-yellow-500" : ""
              }`}
            >
              Contato
            </a>
          </nav>
          <div className="hidden md:flex items-center gap-2">
          {/* carrinho */}
          <div className="hidden md:flex items-center">
            <Link to="/cart">
                        
            <button className="p-2 text-white hover:text-sol transition-colors relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-sol text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
              </button>
            </Link>
            
          </div>
          {/* user */}
          <div className="hidden md:flex items-center">
            <Link to="/login">
              <button className="p-2 text-white hover:text-sol transition-colors relative">
                <User className="h-6 w-6" />
              </button>
            </Link>
            </div>
          </div>
          {/* btn menu mobile */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* nav mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a
                href="/"
                className={`font-medium hover:text-sol ${
                  isOnHome && !activeSection ? "text-yellow-500" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#produtos"
                onClick={(e) => handleNavClick(e, "produtos")}
                className={`font-medium hover:text-sol ${
                  activeSection === "produtos" ? "text-yellow-500" : ""
                }`}
              >
                Produtos
              </a>
              <a
                href="#sobre"
                onClick={(e) => handleNavClick(e, "sobre")}
                className={`font-medium hover:text-sol ${
                  activeSection === "sobre" ? "text-yellow-500" : ""
                }`}
              >
                Sobre Nós
              </a>
              <a
                href="#contato"
                onClick={(e) => handleNavClick(e, "contato")}
                className={`font-medium hover:text-sol ${
                  activeSection === "contato" ? "text-yellow-500" : ""
                }`}
              >
                Contato
              </a>
              <div className="flex items-center">
                <button className="p-2 text-black hover:text-sol transition-colors relative">
                  <ShoppingCart className="h-6 w-6" />
                  <span className="absolute -top-1 -right-1 bg-sol text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </button>
                <button></button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
