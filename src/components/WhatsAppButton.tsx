
import { MessageSquare } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/5543991081569?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20do%20Sol%20e%20Sabor%20Empório."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 z-50"
      aria-label="Contato via WhatsApp"
    >
      <MessageSquare className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
