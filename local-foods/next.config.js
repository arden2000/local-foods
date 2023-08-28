/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "maps.googleapis.com",
            },
            {
                protocol: 'https',
                hostname: "serpapi.com",
            },
        ],
    },
}

module.exports = nextConfig
