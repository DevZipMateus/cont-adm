
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';

interface CTAFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const CTASection = () => {
  const [formData, setFormData] = useState<CTAFormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Olá! Gostaria de clareza financeira para minha empresa.

*Dados de contato:*
Nome: ${formData.name}
Email: ${formData.email}
Empresa: ${formData.company}

*Mensagem:*
${formData.message}`;

    const phoneNumber = "12982147656";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <AnimatedSection className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-white">
            A Improve não entrega relatórios. Entregamos clareza, lucro e decisão com segurança.
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg border border-white/20">
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white/90">
              Transforme a gestão financeira da sua empresa e comece a tomar decisões baseadas em dados reais.
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm sm:text-base font-medium text-white mb-2">
                    Nome
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-white/30 rounded-md focus:ring-2 focus:ring-white focus:border-white bg-white/10 text-white placeholder-white/60 text-sm sm:text-base"
                    placeholder="Seu nome completo" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base font-medium text-white mb-2">
                    E-mail
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange} 
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-white/30 rounded-md focus:ring-2 focus:ring-white focus:border-white bg-white/10 text-white placeholder-white/60 text-sm sm:text-base"
                    placeholder="seu@email.com" 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm sm:text-base font-medium text-white mb-2">
                  Empresa
                </label>
                <input 
                  type="text" 
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-white/30 rounded-md focus:ring-2 focus:ring-white focus:border-white bg-white/10 text-white placeholder-white/60 text-sm sm:text-base"
                  placeholder="Nome da sua empresa" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm sm:text-base font-medium text-white mb-2">
                  Mensagem
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-white/30 rounded-md focus:ring-2 focus:ring-white focus:border-white bg-white/10 text-white placeholder-white/60 resize-none text-sm sm:text-base"
                  placeholder="Como podemos ajudar?" 
                  rows={4}
                ></textarea>
              </div>
              
              <div className="text-center pt-2 sm:pt-4">
                <button 
                  type="submit" 
                  className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white text-primary hover:bg-white/90 font-medium rounded-md text-sm sm:text-base lg:text-lg transition-all duration-200 hover:shadow-lg min-w-[200px]"
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
