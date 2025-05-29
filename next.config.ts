/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio/',
  // Agregar esto:
  // experimental: {
  //   alias: {
  //     '@': './',
  //   }
  // }
}

module.exports = nextConfig