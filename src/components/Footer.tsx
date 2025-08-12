
import { MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="section-container">
        <div className="flex justify-center">
          {/* Logo Only */}
          <div className="text-center">
            <img 
              src="/lovable-uploads/d3133fad-f083-4b24-a087-bf3356e5a89c.png" 
              alt="Cont ADM Assessoria Empresarial" 
              className="h-24 mb-3 sm:mb-4 brightness-0 invert mx-auto" 
            />
            <p className="text-gray-300 mb-3 sm:mb-4 max-w-md text-sm sm:text-base">
              Assessoria empresarial especializada oferecendo serviços contábeis completos 
              com excelência e tradição no mercado há mais de 40 anos.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2025 Cont ADM Assessoria Empresarial. Todos os direitos reservados. Desenvolvido por MonteSite.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
