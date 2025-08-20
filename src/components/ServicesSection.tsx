import { Calculator, FileText, Building, DollarSign, Shield, Settings } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ServicesSection = () => {
  const phoneNumber = "12982147656";
  
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de solicitar um orçamento para os serviços contábeis.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const services = [
    {
      icon: Calculator,
      title: "Assessoria Contábil",
      description: "Realizamos consultoria, assessoria e execução, em nossas dependências ou nas instalações do cliente, de serviços de contabilidade.",
      details: [
        "Escrituração contábil convencional",
        "Levantamento de Balancetes e outros relatórios contábeis",
        "Elaboração das demonstrações contábeis",
        "Análise das demonstrações contábeis",
        "Consolidação de demonstrações contábeis",
        "Emissão dos Livros Contábeis, seja na forma convencional ou digital",
        "Atendimento às obrigações vinculadas ao SPED (Escrituração Contábil Digital)"
      ]
    },
    {
      icon: FileText,
      title: "Assessoria Fiscal e Tributária",
      description: "Realizamos consultoria, assessoria e execução, em nossas dependências ou nas instalações do cliente, de serviços vinculados à área fiscal e tributária.",
      details: [
        "Escrituração fiscal convencional",
        "Cálculos e apurações de tributos federais, estaduais e municipais",
        "Escrituração Fiscal Digital (EFD) – ICMS e IPI",
        "Escrituração Fiscal Digital (EFD) Contribuições – PIS e COFINS",
        "Escrituração Contábil Fiscal (ECF)",
        "Consultoria fiscal e tributária",
        "Verificação de ativos e passivos tributários",
        "Recuperação de créditos fiscais",
        "Planejamento tributário",
        "Análises e pareceres de autos de infração para fins de defesas fiscais"
      ]
    },
    {
      icon: Building,
      title: "Gestão Empresarial",
      description: "Oferecemos os melhores sistemas de gestão empresarial do mercado, além disso fazemos consultoria diretamente no sistema em seu estabelecimento."
    },
    {
      icon: DollarSign,
      title: "Imposto de Renda",
      description: "Fazemos parte da maior comunidade de especialistas de imposto de renda do Brasil. Além deste serviço, orientamos autônomos que precisam organizar seus recebimentos e declarar ao carnê leão."
    },
    {
      icon: Shield,
      title: "Recuperação de Créditos Tributários e Previdenciários",
      description: "Trabalhamos para identificar e criar soluções legais de resgates de impostos para efeito de recuperação de crédito, com a imediata e considerável redução na carga tributária de sua empresa."
    },
    {
      icon: Settings,
      title: "Parametrização Fiscal",
      description: "Parametrização fiscal é ajustar o seu banco de dados do estoque com informações atualizadas e aplicando a legislação em vigor. Além de aplicar corretamente as informações fiscais, é possível também reduzir custos com impostos. As informações parametrizadas são: NCM, CFOP, CSOSN, alíquotas, códigos tributários entre outros."
    }
  ];

  return (
    <section id="servicos" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 text-white">
            Nossos Serviços
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-center text-white/90 text-balanced max-w-4xl mx-auto">
            Soluções contábeis completas para o seu negócio
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-12 sm:mt-16 md:mt-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <AnimatedSection 
                key={service.title} 
                animation="fade-in-up" 
                delay={index * 100}
              >
                <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-lg bg-primary/10 flex items-center justify-center mb-6 sm:mb-8">
                    <IconComponent className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                    {service.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 paragraph-justified mb-6 sm:mb-8 flex-grow">
                    {service.description}
                  </p>
                  
                  {service.details && (
                    <div className="mt-auto">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-3 sm:mb-4">
                        Detalhes:
                      </h4>
                      <ul className="text-sm sm:text-base text-gray-600 space-y-2 sm:space-y-3">
                        {service.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <span className="text-primary mr-3 mt-1 flex-shrink-0">•</span>
                            <span className="leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection className="text-center mt-12 sm:mt-16 md:mt-20">
          <button 
            onClick={handleWhatsAppClick}
            className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-lg sm:rounded-xl text-base sm:text-lg md:text-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            Solicitar Orçamento
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
