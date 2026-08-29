import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
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
  Flame,
  Check
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
  // Interactive Kanban Pipeline State
  const [activeStage, setActiveStage] = useState<number>(0);
  const [activeLeadTab, setActiveLeadTab] = useState<'raw' | 'tenno'>('tenno');
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const pipelineStages = [
    {
      id: "entrada",
      name: "01. Entrada do Lead",
      sla: "Instantâneo (< 1 min)",
      color: "border-blue-500/40 bg-blue-500/5",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
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
      color: "border-amber-500/40 bg-amber-500/5",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
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
      color: "border-purple-500/40 bg-purple-500/5",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
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
      color: "border-pink-500/40 bg-pink-500/5",
      badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
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
      color: "border-emerald-500/40 bg-emerald-500/5",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-['Questrial'] selection:bg-pink-500/30 selection:text-pink-300 overflow-x-hidden">
      <Header />

      <main className="pt-24 lg:pt-32">
        {/* 1. HERO SECTION */}
        <section className="relative py-20 lg:py-32 overflow-hidden border-b border-slate-800/80">
          <div className="absolute inset-0 bg-futuristic-grid opacity-20 pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-pink-500/10 text-pink-400 border border-pink-500/20 mb-8">
                <Award className="w-3.5 h-3.5 text-pink-400" />
                Partner Oficial Kommo & Metodologia Six Sigma
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-8">
                O Kommo CRM estruturado sob a lógica do <span className="text-pink-500">seu processo comercial</span> — não o inverso.
              </h1>

              <p className="text-lg sm:text-xl text-slate-400 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                Desenhamos esteiras de vendas com automações inteligentes, SLAs de atendimento rigorosos e qualificação preditiva para que nenhum lead seja esquecido no funil.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={ctaWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto h-16 px-10 rounded-full bg-pink-600 hover:bg-pink-700 text-white font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-pink-600/25 transition-all"
                >
                  Estruturar meu CRM
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                
                <a
                  href="#pipeline-raiox"
                  className="w-full sm:w-auto h-16 px-8 rounded-full bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 font-medium text-base flex items-center justify-center transition-colors"
                >
                  Ver simulação do pipeline
                </a>
              </div>

              {/* Quick Trust Badges */}
              <div className="mt-14 pt-8 border-t border-slate-800/60 flex flex-wrap justify-center items-center gap-8 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-500" />
                  <span>+150 Operações Estruturadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-500" />
                  <span>Integração Oficial WhatsApp (WABA)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-500" />
                  <span>SLA de Atendimento em Minutos</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. AS 4 FALHAS DO CRM AMADOR (BENTO GRID) */}
        <section className="py-24 lg:py-32 relative bg-slate-900/40">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <motion.div {...fadeInUp} className="max-w-3xl mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-pink-500 mb-3 block">
                DIAGNÓSTICO OPERACIONAL
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                Por que a maioria das empresas falha ao tentar implementar um CRM sozinhas?
              </h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                Comprar a licença do software é a parte fácil. O problema é que a tecnologia sem engenharia de processos apenas acelera a desorganização interna.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <AlertTriangle className="w-6 h-6 text-pink-400" />,
                  title: "O Funil Fantasma",
                  desc: "Dezenas de cards acumulados na mesma etapa sem prazo, sem dono claro e sem histórico de contato registrado.",
                  tag: "Perda de Leads"
                },
                {
                  icon: <Clock className="w-6 h-6 text-pink-400" />,
                  title: "O Vendedor Digitador",
                  desc: "Seu time de vendas gasta até 40% do expediente preenchendo planilhas manuais em vez de negociar e fechar vendas.",
                  tag: "Desperdício de Tempo"
                },
                {
                  icon: <Filter className="w-6 h-6 text-pink-400" />,
                  title: "Follow-up Esquecido",
                  desc: "68% dos leads que pedem orçamento esfriam simplesmente porque o vendedor esqueceu de fazer o 2º ou 3º contato.",
                  tag: "Quebra de Conversão"
                },
                {
                  icon: <TrendingUp className="w-6 h-6 text-pink-400" />,
                  title: "Gestão no Escuro",
                  desc: "Relatórios distorcidos, dados duplicados e reuniões de diretoria baseadas em palpites e intuição.",
                  tag: "Falta de Previsibilidade"
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  {...fadeInUp}
                  className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-pink-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mb-6">
                      {card.icon}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-pink-400/80 mb-2 block">
                      {card.tag}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                    <p className="text-sm text-slate-400 font-light leading-relaxed">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. COMPONENTE INTERATIVO: VISUALIZADOR DE PIPELINE EM RAIO-X */}
        <section id="pipeline-raiox" className="py-24 lg:py-36 relative border-t border-slate-800">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-pink-500 mb-3 block">
                ARQUITETURA DE AUTOMAÇÃO
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                Esteira Kommo em Modo "Raio-X"
              </h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                Clique nas etapas do pipeline abaixo para inspecionar os gatilhos, automações e regras de SLA que a Tenno estrutura em cada fase da venda.
              </p>
            </motion.div>

            {/* Pipeline Stage Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
              {pipelineStages.map((stg, idx) => (
                <button
                  key={stg.id}
                  onClick={() => setActiveStage(idx)}
                  className={`px-5 py-3 rounded-2xl text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2.5 border ${
                    activeStage === idx
                      ? "bg-pink-600 text-white border-pink-500 shadow-lg shadow-pink-600/20"
                      : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${activeStage === idx ? "bg-white" : "bg-slate-600"}`} />
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
                className={`p-8 lg:p-12 rounded-[36px] border ${pipelineStages[activeStage].color} bg-slate-900/90 backdrop-blur-xl relative overflow-hidden`}
              >
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border bg-slate-800 text-slate-300">
                      <Clock className="w-3.5 h-3.5 text-pink-400" />
                      SLA Recomendado: {pipelineStages[activeStage].sla}
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                      {pipelineStages[activeStage].name}
                    </h3>

                    <p className="text-slate-300 font-light text-base leading-relaxed mb-6">
                      {pipelineStages[activeStage].description}
                    </p>

                    <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                      <span className="text-xs uppercase tracking-wider text-slate-400 block mb-1">
                        Meta Operacional da Etapa:
                      </span>
                      <span className="text-sm font-semibold text-emerald-400 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        {pipelineStages[activeStage].kpi}
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    <span className="text-xs font-bold uppercase tracking-widest text-pink-400 block mb-4">
                      GATILHOS E AUTOMAÇÕES ATIVAS (TENNO ENGINE)
                    </span>

                    <div className="space-y-3">
                      {pipelineStages[activeStage].triggers.map((trigger, tIdx) => (
                        <div
                          key={tIdx}
                          className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 hover:border-pink-500/30 transition-colors"
                        >
                          <div className="w-6 h-6 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0 mt-0.5">
                            <Zap className="w-3.5 h-3.5 text-pink-400" />
                          </div>
                          <span className="text-sm text-slate-200 font-light leading-relaxed">
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

        {/* 4. COMPONENTE INTERATIVO: ANATOMIA DO LEAD ENRIQUECIDO */}
        <section className="py-24 lg:py-32 relative bg-slate-900/30 border-t border-slate-800">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeInUp}>
                <span className="text-xs font-bold uppercase tracking-widest text-pink-500 mb-3 block">
                  QUALIDADE DE DADOS
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                  A diferença entre um "contato solto" e uma oportunidade pronta para fechar.
                </h2>
                <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">
                  No Kommo CRM estruturado pela Tenno, cada card de negócio entrega ao vendedor o contexto completo de dor, orçamento, autoridade e histórico prévio antes mesmo da primeira ligação.
                </p>

                <div className="flex gap-4 mb-6">
                  <button
                    onClick={() => setActiveLeadTab('raw')}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                      activeLeadTab === 'raw'
                        ? 'bg-slate-800 text-white border-slate-600'
                        : 'bg-transparent text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    Lead sem Estrutura (Cru)
                  </button>
                  <button
                    onClick={() => setActiveLeadTab('tenno')}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                      activeLeadTab === 'tenno'
                        ? 'bg-pink-600 text-white border-pink-500 shadow-lg shadow-pink-600/20'
                        : 'bg-transparent text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    Lead Estruturado Tenno
                  </button>
                </div>
              </motion.div>

              {/* Lead Card Inspector Mockup */}
              <motion.div {...fadeInUp} className="relative">
                <div className="p-8 rounded-[36px] bg-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-pink-500 text-sm">
                        RM
                      </div>
                      <div>
                        <div className="text-base font-bold text-white">Roberto Martins</div>
                        <div className="text-xs text-slate-400">Diretor Comercial • Grupo Alfa B2B</div>
                      </div>
                    </div>

                    <span className={`text-xs px-3 py-1 rounded-full font-bold uppercase ${
                      activeLeadTab === 'tenno'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}>
                      {activeLeadTab === 'tenno' ? 'SQL • Score 94/100' : 'Lead Desconhecido'}
                    </span>
                  </div>

                  {activeLeadTab === 'raw' ? (
                    <div className="space-y-4 text-sm text-slate-400 font-light">
                      <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                        <span className="text-xs text-slate-500 block mb-1">Telefone:</span>
                        (11) 98765-XXXX
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                        <span className="text-xs text-slate-500 block mb-1">Mensagem Inicial:</span>
                        "Olá, quero saber o valor."
                      </div>
                      <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300">
                        ⚠️ Sem informações de faturamento, tamanho de time ou histórico de campanhas. Vendedor entra cego na negociação.
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3 text-sm">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                          <span className="text-[11px] text-slate-500 block mb-0.5">Origem:</span>
                          <span className="text-xs font-semibold text-slate-200">Google Ads • Termo: "kommo crm"</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                          <span className="text-[11px] text-slate-500 block mb-0.5">Tamanho da Equipe:</span>
                          <span className="text-xs font-semibold text-slate-200">18 Vendedores</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                        <span className="text-[11px] text-slate-500 block mb-0.5">Dor Principal Declarada:</span>
                        <span className="text-xs font-semibold text-slate-200">Vazamento de leads aos finais de semana e falta de padrão no WhatsApp</span>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                        <span className="text-[11px] text-slate-500 block mb-0.5">Próximo Passo Obrigatório:</span>
                        <span className="text-xs font-semibold text-pink-400 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" /> Reunião de Diagnóstico (Amanhã às 15:30)
                        </span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        Card enriquecido automaticamente pela Tenno Engine em 3 segundos.
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. OS 4 PILARES DA IMPLANTAÇÃO */}
        <section className="py-24 lg:py-32 relative border-t border-slate-800">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-xs font-bold uppercase tracking-widest text-pink-500 mb-3 block">
                METODOLOGIA DE ENTREGA
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                Como implantamos o Kommo CRM na sua empresa
              </h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
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
                  className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-pink-500/40 transition-all relative group"
                >
                  <span className="text-4xl font-black text-slate-800 group-hover:text-pink-500/30 transition-colors mb-6 block">
                    {col.step}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">{col.title}</h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">{col.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. FAQ DE ALTA PERFORMANCE (SEO SCHEMA) */}
        <section className="py-24 lg:py-32 relative bg-slate-900/30 border-t border-slate-800">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-pink-500 mb-3 block">
                DÚVIDAS FREQUENTES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                Perguntas sobre Implementação de CRM
              </h2>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-pink-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${faqOpen === idx ? "rotate-180 text-pink-500" : "text-slate-500"}`} />
                  </button>
                  {faqOpen === idx && (
                    <div className="px-6 pb-6 text-slate-400 font-light text-sm leading-relaxed border-t border-slate-800/60 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. BOTTOM CTA */}
        <section className="py-24 lg:py-36 relative overflow-hidden border-t border-slate-800">
          <div className="absolute inset-0 bg-pink-600/10 pointer-events-none" />
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl relative z-10 text-center">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-8">
              Pronto para transformar o Kommo CRM no motor de receita da sua empresa?
            </h2>
            <p className="text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Agende uma conversa de 20 minutos com um especialista em RevOps e descubra como desenhar a sua esteira de vendas.
            </p>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={ctaWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="h-16 px-12 rounded-full bg-pink-600 hover:bg-pink-700 text-white font-bold text-lg inline-flex items-center justify-center gap-3 shadow-2xl shadow-pink-600/30 transition-all"
            >
              Falar com Especialista em CRM
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </section>
      </main>

      <footer className="py-16 border-t border-slate-800 bg-slate-950 text-slate-400 text-sm">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="font-['Questrial'] text-2xl font-bold text-white">
            Tenno<span className="text-pink-500">.</span>
          </div>
          <p>© 2026 Tenno Revenue System. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="mailto:contato@tennohub.com.br" className="hover:text-pink-400 transition-colors">contato@tennohub.com.br</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
