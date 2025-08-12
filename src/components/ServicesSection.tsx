
import { Calculator, FileText, Building, DollarSign, Shield, Settings } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ServicesSection = () => {
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
    <section id="servicos" className="py-16 md:py-20">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title text-white">Nossos Serviços</h2>
          <p className="section-subtitle text-white/90 text-balanced">
            Soluções contábeis completas para o seu negócio
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 mt-10 md:mt-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <AnimatedSection 
                key={service.title} 
                animation="fade-in-up" 
                delay={index * 100}
              >
                <div className="card-feature h-full">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 md:mb-6">
                    <IconComponent className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                  </div>
                  <h3 className="heading-4 text-gray-900 mb-3 md:mb-4">{service.title}</h3>
                  <p className="body-medium text-gray-600 paragraph-justified mb-4">{service.description}</p>
                  
                  {service.details && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Detalhes:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {service.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span>{detail}</span>
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

        <AnimatedSection className="text-center mt-10 md:mt-12">
          <a href="#contato" className="btn-primary inline-block">
            Solicitar Orçamento
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
