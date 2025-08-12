
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
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-white/5 clip-path-polygon"></div>
        <div 
          className="absolute -right-20 sm:-right-40 -top-20 sm:-top-40 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 rounded-full bg-blue-500/10" 
          style={{ filter: "blur(60px) sm:blur(80px)" }}
        ></div>
        <div 
          className="absolute -left-10 sm:-left-20 bottom-1/4 w-36 sm:w-48 md:w-72 h-36 sm:h-48 md:h-72 rounded-full bg-blue-500/10" 
          style={{ filter: "blur(60px) sm:blur(80px)" }}
        ></div>
      </div>

      <div className="section-container z-10 w-full">
        <AnimatedSection animation="fade-in-up" className="text-center">
          <h1 className="heading-1 mb-4 sm:mb-6 text-gray-900 font-sans font-bold">
            Cont ADM <span className="text-gray-800 whitespace-nowrap">Assessoria Empresarial</span>
          </h1>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;
