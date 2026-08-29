import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Database,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle2,
  Lock,
  Workflow,
  BarChart3,
  Code2,
  FileCode,
  ShieldCheck,
  ChevronDown,
  Terminal,
  Activity,
  Check
} from "lucide-react";

export const Route = createFileRoute("/solucoes/dados")({
  component: DadosSolutionPage,
  head: () => ({
    title: "Integrações Kommo CRM, APIs e Dashboards de Vendas | Tenno.",
    meta: [
      { title: "Integrações Kommo CRM, APIs e Dashboards de Vendas | Tenno." },
      {
        name: "description",
        content: "Conecte seu Kommo CRM ao ERP (Omie, Bling, Tiny, TOTVS, SAP) e crie cockpits de BI com dados confiáveis. Engenharia de dados e integrações robustas para RevOps.",
      },
      {
        name: "keywords",
        content: "integração kommo crm erp, dashboard comercial power bi, engenharia de dados revops, webhook kommo crm, bi para vendas b2b, api kommo"
      },
      { property: "og:title", content: "Integrações Kommo CRM, APIs e Dashboards de Vendas | Tenno." },
      { property: "og:description", content: "Elimine silos de informação. Conecte sua operação comercial ao faturamento e tenha dashboards executivos em tempo real." },
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
  "https://wa.me/5511912020723?text=Vim do site, e quero mapear as integrações e dashboards da minha empresa. Meu código de atendimento é: S01 - B02";

function DadosSolutionPage() {
  const [activeNode, setActiveNode] = useState<string>("kommo");
  const [dashboardView, setDashboardView] = useState<'traditional' | 'revops'>('revops');
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const nodes = {
    origem: {
      title: "01. Origens de Tráfego & Mensagens",
      tech: "Meta Ads • Google Ads • WhatsApp • Formulários Web",
      payload: `{\n  "source": "Google_Ads_Search",\n  "campaign": "RevOps_B2B_SP",\n  "lead_phone": "+5511987654321",\n  "utm_content": "implementacao_kommo"\n}`,
      desc: "Captura instantânea de eventos de topo de funil com parâmetros UTM e rastreabilidade total de origem."
    },
    kommo: {
      title: "02. Kommo CRM (Camada de Negociação)",
      tech: "Pipeline de Vendas • Tags • Regras de Negócio",
      payload: `{\n  "event": "deal_stage_changed",\n  "deal_id": 984120,\n  "new_stage": "Negociação_Final",\n  "deal_value": 48500.00,\n  "responsible_user": "Executivo_Senior"\n}`,
      desc: "Tratamento da jornada comercial, atualização de campos personalizados e orquestração dos gatilhos de avanço."
    },
    middleware: {
      title: "03. Tenno Data Engine (Middleware & Webhooks)",
      tech: "Serverless Workers • Validação de Payload • Filas de Retentativa",
      payload: `{\n  "status": "validated_and_transformed",\n  "sanitized_cnpj": "12.345.678/0001-90",\n  "credit_score": "Approved_Tier_A",\n  "routing_target": "ERP_Omie_API_v1"\n}`,
      desc: "Camada de engenharia proprietária que valida dados, enriquece registros com CNPJ/Score e garante entrega sem perdas."
    },
    erp: {
      title: "04. ERP & Faturamento Financeiro",
      tech: "Omie • Bling • Tiny • TOTVS • SAP • Asaas",
      payload: `{\n  "invoice_status": "Generated_NF_4892",\n  "contract_id": "CT-2026-881",\n  "payment_terms": "Boleto_30_60_90",\n  "callback_to_crm": "Mark_As_Won_And_Billed"\n}`,
      desc: "Geração automática de contrato, nota fiscal e conciliação bancária sem nenhuma digitação manual."
    },
    bi: {
      title: "05. Cockpit Executivo de BI",
      tech: "Power BI • Looker Studio • Metabase • SQL Data Warehouse",
      payload: `{\n  "real_time_metrics": {\n    "cac_by_channel": 412.50,\n    "ltv_projected": 38400.00,\n    "cycle_time_days": 11.2,\n    "win_rate": "34.8%"\n  }\n}`,
      desc: "Painéis estratégicos para diretores e acionistas acompanharem faturamento, margem e previsibilidade em tempo real."
    }
  };

  const faqs = [
    {
      q: "Vocês integram com qualquer ERP ou sistema próprio?",
      a: "Sim. Trabalhamos com APIs REST e Webhooks para integrar o Kommo CRM tanto com os principais ERPs do mercado (Omie, Bling, Tiny, ContaAzul, TOTVS, SAP) quanto com sistemas legados ou bancos de dados internos via microserviços."
    },
    {
      q: "Como é garantido que nenhum dado seja perdido se o ERP cair?",
      a: "Utilizamos arquitetura assíncrona com filas de mensageria e retentativas inteligentes (*exponential backoff*). Se a API do ERP estiver fora do ar temporariamente, nosso middleware armazena os dados com segurança e reprocessa a transação assim que o serviço normalizar."
    },
    {
      q: "Qual ferramenta vocês utilizam para criar os dashboards?",
      a: "Desenvolvemos dashboards executivos em Power BI, Looker Studio ou diretamente em aplicações web customizadas, dependendo da infraestrutura de tecnologia e do volume de dados da sua empresa."
    },
    {
      q: "As integrações atendem aos requisitos da LGPD?",
      a: "Sim. Toda a transmissão de dados é criptografada de ponta a ponta (TLS 1.3), com anonimização de campos sensíveis e controle estrito de permissões de acesso por perfil de usuário."
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

          <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-600"></span>
                </span>
                <span>Engenharia de Integrações & Business Intelligence</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-8">
                Elimine silos de informação. Conecte sua esteira de vendas ao <span className="text-pink-600">coração financeiro</span> da empresa.
              </h1>

              <p className="text-lg sm:text-xl text-slate-500 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                Desenvolvemos integrações robustas via API, webhooks e dashboards executivos customizados para transformar mensagens de WhatsApp e negócios do CRM em inteligência acionável de receita.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={ctaWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto h-16 px-10 rounded-full bg-pink-600 hover:bg-pink-700 text-white font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-pink-600/20 active:scale-[0.98] transition-all"
                >
                  Mapear arquitetura de dados
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <a
                  href="#fluxo-dados"
                  className="w-full sm:w-auto h-16 px-8 rounded-full bg-slate-50 border border-slate-200 hover:bg-white text-slate-700 font-semibold text-base flex items-center justify-center transition-colors"
                >
                  Ver fluxo de dados interativo
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. O CENÁRIO DOS DADOS DESCONECTADOS */}
        <section className="py-24 lg:py-32 relative bg-slate-50/50 border-b border-slate-100">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <motion.div {...fadeInUp} className="max-w-3xl mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-pink-600 mb-3 block">
                O CUSTO DA INEFICIÊNCIA
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                O que acontece quando seus sistemas não conversam entre si?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code2 className="w-6 h-6 text-pink-600" />,
                  title: "Retrabalho de Digitação",
                  desc: "Vendedor fecha a venda no CRM e depois precisa digitar manualmente os mesmos dados no ERP ou enviar no WhatsApp do financeiro."
                },
                {
                  icon: <FileCode className="w-6 h-6 text-pink-600" />,
                  title: "Relatórios de 2 Semanas",
                  desc: "A diretoria precisa esperar dias para a equipe consolidar planilhas do Excel que quebram com frequência e trazem números divergentes."
                },
                {
                  icon: <Lock className="w-6 h-6 text-pink-600" />,
                  title: "Falta de Visão de Margem e LTV",
                  desc: "Você sabe quanto vendeu, mas não sabe o custo de aquisição real por vendedor, a retenção ou o tempo de ciclo por produto."
                }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  {...fadeInUp}
                  className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-pink-200 hover:shadow-xl hover:shadow-slate-200/40 transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center mb-6">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. COMPONENTE INTERATIVO: GRAFO DE ARQUITETURA DE DADOS (NODE GRAPH) */}
        <section id="fluxo-dados" className="py-24 lg:py-36 relative border-b border-slate-100">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-pink-600 mb-3 block">
                ARQUITETURA DE INTEGRAÇÃO
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                Fluxo de Dados Ponta a Ponta (Data Pipes)
              </h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                Clique nos nós abaixo para inspecionar os payloads em tempo real e entender como a informação flui com segurança entre captação, CRM, ERP e Dashboards.
              </p>
            </motion.div>

            {/* Segmented Control */}
            <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto p-1.5 bg-slate-100/80 rounded-2xl max-w-4xl mx-auto mb-8 border border-slate-200/60 no-scrollbar">
              {Object.keys(nodes).map((key) => {
                const nodeData = nodes[key as keyof typeof nodes];
                const isActive = activeNode === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveNode(key)}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                      isActive
                        ? "bg-white text-slate-900 shadow-sm border border-slate-200/80"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {nodeData.title.split('.')[1] || nodeData.title}
                  </button>
                );
              })}
            </div>

            {/* Active Node Payload & Inspector */}
            <AnimatePresence mode="wait">
              {(() => {
                const current = nodes[activeNode as keyof typeof nodes];
                return (
                  <motion.div
                    key={activeNode}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 lg:p-12 rounded-[36px] bg-white border border-slate-200 shadow-xl shadow-slate-100 relative overflow-hidden"
                  >
                    <div className="grid lg:grid-cols-12 gap-8 items-start">
                      <div className="lg:col-span-5">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-pink-600 block mb-2">
                          {current.tech}
                        </span>
                        <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                          {current.title}
                        </h3>
                        <p className="text-slate-600 font-light text-base leading-relaxed mb-6">
                          {current.desc}
                        </p>
                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3 text-xs text-slate-600">
                          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Conexão criptografada (TLS 1.3) & Tratamento de Erros</span>
                        </div>
                      </div>

                      <div className="lg:col-span-7">
                        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 font-mono text-xs text-pink-300 overflow-x-auto shadow-inner">
                          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 text-slate-400 font-sans">
                            <span className="flex items-center gap-2">
                              <Terminal className="w-4 h-4 text-slate-400" />
                              Payload Inspecionado (JSON)
                            </span>
                            <span className="text-[11px] text-emerald-400 font-mono">Status: 200 OK</span>
                          </div>
                          <pre className="text-slate-300 leading-relaxed font-mono">{current.payload}</pre>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>
        </section>

        {/* 4. COMPARATIVO DE DASHBOARDS (SLIDER ANTES VS DEPOIS) */}
        <section className="py-24 lg:py-32 relative bg-slate-50/50 border-b border-slate-100">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <motion.div {...fadeInUp} className="lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-widest text-pink-600 mb-3 block">
                  COCKPIT EXECUTIVO
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                  Transforme dados dispersos em previsibilidade de caixa.
                </h2>
                <p className="text-slate-500 text-lg font-light leading-relaxed mb-8">
                  Deixe de pilotar sua empresa olhando no retrovisor de planilhas desatualizadas. Tenha indicadores em tempo real para tomar decisões com segurança.
                </p>

                {/* Tactile Toggle */}
                <div className="inline-flex p-1 bg-slate-200/80 rounded-full mb-6 border border-slate-300/60">
                  <button
                    onClick={() => setDashboardView('traditional')}
                    className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                      dashboardView === 'traditional'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Visão Tradicional (Planilha)
                  </button>
                  <button
                    onClick={() => setDashboardView('revops')}
                    className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                      dashboardView === 'revops'
                        ? 'bg-pink-600 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Cockpit RevOps Tenno
                  </button>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="lg:col-span-7">
                <div className="p-8 rounded-[36px] bg-white border border-slate-200 shadow-xl shadow-slate-100 relative">
                  {dashboardView === 'traditional' ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs text-slate-400">
                        <span>Arquivo: relatorio_vendas_final_v4_corrigido.xlsx</span>
                        <span className="text-rose-500 font-bold">⚠️ Atualizado há 14 dias</span>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-50 font-mono text-xs text-slate-600 space-y-2">
                        <div>Linha 42: #REF! (Fórmula quebrada pelo vendedor)</div>
                        <div>Linha 88: Venda duplicada entre canal WhatsApp e Loja</div>
                        <div>Margem Líquida: Desconhecida (sem integração com ERP)</div>
                      </div>
                      <p className="text-xs text-slate-400 italic">
                        * A diretoria descobre o resultado real do mês somente no dia 10 do mês seguinte.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs">
                        <span className="text-pink-600 font-bold flex items-center gap-2">
                          <Activity className="w-4 h-4" /> Tenno RevOps Cockpit • Live
                        </span>
                        <span className="text-emerald-600 font-bold">● Sincronizado agora</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                          <span className="text-xs text-slate-500 block mb-1">Previsão de Faturamento (30d):</span>
                          <span className="text-2xl font-black text-slate-900">R$ 680.400</span>
                          <span className="text-xs text-emerald-600 block mt-1">+18.4% vs meta</span>
                        </div>
                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                          <span className="text-xs text-slate-500 block mb-1">CAC Médio Geral:</span>
                          <span className="text-2xl font-black text-slate-900">R$ 380,00</span>
                          <span className="text-xs text-emerald-600 block mt-1">LTV/CAC = 6.4x</span>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                        <span className="text-xs text-slate-500 block mb-2">Taxa de Conversão por Canal:</span>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between text-slate-700">
                            <span>Google Ads (Fundo de Funil):</span>
                            <span className="font-bold text-slate-900">28.4%</span>
                          </div>
                          <div className="flex justify-between text-slate-700">
                            <span>WhatsApp Inbound Orgânico:</span>
                            <span className="font-bold text-slate-900">41.2%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. ECOSSISTEMA DE INTEGRAÇÕES (GRID DE TECNOLOGIAS) */}
        <section className="py-24 lg:py-32 relative border-b border-slate-100">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl text-center">
            <motion.div {...fadeInUp} className="max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-pink-600 mb-3 block">
                ECOSSISTEMA HOMOLOGADO
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                Tecnologias que integramos com o Kommo CRM
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "Omie ERP",
                "Bling ERP",
                "Tiny ERP",
                "TOTVS",
                "Power BI",
                "Looker Studio",
                "Meta Ads (WABA)",
                "Google Ads",
                "Asaas / Iugu",
                "Webhooks / REST",
                "PostgreSQL / SQL",
                "Make / n8n"
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200 flex items-center justify-center font-bold text-xs sm:text-sm text-slate-700 hover:border-pink-200 hover:text-pink-600 transition-colors shadow-xs"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. FAQ */}
        <section className="py-24 lg:py-32 relative bg-slate-50/50">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-pink-600 mb-3 block">
                DÚVIDAS FREQUENTES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                Perguntas sobre Engenharia de Dados & Integrações
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

        {/* 7. BOTTOM CTA */}
        <section className="py-24 lg:py-36 relative overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 bg-pink-600/10 pointer-events-none" />
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl relative z-10 text-center">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-8">
              Conecte seus dados e tenha controle real sobre sua receita.
            </h2>
            <p className="text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Agende uma sessão com nossos engenheiros de dados para mapear as integrações necessárias na sua empresa.
            </p>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={ctaWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="h-16 px-12 rounded-full bg-pink-600 hover:bg-pink-700 text-white font-bold text-lg inline-flex items-center justify-center gap-3 shadow-2xl shadow-pink-600/30 active:scale-[0.98] transition-all"
            >
              Falar com Engenheiro de Dados
              <ArrowRight className="w-5 h-5" />
            </motion.a>
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
