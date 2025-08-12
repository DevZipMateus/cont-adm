
import AnimatedSection from './AnimatedSection';

const HeroSection = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20" 
      style={{
        background: 'linear-gradient(135deg, hsl(220, 75%, 55%) 0%, hsl(220, 85%, 60%) 20%, hsl(220, 90%, 70%) 40%, hsl(220, 95%, 85%) 70%, #ffffff 100%)'
      }}
    >
      <div className="section-container z-10 w-full">
        <AnimatedSection animation="fade-in-up" className="text-center">
          <h1 className="heading-1 mb-6 sm:mb-8 text-gray-900 font-sans font-bold">
            Cont ADM <span className="text-gray-800 whitespace-nowrap">Assessoria Empresarial</span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Mais do que contabilidade, somos parceiros para o seu crescimento!
          </p>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium">
            A sua empresa no próximo nível contábil e financeiro.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;
