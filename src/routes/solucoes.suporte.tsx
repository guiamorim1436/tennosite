import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ShieldCheck,
  RefreshCw,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Activity,
  Users,
  Award,
  ChevronDown,
  Layers,
  Sparkles,
  Search,
  Check,
  X
} from "lucide-react";

export const Route = createFileRoute("/solucoes/suporte")({
  component: SuporteSolutionPage,
  head: () => ({
    title: "Sustentação e Evolução Contínua de CRM | Tenno.",
    meta: [
      { title: "Sustentação e Evolução Contínua de CRM | Tenno." },
      {
        name: "description",
        content: "Garanta a máxima adoção e evolução do seu Kommo CRM. Auditorias mensais de processos, suporte técnico com SLA prioritário e treinamento contínuo para sua equipe.",
      },
      {
        name: "keywords",
        content: "sustentação de crm, suporte kommo crm brasil, gestão contínua de crm, treinamento equipe de vendas, auditoria de processos comerciais, revops"
      },
      { property: "og:title", content: "Sustentação e Evolução Contínua de CRM | Tenno." },
      { property: "og:description", content: "Sua esteira de vendas não para de evoluir. Squad dedicada em processos e Kommo CRM para apoiar sua diretoria e vendedores." },
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
  "https://wa.me/5511912020723?text=Vim do site, e quero saber mais sobre a Sustentação de CRM da Tenno. Meu código de atendimento é: S01 - B02";

function SuporteSolutionPage() {
  const [activeCycleTab, setActiveCycleTab] = useState<number>(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const cycleTabs = [
    {
      period: "Mês 01 • Estabilização",
      title: "Auditoria de Integridade & Adoção Plena",
      desc: "Garantir que 100% dos vendedores operam rigorosamente dentro do processo desenhado, sem atalhos ou desvios.",
      deliverables: [
        "Auditoria semanal de preenchimento de campos obrigatórios",
        "Limpeza de oportunidades duplicadas ou travadas",
        "Plantão de dúvidas individual com os executivos de vendas",
        "Ajuste fino de gatilhos e mensagens automáticas com base na reação real dos leads"
      ]
    },
    {
      period: "Mês 02 • Otimização de Gargalos",
      title: "Refinamento de Conversão por Etapa",
      desc: "Identificar em quais fases do pipeline os leads estão perdendo tração e implementar correções de cadência.",
      deliverables: [
        "Mapeamento de taxa de passagem entre etapas (MQL > SQL > Proposta > Ganho)",
        "Criação de novas regras de re-aquecimento para leads frios",
        "Auditoria de motivos de perda para alimentar a inteligência comercial",
        "Treinamento de reforço em contorno de objeções no WhatsApp"
      ]
    },
    {
      period: "Mês 03+ • Expansão & LTV",
      title: "Automações Avançadas e Novas Frentes",
      desc: "Com o processo comercial estável, expandimos para funis de pós-venda, recompra, upsell e novos canais.",
      deliverables: [
        "Estruturação de funis de indicação e parcerias",
        "Automações de NPS e coleta de feedbacks de clientes ativos",
        "Criação de réguas de cross-sell e renovação contratual",
        "Revisão trimestral de metas e capacidade do time comercial"
      ]
    }
  ];

  const faqs = [
    {
      q: "O que difere a Sustentação Tenno de um suporte comum de software?",
      a: "O suporte do software apenas responde se a ferramenta está online ou com erro no servidor. A Sustentação Tenno é consultiva e operacional: atuamos no seu processo de vendas, auditamos se os vendedores estão preenchendo os dados, corrigimos fluxos e otimizamos as taxas de conversão continuamente."
    },
    {
      q: "Se contratarmos novos vendedores, vocês fazem o treinamento?",
      a: "Sim. Criamos um processo contínuo de Onboarding Comercial para que novos contratados sejam integrados e capacitados no Kommo CRM em menos de 48 horas, mantendo a padronização do time."
    },
    {
      q: "Qual é o tempo de resposta (SLA) para chamados técnicos?",
      a: "Temos canal direto de atendimento via WhatsApp e e-mail com SLA prioritário de resposta em minutos para dúvidas operacionais e incidentes críticos de automação."
    },
    {
      q: "Minha empresa já implementou o CRM com outra agência. Podemos contratar a sustentação?",
      a: "Sim. Realizamos um diagnóstico inicial para auditar a estrutura atual, corrigir eventuais débitos técnicos e assumir a evolução contínua da sua operação."
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-pink-50 text-pink-600 border border-pink-100 mb-8">
                <RefreshCw className="w-3.5 h-3.5 text-pink-600" />
                Sustentação Estratégica & Melhoria Contínua
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-8">
                Operações de vendas não morrem na implantação. <span className="text-pink-600">Morrem no abandono.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-500 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                Acompanhamento contínuo, auditoria rigorosa de processos e evolução tecnológica para garantir que seu CRM nunca estagne e acompanhe o crescimento da sua empresa.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={ctaWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto h-16 px-10 rounded-full bg-pink-600 hover:bg-pink-700 text-white font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-pink-600/20 transition-all"
                >
                  Conhecer modelo de sustentação
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <a
                  href="#cockpit-saude"
                  className="w-full sm:w-auto h-16 px-8 rounded-full bg-slate-50 border border-slate-200 hover:bg-white text-slate-700 font-semibold text-base flex items-center justify-center transition-colors"
                >
                  Ver indicadores de auditoria
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. DORES DO ABANDONO PÓS-GO-LIVE */}
        <section className="py-24 lg:py-32 relative bg-slate-50/50 border-b border-slate-100">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <motion.div {...fadeInUp} className="max-w-3xl mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-pink-600 mb-3 block">
                O RISCO OPERACIONAL
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                O que acontece com o CRM após 90 dias sem sustentação?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-6 h-6 text-pink-600" />,
                  title: "Queda Gradual na Adoção",
                  desc: "Vendedores antigos voltam aos velhos hábitos de usar blocos de notas e mensagens sem registro no sistema."
                },
                {
                  icon: <AlertTriangle className="w-6 h-6 text-pink-600" />,
                  title: "Turnover Sem Treinamento",
                  desc: "Novos colaboradores entram na equipe e aprendem 'por cima' com colegas, gerando vícios e quebrando o padrão."
                },
                {
                  icon: <Clock className="w-6 h-6 text-pink-600" />,
                  title: "Automações Obsoletas",
                  desc: "Mudanças no produto, preços ou campanhas não são atualizadas no CRM, gerando mensagens erradas e desconexão com o marketing."
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

        {/* 3. COMPONENTE INTERATIVO: COCKPIT DE AUDITORIA & SAÚDE DO CRM */}
        <section id="cockpit-saude" className="py-24 lg:py-36 relative border-b border-slate-100">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <motion.div {...fadeInUp} className="lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-widest text-pink-600 mb-3 block">
                  CONTROLE DE QUALIDADE
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                  Auditoria de Saúde do CRM em Tempo Real
                </h2>
                <p className="text-slate-500 text-lg font-light leading-relaxed mb-8">
                  Nossa squad atua como guardiã da sua operação. Monitoramos a aderência do time, o cumprimento de SLAs e a precisão dos dados para que a liderança tenha total tranquilidade.
                </p>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Relatório mensal executivo para diretoria</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Canal direto no WhatsApp para suporte dos vendedores</span>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="lg:col-span-7">
                <div className="p-8 lg:p-10 rounded-[36px] bg-white border border-slate-200 shadow-xl shadow-slate-100 relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Activity className="w-5 h-5 text-pink-600" />
                      <span className="text-base font-bold text-slate-900">Tenno Health Index • Operação Comercial</span>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Score Geral: 98/100
                    </span>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: "Taxa de Adoção dos Vendedores", val: "97%", status: "Excelente", bar: "w-[97%] bg-emerald-500" },
                      { label: "SLA de Primeiro Contato com o Lead", val: "2.4 min", status: "Dentro da Meta", bar: "w-[92%] bg-emerald-500" },
                      { label: "Leads sem Tarefa de Follow-up", val: "0.2%", status: "Zero Gargalos", bar: "w-[98%] bg-emerald-500" },
                      { label: "Integridade de Campos Obrigatórios", val: "99.1%", status: "Auditado", bar: "w-[99%] bg-emerald-500" }
                    ].map((item, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                        <div className="flex justify-between items-center text-xs mb-2">
                          <span className="text-slate-700 font-semibold">{item.label}</span>
                          <span className="font-bold text-slate-900">{item.val} • <span className="text-emerald-600">{item.status}</span></span>
                        </div>
                        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div className={`h-full ${item.bar} rounded-full`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. MATRIZ DE RITUAIS TRIMESTRAIS (TABS) */}
        <section className="py-24 lg:py-32 relative bg-slate-50/50 border-b border-slate-100">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-pink-600 mb-3 block">
                EVOLUÇÃO CONTÍNUA
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                Como sua operação evolui trimestre a trimestre
              </h2>
            </motion.div>

            <div className="flex justify-center gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
              {cycleTabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCycleTab(idx)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all border ${
                    activeCycleTab === idx
                      ? "bg-pink-600 text-white border-pink-600 shadow-md shadow-pink-600/20"
                      : "bg-white text-slate-600 border-slate-200 hover:text-slate-900"
                  }`}
                >
                  {tab.period}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCycleTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-8 lg:p-12 rounded-[36px] bg-white border border-slate-200 shadow-xl shadow-slate-100 max-w-4xl mx-auto"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {cycleTabs[activeCycleTab].title}
                </h3>
                <p className="text-slate-500 font-light leading-relaxed mb-8">
                  {cycleTabs[activeCycleTab].desc}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {cycleTabs[activeCycleTab].deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <Check className="w-5 h-5 text-pink-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* 5. TABELA COMPARATIVA */}
        <section className="py-24 lg:py-32 relative border-b border-slate-100">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                Suporte Tradicional de Software vs. Sustentação Tenno
              </h2>
            </motion.div>

            <div className="rounded-[32px] bg-white border border-slate-200 overflow-hidden shadow-sm">
              <div className="grid grid-cols-2 p-6 border-b border-slate-100 bg-slate-50 font-bold text-sm">
                <div className="text-slate-500">Suporte Reativo do Fornecedor</div>
                <div className="text-pink-600">Sustentação Estratégica Tenno</div>
              </div>

              {[
                { trad: "Apenas responde 'como fazer' via manual", tenno: "Nossa squad executa e configura as melhorias por você" },
                { trad: "Não acompanha se a equipe está usando", tenno: "Auditorias semanais de adoção e qualidade de preenchimento" },
                { trad: "Respostas genéricas em até 48 horas", tenno: "Canal direto no WhatsApp com resposta em minutos" },
                { trad: "Zero visão sobre seus números de vendas", tenno: "Análise consultiva mensal de taxas de conversão e gargalos" }
              ].map((row, rIdx) => (
                <div key={rIdx} className="grid grid-cols-2 p-6 border-b border-slate-100 last:border-none text-sm items-center">
                  <div className="text-slate-500 flex items-start gap-3 pr-4">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{row.trad}</span>
                  </div>
                  <div className="text-slate-800 font-medium flex items-start gap-3 pl-4">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{row.tenno}</span>
                  </div>
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
                Perguntas sobre o Acompanhamento Contínuo
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
              Garanta que sua operação comercial continue crescendo com estabilidade.
            </h2>
            <p className="text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Fale com nosso time para entender o plano de sustentação ideal para o porte da sua equipe.
            </p>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={ctaWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="h-16 px-12 rounded-full bg-pink-600 hover:bg-pink-700 text-white font-bold text-lg inline-flex items-center justify-center gap-3 shadow-2xl shadow-pink-600/30 transition-all"
            >
              Falar sobre Sustentação de CRM
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
