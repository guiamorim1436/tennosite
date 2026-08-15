import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/lib/solutions";

export function Solutions() {
  return (
    <section id="solutions" className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12 max-w-none">
        <div className="mb-20 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossas Soluções</h1>
          <p className="text-xl text-muted-foreground">
            Combinamos processos rigorosos e tecnologia de ponta para criar operações de receita previsíveis e escaláveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution) => {
            if (solution.slug === "consultoria") {
              return (
                <Link
                  key={solution.slug}
                  to="/solucoes/consultoria"
                  className="group p-10 rounded-[40px] bg-secondary/20 border border-border hover:border-accent/40 transition-all block"
                >
                  <h2 className="text-2xl font-bold mb-4">{solution.title}</h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">{solution.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-8">
                    {solution.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-accent">
                    Ver solução <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            }
            if (solution.slug === "ia") {
              return (
                <Link
                  key={solution.slug}
                  to="/solucoes/ia"
                  className="group p-10 rounded-[40px] bg-secondary/20 border border-border hover:border-accent/40 transition-all block"
                >
                  <h2 className="text-2xl font-bold mb-4">{solution.title}</h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">{solution.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-8">
                    {solution.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-accent">
                    Ver solução <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            }
            return (
              <Link
                key={solution.slug}
                to="/solucoes/$slug"
                params={{ slug: solution.slug }}
                className="group p-10 rounded-[40px] bg-secondary/20 border border-border hover:border-accent/40 transition-all block"
              >
                <h2 className="text-2xl font-bold mb-4">{solution.title}</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">{solution.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-8">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-accent">
                  Ver solução <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}