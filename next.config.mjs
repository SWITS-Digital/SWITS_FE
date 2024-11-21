/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/auth",
        permanent: true, // Set to true for a 308 redirect; false for a 307 redirect
      },
    ];
  },
  images: {
    // domains: ["static.vecteezy.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
