
import { Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-center mb-8 sm:mb-12">
          <img 
            src="/lovable-uploads/d3133fad-f083-4b24-a087-bf3356e5a89c.png" 
            alt="Cont ADM Assessoria Empresarial" 
            className="h-16 sm:h-20 md:h-24 lg:h-28 brightness-0 invert" 
          />
        </div>

        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8">
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base lg:text-lg">Telefone: (12) 9.8214-7656</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base lg:text-lg">WhatsApp: (12) 9.8214-7656</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-4xl mx-auto px-4">
            © 2025 Cont ADM Assessoria Empresarial. Todos os direitos reservados. Desenvolvido por MonteSite.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
