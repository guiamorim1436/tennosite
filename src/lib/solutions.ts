export type Solution = {
  slug: string;
  route: string;
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
    route: "/solucoes/consultoria",
    title: "Diagnóstico & Consultoria",
    short: "Investigação estruturada de 17 dias para mapear gargalos e desenhar o roadmap de escala.",
    ctaText: "Realizar diagnóstico",
    description:
      "Investigação aprofundada da sua operação comercial cruzando Gestão, Equipe, Dados e Cliente Oculto para eliminar pontos cegos e acelerar receita.",
    features: [
      "4 Reuniões de Imersão e Coleta",
      "Auditoria Técnica de CRM e Dados",
      "Teste Prático de Cliente Oculto",
      "Roadmap Estratégico em 4 Fases",
    ],
    outcomes: [
      "Visibilidade cirúrgica de onde sua empresa perde dinheiro",
      "Matriz de prioridades com dono, prazo e impacto em caixa",
      "Direção executiva clara para investir em processos e ferramentas",
    ],
  },
  {
    slug: "crm",
    route: "/solucoes/crm",
    title: "Implementação Kommo CRM",
    short: "Estruturação oficial do Kommo CRM com processos validados e automações inteligentes.",
    ctaText: "Estruturar meu CRM",
    description:
      "Transformamos o Kommo CRM no motor da sua operação de vendas. Funis padronizados, distribuição ágil de leads, SLA de atendimento e treinamento da equipe.",
    features: [
      "Arquitetura de Pipeline e Campos Customizados",
      "Automações Avançadas e Cadências Omnicanal",
      "Integração Nativa WhatsApp, Meta e E-mail",
      "Capacitação Prática e Auditoria de Adoção",
    ],
    outcomes: [
      "Zero leads sem próximo passo agendado",
      "Redução drástica do tempo de primeiro contato",
      "Previsibilidade de vendas com histórico 100% confiável",
    ],
  },
  {
    slug: "suporte",
    route: "/solucoes/suporte",
    title: "Sustentação & Evolução",
    short: "Acompanhamento contínuo, rituais mensais e otimização para seu CRM nunca estagnar.",
    ctaText: "Conhecer sustentação",
    description:
      "Sua esteira comercial evolui junto com seu negócio. Squad dedicada para auditoria contínua de processos, onboarding de novos vendedores e suporte técnico em minutos.",
    features: [
      "Auditorias Mensais de Saúde do Funil",
      "SLA de Atendimento Técnico Prioritário",
      "Onboarding Contínuo de Novos Vendedores",
      "Otimização e Refinamento de Automações",
    ],
    outcomes: [
      "Adoção do time mantida acima de 90% mês a mês",
      "Zero dependência de um único funcionário chave",
      "Processos e ferramentas sempre atualizados com as metas",
    ],
  },
  {
    slug: "dados",
    route: "/solucoes/dados",
    title: "Engenharia de Dados & BI",
    short: "Integrações de CRM com ERPs, Webhooks robustos e Dashboards executivos em tempo real.",
    ctaText: "Mapear integrações",
    description:
      "Conectamos o Kommo CRM ao seu ERP e sistemas financeiros. Dashboards de BI para acompanhar CAC, LTV, tempo de ciclo e conversão sem planilhas manuais.",
    features: [
      "Integrações Customizadas via API e Webhooks",
      "Conexão com ERPs (Omie, Bling, Tiny, TOTVS, SAP)",
      "Dashboards em Power BI / Looker / Custom",
      "Automação de Faturamento e Backoffice",
    ],
    outcomes: [
      "Visão executiva em tempo real de margem e faturamento",
      "Eliminação de retrabalho e digitação manual entre áreas",
      "Dados limpos e centralizados para decisões estratégicas",
    ],
  },
  {
    slug: "ia",
    route: "/solucoes/ia",
    title: "IA Comercial & Agentes",
    short: "Agentes cognitivos de WhatsApp e IA embarcada para qualificação 24/7 e resposta em segundos.",
    ctaText: "Conhecer soluções de IA",
    description:
      "Inteligência Artificial conectada ao Kommo CRM e WhatsApp para triar oportunidades, agendar reuniões e qualificar leads 24 horas por dia sem deixar ninguém esperando.",
    features: [
      "Agentes de Qualificação BANT no WhatsApp",
      "Lead Scoring Preditivo em Tempo Real",
      "Transcrição e Análise de Sentimento",
      "Base de Regras RAG Específica do seu Negócio",
    ],
    outcomes: [
      "Tempo de resposta reduzido para menos de 15 segundos",
      "Qualificação automática de 100% dos leads recebidos",
      "Vendedores recebendo reuniões prontas na agenda",
    ],
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug || s.route === `/solucoes/${slug}`);
}
