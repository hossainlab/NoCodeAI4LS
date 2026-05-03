/** @type {import('next').NextConfig} */
const isProd = process.env.GITHUB_ACTIONS === 'true';
const basePath = isProd ? '/NoCodeAI4LS' : '';

const nextConfig = {
  output: 'export',
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
