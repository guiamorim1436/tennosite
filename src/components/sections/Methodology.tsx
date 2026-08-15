import { Award, Zap, BarChart3, Bot, Settings2, Target } from "lucide-react";

export function Methodology() {
  const steps = [
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "CONVERSÃO",
      subtitle: "TRIMESTRE 01",
      description: "Arrumamos a casa para parar de perder oportunidades. Nesta fase, o foco é entender a operação, mapear a jornada e estruturar um processo de vendas claro dentro do Kommo CRM.",
      features: [
        "Mapeamento da jornada do cliente",
        "Diagnóstico dos gargalos de conversão",
        "Estruturação das etapas de vendas",
        "Implementação estratégica do Kommo CRM"
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "ESCALA",
      subtitle: "TRIMESTRE 02",
      description: "Aceleramos o crescimento sem aumentar o caos. Com a operação organizada, aplicamos automações, integrações e inteligência artificial para ampliar a capacidade do time comercial.",
      features: [
        "Automações no Kommo",
        "Integrações estratégicas",
        "Distribuição automática de leads",
        "Cadências e follow-ups inteligentes"
      ]
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "MAXIMIZAÇÃO",
      subtitle: "TRIMESTRE 03",
      description: "Extraímos mais valor de cada cliente. Com processos e dados maduros, trabalhamos retenção, reativação, upsell e as métricas que realmente importam para o crescimento sustentável.",
      features: [
        "Recuperação de oportunidades perdidas",
        "Campanhas de reativação",
        "Estratégias de Upsell e Cross-sell",
        "Gestão por LTV e indicadores reais"
      ]
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12 max-w-none">
        <div className="mb-20 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            TENNO REVENUE SYSTEM™
          </h2>
          <p className="text-xl text-muted-foreground">
            Uma jornada prática de 9 meses para transformar sua operação comercial em uma máquina de crescimento previsível. Não entregamos apenas CRM. Entregamos processo, automação e inteligência aplicados ao seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative p-8 rounded-[40px] glass-morphism border border-border">
              <div className="absolute -top-6 left-8 w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center shadow-xl">
                {step.icon}
              </div>
              <div className="pt-8">
                <span className="text-sm font-semibold text-accent uppercase tracking-widest">{step.subtitle}</span>
                <h3 className="text-2xl font-semibold mt-4 mb-4">{step.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {step.description}
                </p>
                <ul className="space-y-4">
                  {step.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-sm font-semibold">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
