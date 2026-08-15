import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
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
  Check
} from "lucide-react";

export const Route = createFileRoute("/solucoes/consultoria")({
  component: ConsultoriaPage,
  head: () => ({
    title: "Diagnóstico Estratégico da Operação Comercial | Tenno",
    meta: [
      { name: "description", content: "Investigação estruturada da sua operação comercial. 4 reuniões, análise paralela, cliente oculto, relatório detalhado e roadmap estratégico." },
    ],
  }),
});

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

function Section({ title, children, dark = false, subtitle }: { title: string; children: React.ReactNode; dark?: boolean; subtitle?: string }) {
  return (
    <section className={`py-32 relative overflow-hidden ${dark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
      {dark && (
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      )}
      {!dark && (
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      )}
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div {...fadeInUp} className="mb-20">
          {subtitle && <span className="text-pink-600 font-bold tracking-widest uppercase text-sm mb-4 block">{subtitle}</span>}
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl leading-[1.1]">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function ConsultoriaPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Questrial'] selection:bg-pink-100 selection:text-pink-600">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        {/* Background visual elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pink-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-60" />
        <div className="absolute top-40 left-0 w-64 h-64 bg-slate-50 rounded-full blur-[80px] -translate-x-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-pink-600 font-bold tracking-widest uppercase text-sm px-4 py-1 bg-pink-50 rounded-full inline-block mb-8">
              TENNO REVENUE SYSTEM™
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[1.02] max-w-5xl">
              Descubra como sua operação <span className="text-slate-400">realmente</span> funciona.
            </h1>
            <p className="mt-12 text-2xl text-slate-500 leading-relaxed max-w-3xl font-light">
              Uma investigação de alta precisão que revela o que os relatórios tradicionais não mostram. Mapeamos a realidade da sua empresa sob quatro perspectivas fundamentais.
            </p>
            
            <div className="mt-16 flex flex-col items-start gap-8">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/5511912020723?text=Vim do site e gostaria de um diagnóstico/orçamento"
                target="_blank"
                rel="noopener noreferrer"
                className="h-20 px-16 rounded-full bg-pink-600 text-white font-bold hover:bg-pink-700 transition-all text-xl flex items-center justify-center shadow-2xl hover:shadow-pink-600/20"
              >
                Realizar diagnóstico estratégico
              </motion.a>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-400">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-500" />
                  <span>4 Reuniões Coletas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-500" />
                  <span>Investigação Paralela</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-500" />
                  <span>Roadmap Estratégico</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conceitual Section */}
      <Section title="A diferença entre o que você acredita e o que o dado revela.">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div {...fadeInUp} className="text-xl text-slate-500 leading-relaxed font-light space-y-6">
            <p>
              Quem está dentro da operação possui informações que ninguém de fora possui. Mas também possui um viés natural: o hábito. Processos improvisados tornam-se rotina, e gargalos invisíveis tornam-se parte do custo operacional aceitável.
            </p>
            <p>
              O Diagnóstico Tenno traz uma visão estruturada para separar a <span className="text-slate-900 font-semibold">percepção subjetiva</span> da <span className="text-slate-900 font-semibold">evidência objetiva</span>.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-16 glass-morphism rounded-[48px] border border-slate-100 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-full blur-3xl" />
            <span className="text-pink-600 font-bold text-xs uppercase tracking-widest block mb-4">MÉTRICA DE VALIDAÇÃO</span>
            <div className="text-7xl font-bold text-slate-900 mb-6">Percepção <span className="text-pink-600">≠</span> Realidade</div>
            <p className="text-lg text-slate-500 font-light">
              Nossa investigação é desenhada para encontrar o ponto cego da gestão.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Como funciona - Visual Process */}
      <Section title="O Ciclo Investigativo" dark subtitle="METODOLOGIA">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-5 gap-6"
        >
          {[
            { icon: <ClipboardList />, t: "COLETA", d: "Entrevistas estruturadas com os guardiões do negócio e processos." },
            { icon: <Search />, t: "INVESTIGAÇÃO", d: "Análise independente de dados, fluxos e inconsistências." },
            { icon: <Eye />, t: "EXPERIÊNCIA", d: "Vivência da jornada como cliente para medir a entrega real." },
            { icon: <GitMerge />, t: "CRUZAMENTO", d: "Sincronização de visões: Gestão, Equipe, Dados e Cliente." },
            { icon: <Target />, t: "DIAGNÓSTICO", d: "Entrega estruturada: o roadmap para a próxima fase do negócio." }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="flex flex-col gap-6 p-10 bg-slate-800/50 backdrop-blur-xl rounded-[32px] border border-slate-700/50 hover:border-pink-500/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-700 flex items-center justify-center text-pink-500 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 mb-2">ETAPA 0{i+1}</div>
                <h3 className="text-xl font-bold mb-3">{item.t}</h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed">{item.d}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* As 4 Reuniões */}
      <Section title="A Profundidade dos Encontros" subtitle="O CRONOGRAMA">
        <div className="grid lg:grid-cols-2 gap-8">
          {[
            { 
              t: "REUNIÃO 01: O MODELO DE NEGÓCIO", 
              d: "Mapeamento estratégico: unidade de negócio, tickets, metas e desafios. Entendemos como a receita é gerada e quais são as expectativas da gestão.",
              q: "Como o comercial participa da geração de valor hoje?",
              icon: <Users className="w-6 h-6" />
            },
            { 
              t: "REUNIÃO 02: A OPERAÇÃO COMERCIAL", 
              d: "O funil na prática: leads, canais, qualificação, script e motivos de perda. Abrimos a caixa preta da execução comercial.",
              q: "O que acontece entre o lead chegar e a venda fechar?",
              icon: <GitMerge className="w-6 h-6" />
            },
            { 
              t: "REUNIÃO 03: GESTÃO E TECNOLOGIA", 
              d: "Auditoria de ferramentas: CRM, dashboards, automações e produtividade do time. Onde a tecnologia ajuda e onde ela atrapalha.",
              q: "A empresa tem o controle ou é controlada pela operação?",
              icon: <BarChart className="w-6 h-6" />
            },
            { 
              t: "REUNIÃO 04: APROFUNDAMENTO E VALIDAÇÃO", 
              d: "Conexão de pontos soltos. Validamos as hipóteses levantadas durante a investigação paralela antes da conclusão final.",
              q: "Quais são as peças que ainda não se encaixam?",
              icon: <ShieldCheck className="w-6 h-6" />
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              {...fadeInUp}
              whileHover={{ scale: 1.01 }}
              className="p-12 border border-slate-100 bg-slate-50/50 rounded-[40px] flex flex-col justify-between hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-pink-600 shadow-sm mb-8 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold text-pink-600 mb-4 tracking-wider">{item.t}</h4>
                <p className="text-xl font-light text-slate-600 leading-relaxed mb-8">{item.d}</p>
              </div>
              <div className="pt-8 border-t border-slate-100 flex items-start gap-4">
                <span className="text-pink-600 font-bold text-2xl leading-none">“</span>
                <p className="italic text-slate-900 font-semibold">{item.q}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Cruzamento das Perspectivas */}
      <Section title="Visão 360° da Realidade" dark subtitle="ANÁLISE">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { t: "GESTÃO", d: "A Intenção Estratégica", i: "O processo deveria funcionar assim.", icon: "🎯" },
            { t: "EQUIPE", d: "A Execução Tática", i: "No dia a dia, fazemos desta forma.", icon: "👥" },
            { t: "DADOS", d: "A Evidência Histórica", i: "Os números mostram este comportamento.", icon: "📉" },
            { t: "CLIENTE", d: "A Entrega Percebida", i: "Foi assim que a experiência aconteceu.", icon: "⭐️" }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              {...fadeInUp}
              className="p-10 bg-slate-800 rounded-[32px] border border-slate-700 flex flex-col h-full relative group"
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h4 className="font-bold text-white text-xl mb-2">{item.t}</h4>
              <p className="text-slate-400 font-light mb-8 text-sm">{item.d}</p>
              <div className="mt-auto pt-6 border-t border-slate-700/50">
                <div className="italic text-pink-400 text-sm group-hover:text-pink-300 transition-colors">"{item.i}"</div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-16 glass-morphism-dark rounded-[48px] border border-slate-700 text-center relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600/5 rounded-full blur-[100px]" />
          <h3 className="text-4xl font-bold text-white mb-6">O Diagnóstico não é uma opinião.</h3>
          <p className="text-xl font-light text-slate-400 max-w-3xl mx-auto leading-relaxed">
            É a conexão dessas quatro visões. Quando elas divergem, encontramos os <span className="text-pink-500 font-semibold">gargalos invisíveis</span>. Quando elas convergem, encontramos as <span className="text-pink-500 font-semibold">oportunidades de escala</span>.
          </p>
        </motion.div>
      </Section>

      {/* Roadmap Estratégico Visual */}
      <Section title="O Caminho para a Evolução" subtitle="DELIVERY">
        <div className="relative mt-12 px-6">
          {/* Vertical/Horizontal line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
          
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {[
              { t: "AGORA", d: "Decisões críticas e correções urgentes.", c: "bg-pink-600 text-white", icon: <Zap /> },
              { t: "PRÓXIMO", d: "Estruturação de processos e tecnologia.", c: "bg-slate-900 text-white", icon: <Target /> },
              { t: "EVOLUÇÃO", d: "Otimização de performance e conversão.", c: "bg-slate-100 text-slate-900", icon: <TrendingUp /> },
              { t: "ESCALA", d: "Expansão baseada em previsibilidade.", c: "bg-white border-2 border-slate-900 text-slate-900", icon: <ArrowRight /> }
            ].map((step, i) => (
              <motion.div 
                key={i} 
                {...fadeInUp}
                whileHover={{ y: -10 }}
                className={`p-10 rounded-[40px] flex flex-col gap-8 shadow-xl ${step.c}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                  {step.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold mb-4">{step.t}</div>
                  <div className="font-light opacity-80 leading-relaxed">{step.d}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Final */}
      <section className="py-40 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-50 rounded-full blur-[150px] opacity-60 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp}>
            <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight max-w-4xl mx-auto leading-[1.05]">
              Sua próxima decisão comercial deve ser baseada em <span className="text-pink-600">dados</span>, não em intuição.
            </h2>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/5511912020723?text=Vim do site e gostaria de um diagnóstico/orçamento"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-20 px-16 rounded-full bg-pink-600 text-white font-bold hover:bg-pink-700 transition-all text-xl items-center justify-center shadow-2xl hover:shadow-pink-600/40"
            >
              SOLICITAR DIAGNÓSTICO
            </motion.a>
            <p className="mt-8 text-slate-400 font-light italic">Vagas limitadas para análise estratégica mensal.</p>
          </motion.div>
        </div>
      </section>

      <footer className="py-24 border-t border-slate-100 bg-slate-50/30">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-bold text-3xl">Tenno<span className="text-pink-600">.</span></div>
          <div className="text-slate-400 text-sm">© 2026 Tenno Revenue System. Todos os direitos reservados.</div>
          <div className="flex gap-8 text-sm font-semibold text-slate-400">
            <a href="#" className="hover:text-pink-600 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-pink-600 transition-colors">Termos</a>
            <a href="mailto:contato@tennohub.com.br" className="hover:text-pink-600 transition-colors">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
