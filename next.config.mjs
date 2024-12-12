import { createMDX } from "fumadocs-mdx/next";
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

export default withMDX(config);
