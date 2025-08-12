
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import { Building2, Briefcase, DollarSign, Settings } from 'lucide-react';

const CTAButtons = () => {
  return (
    <section className="spacing-section-sm bg-white">
      <div className="section-container">
        <AnimatedSection animation="fade-in-up" className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
            <Link 
              to="/abertura-de-empresa" 
              className="group relative overflow-hidden bg-secondary hover:bg-secondary/90 text-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 block"
            >
              <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center">
                  Quero saber sobre recuperação de créditos
                </h2>
              </div>
              <p className="text-white/90 text-center text-sm sm:text-base md:text-lg leading-relaxed">
                Evite dor de cabeça, conte com nosso apoio e siga os passos certos.
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link 
              to="/trazer-sua-empresa" 
              className="group relative overflow-hidden bg-secondary hover:bg-secondary/90 text-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 block"
            >
              <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center">
                  Já Tenho uma Empresa
                </h2>
              </div>
              <p className="text-white/90 text-center text-sm sm:text-base md:text-lg leading-relaxed">
                Temos uma equipe super preparada para cuidar da sua contabilidade.
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link 
              to="/gestao-financeira" 
              className="group relative overflow-hidden bg-secondary hover:bg-secondary/90 text-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 block"
            >
              <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center">
                  Preciso de Gestão financeira
                </h2>
              </div>
              <p className="text-white/90 text-center text-sm sm:text-base md:text-lg leading-relaxed">
                Conte com o nosso serviço especializados em BPO.
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link 
              to="/gestao-empresarial" 
              className="group relative overflow-hidden bg-secondary hover:bg-secondary/90 text-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 block"
            >
              <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Settings className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center">
                  Preciso de Gestão Empresarial
                </h2>
              </div>
              <p className="text-white/90 text-center text-sm sm:text-base md:text-lg leading-relaxed">
                Temos uma equipe super preparada para cuidar da sua empresa.
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTAButtons;
