
import AnimatedSection from './AnimatedSection';
import { Building2, Briefcase, DollarSign, Settings } from 'lucide-react';

const CTAButtons = () => {
  const phoneNumber = "12982147656";

  const handleButtonClick = (serviceTitle: string) => {
    const message = `Olá! Gostaria de saber mais sobre: ${serviceTitle}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const services = [
    {
      title: "Quero saber sobre recuperação de créditos",
      description: "Evite dor de cabeça, conte com nosso apoio e siga os passos certos.",
      icon: Building2
    },
    {
      title: "Já Tenho uma Empresa",
      description: "Temos uma equipe super preparada para cuidar da sua contabilidade.",
      icon: Briefcase
    },
    {
      title: "Preciso de Gestão financeira",
      description: "Conte com o nosso serviço especializados em BPO.",
      icon: DollarSign
    },
    {
      title: "Preciso de Gestão Empresarial",
      description: "Temos uma equipe super preparada para cuidar da sua empresa.",
      icon: Settings
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <AnimatedSection animation="fade-in-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleButtonClick(service.title)}
                  className="group relative overflow-hidden bg-secondary hover:bg-secondary/90 text-white rounded-xl p-6 md:p-8 lg:p-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 block text-left w-full min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] flex flex-col justify-between"
                >
                  <div className="flex flex-col items-center justify-start gap-4 mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                    </div>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center leading-tight text-white">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-white/90 text-center text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mt-auto">
                    {service.description}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTAButtons;
