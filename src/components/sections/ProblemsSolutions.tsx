import { X, CheckCircle2, TrendingDown, RefreshCcw, Lock, DollarSign } from "lucide-react";

export function ProblemsSolutions() {
  const items = [
    {
      title: "Leads sem resposta rápida",
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
      problem: "O cliente demonstra interesse, mas demora para ser atendido. Nesse intervalo, a concorrência já entrou em contato.",
      solution: "Resposta automática e distribuição imediata para o vendedor certo, no momento certo."
    },
    {
      title: "Follow-up esquecido",
      icon: <RefreshCcw className="w-8 h-8 text-red-500" />,
      problem: "A proposta foi enviada, mas ninguém voltou a falar com o lead. A oportunidade esfria e morre.",
      solution: "Cadência de follow-up automatizada que mantém o lead aquecido até a decisão."
    },
    {
      title: "Cada um vende do seu jeito",
      icon: <Lock className="w-8 h-8 text-red-500" />,
      problem: "Alguns vendedores convertem muito. Outros, quase nada. O resultado depende de talento individual, não de processo.",
      solution: "Jornada de vendas padronizada com etapas claras, gatilhos e melhores práticas."
    },
    {
      title: "Gestão no achismo",
      icon: <DollarSign className="w-8 h-8 text-red-500" />,
      problem: "Você sabe quanto vendeu, mas não sabe onde as vendas estão parando, sendo perdidas ou demorando demais.",
      solution: "Indicadores em tempo real que mostram exatamente onde ajustar para aumentar a conversão."
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background with marble texture and blur */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url("https://img.magnific.com/fotos-gratis/textura-de-marmore-branco-com-padrao-natural-para-plano-de-fundo-ou-trabalho-de-arte-de-design-alta-resolucao_1258-28320.jpg?w=360")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(70px)',
          opacity: 0.4
        }}
      />
      
      {/* Gray blur spot in the bottom right */}
      <div 
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-muted/30 rounded-full blur-[100px] pointer-events-none z-0"
      />
      
      <div className="container mx-auto px-6 lg:px-12 max-w-none relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Quanto dinheiro sua operação está deixando na mesa?
          </h2>
          <p className="text-xl text-muted-foreground">
            Você pode investir em marketing, gerar leads e ter bons vendedores — e ainda assim perder receita todos os dias. O problema raramente é falta de demanda. É o que acontece depois que a oportunidade chega.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="glass-morphism rounded-3xl p-8 border border-border hover:border-accent/50 transition-all group shadow-sm hover:shadow-xl hover:shadow-accent/5 duration-300">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-6">{item.title}</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <p className="text-muted-foreground text-sm">{item.problem}</p>
                </div>
                
                <div className="pt-6 border-t border-border/50">
                  <div className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="font-semibold text-foreground text-sm">{item.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
