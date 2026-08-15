import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { ProblemsSolutions } from "@/components/sections/ProblemsSolutions";
import { Methodology } from "@/components/sections/Methodology";
import { Comparison } from "@/components/sections/Comparison";

import { Mail, Phone, CheckCircle2, Award, Zap, BarChart3 } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    title: "Tenno. | Especialista em CRM",
    meta: [
      {
        name: "description",
        content: "Transforme processos caóticos em máquinas de crescimento com Kommo CRM e metodologia Six Sigma.",
      },
      { property: "og:title", content: "Tenno. | Especialista em CRM" },
      {
        property: "og:description",
        content: "Metodologia certificada que combina automação inteligente com processos estruturados para multiplicar seus resultados em 9 meses.",
      },
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
    <div className="min-h-screen bg-background selection:bg-accent/30">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative px-6 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="container mx-auto max-w-none relative z-10 px-6 lg:px-12">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground leading-[1.1]">
                Sua empresa não precisa de mais leads. <span className="text-accent">Precisa parar de perder os que já chegam.</span>
              </h1>
              <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl">
                A Tenno transforma sua operação comercial em um sistema organizado, automatizado e mensurável — para você vender mais sem aumentar o caos.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/5511912020723?text=Vim do site e gostaria de um diagnóstico/orçamento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-14 px-8 rounded-full bg-accent text-white font-bold hover:bg-accent/90 transition-all text-lg flex items-center justify-center backdrop-blur-3xl shadow-lg hover:shadow-xl"
                >
                  Realizar um diagnóstico
                </a>
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

        
        <ProblemsSolutions />
        <Methodology />
        <Comparison />

        {/* Contact CTA */}
        <section className="py-12 lg:py-16 bg-primary text-primary-foreground relative overflow-hidden border-none rounded-[40px] mx-6 lg:mx-12 my-12 shadow-2xl">
          <div className="container mx-auto px-6 lg:px-12 max-w-none relative z-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">Pronto para transformar seu negócio?</h2>
              <p className="text-xl text-primary-foreground/80 mb-12">Marque um diagnóstico e descubra os gargalos que estão impedindo sua operação de crescer.</p>
              <a 
                href="https://wa.me/5511912020723?text=Vim do site e gostaria de um diagnóstico/orçamento"
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 px-12 bg-accent text-white font-bold rounded-full hover:bg-accent/90 transition-all text-xl inline-flex items-center justify-center backdrop-blur-3xl shadow-lg hover:shadow-xl"
              >
                Realizar um diagnóstico
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-12 lg:py-16 bg-background border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 max-w-none">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="font-['Questrial'] text-4xl font-semibold tracking-tight mb-6">
                Tenno<span className="text-accent">.</span>
              </div>
              <p className="text-muted-foreground max-w-xs">
                Transformando operações comerciais em sistemas previsíveis de escala através de metodologia e tecnologia.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="font-semibold text-lg mb-6">Contato</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <a href="tel:+5511912020723" className="hover:text-accent transition-colors">+55 11 91202-0723</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <a href="mailto:contato@tennohub.com.br" className="hover:text-accent transition-colors">contato@tennohub.com.br</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="font-semibold text-lg mb-6">Social</h3>
              <div className="flex gap-4">
                <a 
                  href="https://wa.me/5511912020723?text=Vim do site e gostaria de um diagnóstico/orçamento" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-white transition-all text-muted-foreground hover:border-accent p-0 overflow-hidden"
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
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-white transition-all text-muted-foreground hover:border-accent overflow-hidden p-0"
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
          
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-sm">
            <p className="text-muted-foreground">© 2026 Tenno. Todos os direitos reservados.</p>
            <div className="flex gap-12 items-center text-muted-foreground">
              <a 
                href="https://www.kommo.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-opacity hover:opacity-90"
              >
                <img 
                  src="https://vendermaisonline.com/wp-content/uploads/2022/10/partner.png" 
                  alt="Kommo Partner" 
                  className="h-14 lg:h-16 w-auto"
                />
              </a>
              <span className="flex items-center gap-2">
                <img 
                  src="https://media.licdn.com/dms/image/v2/C560BAQE_DDC0KBpU4Q/company-logo_200_200/company-logo_200_200/0/1631396843332/the_council_for_six_sigma_certification_cssc_logo?e=2147483647&v=beta&t=fQlYrx5bFbgMotAS6kzPG7n3ZHYK31LM1KfwlBYolFQ" 
                  alt="Six Sigma Certified" 
                  className="h-14 lg:h-16 w-auto transition-opacity hover:opacity-90"
                />
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
