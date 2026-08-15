export type Solution = {
  slug: string;
  title: string;
  short: string;
  ctaText: string;
  description: string;
  features: string[];
  outcomes: string[];
};

export const solutions: Solution[] = [
  {
    slug: "consultoria",
    title: "Consultoria",
    short: "Descubra onde sua operação está perdendo dinheiro.",
    ctaText: "Solicitar diagnóstico",
    description:
      "Mapeamento completo da sua jornada atual para identificar gargalos, desperdícios de leads e oportunidades de receita imediata.",
    features: [
      "Mapeamento de Processos",
      "Diagnóstico de Gargalos",
      "Plano de Ação Estratégico",
      "Definição de Indicadores",
    ],
    outcomes: [
      "Visibilidade real de onde os leads são perdidos",
      "Prioridades claras para os próximos 90 dias",
      "Indicadores definidos para acompanhar receita",
    ],
  },
  {
    slug: "area-crm",
    title: "CRM",
    short: "Transforme seu processo comercial em uma operação organizada e mensurável.",
    ctaText: "Estruturar meu CRM",
    description:
      "Estruturação completa do Kommo CRM com automações inteligentes para escalar sua operação sem aumentar o caos.",
    features: [
      "Configuração do Funil",
      "Automações de Vendas",
      "Integrações Personalizadas",
      "Treinamento do Time",
    ],
    outcomes: [
      "Funil padronizado e previsível",
      "Follow-ups automáticos sem depender de memória",
      "Time treinado e operando no mesmo processo",
    ],
  },
  {
    slug: "suporte-acompanhamento",
    title: "Suporte e acompanhamento",
    short: "Seu CRM não deveria ser abandonado depois da implementação.",
    ctaText: "Conhecer acompanhamento",
    description:
      "Acompanhamento contínuo para garantir que sua operação nunca pare de evoluir. Otimização de processos baseada em dados reais.",
    features: [
      "Suporte Técnico Especializado",
      "Análise Mensal de Resultados",
      "Ajustes de Processos",
      "Evolução das Automações",
    ],
    outcomes: [
      "Melhoria contínua mês a mês",
      "Decisões baseadas em dados, não em achismo",
      "Operação sempre atualizada",
    ],
  },
  {
    slug: "desenvolvimento-data",
    title: "Desenvolvimento e Data",
    short: "Dashboards, integrações e sistemas construídos para a sua operação.",
    ctaText: "Falar sobre meu projeto",
    description:
      "Desenvolvimento de soluções tecnológicas personalizadas (Dashboards, Apps) para necessidades específicas do seu modelo de negócio.",
    features: [
      "Dashboards Personalizados",
      "Soluções de Engenharia de Dados",
      "Ferramentas Customizadas",
      "Integrações Robustas",
    ],
    outcomes: [
      "Tecnologia sob a régua do seu negócio",
      "Automação de tarefas que consomem o time",
      "Dados centralizados e acionáveis",
    ],
  },
  {
    slug: "ia",
    title: "IA",
    short: "Inteligência artificial aplicada onde realmente gera resultado comercial.",
    ctaText: "Conhecer soluções de IA",
    description:
      "Implementação de agentes humanóides e automação cognitiva para escalar sua conversão 24/7.",
    features: [
      "Agentes Humanóides de Voz e Chat",
      "Lead Scoring Preditivo",
      "Transcrição e Análise de Sentimento",
      "Integração de LLMs Customizados",
    ],
    outcomes: [
      "Atendimento instantâneo 24/7",
      "Qualificação automática de 100% dos leads",
      "Redução de 60% no custo de pré-venda",
    ],
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
