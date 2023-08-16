/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose", // <-- add this
    serverComponentsExternalPackages: ["mongoose"], // <-- and this
  },
  images: {
    domains: [
      "i0.wp.com",
      "previews.123rf.com",
      "i.ibb.co",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
