/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/commercial-partnerships",
        destination: "/partnerships",
        permanent: true,
      },
      {
        source: "/gallery",
        destination: "/our-facilities",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
