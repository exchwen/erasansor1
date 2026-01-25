/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' }, // Unsplash hatasını çözer
      { protocol: 'https', hostname: 'vimmer.com.tr' },      // Vimmer hatasını çözer
      { protocol: 'https', hostname: 'belge.alrafidainschools.com' },
      { protocol: 'https', hostname: 'media.licdn.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
      { protocol: 'https', hostname: 'avatars.mds.yandex.net' },
      { protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com' },
      { protocol: 'https', hostname: 'encrypted-tbn1.gstatic.com' },
      { protocol: 'https', hostname: 'encrypted-tbn2.gstatic.com' },
      { protocol: 'https', hostname: 'encrypted-tbn3.gstatic.com' },
      { protocol: 'https', hostname: 'www.freelogovectors.net' },
      { protocol: 'https', hostname: 'www.butaworld.com' },
      { protocol: 'https', hostname: 'www.hermanoshotel.com' },
      { protocol: 'https', hostname: 'ams3.digitaloceanspaces.com' },
      // Başka sitelerden görsel eklersen hostname'ini buraya eklemeyi unutma
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
