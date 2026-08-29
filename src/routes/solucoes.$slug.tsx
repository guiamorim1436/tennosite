import { createFileRoute, notFound, Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { getSolution, solutions } from "@/lib/solutions";

export const Route = createFileRoute("/solucoes/$slug")({
  loader: ({ params }) => {
    const slugMap: Record<string, string> = {
      "crm": "crm",
      "area-crm": "crm",
      "suporte": "suporte",
      "suporte-acompanhamento": "suporte",
      "dados": "dados",
      "desenvolvimento-data": "dados",
      "desenvolvimento": "dados",
      "consultoria": "consultoria",
      "ia": "ia"
    };

    const target = slugMap[params.slug];
    const solution = target ? getSolution(target) : getSolution(params.slug);
    if (!solution) throw notFound();
    return { solution, targetSlug: target || params.slug };
  },
  component: SolutionRedirectPage,
});

function SolutionRedirectPage() {
  const { solution, targetSlug } = Route.useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    if (targetSlug === "consultoria") {
      navigate({ to: "/solucoes/consultoria", replace: true });
    } else if (targetSlug === "crm") {
      navigate({ to: "/solucoes/crm", replace: true });
    } else if (targetSlug === "suporte") {
      navigate({ to: "/solucoes/suporte", replace: true });
    } else if (targetSlug === "dados") {
      navigate({ to: "/solucoes/dados", replace: true });
    } else if (targetSlug === "ia") {
      navigate({ to: "/solucoes/ia", replace: true });
    }
  }, [targetSlug, navigate]);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">
      Redirecionando para a solução...
    </div>
  );
}