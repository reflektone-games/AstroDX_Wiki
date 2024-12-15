import "./../global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { I18nProvider } from "fumadocs-ui/i18n";

const inter = Inter({
  subsets: ["latin"],
});

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const lang = (await params).lang;
  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <I18nProvider
          locale={lang}
          locales={[
            {
              name: "English",
              locale: "en",
            },
            {
              name: "Chinese",
              locale: "cn",
            },
            {
              name: "Vietnamese",
              locale: "vn",
            },
          ]}
        >
          <RootProvider>
            <DocsLayout tree={source.pageTree[lang]} {...baseOptions}>
              {children}
            </DocsLayout>
          </RootProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
