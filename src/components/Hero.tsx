
const Hero = () => {
  return (
    <div className="relative bg-secondary h-[500px] overflow-hidden">
      {/* Overlay com gradiente */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Imagem de fundo */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=2938&auto=format&fit=crop')",
          filter: "brightness(0.7)"
        }}
      ></div>
      
      {/* Conteúdo */}
      <div className="container-custom h-full flex flex-col justify-center relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair mb-4">
            Sabores que <span className="text-sol">Encantam</span>
          </h1>
          <p className="text-white text-lg md:text-xl mb-8">
            Descubra nossa seleção exclusiva de produtos gourmet para uma experiência gastronômica única.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#produtos" className="btn-primary text-center">
              Ver Produtos
            </a>
            <a 
              href="https://wa.me/5543991081569?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20do%20Sol%20e%20Sabor%20Empório."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-center"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
