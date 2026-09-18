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
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
