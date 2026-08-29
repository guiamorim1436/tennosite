import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Award, Zap, Database, RefreshCw, Bot, Target } from "lucide-react";
import { solutions } from "@/lib/solutions";

export function Solutions() {
  const getIcon = (slug: string) => {
    switch (slug) {
      case "consultoria":
        return <Target className="w-6 h-6 text-pink-600" />;
      case "crm":
        return <Award className="w-6 h-6 text-pink-600" />;
      case "suporte":
        return <RefreshCw className="w-6 h-6 text-pink-600" />;
      case "dados":
        return <Database className="w-6 h-6 text-pink-600" />;
      case "ia":
        return <Bot className="w-6 h-6 text-pink-600" />;
      default:
        return <Zap className="w-6 h-6 text-pink-600" />;
    }
  };

  return (
    <section id="solutions" className="py-24 lg:py-36 bg-white text-slate-900 relative overflow-hidden">
      {/* Subtle Ambient Refraction Blobs */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-pink-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-slate-100/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="mb-20 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-pink-600 mb-3 block">
            SUITE DE REVENUE OPERATIONS
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Nossas Soluções Especializadas
          </h1>
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            Combinamos engenharia de processos (Six Sigma), infraestrutura de CRM (Kommo Oficial) e inteligência artificial para construir máquinas previsíveis de crescimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <Link
              key={solution.slug}
              to={solution.route}
              className="group p-8 lg:p-10 rounded-[36px] glass-card glass-card-hover flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs flex items-center justify-center mb-8 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                  {getIcon(solution.slug)}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-pink-600 transition-colors">
                  {solution.title}
                </h2>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-8">
                  {solution.description}
                </p>

                <div className="space-y-3 mb-8">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200/60 flex items-center justify-between text-sm font-bold text-pink-600 group-hover:text-pink-700">
                <span>{solution.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}