/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_BACKEND: 'https://portflio-backend.onrender.com/api',
    service_id: 'service_hp943un',
    tamplate_id: 'template_i4kstfa',
    user_id: 'user_XxZvZzRWTNt9aS3yTCGLI'
  },
  concurrentFeatures: true,
  swcMinify: true,
}

module.exports = nextConfig
