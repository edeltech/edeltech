/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['56k-strapi.s3.eu-central-1.amazonaws.com', 'localhost']
  },
  async redirects() {
    return [
      {
        source: '/:slug',
        has: [
          {
            type: 'host',
            value: 'blog.56k.cloud',
          },
        ],
        destination: 'https://www.56k.cloud/blog/:slug',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
