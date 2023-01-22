/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [{protocol:'https',hostname:"st.myideasoft.com"},{protocol:'https',hostname:"st2.myideasoft.com"},{protocol:'https',hostname:"st3.myideasoft.com"},{protocol:'https',hostname:"*.myideasoft.com"},{protocol:"https",hostname:"img-itopya.mncdn.com"}],
    formats: ["image/webp"]
  }
}

module.exports = nextConfig
