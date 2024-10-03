// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000', // Use the correct port for localhost
        pathname: '/images/**', // Adjust this path if necessary
      },
      {
        protocol: 'http',
        hostname: 'ghp-school-backend.vercel.app',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'ghp-school-backend.vercel.app',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};
