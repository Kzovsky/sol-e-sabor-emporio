
const About = () => {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1546833998-877b37c2e5c6?q=80&w=3051&auto=format&fit=crop" 
                alt="Sobre o Sol e Sabor Empório" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-sol rounded-full flex items-center justify-center p-4 shadow-lg z-10 hidden md:flex">
              <span className="text-black font-playfair text-center font-bold">
                Desde<br />2015
              </span>
            </div>
          </div>
          
          {/* Texto */}
          <div>
            <h2 className="section-title text-left">Sobre o Sol e Sabor</h2>
            <div className="space-y-4">
              <p>
                Fundado em 2015, o <strong>Sol e Sabor Empório</strong> nasceu da paixão por sabores autênticos e produtos de qualidade. Nossa missão é proporcionar experiências gastronômicas inesquecíveis através de produtos selecionados com dedicação e conhecimento.
              </p>
              <p>
                Trabalhamos diretamente com pequenos produtores e importadoras exclusivas para garantir que cada item em nossas prateleiras tenha uma história para contar e um sabor único para oferecer.
              </p>
              <p>
                Mais que um empório, somos um ponto de encontro para os amantes da boa gastronomia. Um lugar onde cada produto é escolhido com cuidado, cada detalhe é pensado para encantar e onde a paixão pela comida se traduz em uma experiência completa.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-gray-50 p-5 rounded-lg text-center">
                <h3 className="font-playfair font-bold text-2xl text-sol">300+</h3>
                <p className="mt-2">Produtos Exclusivos</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg text-center">
                <h3 className="font-playfair font-bold text-2xl text-sol">50+</h3>
                <p className="mt-2">Parceiros</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg text-center">
                <h3 className="font-playfair font-bold text-2xl text-sol">8</h3>
                <p className="mt-2">Anos de Tradição</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
