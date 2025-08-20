
import { CheckCircle, Users, Award, Clock } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  const features = [
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais qualificados e experientes em contabilidade empresarial"
    },
    {
      icon: Award,
      title: "Qualidade Comprovada",
      description: "Anos de experiência atendendo empresas de diversos segmentos"
    },
    {
      icon: Clock,
      title: "Agilidade",
      description: "Processos otimizados para entregar resultados no prazo"
    },
    {
      icon: CheckCircle,
      title: "Conformidade",
      description: "Garantimos que sua empresa esteja sempre em conformidade fiscal"
    }
  ];

  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Sobre a Cont ADM
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-2">
              Somos uma empresa especializada em assessoria empresarial, oferecendo soluções contábeis completas para o seu negócio crescer com segurança e eficiência.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <AnimatedSection 
                key={feature.title} 
                animation="fade-in-up" 
                delay={index * 100}
              >
                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center h-full">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                    <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection className="text-center mt-12 sm:mt-16 md:mt-20">
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Nossa Missão
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Ser o parceiro estratégico ideal para empresas que buscam crescimento sustentável, 
              oferecendo soluções contábeis e financeiras personalizadas com excelência, 
              agilidade e total conformidade fiscal.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
