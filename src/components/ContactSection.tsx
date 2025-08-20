
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
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
    
    const message = `Olá! Gostaria de entrar em contato sobre os serviços contábeis.

*Dados de contato:*
Nome: ${formData.name}
Email: ${formData.email}
Empresa: ${formData.company}
Telefone: ${formData.phone}

*Mensagem:*
${formData.message}`;

    const phoneNumber = "12982147656";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="py-24">
      <div className="section-container">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Entre em Contato Conosco
          </h2>
          
          <div className="rounded-xl p-8 md:p-12 shadow-lg border border-primary/10 bg-[#2994fa]">
            <p className="text-xl mb-8 text-gray-700">
              Estamos prontos para atender sua empresa com excelência e profissionalismo.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" 
                    placeholder="Seu nome completo" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" 
                    placeholder="seu@email.com" 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                <input 
                  type="text" 
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" 
                  placeholder="Nome da sua empresa" 
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" 
                  placeholder="(xx) xxxxx-xxxx" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" 
                  placeholder="Como podemos ajudar?" 
                  rows={4}
                ></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit" 
                  className="w-full md:w-auto btn-primary text-lg py-4 px-8 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors"
                >
                  <img 
                    src="/lovable-uploads/42312968-cec5-40e7-8f92-7a6f3fc4e80e.png" 
                    alt="WhatsApp" 
                    className="h-5 w-5"
                  />
                  Enviar via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
