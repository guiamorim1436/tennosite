import { createFileRoute, notFound, Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { getSolution, solutions } from "@/lib/solutions";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/solucoes/$slug")({
  loader: ({ params }) => {
    const solution = getSolution(params.slug);
    if (!solution) throw notFound();
    return { solution };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        title: "Solução não encontrada | Tenno.",
        meta: [{ name: "robots", content: "noindex" }],
      };
    }
    const { solution } = loaderData;
    const title = `${solution.title} | Tenno.`;
    return {
      title,
      meta: [
        { name: "description", content: solution.description.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: solution.short },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: SolutionNotFound,
  component: SolutionPage,
});

function SolutionNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-40 container mx-auto px-6 lg:px-12 max-w-none text-center">
        <h1 className="text-4xl font-bold mb-6">Solução não encontrada</h1>
        <Link to="/solucoes" className="text-accent font-semibold">
          Ver todas as soluções
        </Link>
      </main>
    </div>
  );
}

function SolutionPage() {
  const { solution } = Route.useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    if (solution.slug === "consultoria") {
      navigate({ to: "/solucoes/consultoria", replace: true });
    } else if (solution.slug === "ia") {
      navigate({ to: "/solucoes/ia", replace: true });
    }
  }, [solution.slug, navigate]);

  if (solution.slug === "consultoria" || solution.slug === "ia") {
    return null;
  }

  const others = solutions.filter((s) => s.slug !== solution.slug);

  return (
    <div className="min-h-screen bg-background selection:bg-accent/30">
      <Header />
      <main className="pt-20">
        <section className="py-24 lg:py-32 border-b border-border">
          <div className="container mx-auto px-6 lg:px-12 max-w-none">
            <Link to="/solucoes" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
              ← Soluções
            </Link>
            <h1 className="mt-8 text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl leading-[1.1]">
              {solution.title}
            </h1>
            <p className="mt-8 text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {solution.description}
            </p>
            <a 
              href="https://wa.me/5511912020723?text=Vim do site e gostaria de um diagnóstico/orçamento"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 h-14 px-8 rounded-full bg-accent text-white font-bold hover:bg-accent/90 transition-all text-lg inline-flex items-center justify-center backdrop-blur-xl shadow-lg"
            >
              {solution.ctaText}
            </a>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-12 max-w-none grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-semibold mb-8">O que está incluso</h2>
              <div className="space-y-4">
                {solution.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="font-semibold">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-8">Resultados esperados</h2>
              <div className="space-y-4">
                {solution.outcomes.map((o) => (
                  <div key={o} className="p-6 rounded-3xl glass-morphism border border-border">
                    <p className="text-muted-foreground">{o}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-border">
          <div className="container mx-auto px-6 lg:px-12 max-w-none">
            <h2 className="text-2xl font-semibold mb-10">Outras soluções</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {others.map((s) => {
                if (s.slug === "consultoria") {
                  return (
                    <Link
                      key={s.slug}
                      to="/solucoes/consultoria"
                      className="group p-8 rounded-3xl glass-morphism border border-border hover:border-accent/40 transition-all"
                    >
                      <h3 className="font-semibold mb-2">{s.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{s.short}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                        Ver solução <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  );
                }
                if (s.slug === "ia") {
                  return (
                    <Link
                      key={s.slug}
                      to="/solucoes/ia"
                      className="group p-8 rounded-3xl glass-morphism border border-border hover:border-accent/40 transition-all"
                    >
                      <h3 className="font-semibold mb-2">{s.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{s.short}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                        Ver solução <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  );
                }
                return (
                  <Link
                    key={s.slug}
                    to="/solucoes/$slug"
                    params={{ slug: s.slug }}
                    className="group p-8 rounded-3xl glass-morphism border border-border hover:border-accent/40 transition-all"
                  >
                    <h3 className="font-semibold mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{s.short}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                      Ver solução <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 max-w-none text-center">
          <div className="font-['Questrial'] text-4xl font-semibold tracking-tight mb-8">
            Tenno<span className="text-accent">.</span>
          </div>
          <p className="text-muted-foreground">© 2026 Tenno. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}