import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { ProblemsSolutions } from "@/components/sections/ProblemsSolutions";
import { Methodology } from "@/components/sections/Methodology";
import { Comparison } from "@/components/sections/Comparison";
import { Solutions } from "@/components/sections/Solutions";
import { SparkleButton } from "@/components/ui/SparkleButton";

import { Mail, Phone, CheckCircle2, Award, Zap, BarChart3, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    title: "Tenno. | Infraestrutura de Revenue Operations & Kommo CRM",
    meta: [
      { title: "Tenno. | Infraestrutura de Revenue Operations & Kommo CRM" },
      {
        name: "description",
        content: "Transformamos operações comerciais caóticas em máquinas previsíveis de crescimento. Consultoria Estratégica, Implementação Kommo CRM, Dados e Inteligência Artificial.",
      },
      {
        name: "keywords",
        content: "revops brasil, consultoria kommo crm, implementacao kommo, automacao comercial b2b, diagnostico comercial, ia para whatsapp"
      },
      { property: "og:title", content: "Tenno. | Infraestrutura de Revenue Operations & Kommo CRM" },
      {
        property: "og:description",
        content: "Metodologia certificada Six Sigma que combina inteligência de processos com automação e Kommo CRM para multiplicar seus resultados em 9 meses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  const clients = [
    { name: "Unimed", logo: "https://cdn.worldvectorlogo.com/logos/unimed-1.svg", scale: 2.5 },
    { name: "Yamaha Motors", logo: "https://mnd-assets.mynewsdesk.com/image/upload/c_limit,dpr_auto,f_auto,q_auto:good,w_600/obmrcnb967wnk8zpckl8zn", scale: 1.5 },
    { name: "DR360 Educação", logo: "https://dr360educacao.com.br/wp-content/uploads/2025/09/cropped-vermelho-novo-V-1.png", scale: 1.2, blackHover: true, hoverLogo: "https://dr360educacao.com.br/wp-content/uploads/2025/09/vermelho-novo-4.png" },
    { name: "Farben Printing Innovation", logo: "https://www.farbengrafica.com.br/Resources/images/LOGO%20FARBEN%20ATUALIZADO-331w.png", scale: 1.0 },
    { name: "Allcor Gráfica", logo: "https://www.allcor.com.br/logo.svg", scale: 0.8 },
    { name: "Clínica CECI", logo: "https://www.ceciclinica.com/wp-content/uploads/2025/03/ceci-brand-05.png", scale: 1.0, blackHover: true },
    { name: "Trainning Education", logo: "https://www.trainning.com.br/assets/logo-trainning-sRIdY_dr.png", scale: 1.0 },
    { name: "Radar Política", logo: "https://www.radarpolitica.com.br/assets/logo-WGy6dTKF.png", scale: 1.5, blackHover: true },
    { name: "OdontoCompany", logo: "https://gsobmidia.com.br/uploads/lojas/1716/logo-odontocompany_1618402286.png", scale: 1.0 },
    { name: "Magrass", logo: "https://www.magrass.com.br/wordpress/wp-content/uploads/2021/06/logo-1.png", scale: 1.0 }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-pink-100 selection:text-pink-600 font-['Questrial']">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative px-6 pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-slate-100">
          <div className="absolute inset-0 bg-futuristic-grid opacity-30 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pink-50 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          
          <div className="container mx-auto max-w-7xl relative z-10 px-6 lg:px-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-600"></span>
                </span>
                <span>Revenue Operations & Kommo CRM Partner</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-8">
                Sua empresa não precisa de mais leads. <span className="text-pink-600">Precisa parar de perder os que já chegam.</span>
              </h1>
              <p className="mt-8 text-xl text-slate-500 font-light leading-relaxed max-w-2xl">
                A Tenno transforma sua operação comercial em um sistema organizado, automatizado e mensurável — para você vender mais sem aumentar o caos.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start">
                <SparkleButton
                  href="https://wa.me/5511912020723?text=Vim do site, e quero um diagnóstico/orçamento. Meu código de atendimento é: S01 - B02"
                  size="lg"
                >
                  Realizar um diagnóstico
                </SparkleButton>
              </div>
            </div>
          </div>
        </section>

        {/* Companies Section */}
        <section className="py-12 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12 max-w-none">
            {/* Gradient masks for smooth edges */}
            <div className="absolute left-0 top-0 w-40 h-full bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 w-40 h-full bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />
            
            <div className="overflow-hidden relative flex">
              <div className="flex whitespace-nowrap animate-infinite-scroll">
                <div className="flex items-center gap-[60px] pr-[60px]">
                  {clients.map((client, idx) => (
                    <div 
                      key={`${client.name}-${idx}`} 
                      className="flex items-center justify-center w-[160px] h-12 group/item"
                    >
                      <div className="relative h-full w-full flex items-center justify-center px-4">
                        <img 
                          src={client.logo} 
                          alt={client.name} 
                          className={`max-h-full max-w-full object-contain transition-all duration-300 ${('keepColors' in client && client.keepColors) ? 'opacity-100' : 'opacity-80 grayscale group-hover/item:opacity-100 group-hover/item:grayscale-0'} ${
                            client.hoverLogo ? "group-hover/item:opacity-0" : ""
                          } ${
                            client.blackHover 
                              ? "brightness-0 hover:brightness-100" 
                              : ""
                          }`}
                          style={client.scale ? { transform: `scale(${client.scale})` } : undefined}
                          loading="lazy"
                        />
                        {client.hoverLogo && (
                          <img 
                            src={client.hoverLogo} 
                            alt={`${client.name} hover`} 
                            className="absolute inset-0 max-h-full max-w-full object-contain opacity-0 group-hover/item:opacity-100 transition-all duration-300 pointer-events-none mx-auto px-4"
                            style={client.scale ? { transform: `scale(${client.scale})` } : undefined}
                            aria-hidden="true"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-[60px] pr-[60px]" aria-hidden="true">
                  {clients.map((client, idx) => (
                    <div 
                      key={`${client.name}-clone-${idx}`} 
                      className="flex items-center justify-center w-[160px] h-12 group/item"
                    >
                      <div className="relative h-full w-full flex items-center justify-center px-4">
                        <img 
                          src={client.logo} 
                          alt={client.name} 
                          className={`max-h-full max-w-full object-contain transition-all duration-300 ${('keepColors' in client && client.keepColors) ? 'opacity-100' : 'opacity-80 grayscale group-hover/item:opacity-100 group-hover/item:grayscale-0'} ${
                            client.hoverLogo ? "group-hover/item:opacity-0" : ""
                          } ${
                            client.blackHover 
                              ? "brightness-0 hover:brightness-100" 
                              : ""
                          }`}
                          style={client.scale ? { transform: `scale(${client.scale})` } : undefined}
                          loading="lazy"
                        />
                        {client.hoverLogo && (
                          <img 
                            src={client.hoverLogo} 
                            alt={`${client.name} hover`} 
                            className="absolute inset-0 max-h-full max-w-full object-contain opacity-0 group-hover/item:opacity-100 transition-all duration-300 pointer-events-none mx-auto px-4"
                            style={client.scale ? { transform: `scale(${client.scale})` } : undefined}
                            aria-hidden="true"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Solutions Bento Grid */}
        <Solutions />
        
        <ProblemsSolutions />
        <Methodology />
        <Comparison />

        {/* Contact CTA */}
        <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl relative z-10 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Pronto para transformar sua operação comercial?</h2>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto mb-12">
              Marque um diagnóstico com nossos especialistas em RevOps e descubra onde estão os gargalos que limitam seu crescimento.
            </p>
            <div className="flex justify-center">
              <SparkleButton
                href="https://wa.me/5511912020723?text=Vim do site, e quero um diagnóstico/orçamento. Meu código de atendimento é: S01 - B02"
                size="lg"
              >
                Realizar um diagnóstico
              </SparkleButton>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-16 bg-white border-t border-slate-100 text-slate-500 text-sm">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="font-['Questrial'] text-3xl font-bold tracking-tight text-slate-900 mb-6">
                Tenno<span className="text-pink-600">.</span>
              </div>
              <p className="text-slate-500 font-light max-w-xs leading-relaxed">
                Infraestrutura de Revenue Operations, processos e inteligência para transformar empresas em crescimento.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="font-bold text-slate-900 text-base mb-6 uppercase tracking-wider">Contato</h3>
              <ul className="space-y-4 text-slate-500 font-light">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-pink-600" />
                  <a href="tel:+5511912020723" className="hover:text-pink-600 transition-colors">+55 11 91202-0723</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-pink-600" />
                  <a href="mailto:contato@tennohub.com.br" className="hover:text-pink-600 transition-colors">contato@tennohub.com.br</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="font-bold text-slate-900 text-base mb-6 uppercase tracking-wider">Canais Oficiais</h3>
              <div className="flex gap-4">
                <a 
                  href="https://wa.me/5511912020723?text=Vim do site, e quero um diagnóstico/orçamento. Meu código de atendimento é: S01 - B02" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 transition-all text-slate-400 hover:text-white p-0 overflow-hidden shadow-xs"
                >
                  <img 
                    src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png"
                    alt="WhatsApp"
                    className="w-6 h-6 object-contain"
                  />
                </a>
                <a 
                  href="https://www.instagram.com/tenno_ofc/?utm_source=ig_web_button_share_sheet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 transition-all text-slate-400 hover:text-white overflow-hidden p-0 shadow-xs"
                >
                  <img 
                    src="https://cdn-icons-png.flaticon.com/128/174/174855.png"
                    alt="Instagram"
                    className="w-6 h-6 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-sm">
            <p>© 2026 Tenno Revenue System. Todos os direitos reservados.</p>
            <div className="flex gap-8 items-center">
              <a 
                href="https://www.kommo.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-90"
              >
                <img 
                  src="https://vendermaisonline.com/wp-content/uploads/2022/10/partner.png" 
                  alt="Kommo Partner" 
                  className="h-12 w-auto"
                />
              </a>
              <span>
                <img 
                  src="https://media.licdn.com/dms/image/v2/C560BAQE_DDC0KBpU4Q/company-logo_200_200/company-logo_200_200/0/1631396843332/the_council_for_six_sigma_certification_cssc_logo?e=2147483647&v=beta&t=fQlYrx5bFbgMotAS6kzPG7n3ZHYK31LM1KfwlBYolFQ" 
                  alt="Six Sigma Certified" 
                  className="h-12 w-auto transition-opacity hover:opacity-90"
                />
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
