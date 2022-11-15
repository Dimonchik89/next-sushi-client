/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  runtimeCaching,
  skipWaiting: true,
  buildExcludes: [/manifest.webmanifest.json$/],
});
const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ["server-sushi-ua.herokuapp.com"],
  },
});

module.exports = nextConfig;
