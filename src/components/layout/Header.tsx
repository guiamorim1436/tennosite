import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, ArrowRight } from "lucide-react";
import { solutions } from "@/lib/solutions";

export function Header() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between max-w-none">
        <Link to="/" className="font-['Questrial'] text-3xl font-semibold tracking-tighter text-foreground hover:opacity-90 transition-opacity">
          Tenno<span className="text-accent">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-base font-semibold text-foreground hover:text-accent transition-colors">
            Início
          </Link>

          <div className="relative" ref={wrapperRef}>
            <button
              type="button"
              aria-expanded={open}
              aria-haspopup="true"
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-1.5 text-base font-semibold text-foreground hover:text-accent transition-colors"
            >
              Soluções
              <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>

            {open && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[420px] rounded-3xl border border-border glass-morphism shadow-2xl p-3 animate-in fade-in slide-in-from-top-2">
                {solutions.map((s) => {
                  if (s.slug === "consultoria") {
                    return (
                      <Link
                        key={s.slug}
                        to="/solucoes/consultoria"
                        onClick={() => setOpen(false)}
                        className="group flex items-start gap-3 p-4 rounded-2xl hover:bg-secondary/40 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-foreground">{s.title}</div>
                          <div className="text-xs text-muted-foreground mt-1">{s.short}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 mt-1 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    );
                  }
                  if (s.slug === "ia") {
                    return (
                      <Link
                        key={s.slug}
                        to="/solucoes/ia"
                        onClick={() => setOpen(false)}
                        className="group flex items-start gap-3 p-4 rounded-2xl hover:bg-secondary/40 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-foreground">{s.title}</div>
                          <div className="text-xs text-muted-foreground mt-1">{s.short}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 mt-1 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    );
                  }
                  return (
                    <Link
                      key={s.slug}
                      to="/solucoes/$slug"
                      params={{ slug: s.slug }}
                      onClick={() => setOpen(false)}
                      className="group flex items-start gap-3 p-4 rounded-2xl hover:bg-secondary/40 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-foreground">{s.title}</div>
                        <div className="text-xs text-muted-foreground mt-1">{s.short}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 mt-1 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  );
                })}
                <Link
                  to="/solucoes"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 mt-1 text-xs font-semibold text-accent hover:underline border-t border-border/50"
                >
                  Ver todas as soluções
                </Link>
              </div>
            )}
          </div>

          <a 
            href="https://wa.me/5511912020723?text=Vim do site e gostaria de um diagnóstico/orçamento"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 px-6 rounded-full bg-accent text-white text-sm font-bold hover:bg-accent/90 transition-all flex items-center justify-center shadow-md backdrop-blur-2xl"
          >
            Realizar um diagnóstico
          </a>
        </nav>

        <button className="md:hidden p-2 text-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
        </button>
      </div>
    </header>
  );
}