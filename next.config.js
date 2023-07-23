/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.dummyjson.com"],
    unoptimized: true,
  },
  i18n: {
    locales: ["en-US", "fr", "nl-NL"],
    defaultLocale: "en-US",
  },
  trailingSlash: true,
};

module.exports = nextConfig;
