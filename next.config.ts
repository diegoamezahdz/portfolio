/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/portfolio', // Reemplaza con el nombre de tu repo
  assetPrefix: '/portfolio/', // Reemplaza con el nombre de tu repo
}

module.exports = nextConfig