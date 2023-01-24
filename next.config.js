/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {protocol:'https',hostname:"st.myideasoft.com"},
      {protocol:'https',hostname:"st2.myideasoft.com"},
      {protocol:'https',hostname:"st3.myideasoft.com"},
      {protocol:'https',hostname:"*.myideasoft.com"},
      {protocol:"https",hostname:"img-itopya.mncdn.com"},
      {protocol:"https",hostname:"pbs.twimg.com"},
      {protocol:"https",hostname:"saleous.ru"},
      {protocol:"https",hostname:"filearchive.cnews.ru"},
      {protocol:"https",hostname:"cdn.shopify.com"},

    ],
    formats: ["image/webp"]
  }
}

module.exports = nextConfig
