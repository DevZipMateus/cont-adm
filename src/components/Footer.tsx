
import { MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="section-container">
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/d3133fad-f083-4b24-a087-bf3356e5a89c.png" 
            alt="Cont ADM Assessoria Empresarial" 
            className="h-24 brightness-0 invert" 
          />
        </div>

        <div className="text-center mb-8">
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <Phone className="h-4 w-4" />
              <span className="text-sm sm:text-base">Telefone: (12) 9.8214-7656</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <Phone className="h-4 w-4" />
              <span className="text-sm sm:text-base">WhatsApp: (12) 9.8214-7656</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2025 Cont ADM Assessoria Empresarial. Todos os direitos reservados. Desenvolvido por MonteSite.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
