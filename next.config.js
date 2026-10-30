/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Project screenshots use 90 for sharper text; everything else uses the default 75
    qualities: [75, 90],
  },
};

module.exports = nextConfig;
