
import { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    '/lovable-uploads/31ae06d1-dffa-443b-b95b-6e1a63b093a3.png',
    '/lovable-uploads/ca051fbc-d0fe-44c8-81e8-b16e79f6b1dc.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Troca a cada 5 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20" 
      style={{
        background: 'linear-gradient(135deg, hsl(220, 75%, 55%) 0%, hsl(220, 85%, 60%) 20%, hsl(220, 90%, 70%) 40%, hsl(220, 95%, 85%) 70%, #ffffff 100%)'
      }}
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Assessoria empresarial ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Overlay para garantir legibilidade do texto */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="section-container z-10 w-full">
        <AnimatedSection animation="fade-in-up" className="text-center">
          <h1 className="heading-1 mb-6 sm:mb-8 text-white font-sans font-bold drop-shadow-lg uppercase">
            Cont ADM <span className="text-white whitespace-nowrap">Assessoria Empresarial</span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 drop-shadow-lg">
            Mais do que contabilidade, somos parceiros para o seu crescimento!
          </p>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white font-medium drop-shadow-lg">
            A sua empresa no próximo nível contábil e financeiro.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;
