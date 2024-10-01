// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'ghp-school-backend.vercel.app',
        port: '', // Leave empty if not using a specific port
        pathname: '/images/**', // Adjust this path if necessary
      },
      {
        protocol: 'https', // If your backend supports HTTPS
        hostname: 'ghp-school-backend.vercel.app',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};
