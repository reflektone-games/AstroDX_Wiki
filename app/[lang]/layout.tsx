import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter } from "next/font/google";
import { defineI18nUI } from "fumadocs-ui/i18n";
import { i18n } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
});

const { provider } = defineI18nUI(i18n, {
  translations: {
    en: {
      displayName: "English",
    },
    cn: {
      displayName: "简体中文",
      search: "搜索关键词",
      chooseLanguage: "更改语言",
      chooseTheme: "更改主题",
      editOnGithub: "在GitHub上编辑此页",
      lastUpdate: "最后更新于",
      nextPage: "下一页",
      previousPage: "上一页",
      searchNoResult: "无搜索结果",
      toc: "目录",
    },
    tw: {
      displayName: "繁體中文",
    },
    vn: {
      displayName: "Vietnamese",
    },
    jp: {
      displayName: "Japanese",
    },
    es: {
      displayName: "Español",
    },
  },
});

export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}) {
  const lang = (await params).lang;

  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider i18n={provider(lang)}>{children}</RootProvider>
      </body>
    </html>
  );
}
