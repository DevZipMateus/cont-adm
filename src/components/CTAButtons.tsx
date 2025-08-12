
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import ContactModal from './ContactModal';
import { Building2, Briefcase, DollarSign, Settings } from 'lucide-react';

const CTAButtons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleButtonClick = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
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
    <>
      <section className="spacing-section-sm bg-white">
        <div className="section-container">
          <AnimatedSection animation="fade-in-up" className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleButtonClick(service.title)}
                    className="group relative overflow-hidden bg-secondary hover:bg-secondary/90 text-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 block text-left w-full"
                  >
                    <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-white/90 text-center text-sm sm:text-base md:text-lg leading-relaxed">
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

      <ContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceTitle={selectedService}
      />
    </>
  );
};

export default CTAButtons;
