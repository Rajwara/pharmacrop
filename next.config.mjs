/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/commercial-partnerships",
        destination: "/partnerships",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
