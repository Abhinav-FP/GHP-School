// next.config.js
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '8000', // Add the port you're using for localhost
          pathname: '/images/**', // Adjust this path if necessary
        },
      ],
    },
  }
  