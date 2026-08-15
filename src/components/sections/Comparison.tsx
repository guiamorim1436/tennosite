import { CheckCircle2, Bot, Link as LinkIcon, BarChart3, Settings, ShieldCheck } from "lucide-react";

export function Comparison() {
  const diffs = [
    {
      title: "Partner Oficial Kommo",
      description: "Mais do que configurar funções do CRM, entendemos sua operação e traduzimos processos reais dentro da plataforma.",
      icon: <img src="https://vendermaisonline.com/wp-content/uploads/2022/10/partner.png" alt="Partner" className="w-8 h-auto grayscale" />
    },
    {
      title: "Processo antes da Ferramenta",
      description: "Não vendemos automação por automação. Primeiro desenhamos a jornada ideal do cliente, depois escolhemos a tecnologia certa para cada etapa.",
      icon: <LinkIcon className="w-6 h-6 text-accent" />
    },
    {
      title: "IA com Propósito Comercial",
      description: "Usamos inteligência artificial onde ela gera resultado real: qualificação, follow-up, previsibilidade e velocidade de resposta.",
      icon: <Bot className="w-6 h-6 text-accent" />
    },
    {
      title: "Gestão por Números",
      description: "O que não é medido vira desculpa. Criamos dashboards e indicadores para que você enxergue o funil e decida com clareza.",
      icon: <BarChart3 className="w-6 h-6 text-accent" />
    }
  ];

  const stats = [
    { label: "Empresas Atendidas", value: "+150" },
    { label: "Mais Conversões em Média", value: "3x" },
    { label: "Meses para Resultados", value: "9" },
    { label: "Satisfação dos Clientes", value: "98%" }
  ];

  return (
    <section className="py-32 bg-secondary/50">
      <div className="container mx-auto px-6 lg:px-12 max-w-none">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-8">
              Não automatizamos processos ruins.
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Primeiro melhoramos a forma como sua operação vende. Depois, usamos tecnologia para acelerar. Automatizar o caos apenas faz os problemas acontecerem mais rápido.
            </p>
            
            <div className="space-y-8">
              {diffs.map((diff, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl glass-morphism flex items-center justify-center flex-shrink-0 border border-border shadow-sm">
                    {diff.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{diff.title}</h3>
                    <p className="text-muted-foreground">{diff.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div className="bg-primary text-primary-foreground rounded-[40px] p-12 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
               
               <h3 className="text-3xl font-semibold mb-12 relative z-10">Resultados Que Falam</h3>
               
               <div className="grid grid-cols-2 gap-x-8 gap-y-12 relative z-10">
                 {stats.map((stat, i) => (
                   <div key={i}>
                     <div className="text-5xl font-black text-accent mb-2">{stat.value}</div>
                     <div className="text-sm font-bold uppercase tracking-widest text-primary-foreground/60">{stat.label}</div>
                   </div>
                 ))}
               </div>
            </div>

            <div className="glass-morphism rounded-[40px] p-12 border border-border">
              <div className="flex gap-4 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div key={s} className="w-5 h-5 bg-yellow-400 rounded-full" />
                ))}
              </div>
              <p className="text-2xl font-semibold italic mb-8">
                "Em poucos meses, a forma como vendemos mudou completamente. Conseguimos enxergar o funil, acelerar o follow-up e triplicar as conversões."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary" />
                <div>
                  <div className="font-semibold">Carlos M.</div>
                  <div className="text-sm text-muted-foreground">CEO, Distribuidora Nacional</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
