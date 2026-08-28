import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Bot, Cpu, Sparkles, MessageSquare, ShieldCheck, Zap, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/solucoes/ia")({
  component: IASolutionPage,
  head: () => ({
    title: "IA Conversacional & Embarcada | Tenno.",
    meta: [
      { title: "IA Conversacional & Embarcada | Tenno." },
      {
        name: "description",
        content: "Implementação de IA Conversacional Humanóide e IA Embarcada para transformar sua operação comercial.",
      },
      { property: "og:title", content: "IA Conversacional & Embarcada | Tenno." },
      { property: "og:description", content: "Implementação de IA Conversacional Humanóide e IA Embarcada para transformar sua operação comercial." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function IASolutionPage() {
  const [chatMessage, setChatMessage] = useState("");
  const [messages, setMessages] = useState<{ role: 'bot' | 'user', text: string }[]>([
    { role: 'bot', text: 'Que bom te ver aqui, deixe-me me apresentar, sou a Donna! Fiquei curiosa em entender o que te trouxe até aqui.' }
  ]);

  const simulateChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage) return;
    
    const userMsg = chatMessage;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setChatMessage("");

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: 'Entendido. Estou analisando seus dados para identificar gargalos de conversão...' }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 overflow-x-hidden">
      <Header />
      
      <main>
        {/* Futuristic Hero Section */}
        <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-40">
          <div className="absolute inset-0 opacity-5 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/5 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
          
          <div className="container mx-auto px-6 lg:px-12 max-w-none relative z-10 text-center">
            <h1 className="text-5xl md:text-8xl font-semibold tracking-tight leading-[1] mb-8 bg-linear-to-b from-foreground to-foreground/50 bg-clip-text text-transparent">
              Inteligência que <br /> <span className="text-foreground">Escala Resultados.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
              Não é apenas automação. É cognição aplicada ao seu funil. Agentes inteligentes que aprendem, qualificam e vendem 24/7.
            </p>

            <div className="flex justify-center gap-6">
              <a 
                href="https://wa.me/5511912020723?text=Vim do site, e quero um diagnóstico/orçamento. Meu código de atendimento é: S01 - B02"
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 px-10 rounded-full bg-accent text-white font-bold hover:bg-accent/90 transition-all text-lg shadow-lg flex items-center justify-center backdrop-blur-3xl"
              >
                Conhecer soluções de IA
              </a>
            </div>
          </div>
        </section>

        {/* Humanoid Conversational AI Section */}
        <section className="py-32 relative border-t border-border">
          <div className="container mx-auto px-6 lg:px-12 max-w-none">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-linear-to-r from-accent to-purple-600 rounded-[40px] blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative glass-morphism border border-border rounded-[40px] overflow-hidden shadow-2xl">
                    {/* Chat UI Header */}
                    <div className="p-6 border-b border-border bg-muted/30 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center animate-glow overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=200&h=200" 
                          alt="Donna"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Donna</div>
                        <div className="text-xs text-accent flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Online
                        </div>
                      </div>
                    </div>
                    
                    {/* Chat Area */}
                    <div className="h-[400px] p-6 overflow-y-auto space-y-4">
                      {messages.map((m, i) => (
                        <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[80%] p-4 rounded-3xl text-sm ${
                            m.role === 'user' 
                              ? 'bg-accent text-white rounded-tr-none' 
                              : 'bg-muted border border-border rounded-tl-none text-foreground'
                          }`}>
                            {m.text}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Interactive Hint Balloon */}
                    <div className="absolute -top-24 -right-4 md:-right-16 z-20 w-72 animate-bounce-slow">
                      <div className="relative glass-morphism border border-accent/30 rounded-[32px] p-5 shadow-xl bg-background/80">
                        <div className="absolute bottom-[-10px] left-8 w-5 h-5 bg-background/80 border-b border-r border-accent/30 rotate-45" />
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0 overflow-hidden">
                            <img 
                              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=100&h=100" 
                              alt="Donna"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground">Teste a Donna</p>
                            <p className="text-xs text-muted-foreground">Clique em uma sugestão para começar:</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Tempo de resposta",
                            "Qualificar oportunidade",
                            "Integrações Kommo",
                            "Follow-up automático"
                          ].map((suggestion) => (
                            <button
                              key={suggestion}
                              type="button"
                              onClick={() => {
                              const fullMessages: Record<string, string> = {
                                "Tempo de resposta": "Quanto tempo meus leads esperam por resposta?",
                                "Qualificar oportunidade": "Como você qualifica uma oportunidade?",
                                "Integrações Kommo": "Quais integrações funcionam com o Kommo CRM?",
                                "Follow-up automático": "Meu vendedor esquece o follow-up. Você resolve?"
                              };
                              const text = fullMessages[suggestion] || "Como a Donna pode me ajudar?";
                              setMessages(prev => [...prev, { role: 'user', text }]);
                              setTimeout(() => {
                                setMessages(prev => [...prev, { role: 'bot', text: 'Entendido. Estou analisando seus dados para identificar gargalos de conversão...' }]);
                              }, 1000);
                              }}
                              className="text-xs px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 hover:bg-accent hover:text-white transition-colors"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Input Area */}
                    <form onSubmit={simulateChat} className="p-6 border-t border-border bg-muted/30 flex gap-3">
                      <input 
                        type="text" 
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        placeholder="Digite uma pergunta ou clique nas sugestões ao lado..." 
                        className="flex-1 bg-background border border-border rounded-full px-6 py-3 text-sm focus:outline-hidden focus:border-accent/50 transition-colors text-foreground"
                      />
                      <button type="submit" className="w-12 h-12 rounded-full bg-accent flex items-center justify-center hover:scale-105 transition-transform text-white">
                        <MessageSquare className="w-5 h-5" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-foreground">O que é um <span className="text-accent">Agente Conversacional?</span></h2>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                  Diferente de chatbots tradicionais baseados em árvores de decisão rígidas, um agente conversacional utiliza processamento de linguagem natural (NLP) e modelos cognitivos para compreender contexto, intenção e nuances humanas. Ele atua como um colaborador digital capaz de conduzir diálogos fluidos e produtivos.
                </p>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Experimente agora ao lado:</h3>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  Clique em uma das sugestões no balão ao lado da interface. A Donna responde como se estivesse integrada ao seu time comercial, mostrando na prática como um agente conversacional pode qualificar leads, responder dúvidas e acelerar o funil.
                </p>
                <div className="space-y-6">
                  {[
                    "Memória contextual de longo prazo",
                    "Integração nativa com Kommo CRM",
                    "Capacidade de agendamento automático",
                    "Detecção de sentimentos e urgência"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                      </div>
                      <span className="font-semibold text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Embedded AI Section */}
        <section className="py-32 bg-muted/30 relative">
          <div className="container mx-auto px-6 lg:px-12 max-w-none">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-6xl font-semibold mb-8 text-foreground">IA Embarcada</h2>
              <p className="text-xl text-muted-foreground">
                Tecnologia silenciosa que trabalha nos bastidores para garantir que nenhum dado seja ignorado e nenhuma oportunidade se perca.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Lead Scoring Preditivo",
                  desc: "Analisa o comportamento do lead em tempo real para priorizar os que têm maior chance de fechamento imediato.",
                  icon: <Zap className="w-8 h-8 text-accent" />
                },
                {
                  title: "Transcrição & Insights",
                  desc: "Analisa chamadas e mensagens para extrair dores, objeções e gerar resumos automáticos no CRM.",
                  icon: <Cpu className="w-8 h-8 text-accent" />
                },
                {
                  title: "Automação Cognitiva",
                  desc: "IA que executa tarefas complexas baseadas em gatilhos de dados, movendo o funil sem intervenção humana.",
                  icon: <ShieldCheck className="w-8 h-8 text-accent" />
                }
              ].map((feature, i) => (
                <div key={i} className="group p-10 rounded-[40px] glass-morphism border border-border hover:border-accent/40 transition-all duration-500 hover:-translate-y-2">
                  <div className="mb-8 p-4 w-16 h-16 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/95 border-none" />
          <div className="container mx-auto px-6 lg:px-12 max-w-none relative z-10 text-center">
            <h2 className="text-5xl md:text-7xl font-semibold mb-10 leading-tight text-white">
              Sua operação merece o <br /> <span className="text-accent">estado da arte.</span>
            </h2>
            <a 
              href="https://wa.me/5511912020723?text=Vim do site, e quero um diagnóstico/orçamento. Meu código de atendimento é: S01 - B02"
              target="_blank"
              rel="noopener noreferrer"
              className="h-20 px-16 rounded-full bg-accent text-white font-black hover:bg-accent/90 transition-all text-xl inline-flex items-center justify-center backdrop-blur-3xl shadow-xl"
            >
              Conhecer soluções de IA
            </a>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 max-w-none text-center">
          <div className="font-['Questrial'] text-4xl font-semibold tracking-tight mb-8">
            Tenno<span className="text-accent">.</span>
          </div>
          <p className="text-muted-foreground">© 2026 Tenno. Inteligência Comercial Aplicada.</p>
        </div>
      </footer>
    </div>
  );
}