
import { CheckCircle, Award, Clock, Shield, Target, Eye } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 sm:py-20 md:py-24" style={{
      background: 'hsl(var(--section-bg))'
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 text-gray-900">
            Sobre Nós
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-center max-w-4xl mx-auto text-gray-700 mb-12 sm:mb-16">
            Nossa jornada de transformação e crescimento no mercado empresarial
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <AnimatedSection animation="slide-in-left">
            <div className="relative">
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 rounded-full z-0"></div>
              <div className="relative z-10 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                <img 
                  alt="Equipe do Cont ADM Assessoria Empresarial" 
                  className="w-full h-auto" 
                  src="https://i.pinimg.com/1200x/80/eb/5a/80eb5aa736bff707aad224866c98880e.jpg" 
                />
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Nossa História - 2018
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  Em 2018, olhando para o futuro e estimando onde estar a 5 anos, foi decidido que uma empresa de Representação Comercial mudaria seu ramo econômico e se transformaria em uma empresa focada tecnicamente em outras empresas. Foi quando tivemos um primeiro contato com serviço de revisão fiscal, foco nas empresas do simples nacional, o que acabou despertando interesse para desenvolver a gestão empresarial e contabilidade.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Expansão - 2020
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  Em 2020 passamos a representar uma empresa de gestão empresarial, em pleno período de pandemia começamos a ajudar empresas a melhorarem seus resultados fazendo organização total do seu estabelecimento.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Consolidação - 2021
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  Ao final de 2021 veio a próxima etapa desta empreitada que foi a aprovação do conselho federal de contabilidade e abertura de uma empresa contábil. Agora nosso foco passa a ser também a contabilidade de empresas, sempre pensando na organização da gestão empresarial e sua correlação aos processos contábeis, deixando a informação mais enxuta possível.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Nova seção de Missão, Visão e Valores */}
        <AnimatedSection className="mt-16 sm:mt-20 md:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            
            {/* Missão */}
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Target className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Nossa Missão
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Oferecer soluções em gestão, finanças, administração e contabilidade com clareza, agilidade e confiança, ajudando empreendedores e empresas a alcançarem seus objetivos de forma simples e eficiente.
              </p>
            </div>

            {/* Visão */}
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Eye className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Nossa Visão
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Ser reconhecida como parceira estratégica que simplifica a gestão e a contabilidade, impulsionando o crescimento sustentável dos negócios, unindo transparência, inovação e compromisso com resultados.
              </p>
            </div>

            {/* Valores */}
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Award className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Nossos Valores
              </h3>
              <div className="text-left space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-700">
                    <strong>Clareza</strong> – transmitir informações de forma simples e transparente
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-700">
                    <strong>Honestidade</strong> – agir com ética e integridade em todas as relações
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-700">
                    <strong>Agilidade</strong> – oferecer soluções rápidas e eficazes
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-700">
                    <strong>Confiança</strong> – construir parcerias sólidas e duradouras
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-700">
                    <strong>Compromisso com Resultados</strong> – focar no crescimento dos negócios
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-700">
                    <strong>Inovação</strong> – buscar melhorias e novas soluções
                  </p>
                </div>
              </div>
            </div>

          </div>
        </AnimatedSection>

        {/* Seção antiga reformulada */}
        <AnimatedSection className="mt-16 sm:mt-20 md:mt-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Nosso Negócio</h3>
                <p className="text-sm sm:text-base text-gray-700">Prestar serviços confiáveis com qualidade, seriedade e segurança</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Compromisso</h3>
                <p className="text-sm sm:text-base text-gray-700">Garantir os melhores serviços e soluções com conhecimento e tecnologia</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Nossos Princípios</h3>
                <p className="text-sm sm:text-base text-gray-700">Confiança, qualidade, inovação e relacionamentos duradouros</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Objetivo</h3>
                <p className="text-sm sm:text-base text-gray-700">Crescer junto com nossos clientes e com toda a comunidade</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
