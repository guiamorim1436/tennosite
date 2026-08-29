import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { SparkleButton } from "@/components/ui/SparkleButton";
import { motion } from "framer-motion";
import {
  Users,
  Search,
  Eye,
  GitMerge,
  BarChart,
  Calendar,
  ArrowRight,
  ClipboardList,
  Target,
  Zap,
  TrendingUp,
  ShieldCheck,
  Check,
  X,
  FileText,
  Layers,
  Briefcase,
  Cpu,
  RefreshCw,
  MousePointerClick,
  MessageSquare,
  Phone,
  Clock,
  Map,
  HelpCircle,
  Lightbulb,
  AlertTriangle,
  Award,
  FolderKanban,
  Workflow,
  Database,
  Compass,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/solucoes/consultoria")({
  component: ConsultoriaPage,
  head: () => ({
    title: "Diagnóstico Estratégico da Operação Comercial | Tenno",
    meta: [
      { title: "Diagnóstico Estratégico da Operação Comercial | Tenno" },
      { name: "description", content: "Investigação estruturada da sua operação comercial. 4 reuniões, análise paralela, cliente oculto, relatório detalhado e roadmap estratégico." },
      { property: "og:title", content: "Diagnóstico Estratégico da Operação Comercial | Tenno" },
      { property: "og:description", content: "Investigação estruturada da sua operação comercial. 4 reuniões, análise paralela, cliente oculto, relatório detalhado e roadmap estratégico." },
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

const staggerContainer = {
  initial: { opacity: 1 },
  whileInView: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
  viewport: { once: true, margin: "-80px" },
};

const ctaWhatsApp =
  "https://wa.me/5511912020723?text=Vim do site, e quero um diagnóstico/orçamento. Meu código de atendimento é: S01 - B02";

function Section({
  title,
  children,
  dark = false,
  subtitle,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  dark?: boolean;
  subtitle?: string;
  className?: string;
}) {
  return (
    <section
      className={`py-28 lg:py-36 relative overflow-hidden ${
        dark ? "bg-slate-900 text-white" : "bg-white text-slate-900"
      } ${className}`}
    >
      {dark && (
        <>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-800/50 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
        </>
      )}
      {!dark && (
        <>
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-50/50 rounded-full blur-[120px] translate-y-1/3 translate-x-1/4 pointer-events-none" />
        </>
      )}

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div {...fadeInUp} className="mb-16 lg:mb-24">
          {subtitle && (
            <span className="text-pink-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              {subtitle}
            </span>
          )}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-5xl leading-[1.05]">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function Badge({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase ${
        dark
          ? "bg-slate-800 text-pink-400 border border-slate-700"
          : "bg-pink-50 text-pink-600"
      }`}
    >
      {children}
    </span>
  );
}

function CtaButton({
  children,
  large = false,
  dark = false,
}: {
  children: React.ReactNode;
  large?: boolean;
  dark?: boolean;
}) {
  return (
    <SparkleButton
      href={ctaWhatsApp}
      size={large ? "lg" : "md"}
    >
      {children}
    </SparkleButton>
  );
}

function ConsultoriaPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Questrial'] selection:bg-pink-100 selection:text-pink-600">
      <Header />

      {/* 1. HERO */}
      <section className="relative pt-44 lg:pt-56 pb-32 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-futuristic-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-pink-50 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute top-40 left-0 w-72 h-72 bg-slate-50 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.02] max-w-5xl">
              Você conhece sua operação.
              <br />
              A Tenno <span className="text-slate-400">investiga</span> sua operação.
            </h1>
            <p className="mt-10 text-xl lg:text-2xl text-slate-500 leading-relaxed max-w-3xl font-light">
              Uma investigação de alta precisão que revela o que os relatórios tradicionais não
              mostram. Mapeamos a realidade da sua empresa sob quatro perspectivas fundamentais.
            </p>

            <div className="mt-14 flex flex-col items-start gap-10">
              <CtaButton large>Realizar diagnóstico</CtaButton>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-400">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-500" />
                  <span>4 Reuniões de Coleta</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-500" />
                  <span>Investigação em Paralelo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-500" />
                  <span>Relatório + Roadmap</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. O QUE É O DIAGNÓSTICO */}
      <Section title="Um diagnóstico não é uma opinião. É uma investigação com método.">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div {...fadeInUp} className="space-y-8">
            <p className="text-xl lg:text-2xl text-slate-500 leading-relaxed font-light">
              Quem está dentro da operação possui informações que ninguém de fora possui. Mas também
              possui um viés natural: o hábito. Processos improvisados tornam-se rotina, e gargalos
              invisíveis tornam-se parte do custo operacional aceitável.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed font-light">
              O Diagnóstico Tenno traz uma visão estruturada para separar a{" "}
              <span className="text-slate-900 font-semibold">percepção subjetiva</span> da{" "}
              <span className="text-slate-900 font-semibold">evidência objetiva</span>. Cruzamos o
              que a gestão planeja, o que a equipe executa, o que os dados registram e o que o
              cliente realmente experimenta.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="p-12 lg:p-16 glass-morphism rounded-[40px] border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/5 rounded-full blur-3xl" />
            <span className="text-pink-600 font-bold text-xs uppercase tracking-widest block mb-4">
              MÉTRICA DE VALIDAÇÃO
            </span>
            <div className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Percepção <span className="text-pink-600">≠</span> Realidade
            </div>
            <p className="text-lg text-slate-500 font-light">
              Nossa investigação é desenhada para encontrar o ponto cego da gestão: onde a narrativa
              interna diverge da experiência real do cliente e do comportamento dos dados.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* 3. COMO FUNCIONA — 5 ETAPAS */}
      <Section title="As reuniões são a coleta. A investigação acontece em paralelo. O relatório transforma tudo isso em direção." dark subtitle="METODOLOGIA">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-5 gap-4 lg:gap-6"
        >
          {[
            {
              icon: <ClipboardList className="w-7 h-7" />,
              t: "COLETA",
              d: "Entrevistas estruturadas com os guardiões do negócio, mapeando intenção, metas e processos declarados.",
            },
            {
              icon: <Search className="w-7 h-7" />,
              t: "INVESTIGAÇÃO",
              d: "Análise independente de dados, fluxos, CRM e inconsistências entre o que foi dito e o que foi registrado.",
            },
            {
              icon: <Eye className="w-7 h-7" />,
              t: "EXPERIÊNCIA",
              d: "Vivência da jornada como cliente para medir a entrega real, não a entrega prometida.",
            },
            {
              icon: <GitMerge className="w-7 h-7" />,
              t: "CRUZAMENTO",
              d: "Sincronização de visões: Gestão, Equipe, Dados e Cliente. Aqui emergem os gargalos e as oportunidades.",
            },
            {
              icon: <Target className="w-7 h-7" />,
              t: "DIAGNÓSTICO",
              d: "Entrega estruturada: o relatório e o roadmap para a próxima fase do negócio.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="relative flex flex-col gap-6 p-8 lg:p-10 bg-slate-800/50 backdrop-blur-xl rounded-[32px] border border-slate-700/50 hover:border-pink-500/30 transition-all group"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center text-xs font-bold">
                0{i + 1}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-slate-700 flex items-center justify-center text-pink-500 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.t}</h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed">{item.d}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* 4. AS QUATRO REUNIÕES */}
      <Section title="Quatro encontros. Quatro camadas de profundidade." subtitle="CRONOGRAMA">
        <div className="grid lg:grid-cols-2 gap-6">
          {[
            {
              t: "REUNIÃO 01: O MODELO DE NEGÓCIO",
              d: "Mapeamento estratégico: unidade de negócio, ticket médio, metas, desafios e premissas da gestão. Entendemos como a receita é gerada e quais são as expectativas atuais.",
              obj: "Alinhar a percepção da liderança sobre objetivos, métricas e restrições do negócio.",
              q: "Como o comercial participa da geração de valor hoje?",
              icon: <Users className="w-6 h-6" />,
              items: ["Unidade de negócio e modelo de receita", "Ticket médio e ciclo de vendas", "Metas e comissionamento", "Desafios declarados pela gestão"],
            },
            {
              t: "REUNIÃO 02: A OPERAÇÃO COMERCIAL",
              d: "O funil na prática: leads, canais, qualificação, script, follow-up e motivos de perda. Abrimos a caixa preta da execução comercial, etapa por etapa.",
              obj: "Mapear a jornada real do lead e identificar onde o processo perde eficiência.",
              q: "O que acontece entre o lead chegar e a venda fechar?",
              icon: <GitMerge className="w-6 h-6" />,
              items: ["Fontes de leads e canais de aquisição", "Qualificação e distribuição", "Script e abordagem comercial", "Motivos de perda e objeções"],
            },
            {
              t: "REUNIÃO 03: GESTÃO E TECNOLOGIA",
              d: "Auditoria de ferramentas: CRM, dashboards, automações, produtividade do time e qualidade dos dados. Onde a tecnologia ajuda e onde ela atrapalha.",
              obj: "Avaliar a infraestrutura de gestão e dados que sustenta as decisões.",
              q: "A empresa tem o controle ou é controlada pela operação?",
              icon: <BarChart className="w-6 h-6" />,
              items: ["CRM: funil, campos, automações", "Dashboards e indicadores", "Gestão de pipeline e previsibilidade", "Integrações e qualidade de dados"],
            },
            {
              t: "REUNIÃO 04: APROFUNDAMENTO E VALIDAÇÃO",
              d: "Conexão de pontos soltos. Validamos as hipóteses levantadas durante a investigação paralela e aprofundamos os temas que exigem mais clareza antes da conclusão final.",
              obj: "Confirmar ou refutar hipóteses críticas antes da entrega do diagnóstico.",
              q: "Quais são as peças que ainda não se encaixam?",
              icon: <ShieldCheck className="w-6 h-6" />,
              items: ["Hipóteses levantadas na investigação", "Divergências entre áreas", "Validação com quem executa", "Confirmação de prioridades"],
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              whileHover={{ scale: 1.01 }}
              className="p-10 lg:p-12 border border-slate-100 bg-slate-50/50 rounded-[36px] flex flex-col justify-between hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-pink-600 shadow-sm mb-8 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold text-pink-600 mb-3 tracking-wider">
                  {item.t}
                </h4>
                <p className="text-lg lg:text-xl font-light text-slate-600 leading-relaxed mb-6">
                  {item.d}
                </p>
                <div className="mb-6">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                    O que investigamos
                  </span>
                  <ul className="space-y-2">
                    {item.items.map((it, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600">
                        <ChevronRight className="w-4 h-4 text-pink-500 mt-1 shrink-0" />
                        <span className="text-sm">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-auto pt-8 border-t border-slate-100">
                <div className="mb-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Objetivo Central
                  </span>
                </div>
                <p className="text-slate-900 font-semibold mb-4">{item.obj}</p>
                <div className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold text-2xl leading-none">“</span>
                  <p className="italic text-slate-500 font-light">{item.q}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 5. INVESTIGAÇÃO ENTRE REUNIÕES */}
      <Section title="Fora das reuniões, a investigação técnica acontece em paralelo." dark subtitle="BEHIND THE SCENES">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Database className="w-6 h-6" />,
              t: "Análise de Dados",
              d: "Extração e cruzamento de métricas de vendas, conversão, tempo de ciclo, ticket e churn.",
            },
            {
              icon: <FolderKanban className="w-6 h-6" />,
              t: "Auditoria de CRM",
              d: "Verificação de campos, funis, automações, lead scoring e qualidade dos registros.",
            },
            {
              icon: <Workflow className="w-6 h-6" />,
              t: "Mapeamento de Processos",
              d: "Documentação visual da jornada real do lead, com gargalos e pontos de decisão.",
            },
            {
              icon: <MousePointerClick className="w-6 h-6" />,
              t: "Análise de Conversão",
              d: "Cálculo de taxas entre etapas, identificação de vazamento e comparação com benchmarks.",
            },
            {
              icon: <MessageSquare className="w-6 h-6" />,
              t: "Amostra de Interações",
              d: "Revisão de amostras de chamadas, e-mails, WhatsApp e propostas enviadas.",
            },
            {
              icon: <Compass className="w-6 h-6" />,
              t: "Síntese Estratégica",
              d: "Conexão entre todos os achados para formar hipóteses validadas e priorizadas.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              className="p-8 bg-slate-800/40 rounded-[24px] border border-slate-700/50 hover:border-pink-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center text-pink-500 mb-5">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{item.t}</h4>
              <p className="text-sm text-slate-400 font-light leading-relaxed">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 6. CLIENTE OCULTO */}
      <Section title="A melhor forma de entender a jornada é vivê-la por dentro.">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp} className="space-y-6">
            <p className="text-xl lg:text-2xl text-slate-500 leading-relaxed font-light">
              O cliente oculto não é um teste de qualidade. É uma investigação da experiência
              comercial como ela realmente acontece: desde o primeiro contato até a proposta ou
              objeção final.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed font-light">
              Muitas empresas descrevem um processo idealizado. Nós registramos o processo vivido:
              velocidade de resposta, clareza da comunicação, qualidade do atendimento, precisão da
              proposta e sensação geral de quem compra.
            </p>
          </motion.div>

          <div className="grid gap-6">
            <motion.div {...fadeInUp} className="p-8 rounded-[28px] border border-slate-100 bg-slate-50/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center text-slate-600">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900">Processo Interno</h4>
              </div>
              <p className="text-slate-500 font-light">
                "O lead entra, é qualificado, recebe uma proposta em 24h e fechamos em 3 dias."
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="p-8 rounded-[28px] border border-pink-200 bg-pink-50/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-pink-600 flex items-center justify-center text-white">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900">Experiência Real</h4>
              </div>
              <p className="text-slate-600 font-light">
                "Esperei 3 dias por uma resposta genérica, a proposta não endereçou minha dúvida e
                ninguém me ligou depois."
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* 7. PERSPECTIVAS DE ANÁLISE */}
      <Section title="Quatro perspectivas. Um único ponto de convergência." dark subtitle="ANÁLISE">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { t: "GESTÃO", d: "A Intenção Estratégica", i: "O processo deveria funcionar assim.", icon: <Target className="w-6 h-6" /> },
            { t: "EQUIPE", d: "A Execução Tática", i: "No dia a dia, fazemos desta forma.", icon: <Users className="w-6 h-6" /> },
            { t: "DADOS", d: "A Evidência Histórica", i: "Os números mostram este comportamento.", icon: <BarChart className="w-6 h-6" /> },
            { t: "CLIENTE", d: "A Entrega Percebida", i: "Foi assim que a experiência aconteceu.", icon: <Eye className="w-6 h-6" /> },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              className="p-10 bg-slate-800 rounded-[32px] border border-slate-700 flex flex-col h-full relative group hover:border-pink-500/30 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-700/50 flex items-center justify-center text-pink-500 mb-6">
                {item.icon}
              </div>
              <h4 className="font-bold text-white text-xl mb-2">{item.t}</h4>
              <p className="text-slate-400 font-light mb-8 text-sm">{item.d}</p>
              <div className="mt-auto pt-6 border-t border-slate-700/50">
                <div className="italic text-pink-400 text-sm group-hover:text-pink-300 transition-colors">
                  "{item.i}"
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeInUp}
          className="mt-20 p-14 lg:p-20 glass-morphism-dark rounded-[48px] border border-slate-700 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600/5 rounded-full blur-[100px]" />
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Onde as quatro perspectivas se cruzam, nasce o Diagnóstico Tenno.
          </h3>
          <p className="text-xl font-light text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Quando elas divergem, encontramos os{" "}
            <span className="text-pink-500 font-semibold">gargalos invisíveis</span>. Quando elas
            convergem, encontramos as{" "}
            <span className="text-pink-500 font-semibold">oportunidades de escala</span>.
          </p>
        </motion.div>
      </Section>

      {/* 8. CRUZAMENTO: DIVERGÊNCIAS VS PROBLEMAS */}
      <Section title="Nem toda divergência é um problema. Nem todo problema é uma divergência.">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div {...fadeInUp} className="p-10 lg:p-12 rounded-[36px] border border-slate-100 bg-slate-50/50">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Divergências que encontramos</h3>
            <ul className="space-y-4">
              {[
                "Gestão acredita no ciclo de 3 dias; dados mostram 11.",
                "Equipe diz qualificar todos; cliente oculto não foi contactado.",
                "CRM registra 80% de conversão; amostra real indica 34%.",
                "Processo documentado difere da execução no dia a dia.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 shrink-0" />
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeInUp} className="p-10 lg:p-12 rounded-[36px] border border-slate-100 bg-slate-50/50">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Como transformamos em ação</h3>
            <ul className="space-y-4">
              {[
                "Cada divergência vira uma hipótese testável.",
                "Priorizamos pelo impacto na receita e pela viabilidade de correção.",
                "Cada ação recebe um dono, um prazo e um indicador de sucesso.",
                "O roadmap organiza o que deve ser feito agora, depois e no futuro.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <Check className="w-5 h-5 text-pink-500 mt-0.5 shrink-0" />
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* 9. DIAGNÓSTICO FINAL — ESTRUTURA DO RELATÓRIO */}
      <Section title="O relatório final não é uma descrição. É um instrumento de decisão." dark subtitle="ENTREGA">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { t: "FORÇAS", d: "O que a operação já faz bem e pode ser aproveitado como alavanca.", icon: <Award className="w-6 h-6" /> },
            { t: "FRAQUEZAS", d: "Pontos que reduzem a performance, mas que estão sob controle interno.", icon: <AlertTriangle className="w-6 h-6" /> },
            { t: "GARGALOS", d: "Restrições que limitam escala, velocidade ou previsibilidade.", icon: <Workflow className="w-6 h-6" /> },
            { t: "OPORTUNIDADES", d: "Espaços de melhoria com retorno rápido e baixo risco de execução.", icon: <Lightbulb className="w-6 h-6" /> },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              className="p-8 bg-slate-800/40 rounded-[28px] border border-slate-700/50 hover:border-pink-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center text-pink-500 mb-5">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{item.t}</h4>
              <p className="text-sm text-slate-400 font-light leading-relaxed">{item.d}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeInUp}
          className="mt-16 p-10 lg:p-14 rounded-[36px] border border-slate-700 bg-slate-800/30"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">O que compõe o relatório</h3>
              <ul className="space-y-4">
                {[
                  "Resumo executivo com os principais achados",
                  "Mapeamento da jornada comercial atual",
                  "Análise das quatro perspectivas (Gestão, Equipe, Dados, Cliente)",
                  "Matriz de prioridades: o que impacta receita agora",
                  "Roadmap de ações com dono, prazo e indicador",
                  "Recomendações de investimento e tecnologia",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 font-light">
                    <FileText className="w-5 h-5 text-pink-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center">
              <div className="p-10 glass-morphism-dark rounded-[32px] border border-slate-700 w-full">
                <p className="text-xl text-slate-200 font-light leading-relaxed">
                  "O objetivo não é apenas apontar o que está errado. É dar à liderança a clareza
                  para decidir onde investir, o que corrigir e o que escalar com segurança."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* 10. ONDE INVESTIR */}
      <Section title="O diagnóstico aponta exatamente onde aplicar esforço e recurso.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { t: "Pessoas", d: "Capacitação, estrutura do time, comissionamento e cultura comercial.", icon: <Users className="w-6 h-6" /> },
            { t: "Processos", d: "Padronização da jornada, qualificação, follow-up e gestão de objeções.", icon: <Workflow className="w-6 h-6" /> },
            { t: "Gestão", d: "Indicadores, rituais de acompanhamento, previsibilidade e decisão.", icon: <Target className="w-6 h-6" /> },
            { t: "Tecnologia", d: "CRM, dashboards, automações e integrações que suportam escala.", icon: <Cpu className="w-6 h-6" /> },
            { t: "Automação", d: "Tarefas repetitivas que devem ser delegadas a sistemas.", icon: <RefreshCw className="w-6 h-6" /> },
            { t: "Aquisição", d: "Canais, volume de leads e eficiência do topo do funil.", icon: <TrendingUp className="w-6 h-6" /> },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              whileHover={{ y: -6 }}
              className="p-8 rounded-[28px] border border-slate-100 bg-white hover:shadow-xl hover:shadow-slate-200/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-pink-600 mb-5 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{item.t}</h4>
              <p className="text-sm text-slate-500 font-light leading-relaxed">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 11. O RELATÓRIO — ALTA DENSIDADE VISUAL */}
      <Section title="Um documento desenhado para ser usado, não arquivado." dark subtitle="O RELATÓRIO">
        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div
            {...fadeInUp}
            className="lg:col-span-2 p-10 lg:p-14 rounded-[40px] border border-slate-700 bg-slate-800/30 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600/5 rounded-full blur-[100px]" />
            <h3 className="text-3xl font-bold text-white mb-6 relative z-10">
              Visão completa em poucas páginas
            </h3>
            <p className="text-lg text-slate-400 font-light leading-relaxed mb-10 relative z-10">
              O relatório final é estruturado para que um executivo consiga entender a situação em
              15 minutos e um operacional consiga executar a partir dele. Cada seção conecta
              diagnóstico, prioridade e ação.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 relative z-10">
              {[
                "Diagnóstico sintetizado em 4 blocos",
                "Jornada do lead mapeada visualmente",
                "Matriz de prioridades por impacto",
                "Roadmap com fases claras",
                "KPIs e indicadores de acompanhamento",
                "Sugestões de investimento e ferramentas",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-pink-600/20 flex items-center justify-center text-pink-500 text-sm font-bold">
                    {i + 1}
                  </div>
                  <span className="text-slate-300 font-light">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="p-10 rounded-[40px] border border-pink-500/30 bg-pink-600/10">
            <div className="w-14 h-14 rounded-2xl bg-pink-600 flex items-center justify-center text-white mb-6">
              <FileText className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Formato de entrega</h3>
            <p className="text-slate-300 font-light leading-relaxed mb-6">
              PDF executivo + apresentação em vídeo-chamada de 60 minutos para alinhamento e
              esclarecimentos.
            </p>
            <div className="flex items-center gap-3 text-pink-300 text-sm font-semibold">
              <Clock className="w-4 h-4" />
              <span>Entrega em até 15 dias úteis após a última reunião</span>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 12. ROADMAP */}
      <Section title="Direção clara para cada fase da evolução." subtitle="ROADMAP">
        <div className="relative mt-4 px-4">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0" />

          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {[
              { t: "AGORA", d: "Decisões críticas e correções urgentes com impacto imediato na receita.", c: "bg-pink-600 text-white", icon: <Zap /> },
              { t: "PRÓXIMO", d: "Estruturação de processos, CRM e tecnologia para dar base à escala.", c: "bg-slate-900 text-white", icon: <Target /> },
              { t: "EVOLUÇÃO", d: "Otimização de performance, conversão e produtividade do time.", c: "bg-slate-100 text-slate-900", icon: <TrendingUp /> },
              { t: "ESCALA", d: "Expansão baseada em previsibilidade, com automação e aquisição.", c: "bg-white border-2 border-slate-900 text-slate-900", icon: <ArrowRight /> },
            ].map((step, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                whileHover={{ y: -10 }}
                className={`p-10 rounded-[36px] flex flex-col gap-6 shadow-xl ${step.c}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                  {step.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold mb-3">{step.t}</div>
                  <div className="font-light opacity-80 leading-relaxed text-sm">{step.d}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 13. O QUE VOCÊ LEVA */}
      <Section title="Você não leva apenas um relatório. Leva um mapa e um ponto de partida." dark>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div {...fadeInUp} className="p-10 lg:p-12 rounded-[36px] border border-slate-700 bg-slate-800/30">
            <div className="w-14 h-14 rounded-2xl bg-pink-600/20 flex items-center justify-center text-pink-500 mb-6">
              <Map className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">O Mapa</h3>
            <p className="text-slate-400 font-light leading-relaxed mb-6">
              Uma visão clara de onde sua operação está hoje: forças, fraquezas, gargalos,
              oportunidades e o que cada uma dessas dimensões significa em dinheiro.
            </p>
            <ul className="space-y-3">
              {[
                "Diagnóstico sintetizado e visual",
                "Jornada real do cliente e do lead",
                "Matriz de prioridades por impacto",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 font-light text-sm">
                  <Check className="w-4 h-4 text-pink-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeInUp} className="p-10 lg:p-12 rounded-[36px] border border-slate-700 bg-slate-800/30">
            <div className="w-14 h-14 rounded-2xl bg-pink-600/20 flex items-center justify-center text-pink-500 mb-6">
              <HelpCircle className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">As Perguntas</h3>
            <p className="text-slate-400 font-light leading-relaxed mb-6">
              O diagnóstico também deixa claro quais perguntas ainda precisam ser respondidas — e
              por que. Isso evita decisões baseadas em dados incompletos.
            </p>
            <ul className="space-y-3">
              {[
                "Hipóteses que precisam ser validadas",
                "Dados que ainda não estão disponíveis",
                "Decisões que dependem de escolhas estratégicas",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 font-light text-sm">
                  <Check className="w-4 h-4 text-pink-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* 14. RESUMO DO PROCESSO — TIMELINE */}
      <Section title="Dezessete dias úteis. Uma operação vista de verdade." subtitle="RESUMO">
        <div className="max-w-4xl mx-auto">
          {[
            { week: "SEMANA 1", t: "Coleta e Imersão", d: "Reuniões 1 e 2 + início da investigação técnica e cliente oculto." },
            { week: "SEMANA 2", t: "Análise e Validação", d: "Reuniões 3 e 4 + cruzamento de dados e validação de hipóteses." },
            { week: "SEMANA 3", t: "Síntese e Entrega", d: "Finalização do relatório, apresentação e alinhamento do roadmap." },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              className="relative pl-12 pb-12 last:pb-0 border-l border-slate-200"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-pink-600 border-4 border-white shadow-md" />
              <div className="text-xs font-bold text-pink-600 uppercase tracking-widest mb-2">
                {item.week}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.t}</h3>
              <p className="text-lg text-slate-500 font-light">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 15. PARA QUEM É / PARA QUEM NÃO É */}
      <Section title="Para quem é, e para quem ainda não é." dark>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div {...fadeInUp} className="p-10 lg:p-12 rounded-[36px] border border-slate-700 bg-slate-800/30">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-pink-600 flex items-center justify-center text-white">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Para quem é</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Empresas que já vendem e querem escalar com previsibilidade",
                "Gestões que sentem que a operação pode render mais, mas não sabem onde começar",
                "Times comerciais que cresceram rápido e precisam de estrutura",
                "Empresas que querem dados para decidir sobre tecnologia, CRM e automação",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 font-light">
                  <Check className="w-5 h-5 text-pink-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeInUp} className="p-10 lg:p-12 rounded-[36px] border border-slate-700 bg-slate-800/30">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-slate-700 flex items-center justify-center text-slate-300">
                <X className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Para quem não é</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Negócios que ainda não vendem e não têm operação para investigar",
                "Empresas que buscam apenas um curso de vendas genérico",
                "Quem quer uma solução pronta sem envolvimento da gestão",
                "Quem não está disposto a confrontar dados com a percepção interna",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400 font-light">
                  <X className="w-5 h-5 text-slate-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* 16. CTA FINAL */}
      <section className="py-32 lg:py-44 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-futuristic-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-pink-50 rounded-full blur-[180px] opacity-60 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp}>
            <Badge>Investimento Estratégico</Badge>
            <h2 className="mt-8 text-4xl md:text-6xl lg:text-7xl font-bold mb-12 tracking-tight max-w-5xl mx-auto leading-[1.05]">
              Sua próxima decisão comercial deve ser baseada em{" "}
              <span className="text-pink-600">dados</span>, não em intuição.
            </h2>
            <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto mb-12">
              Agende uma conversa de 15 minutos para entender se o Diagnóstico Tenno faz sentido
              para o momento da sua operação.
            </p>
            <CtaButton large>Realizar diagnóstico</CtaButton>
            <p className="mt-8 text-slate-400 font-light italic">
              Vagas limitadas para análise estratégica mensal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 17. FOOTER */}
      <footer className="py-20 border-t border-slate-100 bg-slate-50/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="font-bold text-3xl">
              Tenno<span className="text-pink-600">.</span>
            </div>
            <div className="text-slate-400 text-sm">
              © 2026 Tenno Revenue System. Todos os direitos reservados.
            </div>
            <div className="flex gap-8 text-sm font-semibold text-slate-400">
              <a href="#" className="hover:text-pink-600 transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-pink-600 transition-colors">
                Termos
              </a>
              <a href="mailto:contato@tennohub.com.br" className="hover:text-pink-600 transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
