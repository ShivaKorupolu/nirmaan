/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  // basePath: '/admin',
  // trailingSlash: true,
  env: {
    apiUrl: "http://localhost/nirmaan/api/",
    // apiUrl: "https://api.nirmaan.org/admin-api/",
  },
};