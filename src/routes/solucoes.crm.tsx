import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SparkleButton } from "@/components/ui/SparkleButton";
import {
  Workflow,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Zap,
  Clock,
  MessageSquare,
  Users,
  ShieldCheck,
  Award,
  ChevronDown,
  Layers,
  Sparkles,
  TrendingUp,
  ChevronRight,
  Filter,
  Check,
  Maximize2,
  Smartphone,
  BarChart3,
  Bot
} from "lucide-react";

export const Route = createFileRoute("/solucoes/crm")({
  component: CrmSolutionPage,
  head: () => ({
    title: "Implementação Kommo CRM & Estruturação de Funil | Tenno.",
    meta: [
      { title: "Implementação Kommo CRM & Estruturação de Funil | Tenno." },
      {
        name: "description",
        content: "Implementação oficial do Kommo CRM com engenharia de processos e automações inteligentes. Reduza o tempo de resposta e elimine o vazamento de leads no funil.",
      },
      {
        name: "keywords",
        content: "implementação kommo crm, consultoria kommo brasil, parceiro oficial kommo, estruturação de funil de vendas, revops brasil, automação comercial b2b"
      },
      { property: "og:title", content: "Implementação Kommo CRM & Estruturação de Funil | Tenno." },
      { property: "og:description", content: "Transforme o Kommo CRM na máquina previsível de receita da sua empresa com metodologia Six Sigma." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const ctaWhatsApp =
  "https://wa.me/5511912020723?text=Vim do site, e quero estruturar meu Kommo CRM. Meu código de atendimento é: S01 - B02";

function CrmSolutionPage() {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [activeLeadTab, setActiveLeadTab] = useState<'raw' | 'tenno'>('tenno');
  const [activeInterfaceTab, setActiveInterfaceTab] = useState<number>(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const realScreenshots = [
    {
      id: "pipeline",
      title: "Pipeline & Esteira Visual",
      category: "Visão Geral do Funil",
      image: "/images/kommo/pipeline.png",
      tag: "Kanban Conversacional",
      icon: <Layers className="w-4 h-4" />,
      desc: "Visão panorâmica e dinâmica de todos os negócios em andamento. Arraste e solte leads entre etapas, com atualização instantânea de valores e tarefas ativas.",
      highlights: [
        "Cards coloridos por status e urgência de atendimento",
        "Totalizadores financeiros por coluna de fechamento",
        "Indicador visual de mensagens não lidas no WhatsApp"
      ]
    },
    {
      id: "chat-lead",
      title: "Perfil do Lead & WhatsApp Nativo",
      category: "Atendimento & Histórico",
      image: "/images/kommo/chat-lead.png",
      tag: "Omnichannel 360º",
      icon: <MessageSquare className="w-4 h-4" />,
      desc: "Histórico unificado de conversas no WhatsApp, gravações de chamadas, notas internas entre a equipe e campos personalizados em um único painel.",
      highlights: [
        "Envio de áudios, PDFs e imagens direto pelo CRM",
        "Menções (@) entre vendedores em notas sigilosas",
        "Campos obrigatórios de qualificação (BANT / Six Sigma)"
      ]
    },
    {
      id: "salesbot",
      title: "Digital Pipeline & Salesbots",
      category: "Automação Sem Código",
      image: "/images/kommo/salesbot.png",
      tag: "Gatilhos Automáticos",
      icon: <Bot className="w-4 h-4" />,
      desc: "Fluxos inteligentes que qualificam leads, disparam mensagens de WhatsApp no momento exato e distribuem contatos entre os vendedores.",
      highlights: [
        "Disparo de cadências automáticas de follow-up",
        "Roteamento de leads por fila round-robin ou segmento",
        "Criação automática de tarefas e alertas de SLA para a gestão"
      ]
    },
    {
      id: "dashboard",
      title: "Cockpit & Relatórios de Vendas",
      category: "Inteligência Operacional",
      image: "/images/kommo/dashboard.png",
      tag: "Analytics & Metas",
      icon: <BarChart3 className="w-4 h-4" />,
      desc: "Métricas consolidadas de conversão por vendedor, tempo médio de resposta, faturamento acumulado e motivos de perda mais frequentes.",
      highlights: [
        "Previsão de fechamento baseada no funil ativo",
        "Taxa de conversão por etapa do processo comercial",
        "Monitoramento em tempo real de metas batidas"
      ]
    },
    {
      id: "templates",
      title: "Templates Aprovados Meta & WABA",
      category: "Segurança de Mensagens",
      image: "/images/kommo/templates.png",
      tag: "WhatsApp API Oficial",
      icon: <Zap className="w-4 h-4" />,
      desc: "Modelos de mensagens homologados diretamente com a Meta para reativação de leads, avisos de proposta e confirmações de reunião.",
      highlights: [
        "Zero risco de banimento de número no WhatsApp",
        "Variáveis personalizadas (Nome, Empresa, Valor)",
        "Disparo de mensagens em massa com alta entregabilidade"
      ]
    },
    {
      id: "mobile",
      title: "App Mobile para Equipe Externa",
      category: "Vendas em Qualquer Lugar",
      image: "/images/kommo/mobile.png",
      tag: "iOS & Android",
      icon: <Smartphone className="w-4 h-4" />,
      desc: "Aplicativo nativo para smartphones que permite ao vendedor atender leads no WhatsApp, registrar visitas e receber alertas de novos negócios.",
      highlights: [
        "Scanner de cartões de visita e criação rápida de leads",
        "Notificações instantâneas de novos contatos",
        "Gravação de notas de voz sincronizadas no card"
      ]
    }
  ];

  const pipelineStages = [
    {
      id: "entrada",
      name: "01. Entrada do Lead",
      sla: "Instantâneo (< 1 min)",
      color: "border-blue-200 bg-blue-50/30",
      description: "Captura omnicanal unificada em tempo real.",
      triggers: [
        "Webhook captura lead do WhatsApp, Meta Ads, Google Ads ou Site",
        "Roteamento inteligente por fila round-robin entre vendedores",
        "Criação automática do card e notificação no app do executivo comercial",
        "Disparo imediato de cadência inicial via WhatsApp com template aprovado"
      ],
      kpi: "Tempo de 1º Contato: < 3 minutos"
    },
    {
      id: "qualificacao",
      name: "02. Qualificação BANT",
      sla: "Até 4 horas",
      color: "border-amber-200 bg-amber-50/30",
      description: "Filtragem criteriosa de perfil, orçamento e autoridade.",
      triggers: [
        "Checklist obrigatório de campos (Faturamento, Nº Vidas/Funcionários, Dor Central)",
        "Lead Scoring automático baseado em respostas e velocidade de engajamento",
        "Alerta de SLA caso o lead fique mais de 30 minutos sem interação humana",
        "Movimentação automática para 'Desqualificado' com motivo de perda obrigatório"
      ],
      kpi: "Taxa de Qualificação (MQL > SQL): 42%"
    },
    {
      id: "proposta",
      name: "03. Apresentação & Proposta",
      sla: "Até 24 horas",
      color: "border-purple-200 bg-purple-50/30",
      description: "Envio de proposta estruturada com rastreamento de abertura.",
      triggers: [
        "Integração nativa com gerador de propostas / link rastreado",
        "Agendamento automático da reunião de alinhamento com Google Meet / Calendar",
        "Lembrete pré-reunião via WhatsApp 2h e 15min antes do horário",
        "Gatilho de re-aquecimento automático caso a proposta não seja aberta em 48h"
      ],
      kpi: "Comparecimento em reuniões: 88%"
    },
    {
      id: "negociacao",
      name: "04. Negociação & Decisão",
      sla: "3 a 5 dias",
      color: "border-pink-200 bg-pink-50/30",
      description: "Cadência de follow-up estruturada sem esquecimentos.",
      triggers: [
        "Bloqueio de avanço sem tarefa de próximo contato definida",
        "Cadência multicanal (WhatsApp + Ligação + E-mail) com templates de contorno de objeção",
        "Alerta para o Diretor Comercial em oportunidades acima de R$ 50k travadas",
        "Registro obrigatório de concorrentes e fatores de decisão"
      ],
      kpi: "Ciclo Médio de Venda: -35% de tempo"
    },
    {
      id: "ganho",
      name: "05. Ganho & Passagem de Bastão",
      sla: "Imediato",
      color: "border-emerald-200 bg-emerald-50/30",
      description: "Sincronização com financeiro, ERP e time de Onboarding.",
      triggers: [
        "Disparo de Webhook para ERP (Bling / Omie / Tiny / TOTVS) emitir contrato e fatura",
        "Envio de mensagem de boas-vindas do time de Customer Success",
        "Criação automática de projeto no sistema de tarefas da operação",
        "Cálculo automático de comissionamento e atualização do cockpit de BI"
      ],
      kpi: "Taxa de Conversão Final: 3x da média anterior"
    }
  ];

  const faqs = [
    {
      q: "Por que a Tenno implementa no Kommo CRM e não em outro software?",
      a: "O Kommo é o CRM conversacional líder global, desenhado nativamente para a realidade de vendas via WhatsApp, Direct e Omnicanalidade. Ao contrário de CRMs tradicionais pesados e burocráticos que os vendedores odeiam usar, o Kommo possui a maior taxa de adoção do mercado e API flexível para automações avançadas."
    },
    {
      q: "Quanto tempo dura a implementação completa do CRM?",
      a: "Uma implementação bem estruturada segue nosso playbook de 3 a 4 semanas. Dividimos em 4 etapas claras: 1) Mapeamento e desenho do processo; 2) Configuração técnica de funis, campos e automações; 3) Integração com canais e ERPs; 4) Treinamento prático da equipe com simulação de casos reais."
    },
    {
      q: "Já temos um CRM em uso. Vocês fazem migração da base de dados?",
      a: "Sim. Realizamos o saneamento e a migração completa de contatos, empresas, histórico e negócios em andamento para que sua equipe não perca nenhuma informação durante a transição."
    },
    {
      q: "Vocês apenas configuram a ferramenta ou capacitam os vendedores?",
      a: "Configurar ferramenta sem treinar o time é jogar dinheiro fora. A Tenno conduz workshops práticos ao vivo, fornece playbooks documentados e audita as primeiras semanas de uso da equipe para garantir 100% de adoção."
    },
    {
      q: "Como o WhatsApp é integrado para evitar banimentos?",
      a: "Trabalhamos exclusivamente com conexões oficiais da Meta (WhatsApp Business API / WABA) e integrações homologadas da Kommo, garantindo estabilidade, segurança jurídica e conformidade total com as políticas da Meta."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Questrial'] selection:bg-pink-100 selection:text-pink-600 overflow-x-hidden">
      <Header />

      <main className="pt-24 lg:pt-32">
        {/* 1. HERO SECTION */}
        <section className="relative py-20 lg:py-32 overflow-hidden border-b border-slate-100">
          <div className="absolute inset-0 bg-futuristic-grid opacity-30 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pink-50 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

          <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-600"></span>
                </span>
                <span>Kommo CRM Partner Oficial & Engenharia de Processos</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-8">
                O Kommo CRM estruturado sob a lógica do <span className="text-pink-600">seu processo comercial</span> — não o inverso.
              </h1>

              <p className="text-lg sm:text-xl text-slate-500 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                Desenhamos esteiras de vendas com automações inteligentes, SLAs de atendimento rigorosos e qualificação preditiva para que nenhum lead seja esquecido no funil.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <SparkleButton
                  href={ctaWhatsApp}
                  size="lg"
                >
                  Estruturar meu CRM
                </SparkleButton>

                <a
                  href="#telas-kommo"
                  className="w-full sm:w-auto h-16 px-8 rounded-full bg-slate-50 border border-slate-200 hover:bg-white text-slate-700 font-semibold text-base flex items-center justify-center transition-colors shadow-xs"
                >
                  Conhecer telas do sistema
                </a>
              </div>

              {/* Quick Trust Badges */}
              <div className="mt-14 pt-8 border-t border-slate-100 flex flex-wrap justify-center items-center gap-8 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-600" />
                  <span>+150 Operações Estruturadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-600" />
                  <span>Integração Oficial WhatsApp (WABA)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-600" />
                  <span>SLA de Atendimento em Minutos</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. SHOWCASE DE PRINTS REAIS DO KOMMO CRM */}
        <section id="telas-kommo" className="py-24 lg:py-36 relative border-b border-slate-100 bg-slate-50/40">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-pink-600 mb-3 block">
                INTERFACE & EXPERIÊNCIA DO USUÁRIO
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                Como é o Kommo CRM na prática
              </h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                Navegue pelas telas reais da ferramenta e descubra por que o Kommo possui a maior taxa de adesão por vendedores no mundo.
              </p>
            </motion.div>

            {/* Segmented Controls for Screenshots */}
            <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto p-1.5 bg-slate-200/70 rounded-2xl max-w-5xl mx-auto mb-12 border border-slate-300/50 no-scrollbar">
              {realScreenshots.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveInterfaceTab(idx)}
                  className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                    activeInterfaceTab === idx
                      ? "bg-white text-slate-900 shadow-sm border border-slate-200"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span className={activeInterfaceTab === idx ? "text-pink-600" : "text-slate-400"}>
                    {item.icon}
                  </span>
                  <span>{item.title}</span>
                </button>
              ))}
            </div>

            {/* Main Interactive Screen Showcase Card */}
            <AnimatePresence mode="wait">
              {(() => {
                const currentScreen = realScreenshots[activeInterfaceTab];
                return (
                  <motion.div
                    key={currentScreen.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 lg:p-12 rounded-[40px] bg-white border border-slate-200 shadow-2xl shadow-slate-200/60 relative overflow-hidden"
                  >
                    <div className="grid lg:grid-cols-12 gap-10 items-center">
                      {/* Left: Explanation and Details */}
                      <div className="lg:col-span-5 space-y-6">
                        <div>
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-pink-600 block mb-2">
                            {currentScreen.category} • {currentScreen.tag}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                            {currentScreen.title}
                          </h3>
                          <p className="text-slate-600 font-light text-base leading-relaxed">
                            {currentScreen.desc}
                          </p>
                        </div>

                        <div className="space-y-3 pt-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                            O que a Tenno estrutura nesta camada:
                          </span>
                          {currentScreen.highlights.map((point, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-3 text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="font-light">{point}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-4">
                          <SparkleButton href={ctaWhatsApp} size="sm">
                            Quero essa estrutura no meu time
                          </SparkleButton>
                        </div>
                      </div>

                      {/* Right: High-Res Real Screenshot with Browser Mockup Frame */}
                      <div className="lg:col-span-7">
                        <div className="rounded-2xl border border-slate-200/80 bg-slate-900 shadow-xl overflow-hidden group">
                          {/* Browser Window Header Mockup */}
                          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100 border-b border-slate-200 text-xs text-slate-500">
                            <div className="flex items-center gap-1.5">
                              <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                              <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                              <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                            </div>
                            <span className="font-mono text-[11px] text-slate-600 bg-white px-3 py-0.5 rounded-md border border-slate-200 shadow-2xs">
                              app.kommo.com • Tenno Revenue Engine
                            </span>
                            <span className="text-[11px] text-pink-600 font-semibold">Live System</span>
                          </div>

                          {/* The Real Screenshot */}
                          <div className="relative bg-slate-950 overflow-hidden flex items-center justify-center p-2">
                            <img
                              src={currentScreen.image}
                              alt={currentScreen.title}
                              className="w-full h-auto max-h-[460px] object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>
        </section>

        {/* 3. AS 4 FALHAS DO CRM AMADOR (BENTO GRID) */}
        <section className="py-24 lg:py-32 relative bg-white">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <motion.div {...fadeInUp} className="max-w-3xl mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-pink-600 mb-3 block">
                DIAGNÓSTICO OPERACIONAL
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                Por que a maioria das empresas falha ao tentar implementar um CRM sozinhas?
              </h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                Comprar a licença do software é a parte fácil. O problema é que a tecnologia sem engenharia de processos apenas acelera a desorganização interna.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <AlertTriangle className="w-6 h-6 text-pink-600" />,
                  title: "O Funil Fantasma",
                  desc: "Dezenas de cards acumulados na mesma etapa sem prazo, sem dono claro e sem histórico de contato registrado.",
                  tag: "Perda de Leads"
                },
                {
                  icon: <Clock className="w-6 h-6 text-pink-600" />,
                  title: "O Vendedor Digitador",
                  desc: "Seu time de vendas gasta até 40% do expediente preenchendo planilhas manuais em vez de negociar e fechar vendas.",
                  tag: "Desperdício de Tempo"
                },
                {
                  icon: <Filter className="w-6 h-6 text-pink-600" />,
                  title: "Follow-up Esquecido",
                  desc: "68% dos leads que pedem orçamento esfriam simplesmente porque o vendedor esqueceu de fazer o 2º ou 3º contato.",
                  tag: "Quebra de Conversão"
                },
                {
                  icon: <TrendingUp className="w-6 h-6 text-pink-600" />,
                  title: "Gestão no Escuro",
                  desc: "Relatórios distorcidos, dados duplicados e reuniões de diretoria baseadas em palpites e intuição.",
                  tag: "Falta de Previsibilidade"
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  {...fadeInUp}
                  className="p-8 rounded-3xl bg-slate-50/60 border border-slate-100 hover:bg-white hover:border-pink-200 hover:shadow-xl hover:shadow-slate-200/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center mb-6">
                      {card.icon}
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-2 block">
                      {card.tag}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. COMPONENTE INTERATIVO: VISUALIZADOR DE PIPELINE EM RAIO-X */}
        <section id="pipeline-raiox" className="py-24 lg:py-36 relative border-t border-slate-100 bg-slate-50/50">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-pink-600 mb-3 block">
                ARQUITETURA DE AUTOMAÇÃO
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                Esteira Kommo em Modo "Raio-X"
              </h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                Clique nas etapas do pipeline abaixo para inspecionar os gatilhos, automações e regras de SLA que a Tenno estrutura em cada fase da venda.
              </p>
            </motion.div>

            {/* Tactile UIverse Segmented Control */}
            <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto p-1.5 bg-slate-100/80 rounded-2xl max-w-4xl mx-auto mb-8 border border-slate-200/60 no-scrollbar">
              {pipelineStages.map((stg, idx) => (
                <button
                  key={stg.id}
                  onClick={() => setActiveStage(idx)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                    activeStage === idx
                      ? "bg-white text-slate-900 shadow-sm border border-slate-200/80"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${activeStage === idx ? "bg-pink-600" : "bg-slate-300"}`} />
                  {stg.name}
                </button>
              ))}
            </div>

            {/* Active Stage Inspector Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className={`p-8 lg:p-12 rounded-[36px] border ${pipelineStages[activeStage].color} bg-white shadow-xl shadow-slate-100 relative overflow-hidden`}
              >
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-200 bg-slate-50 text-slate-700 font-mono">
                      <Clock className="w-3.5 h-3.5 text-pink-600" />
                      SLA: {pipelineStages[activeStage].sla}
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                      {pipelineStages[activeStage].name}
                    </h3>

                    <p className="text-slate-600 font-light text-base leading-relaxed mb-6">
                      {pipelineStages[activeStage].description}
                    </p>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <span className="text-xs uppercase tracking-wider text-slate-400 block mb-1">
                        Meta Operacional da Etapa:
                      </span>
                      <span className="text-sm font-semibold text-emerald-600 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        {pipelineStages[activeStage].kpi}
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    <span className="text-xs font-bold uppercase tracking-widest text-pink-600 block mb-4">
                      GATILHOS E AUTOMAÇÕES ATIVAS (TENNO ENGINE)
                    </span>

                    <div className="space-y-3">
                      {pipelineStages[activeStage].triggers.map((trigger, tIdx) => (
                        <div
                          key={tIdx}
                          className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-pink-200 transition-colors"
                        >
                          <div className="w-6 h-6 rounded-lg bg-pink-100 flex items-center justify-center shrink-0 mt-0.5">
                            <Zap className="w-3.5 h-3.5 text-pink-600" />
                          </div>
                          <span className="text-sm text-slate-700 font-light leading-relaxed">
                            {trigger}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* 5. COMPONENTE INTERATIVO: ANATOMIA DO LEAD ENRIQUECIDO */}
        <section className="py-24 lg:py-32 relative bg-white border-t border-slate-100">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeInUp}>
                <span className="text-xs font-bold uppercase tracking-widest text-pink-600 mb-3 block">
                  QUALIDADE DE DADOS
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                  A diferença entre um "contato solto" e uma oportunidade pronta para fechar.
                </h2>
                <p className="text-slate-500 text-lg font-light leading-relaxed mb-8">
                  No Kommo CRM estruturado pela Tenno, cada card de negócio entrega ao vendedor o contexto completo de dor, orçamento, autoridade e histórico prévio antes mesmo da primeira ligação.
                </p>

                {/* Tactile Toggle Switch */}
                <div className="inline-flex p-1 bg-slate-200/80 rounded-full mb-6 border border-slate-300/60">
                  <button
                    onClick={() => setActiveLeadTab('raw')}
                    className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                      activeLeadTab === 'raw'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Lead sem Estrutura
                  </button>
                  <button
                    onClick={() => setActiveLeadTab('tenno')}
                    className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                      activeLeadTab === 'tenno'
                        ? 'bg-pink-600 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Lead Estruturado Tenno
                  </button>
                </div>
              </motion.div>

              {/* Lead Card Inspector Mockup */}
              <motion.div {...fadeInUp} className="relative">
                <div className="p-8 rounded-[36px] bg-slate-50 border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center font-bold text-pink-600 text-sm">
                        RM
                      </div>
                      <div>
                        <div className="text-base font-bold text-slate-900">Roberto Martins</div>
                        <div className="text-xs text-slate-500">Diretor Comercial • Grupo Alfa B2B</div>
                      </div>
                    </div>

                    <span className={`text-xs px-3 py-1 rounded-md font-mono font-bold uppercase ${
                      activeLeadTab === 'tenno'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}>
                      {activeLeadTab === 'tenno' ? 'SQL • Score 94/100' : 'Lead Desconhecido'}
                    </span>
                  </div>

                  {activeLeadTab === 'raw' ? (
                    <div className="space-y-4 text-sm text-slate-500 font-light">
                      <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                        <span className="text-xs text-slate-400 block mb-1">Telefone:</span>
                        (11) 98765-XXXX
                      </div>
                      <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                        <span className="text-xs text-slate-400 block mb-1">Mensagem Inicial:</span>
                        "Olá, quero saber o valor."
                      </div>
                      <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700">
                        ⚠️ Sem informações de faturamento, tamanho de time ou histórico de campanhas. Vendedor entra cego na negociação.
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3 text-sm">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-white border border-slate-200">
                          <span className="text-[11px] text-slate-400 block mb-0.5">Origem:</span>
                          <span className="text-xs font-semibold text-slate-800">Google Ads • Termo: "kommo crm"</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white border border-slate-200">
                          <span className="text-[11px] text-slate-400 block mb-0.5">Tamanho da Equipe:</span>
                          <span className="text-xs font-semibold text-slate-800">18 Vendedores</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-slate-200">
                        <span className="text-[11px] text-slate-400 block mb-0.5">Dor Principal Declarada:</span>
                        <span className="text-xs font-semibold text-slate-800">Vazamento de leads aos finais de semana e falta de padrão no WhatsApp</span>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-slate-200">
                        <span className="text-[11px] text-slate-400 block mb-0.5">Próximo Passo Obrigatório:</span>
                        <span className="text-xs font-semibold text-pink-600 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" /> Reunião de Diagnóstico (Amanhã às 15:30)
                        </span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        Card enriquecido automaticamente pela Tenno Engine em 3 segundos.
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6. OS 4 PILARES DA IMPLANTAÇÃO */}
        <section className="py-24 lg:py-32 relative border-t border-slate-100 bg-slate-50/50">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-xs font-bold uppercase tracking-widest text-pink-600 mb-3 block">
                METODOLOGIA DE ENTREGA
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                Como implantamos o Kommo CRM na sua empresa
              </h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                Um processo consultivo de 4 semanas com foco total em adoção pela equipe e retorno de investimento.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Mapeamento & Funil",
                  desc: "Desenhamos as etapas reais do seu funil e definimos os campos estratégicos para eliminar burocracia."
                },
                {
                  step: "02",
                  title: "Parametrização & Tech",
                  desc: "Configuração do Kommo, criação de tags, pipelines, regras de acesso e estrutura de segurança de dados."
                },
                {
                  step: "03",
                  title: "Automação & Omnicanal",
                  desc: "Integração oficial de WhatsApp (WABA), e-mails, telefonia e disparo de cadências inteligentes."
                },
                {
                  step: "04",
                  title: "Treinamento & Adoção",
                  desc: "Workshops práticos com a equipe comercial, simulações de vendas e auditoria das primeiras semanas de uso."
                },
              ].map((col, i) => (
                <motion.div
                  key={i}
                  {...fadeInUp}
                  className="p-8 rounded-3xl bg-white border border-slate-200 hover:shadow-xl hover:shadow-slate-200/40 transition-all relative group"
                >
                  <span className="text-4xl font-black text-slate-200 group-hover:text-pink-600/30 transition-colors mb-6 block">
                    {col.step}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{col.title}</h3>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">{col.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. FAQ DE ALTA PERFORMANCE (SEO SCHEMA) */}
        <section className="py-24 lg:py-32 relative bg-white border-t border-slate-100">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-pink-600 mb-3 block">
                DÚVIDAS FREQUENTES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                Perguntas sobre Implementação de CRM
              </h2>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-pink-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${faqOpen === idx ? "rotate-180 text-pink-600" : "text-slate-400"}`} />
                  </button>
                  {faqOpen === idx && (
                    <div className="px-6 pb-6 text-slate-600 font-light text-sm leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. BOTTOM CTA */}
        <section className="py-24 lg:py-36 relative overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 bg-pink-600/10 pointer-events-none" />
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl relative z-10 text-center">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-8">
              Pronto para transformar o Kommo CRM no motor de receita da sua empresa?
            </h2>
            <p className="text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Agende uma conversa de 20 minutos com um especialista em RevOps e descubra como desenhar a sua esteira de vendas.
            </p>
            <div className="flex justify-center">
              <SparkleButton
                href={ctaWhatsApp}
                size="lg"
              >
                Falar com Especialista em CRM
              </SparkleButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 border-t border-slate-100 bg-white text-slate-500 text-sm">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="font-['Questrial'] text-2xl font-bold text-slate-900">
            Tenno<span className="text-pink-600">.</span>
          </div>
          <p>© 2026 Tenno Revenue System. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="mailto:contato@tennohub.com.br" className="hover:text-pink-600 transition-colors">contato@tennohub.com.br</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
