import { createFileRoute, notFound, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/solucoes/$slug")({
  loader: ({ params }) => {
    const slugMap: Record<string, string> = {
      "crm": "/solucoes/crm",
      "area-crm": "/solucoes/crm",
      "suporte": "/solucoes/suporte",
      "suporte-acompanhamento": "/solucoes/suporte",
      "dados": "/solucoes/dados",
      "desenvolvimento-data": "/solucoes/dados",
      "desenvolvimento": "/solucoes/dados",
      "consultoria": "/solucoes/consultoria",
      "ia": "/solucoes/ia"
    };

    const target = slugMap[params.slug];
    if (target) {
      throw redirect({ href: target });
    }
    throw notFound();
  },
  component: () => null,
});