/** @type {import('next').NextConfig} */
module.exports = {
  output: "standalone",
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
    incomingRequests: true,
  },
};
