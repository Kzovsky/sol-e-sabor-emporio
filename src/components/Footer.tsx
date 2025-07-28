
import { Link } from "react-router-dom";
import { Phone, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Sobre */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Sol e Sabor</h3>
            <p className="text-white/80 mb-4">
              Produtos selecionados com dedicação e conhecimento para proporcionar experiências gastronômicas excepcionais.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/emporiominascasa/" target="_blank" className="text-sol hover:text-sol-light transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Links rápidos */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/80 hover:text-sol transition-colors">Home</Link></li>
              <li><Link to="/#produtos" className="text-white/80 hover:text-sol transition-colors">Produtos</Link></li>
              <li><Link to="/#categorias" className="text-white/80 hover:text-sol transition-colors">Categorias</Link></li>
              <li><Link to="/#sobre" className="text-white/80 hover:text-sol transition-colors">Sobre Nós</Link></li>
              <li><Link to="/#contato" className="text-white/80 hover:text-sol transition-colors">Contato</Link></li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-4">
              <p className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-sol flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white/80">R. 19 de Dezembro 32, Ibiporã, PR</span>
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-sol flex-shrink-0" />
                <a href="tel:+43991081569" className="text-white/80 hover:text-sol transition-colors">(43) 99108-1569</a>
              </p>
              <p className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-3 text-sol flex-shrink-0" />
                <a href="mailto:contato@solesabor.com" className="text-white/80 hover:text-sol transition-colors">email@exemplo.com</a>
              </p>
            </div>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Horário de Funcionamento</h4>
              <p className="text-white/80">Segunda a Sábado:  10h às 19h</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-white/60">&copy; {new Date().getFullYear()} Sol e Sabor Empório. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
