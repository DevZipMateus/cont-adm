
import { ChevronRight, Briefcase } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ServicesButton = () => {
  const phoneNumber = "12982147656";
  const message = "Olá! Gostaria de saber mais sobre os serviços contábeis do Escritório De Grandi.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center">
            <button
              onClick={handleWhatsAppClick}
              className="group inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <Briefcase className="h-6 w-6" />
              Fale Conosco Sobre Nossos Serviços
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesButton;
