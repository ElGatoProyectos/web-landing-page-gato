/** @type {import('next').NextConfig} */
const nextConfig = {
    /* output: 'export', */
    images: {
        unoptimized: true,
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
            pathname: "**",
          },
        ],
      },
};

export default nextConfig;
