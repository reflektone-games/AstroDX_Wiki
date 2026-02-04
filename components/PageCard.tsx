"use client";

import { source } from "@/lib/source";
import { useParams } from "fumadocs-core/framework";
import { Card } from "fumadocs-ui/components/card";

export function PageCard({ slug }: { slug: string }) {
  const params = useParams();
  const lang = params.lang as string;
  const page = source.getPage(slug.split("/"), lang);

  if (!page) return null;
  return (
    <Card title={page.data.title} href={slug}>
      {page.data.description}
    </Card>
  );
}
