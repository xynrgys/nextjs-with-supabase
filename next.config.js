/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
      return [
        {
          source: "/api/:path*",
          destination:
            process.env.NODE_ENV === "development"
              ? "http://127.0.0.1:8443/api/:path*"
              : "/api/",
        },
        {
          source: "/docs",
          destination:
            process.env.NODE_ENV === "development"
              ? "http://127.0.0.1:8443/docs"
              : "/api/docs",
        },
        {
          source: "/openapi.json",
          destination:
            process.env.NODE_ENV === "development"
              ? "http://127.0.0.1:8443/openapi.json"
              : "/api/openapi.json",
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  