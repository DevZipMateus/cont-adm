
import { useEffect, useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Star, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();

  const testimonials = [
    {
      name: "Maria Silva",
      company: "Empresa de Varejo",
      content: "Excelente atendimento e profissionalismo incomparável. O Escritório De Grandi cuida de toda nossa contabilidade com muito cuidado e atenção aos detalhes, proporcionando tranquilidade e segurança em todas as operações.",
      rating: 5
    },
    {
      name: "João Santos",
      company: "Indústria Local",
      content: "Trabalho com eles há mais de 10 anos e posso afirmar com certeza: sempre pontuais, precisos e muito atenciosos. Recomendo para qualquer empresa que busque excelência em serviços contábeis.",
      rating: 5
    },
    {
      name: "Ana Costa",
      company: "Prestadora de Serviços",
      content: "Equipe muito competente e dedicada ao sucesso dos clientes. Nos orientam em todas as questões fiscais e contábeis com clareza e objetividade. Uma parceria de confiança que se consolidou ao longo dos anos.",
      rating: 5
    },
    {
      name: "Carlos De Grandi Filho",
      company: "Comércio de Autopeças",
      content: "O escritório De Grandi transformou completamente nossa gestão financeira. Agora temos relatórios claros, precisos e entendemos melhor nossa situação fiscal, possibilitando decisões mais assertivas.",
      rating: 5
    },
    {
      name: "Lucia Fernandes",
      company: "Restaurante Bella Vista",
      content: "Desde que começamos com o Escritório De Grandi, nossa empresa cresceu 40% de forma sustentável. Eles nos ajudam em todas as decisões estratégicas com expertise e dedicação incomparáveis.",
      rating: 5
    },
    {
      name: "Roberto Machado",
      company: "Oficina Mecânica Central",
      content: "Profissionais extremamente qualificados e atualizados. Sempre nos mantêm informados sobre mudanças na legislação e nos orientam da melhor forma possível, garantindo conformidade e otimização.",
      rating: 5
    },
    {
      name: "Fernanda Oliveira",
      company: "Clínica Médica Saúde+",
      content: "Excelente assessoria contábil que faz toda a diferença! Eles cuidam de toda parte burocrática com eficiência para que possamos focar integralmente no atendimento aos nossos pacientes.",
      rating: 5
    },
    {
      name: "Pedro Grandi",
      company: "Agropecuária Grandi",
      content: "Trabalho em família há 15 anos com este escritório e posso garantir: confiança total! Eles conhecem nosso negócio como ninguém e sempre oferecem as melhores soluções.",
      rating: 5
    },
    {
      name: "Mariana Sperb",
      company: "Farmácia Popular",
      content: "Atendimento personalizado e sempre disponíveis para esclarecer dúvidas com paciência e conhecimento. Recomendo de olhos fechados para qualquer empresário que busque qualidade.",
      rating: 5
    },
    {
      name: "Eduardo Santos",
      company: "Construtora Horizonte",
      content: "Organizaram toda nossa contabilidade de forma impecável e nos ajudaram a economizar significativamente em impostos através de estratégias legais eficazes. Parceiros essenciais para o crescimento!",
      rating: 5
    },
    {
      name: "Cristina De Bona",
      company: "Padaria Pão Nosso",
      content: "Desde a abertura da empresa, eles nos acompanham com dedicação e profissionalismo. Sempre prestativos e com soluções práticas e eficientes para nossos desafios do dia a dia.",
      rating: 5
    },
    {
      name: "Alexandre Ribeiro",
      company: "Transportadora Regional",
      content: "Profissionalismo e competência excepcionais em todos os aspectos. Eles simplificaram nossa vida empresarial e nos deram tranquilidade necessária para crescer com segurança e sustentabilidade.",
      rating: 5
    },
    {
      name: "Juliana Moreira",
      company: "Loja de Roupas Fashion",
      content: "O suporte do Escritório De Grandi foi fundamental para expandir nosso negócio com sucesso. Sempre nos orientam com as melhores práticas e estratégias mais adequadas ao nosso segmento.",
      rating: 5
    }
  ];

  useEffect(() => {
    if (!api) return;

    // Auto-play functionality
    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section id="depoimentos" className="py-16 sm:py-20 md:py-24 lg:py-28" style={{ background: 'hsl(var(--section-bg))' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6">
            Depoimentos
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-center max-w-4xl mx-auto">
            Veja o que nossos clientes dizem sobre nossos serviços
          </p>
        </AnimatedSection>

        <div className="mt-12 sm:mt-16 md:mt-20 max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={`${testimonial.name}-${index}`} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <AnimatedSection 
                    animation="fade-in-up" 
                    delay={index * 50}
                  >
                    <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
                      <div className="flex items-center gap-1 mb-4 sm:mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-primary/20 mb-4 sm:mb-6 flex-shrink-0" />
                      
                      <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 italic leading-relaxed flex-grow">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="border-t pt-4 sm:pt-6 mt-auto">
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-600">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 lg:-left-16" />
            <CarouselNext className="hidden md:flex -right-12 lg:-right-16" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
