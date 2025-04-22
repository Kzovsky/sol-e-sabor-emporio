
import { Phone, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos à disposição para tirar suas dúvidas, receber sugestões ou atender seus pedidos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Informações de contato */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="font-playfair text-xl font-bold mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-sol/10 rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sol" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Endereço</h4>
                  <p className="text-muted-foreground">Av. Paulista, 1000<br />São Paulo, SP - CEP 01310-100</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-sol/10 rounded-full p-3 mr-4">
                  <Phone className="h-6 w-6 text-sol" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Telefone</h4>
                  <a 
                    href="tel:+551199999999" 
                    className="text-muted-foreground hover:text-sol transition-colors"
                  >
                    (11) 99999-9999
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-sol/10 rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sol" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a 
                    href="mailto:contato@solesabor.com" 
                    className="text-muted-foreground hover:text-sol transition-colors"
                  >
                    contato@solesabor.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium mb-2">Horário de Funcionamento</h4>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="text-muted-foreground">Segunda - Sábado:</span>
                  <span>9h às 20h</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-muted-foreground">Domingo:</span>
                  <span>9h às 15h</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Mapa */}
          <div className="lg:col-span-2 bg-white p-1 rounded-lg shadow-md overflow-hidden h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.098371826354!2d-46.65627022386012!3d-23.563167361307726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1682458562227!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{border: 0}} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Sol e Sabor Empório"
            ></iframe>
          </div>
        </div>
        
        {/* Botão de WhatsApp */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-playfair font-bold mb-4">Peça pelo WhatsApp</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Para fazer seu pedido ou tirar dúvidas, entre em contato pelo WhatsApp. Atendemos de segunda a sábado, das 9h às 20h.
          </p>
          <a 
            href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20do%20Sol%20e%20Sabor%20Empório."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center px-8 py-3"
          >
            <MessageSquare className="h-5 w-5 mr-2" />
            <span>Chamar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
