
import { ClipboardList, BarChart2, Zap, LineChart, TrendingUp } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Card } from './ui/card';

const MethodologySection = () => {
  const steps = [{
    number: 1,
    icon: ClipboardList,
    title: "Diagnóstico personalizado",
    description: "Análise detalhada da situação financeira atual da sua empresa para identificar pontos de melhoria."
  }, {
    number: 2,
    icon: BarChart2,
    title: "Estruturação do financeiro",
    description: "Organização e implementação de processos financeiros claros e eficientes."
  }, {
    number: 3,
    icon: Zap,
    title: "Acompanhamento próximo + dados atualizados diariamente",
    description: "Monitoramento constante dos indicadores financeiros para ajustes em tempo real."
  }, {
    number: 4,
    icon: LineChart,
    title: "Implantação com bonificação e treinamento do seu time",
    description: "Implementação das soluções com treinamento da equipe e sistemas de bonificação por resultados."
  }, {
    number: 5,
    icon: TrendingUp,
    title: "Decisões assertivas com foco no lucro",
    description: "Apoio estratégico contínuo para maximizar resultados e garantir o crescimento sustentável."
  }];
  
  return (
    <section id="metodologia" className="py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 text-white">
            O Caminho do Lucro
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-center max-w-4xl mx-auto text-white/90 mb-8 sm:mb-12 lg:mb-16">
            Nossa metodologia foi desenvolvida para transformar caos em clareza financeira
          </p>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute top-16 sm:top-20 lg:top-24 left-0 right-0 h-0.5 sm:h-1 bg-white/30 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <AnimatedSection 
                  key={step.title} 
                  animation="fade-in-up" 
                  delay={index * 150} 
                  className="relative"
                >
                  <Card className="h-full border border-white/20 shadow-md hover:shadow-lg transition-all duration-300 p-4 sm:p-6 lg:p-8 bg-white/10 backdrop-blur-sm">
                    <div className="flex flex-col h-full text-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-white text-primary font-bold text-lg sm:text-xl lg:text-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                        {step.number}
                      </div>
                      <IconComponent className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9 mb-3 sm:mb-4 mx-auto text-white" />
                      <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold mb-2 sm:mb-3 text-white leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm lg:text-base text-white/90 leading-relaxed flex-grow">
                        {step.description}
                      </p>
                    </div>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
