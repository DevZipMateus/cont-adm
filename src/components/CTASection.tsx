
import AnimatedSection from './AnimatedSection';

const CTASection = () => {
  return (
    <section id="contato" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <AnimatedSection className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-white leading-tight">
            A Cont ADM não entrega relatórios. Entregamos clareza, lucro e decisão com segurança.
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-lg border border-white/20">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 leading-relaxed">
              Transforme a gestão financeira da sua empresa e comece a tomar decisões baseadas em dados reais.
            </p>
            
            <form className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm sm:text-base font-medium text-white mb-2">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-white focus:border-white bg-white/10 text-white placeholder-white/60 text-sm sm:text-base"
                    placeholder="Seu nome completo" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base font-medium text-white mb-2">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-white focus:border-white bg-white/10 text-white placeholder-white/60 text-sm sm:text-base"
                    placeholder="seu@email.com" 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm sm:text-base font-medium text-white mb-2">Empresa</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-white focus:border-white bg-white/10 text-white placeholder-white/60 text-sm sm:text-base"
                  placeholder="Nome da sua empresa" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm sm:text-base font-medium text-white mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-white focus:border-white bg-white/10 text-white placeholder-white/60 resize-none text-sm sm:text-base"
                  placeholder="Como podemos ajudar?" 
                  rows={4}
                ></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit" 
                  className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white text-secondary hover:bg-white/90 font-medium rounded-lg text-sm sm:text-base lg:text-lg transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
                >
                  Quero clareza financeira
                </button>
              </div>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
