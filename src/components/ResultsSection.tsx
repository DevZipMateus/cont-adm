
import { TrendingUp, TrendingDown, BarChart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ResultsSection = () => {
  const results = [
    {
      icon: TrendingUp,
      title: "+38% de lucro",
      period: "em 6 meses",
      description: "Cliente do setor de serviços que aumentou significativamente sua margem após implementação da nossa metodologia."
    },
    {
      icon: TrendingDown,
      title: "-R$12 mil em prejuízos",
      period: "evitados",
      description: "Empresa de comércio que identificou e corrigiu falhas nos processos financeiros que geravam perdas constantes."
    },
    {
      icon: BarChart,
      title: "Fluxo de caixa previsível",
      period: "planejamento de 6 meses",
      description: "Startup que conseguiu estabelecer previsibilidade financeira para planejar expansão com segurança."
    }
  ];

  return (
    <section id="resultados" className="py-16 sm:py-20 md:py-24 lg:py-28 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 text-white">
            Resultados que falam por si
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-center max-w-4xl mx-auto text-white/90 mb-8 sm:mb-12">
            Casos reais de transformação financeira nas empresas que atendemos
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {results.map((result, index) => {
            const IconComponent = result.icon;
            
            return (
              <AnimatedSection 
                key={result.title} 
                animation="fade-in-up" 
                delay={index * 100}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/20 h-full flex flex-col transition-all duration-300 hover:bg-white/15">
                  <div className="rounded-full bg-white w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-4 sm:mb-6">
                    <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 text-white">
                    {result.title}
                  </h3>
                  <p className="text-white/80 mb-3 sm:mb-4 font-medium text-sm sm:text-base">
                    {result.period}
                  </p>
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed flex-grow">
                    {result.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
