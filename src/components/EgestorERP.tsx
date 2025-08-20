
import React from 'react';

const EgestorERP = () => {
  const egestorLink = "https://www.egestor.com.br/afl/10305";

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 mb-8 lg:mb-12">
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in">
            <a href={egestorLink} target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-90 transition-opacity">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 lg:mb-4 leading-tight">
                Sistema de gestão empresarial
              </h2>
            </a>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-normal">
              Dobre seus lucros otimizando sua gestão
            </p>
          </div>
          
          <div className="lg:w-1/2 rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-xl animate-fade-in">
            <video 
              className="w-full aspect-video object-cover" 
              autoPlay 
              muted 
              loop 
              playsInline 
              poster="/lovable-uploads/00b6d73e-0139-4a17-ad97-b66dac2be5f8.png"
            >
              <source src="https://egestor.com.br/assets/img/egestor-gestao-simples-para-crescer.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>
        
        <div className="flex justify-center animate-fade-in">
          <a href={egestorLink} target="_blank" rel="noopener noreferrer" className="inline-block w-full max-w-sm lg:max-w-md">
            <button className="w-full py-3 sm:py-4 bg-[#7CFFA0] hover:bg-[#6DF090] text-black font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-base sm:text-lg">
              Teste grátis
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EgestorERP;
