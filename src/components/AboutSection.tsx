
import { CheckCircle, Award, Clock, Shield } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24" style={{
      background: 'hsl(var(--section-bg))'
    }}>
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title text-gray-900">Sobre Nós</h2>
          <p className="section-subtitle text-gray-700">
            Nossa jornada de transformação e crescimento no mercado empresarial
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
          <AnimatedSection animation="slide-in-left">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  alt="Equipe do Cont ADM Assessoria Empresarial" 
                  className="w-full h-auto" 
                  src="https://i.pinimg.com/1200x/80/eb/5a/80eb5aa736bff707aad224866c98880e.jpg" 
                />
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" className="space-y-8">
            <div className="space-y-6">
              <div>
                <h3 className="heading-4 text-gray-900 mb-4">Nossa História - 2018</h3>
                <p className="body-large text-gray-700">
                  Em 2018, olhando para o futuro e estimando onde estar a 5 anos, foi decidido que uma empresa de Representação Comercial mudaria seu ramo econômico e se transformaria em uma empresa focada tecnicamente em outras empresas. Foi quando tivemos um primeiro contato com serviço de revisão fiscal, foco nas empresas do simples nacional, o que acabou despertando interesse para desenvolver a gestão empresarial e contabilidade.
                </p>
              </div>

              <div>
                <h3 className="heading-4 text-gray-900 mb-4">Expansão - 2020</h3>
                <p className="body-large text-gray-700">
                  Em 2020 passamos a representar uma empresa de gestão empresarial, em pleno período de pandemia começamos a ajudar empresas a melhorarem seus resultados fazendo organização total do seu estabelecimento.
                </p>
              </div>

              <div>
                <h3 className="heading-4 text-gray-900 mb-4">Consolidação - 2021</h3>
                <p className="body-large text-gray-700">
                  Ao final de 2021 veio a próxima etapa desta empreitada que foi a aprovação do conselho federal de contabilidade e abertura de uma empresa contábil. Agora nosso foco passa a ser também a contabilidade de empresas, sempre pensando na organização da gestão empresarial e sua correlação aos processos contábeis, deixando a informação mais enxuta possível.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="heading-4 text-gray-900 mb-2">Nosso Negócio</h3>
                  <p className="body-medium text-gray-700">Prestar serviços confiáveis com qualidade, seriedade e segurança</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="heading-4 text-gray-900 mb-2">Nossa Missão</h3>
                  <p className="body-medium text-gray-700">Garantir os melhores serviços e soluções com conhecimento e tecnologia</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="heading-4 text-gray-900 mb-2">Nossos Princípios</h3>
                  <p className="body-medium text-gray-700">Confiança, qualidade, inovação e relacionamentos duradouros</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="heading-4 text-gray-900 mb-2">Nossa Visão</h3>
                  <p className="body-medium text-gray-700">Crescer junto com nossos clientes e com toda a comunidade</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
