/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: "/",
          destination: "/auth",
          permanent: true, // Set to true for a 308 redirect; false for a 307 redirect
        },
      ];
    },
    images: { domains: ['static.vecteezy.com']},
    publicRuntimeConfig: {
      publicWebHost: process.env.NEXT_PUBLIC_HOST || '',
      publicAnyAPIIO: process.env.NEXT_PUBLIC_ANY_API_IO || '',
      publicAPIURL: process.env.NEXT_PUBLIC_API_URL || '',
    }
  };
  
  export default nextConfig;