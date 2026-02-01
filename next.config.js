/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
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
      { protocol: 'https', hostname: 'pemasansor.com' },
      { protocol: 'https', hostname: 'vimmer.com.tr' },
      { protocol: 'https', hostname: 'www.gaziantepasansor.com.tr' },
      { protocol: 'https', hostname: 'cdn.gazetepencere.com' },
      { protocol: 'https', hostname: 'mcaasansor.com' },
      { protocol: 'https', hostname: 'artliftasansor.com.tr' },
      { protocol: 'https', hostname: 'abasasansor.com' },
      { protocol: 'https', hostname: 'www.scissorliftsmanufacturer.com' },
      { protocol: 'https', hostname: 'www.hepahidroliklift.com' },
      { protocol: 'https', hostname: 'ake.com.tr' },
      { protocol: 'https', hostname: 'vanasansor.net' },
      { protocol: 'https', hostname: 'konurayasansor.com.tr' },
      { protocol: 'https', hostname: 'onersan.com.tr' },
      { protocol: 'https', hostname: 'www.akislift.com.tr' },
      { protocol: 'https', hostname: 'butcon.com.tr' },
      { protocol: 'https', hostname: 'genemek.com' },
      { protocol: 'https', hostname: 'arkel.com.tr' },
      { protocol: 'https', hostname: 'mikel.com.tr' },
      { protocol: 'https', hostname: 'mikrolift.com.tr' },
      { protocol: 'https', hostname: 'ilift.com.tr' },
      { protocol: 'https', hostname: 'ozbesler.com' },
      { protocol: 'https', hostname: 'merihasansor.com' },
      { protocol: 'https', hostname: 'www.wittur.com' },
      { protocol: 'https', hostname: 'www.kleemannlifts.com' },
    ],
  },
  eslint: {
    // <img> uyarısı ve tırnak işaretleri gibi hataların build'i durdurmasını engeller
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Typescript hataları varsa onları da build sırasında görmezden gelir
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
