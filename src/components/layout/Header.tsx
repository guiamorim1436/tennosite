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
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between max-w-7xl">
        <Link to="/" className="font-['Questrial'] text-3xl font-bold tracking-tighter text-white hover:opacity-90 transition-opacity">
          Tenno<span className="text-pink-500">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-base font-semibold text-slate-300 hover:text-pink-400 transition-colors">
            Início
          </Link>

          <div className="relative" ref={wrapperRef}>
            <button
              type="button"
              aria-expanded={open}
              aria-haspopup="true"
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-1.5 text-base font-semibold text-slate-300 hover:text-pink-400 transition-colors"
            >
              Soluções
              <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180 text-pink-500" : ""}`} />
            </button>

            {open && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[420px] rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl p-3 animate-in fade-in slide-in-from-top-2">
                {solutions.map((s) => (
                  <Link
                    key={s.slug}
                    to={s.route}
                    onClick={() => setOpen(false)}
                    className="group flex items-start gap-3 p-4 rounded-2xl hover:bg-slate-800/80 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white group-hover:text-pink-400 transition-colors">{s.title}</div>
                      <div className="text-xs text-slate-400 mt-1 font-light leading-relaxed">{s.short}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 mt-1 text-pink-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
                <Link
                  to="/solucoes"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 mt-1 text-xs font-bold text-pink-400 hover:underline border-t border-slate-800"
                >
                  Ver hub completo de soluções →
                </Link>
              </div>
            )}
          </div>

          <a 
            href="https://wa.me/5511912020723?text=Vim do site, e quero um diagnóstico/orçamento. Meu código de atendimento é: S01 - B02"
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 px-6 rounded-full bg-pink-600 hover:bg-pink-700 text-white text-sm font-bold transition-all flex items-center justify-center shadow-lg shadow-pink-600/25"
          >
            Realizar um diagnóstico
          </a>
        </nav>

        <button className="md:hidden p-2 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
        </button>
      </div>
    </header>
  );
}