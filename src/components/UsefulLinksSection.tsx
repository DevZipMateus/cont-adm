import { ExternalLink, Globe, FileText, Calculator, Users, Building, Receipt, Shield, Scale } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
const UsefulLinksSection = () => {
  const links = [{
    icon: Calculator,
    title: "Simples Nacional",
    description: "Site do Simples Nacional",
    url: "http://www8.receita.fazenda.gov.br/simplesnacional/"
  }, {
    icon: Building,
    title: "Receita Federal",
    description: "Portal do Ministério da Fazenda",
    url: "https://www.gov.br/receitafederal/pt-br"
  }, {
    icon: FileText,
    title: "Sped",
    description: "Portal do Sistema Público de Escrituração Digital",
    url: "https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/declaracoes-e-demonstrativos/sped-sistema-publico-de-escrituracao-digital"
  }, {
    icon: Receipt,
    title: "Danfe",
    description: "Site para geração do Danfe Online",
    url: "https://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConsulta=resumo&tipoConteudo=XbSeqxE8pl8="
  }, {
    icon: Users,
    title: "eSocial",
    description: "Site com informações, orientações, cadastro de empregados, dentre outros.",
    url: "https://www.gov.br/esocial/pt-br"
  }, {
    icon: Globe,
    title: "GISS Online",
    description: "Portal de Escrituração Online para Empresas",
    url: "https://www.gissonline.com.br/"
  }, {
    icon: FileText,
    title: "NFe",
    description: "Portal com informações sobre a Nota Fiscal Eletrônica",
    url: "https://www.nfe.fazenda.gov.br/"
  }, {
    icon: Shield,
    title: "Previdência Social",
    description: "Portal com informações sobre a Previdência Social",
    url: "https://www.gov.br/inss/pt-br"
  }, {
    icon: Scale,
    title: "Procuradoria Geral da União",
    description: "Acesse o Portal com informações",
    url: "https://www.gov.br/agu/pt-br"
  }];
  return <section id="links-uteis" className="spacing-section bg-gray-50">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title text-zinc-950">Links Úteis</h2>
          <p className="section-subtitle text-zinc-950">
            Acesse os principais portais governamentais e ferramentas essenciais para sua empresa
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {links.map((link, index) => {
          const IconComponent = link.icon;
          return <AnimatedSection key={link.title} animation="fade-in-up" delay={index * 100}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group block">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {link.description}
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                  </div>
                </a>
              </AnimatedSection>;
        })}
        </div>
      </div>
    </section>;
};
export default UsefulLinksSection;