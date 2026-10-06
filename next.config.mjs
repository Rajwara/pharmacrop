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
      {
        source: "/login",
        destination: "/portals",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
