import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Solutions } from "@/components/sections/Solutions";

export const Route = createFileRoute("/solucoes/")({
  component: SolucoesPage,
  head: () => ({
    title: "Soluções | Tenno.",
    meta: [
      { title: "Soluções | Tenno." },
      {
        name: "description",
        content: "Conheça nossas soluções em CRM, automação e consultoria estratégica.",
      },
      { property: "og:title", content: "Soluções | Tenno." },
      { property: "og:description", content: "Conheça nossas soluções em CRM, automação e consultoria estratégica." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function SolucoesPage() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent/30">
      <Header />
      <main className="pt-20">
        <Solutions />
      </main>
      
      <footer className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 max-w-none text-center">
           <div className="font-['Questrial'] text-4xl font-black tracking-tight mb-8">
             Tenno<span className="text-accent">.</span>
           </div>
           <p className="text-muted-foreground mb-8">© 2026 Tenno. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}