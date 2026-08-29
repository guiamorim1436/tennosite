import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Solutions } from "@/components/sections/Solutions";

export const Route = createFileRoute("/solucoes/")({
  component: SolucoesPage,
  head: () => ({
    title: "Hub de Soluções em Revenue Operations & Kommo CRM | Tenno.",
    meta: [
      { title: "Hub de Soluções em Revenue Operations & Kommo CRM | Tenno." },
      {
        name: "description",
        content: "Conheça nossas soluções completas: Diagnóstico Comercial, Implementação Oficial Kommo CRM, Sustentação Contínua, Engenharia de Dados e Inteligência Artificial.",
      },
      {
        name: "keywords",
        content: "soluções kommo crm, revops brasil, consultoria de vendas b2b, automação comercial, parceiro oficial kommo"
      },
      { property: "og:title", content: "Hub de Soluções em Revenue Operations & Kommo CRM | Tenno." },
      { property: "og:description", content: "Infraestrutura de processos, CRM e inteligência para operações comerciais em crescimento." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function SolucoesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Questrial'] selection:bg-pink-100 selection:text-pink-600">
      <Header />
      <main className="pt-20">
        <Solutions />
      </main>
      
      <footer className="py-16 bg-white border-t border-slate-100 text-slate-500 text-sm">
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