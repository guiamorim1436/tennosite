import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SparkleButton } from "@/components/ui/SparkleButton";
import {
  Bot,
  Zap,
  Sparkles,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Cpu,
  MessageSquare,
  ChevronDown,
  Terminal,
  Activity,
  Check,
  X,
  Workflow
} from "lucide-react";

export const Route = createFileRoute("/solucoes/ia")({
  component: IaSolutionPage,
  head: () => ({
    title: "IA Comercial e Agentes de WhatsApp para Vendas | Tenno.",
    meta: [
      { title: "IA Comercial e Agentes de WhatsApp para Vendas | Tenno." },
      {
        name: "description",
        content: "Qualifique 100% dos leads 24/7 e agende reuniões automaticamente com IA integrada ao Kommo CRM e WhatsApp. Reduza seu tempo de resposta para menos de 15 segundos.",
      },
      {
        name: "keywords",
        content: "agente de ia para whatsapp, ia para qualificação de leads, automação de vendas whatsapp ia, ia integrada ao kommo, sdr inteligência artificial, revops ia"
      },
      { property: "og:title", content: "IA Comercial e Agentes de WhatsApp para Vendas | Tenno." },
      { property: "og:description", content: "Não é apenas um chatbot. É um agente cognitivo treinado nas regras do seu negócio para triar, qualificar e vender 24 horas por dia." },
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
  "https://wa.me/5511912020723?text=Vim do site, e quero entender como aplicar IA Comercial no meu WhatsApp e Kommo CRM. Meu código de atendimento é: S01 - B02";

function IaSolutionPage() {
  const [activeSimulation, setActiveSimulation] = useState<number>(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const simulations = [
    {
      title: "Cenário 1: Orçamento B2B (Alto Ticket)",
      input: "Boa noite! Sou diretor da LogTrans e preciso cotar uma solução comercial para nossa frota de 80 caminhões. Tem alguém atendendo agora?",
      extracted: {
        intencao: "Solicitação_Cotacao_Corporativa",
        perfil_empresa: "Logística / 80 Veículos (Alto Porte)",
        ticket_estimado: "Enterprise (Tier 1)",
        urgencia: "Alta",
        acao_executada_kommo: "Lead criado no Kommo CRM ➔ Tag 'Enterprise_Logística' ➔ Atribuído com alerta prioritário para Diretor Comercial ➔ Resposta com agendamento direto enviada em 6 segundos."
      },
      responseAudio: "Olá! Perfeito, atendemos operações logísticas desse porte. Para adiantar sua proposta personalizada, qual seria o melhor horário amanhã para nosso especialista técnico apresentar os dados?"
    },
    {
      title: "Cenário 2: Dúvida Técnica & Objeção",
      input: "Vocês integram com o ERP Totvs Protheus ou eu teria que trocar de sistema financeiro?",
      extracted: {
        intencao: "Validacao_Tecnica_Integracao",
        sistema_citado: "Totvs_Protheus",
        status_compatibilidade: "100% Homologado via Webhook",
        acao_executada_kommo: "Consulta automática à base de regras (RAG) ➔ Campo 'ERP_Atual' preenchido como 'Totvs Protheus' ➔ Alerta para pré-venda técnica."
      },
      responseAudio: "Sim! Temos conectores nativos e webhooks customizados para o Totvs Protheus, mantendo todo seu faturamento e conciliação bancária 100% sincronizados sem necessidade de troca."
    },
    {
      title: "Cenário 3: Lead Frio (Domingo 22h)",
      input: "Vi o anúncio de vocês no Instagram agora. Vocês atendem clínicas odontológicas pequenas?",
      extracted: {
        intencao: "Qualificacao_Segmento_Saude",
        porte: "Pequeno Porte / Saúde",
        canal: "Instagram_Ads_Direcionado",
        acao_executada_kommo: "Lead cadastrado no pipeline 'Pequenas Clínicas' ➔ Disparo de vídeo case da OdontoCompany ➔ Pergunta de qualificação de nº de dentistas."
      },
      responseAudio: "Olá! Sim, temos um modelo específico desenhado para clínicas odontológicas com captação e confirmação de consultas no WhatsApp. Quantos dentistas atuam na sua unidade hoje?"
    }
  ];

  const faqs = [
    {
      q: "A IA corre o risco de 'alucinar' ou prometer descontos indevidos?",
      a: "Não. Nossos agentes operam sob uma arquitetura rigorosa de RAG (Retrieval-Augmented Generation) com guardrails de segurança. A IA responde estritamente com base nos documentos, tabelas de preço e limites autorizados pela sua empresa. Se um lead perguntar algo fora do escopo, o agente transfere educadamente para um vendedor humano."
    },
    {
      q: "O WhatsApp da empresa pode ser bloqueado pela Meta?",
      a: "Trabalhamos exclusivamente com a API Oficial do WhatsApp (Meta WABA), em conformidade total com os termos de uso. Isso elimina qualquer risco de banimento comum em ferramentas piratas."
    },
    {
      q: "A IA substitui a equipe comercial de vendas?",
      a: "Não. A IA substitui o trabalho burocrático e repetitivo (triagem inicial, perguntas de qualificação, preenchimento de CRM e agendamento de reuniões). O fechamento e a negociação estratégica continuam com seus melhores executivos humanos — agora muito mais produtivos."
    },
    {
      q: "Como a IA interage diretamente com o Kommo CRM?",
      a: "A IA lê e grava dados em tempo real no Kommo CRM: cria contatos, preenche campos personalizados, adiciona tags, transcreve o resumo da conversa em notas internas e move o card de etapa no funil automaticamente."
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
                <span>Agentes Cognitivos & IA Embarcada no Kommo CRM</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-8">
                Sua empresa não perde vendas porque o produto é ruim. <span className="text-pink-600">Perde porque demora horas para responder.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-500 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                Agentes de Inteligência Artificial treinados nas regras do seu negócio para atender, qualificar leads com critérios BANT e agendar reuniões no WhatsApp em menos de 15 segundos — 24 horas por dia.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <SparkleButton
                  href={ctaWhatsApp}
                  size="lg"
                >
                  Conhecer Agentes de IA
                </SparkleButton>

                <a
                  href="#simulador-ia"
                  className="w-full sm:w-auto h-16 px-8 rounded-full bg-slate-50 border border-slate-200 hover:bg-white text-slate-700 font-semibold text-base flex items-center justify-center transition-colors shadow-xs"
                >
                  Testar simulador ao vivo
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. COMPARATIVO: BOT AMADOR VS AGENTE COGNITIVO TENNO */}
        <section className="py-24 lg:py-32 relative bg-slate-50/50 border-b border-slate-100">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-pink-600 mb-3 block">
                EVOLUÇÃO TECNOLÓGICA
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                Chatbot Genérico vs. Agente Comercial Tenno
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Lado A: Bot Amador */}
              <motion.div {...fadeInUp} className="p-8 lg:p-10 rounded-[32px] bg-white border border-rose-200 shadow-xs relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600">
                    <X className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Chatbots Tradicionais de Fluxo Fixo</h3>
                </div>

                <ul className="space-y-4 text-sm text-slate-500 font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>Forçam o cliente a digitar números em menus engessados ("Digite 1 para vendas").</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>Travam completamente quando o cliente envia áudios ou frases fora do script.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>Não entendem contexto nem conseguem contornar dúvidas sobre preço e diferenciais.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>Criam cards vazios e desorganizados no CRM sem nenhuma triagem real.</span>
                  </li>
                </ul>
              </motion.div>

              {/* Lado B: Agente Tenno */}
              <motion.div {...fadeInUp} className="p-8 lg:p-10 rounded-[32px] bg-white border border-emerald-300 shadow-xl shadow-slate-100 relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Agentes Cognitivos Tenno Engine</h3>
                </div>

                <ul className="space-y-4 text-sm text-slate-700 font-light">
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Processam áudios, textos informais e gírias com fluidez e naturalidade humana.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Qualificam orçamento, porte da empresa e timing de compra com metodologia BANT.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Consultam a base de conhecimento restrita da empresa para sanar dúvidas sem alucinações.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Agendam reuniões na agenda do vendedor e atualizam campos no Kommo CRM em tempo real.</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. COMPONENTE INTERATIVO: SIMULADOR DE EXTRAÇÃO DE PARÂMETROS AO VIVO */}
        <section id="simulador-ia" className="py-24 lg:py-36 relative border-b border-slate-100">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-pink-600 mb-3 block">
                SIMULADOR DE PARSER COGNITIVO
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                Como a IA Processa Mensagens em Tempo Real
              </h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                Selecione um dos cenários reais abaixo para ver como o motor de IA da Tenno extrai os parâmetros comerciais de uma mensagem informal e orquestra a ação no Kommo CRM.
              </p>
            </motion.div>

            {/* Segmented Control */}
            <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto p-1.5 bg-slate-100/80 rounded-2xl max-w-2xl mx-auto mb-8 border border-slate-200/60 no-scrollbar">
              {simulations.map((sim, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSimulation(idx)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    activeSimulation === idx
                      ? "bg-white text-slate-900 shadow-sm border border-slate-200/80"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {sim.title.split(':')[0]}
                </button>
              ))}
            </div>

            {/* Live Terminal & Parser Card */}
            <AnimatePresence mode="wait">
              {(() => {
                const currentSim = simulations[activeSimulation];
                return (
                  <motion.div
                    key={activeSimulation}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 lg:p-12 rounded-[36px] bg-white border border-slate-200 shadow-xl shadow-slate-100 relative"
                  >
                    <div className="grid lg:grid-cols-12 gap-8 items-start">
                      {/* Left: WhatsApp Input & Audio Mock */}
                      <div className="lg:col-span-6 space-y-6">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                            Mensagem Enviada pelo Lead (WhatsApp):
                          </span>
                          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-800 leading-relaxed">
                            "{currentSim.input}"
                          </div>
                        </div>

                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-pink-600 block mb-2">
                            Resposta Gerada pelo Agente Tenno (Tempo: 4s):
                          </span>
                          <div className="p-4 rounded-2xl bg-pink-50 border border-pink-200 text-sm text-pink-900 leading-relaxed font-medium">
                            "{currentSim.responseAudio}"
                          </div>
                        </div>
                      </div>

                      {/* Right: Extracted Parameters & Kommo Action */}
                      <div className="lg:col-span-6">
                        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 shadow-inner">
                          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 text-xs">
                            <span className="text-slate-300 font-bold flex items-center gap-2">
                              <Terminal className="w-4 h-4 text-pink-500" />
                              Extração Estruturada & Gatilhos no CRM
                            </span>
                            <span className="text-emerald-400 font-mono text-[11px]">Sync Live</span>
                          </div>

                          <div className="space-y-2.5 text-xs">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Intenção Identificada:</span>
                              <span className="font-mono text-pink-400 font-bold">{currentSim.extracted.intencao}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Perfil / Segmento:</span>
                              <span className="text-slate-200">{currentSim.extracted.perfil_empresa || currentSim.extracted.porte || currentSim.extracted.sistema_citado}</span>
                            </div>
                            <div className="pt-3 border-t border-slate-800">
                              <span className="text-slate-300 font-bold block mb-1.5">Ação Automática Disparada no Kommo:</span>
                              <p className="text-slate-200 font-light leading-relaxed">
                                {currentSim.extracted.acao_executada_kommo}
                              </p>
                            </div>
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

        {/* 4. OS 3 MÓDULOS DE IA EMBARCADA */}
        <section className="py-24 lg:py-32 relative bg-slate-50/50 border-b border-slate-100">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-pink-600 mb-3 block">
                SUITE DE RECURSOS
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                Inteligência Comercial em 3 Dimensões
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <MessageSquare className="w-6 h-6 text-pink-600" />,
                  title: "SDR de WhatsApp 24/7",
                  desc: "Agentes que respondem em 15 segundos, qualificam dores e agendam reuniões diretamente na agenda do vendedor sem intervenção humana."
                },
                {
                  icon: <Cpu className="w-6 h-6 text-pink-600" />,
                  title: "Lead Scoring Preditivo",
                  desc: "Algoritmos que analisam o comportamento do lead em tempo real para priorizar os contatos que possuem maior probabilidade estatística de compra."
                },
                {
                  icon: <Zap className="w-6 h-6 text-pink-600" />,
                  title: "Transcrição & Resumo de Áudios",
                  desc: "IA que escuta áudios e chamadas do vendedor, extrai as objeções centrais e gera anotações executivas resumidas no card do Kommo CRM."
                }
              ].map((mod, idx) => (
                <motion.div
                  key={idx}
                  {...fadeInUp}
                  className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-pink-200 hover:shadow-xl hover:shadow-slate-200/40 transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center mb-6">
                    {mod.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{mod.title}</h3>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">{mod.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. FAQ */}
        <section className="py-24 lg:py-32 relative bg-slate-50/50">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-pink-600 mb-3 block">
                DÚVIDAS FREQUENTES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                Perguntas sobre Inteligência Artificial Comercial
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

        {/* 6. BOTTOM CTA */}
        <section className="py-24 lg:py-36 relative overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 bg-pink-600/10 pointer-events-none" />
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl relative z-10 text-center">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-8">
              Transforme seu WhatsApp em uma máquina cognitiva de vendas.
            </h2>
            <p className="text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Agende uma demonstração prática para ver um agente de IA operando sob as regras do seu negócio.
            </p>
            <div className="flex justify-center">
              <SparkleButton
                href={ctaWhatsApp}
                size="lg"
              >
                Simular Agente de IA para minha empresa
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