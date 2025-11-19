import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'search.pstatic.net', //테스트용 주소
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: process.env.NEXT_PUBLIC_API_URL_BASE + '/api/v1/:path*',
      },
      {
        source: '/api/v2/:path*',
        destination: process.env.NEXT_PUBLIC_API_URL_BASE + '/api/v2/:path*',
      },
    ]
  },
}

export default nextConfig
