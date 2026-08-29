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
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-pink-50/60 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="mb-20 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-pink-600 mb-3 block">
            JORNADA DE ACELERAÇÃO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            TENNO REVENUE SYSTEM™
          </h2>
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            Uma jornada prática de 9 meses para transformar sua operação comercial em uma máquina de crescimento previsível. Não entregamos apenas CRM. Entregamos processo, automação e inteligência aplicados ao seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <div key={idx} className="relative p-10 rounded-[40px] glass-card glass-card-hover flex flex-col justify-between">
              <div className="absolute -top-6 left-8 w-14 h-14 rounded-2xl bg-white/95 border border-slate-200 shadow-lg shadow-slate-200/50 flex items-center justify-center">
                {step.icon}
              </div>
              <div className="pt-6">
                <span className="text-xs font-bold text-pink-600 uppercase tracking-widest block mb-2">{step.subtitle}</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 font-light text-sm mb-8 leading-relaxed">
                  {step.description}
                </p>
                <ul className="space-y-3.5 pt-4 border-t border-slate-200/60">
                  {step.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-700">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pink-600 shrink-0" />
                      <span className="font-light">{feature}</span>
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
