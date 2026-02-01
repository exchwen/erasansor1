import Header from './components/Header';
import Hero from './components/Hero';
import InfoTabs from './components/InfoTabs';
import Services from './components/Services';
import GeneralServices from './components/GeneralServices';
import TalepFormu from './components/talep';
import HeroWelcome from './components/HeroWelcome';
import CustomerJoin from './components/CustomerJoin';
import LogoShowcase from './components/LogoShowcase';
import Footer from './components/Footer';
import LiveChat from './components/LiveChat';
import Image from 'next/image';

// --- SEO METADATA AYARLARI ---
export const metadata = {
  title: 'ER Asansör | İstanbul Asansör Bakım, Montaj ve Revizyon',
  description: 'İstanbul ve çevresinde profesyonel asansör montajı, periyodik bakım, arıza servisi ve revizyon hizmetleri. 7/24 Teknik destek ve mühendislik çözümleri.',
  keywords: ['asansör bakımı', 'asansör montaj', 'asansör revizyon', 'istanbul asansör firmaları', 'asansör arıza servisi', 'yük asansörü', 'insan asansörü', 'sedye asansörü', 'asansör projelendirme', 'araba asansörü', 'asansör', 'lift', 'elevator'],
  alternates: {
    canonical: 'https://www.erasansor.com', // Kendi domain adresinizi yazın
  },
  openGraph: {
    title: 'ER Asansör - Asansör Bakım, Montaj ve Revizyon',
    description: 'Güvenli, estetik ve yasal yönetmeliklere uygun asansör çözümleri için hemen teklif alın.',
    url: 'https://www.erasansor.com',
    siteName: 'ER Asansör',
    locale: 'tr_TR',
    type: 'website',
  },
};

// --- SCHEMA MARKUP (GOOGLE İÇİN İŞLETME KİMLİĞİ) ---
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness', // Veya 'GeneralContractor'
  name: 'ER Asansör',
  image: 'https://www.erasansor.com/logo.png', // Logo URL'niz
  telephone: '+905312331711',
  email: 'info@erasansor.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Reşitpaşa Cad.',
    addressLocality: 'Avcılar',
    addressRegion: 'İstanbul',
    postalCode: '34310',
    addressCountry: 'TR',
  },
  url: 'https://www.erasansor.com',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    opens: '08:00',
    closes: '19:00',
  },
  priceRange: '$$',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Schema Verisini Sayfaya Gömüyoruz */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <div className="pt-[100px]">
        {/* Üst Dairesel Hizmetler */}
        <Services />

        {/* Hakkımızda Bölümü */}
        <section id="hakkimizda" className="py-16 container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3 flex justify-center">
              {/* Logo Alanı */}
              <div className="w-64 h-64 bg-black flex items-center justify-center border-4 border-yellow-500 shadow-2xl rounded-xl overflow-hidden p-8 relative">
                <Image 
                  src="/logo.png" 
                  alt="ER Asansör Kurumsal Logo - İstanbul Asansör Firması" // Alt etiketini SEO için güçlendirdik
                  fill
                  style={{ objectFit: 'contain' }}
                  className="p-8"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4 border-l-8 border-yellow-500 pl-4 uppercase">
                NEDEN <span className="notranslate">ER</span>&nbsp;ASANSÖR?
              </h2>
              <p className="mb-4 italic font-semibold text-gray-700 text-lg">
                Çünkü biz sadece asansör üretmiyoruz, güveni ve kaliteyi
                yukarı taşıyoruz.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                <span className="notranslate">ER</span>&nbsp;Asansör, mühendislik odaklı yaklaşımıyla projelerinizde
                güveni en üst seviyeye taşır. <strong>İstanbul asansör bakımı</strong> ve montajı sektöründeki yılların
                tecrübesiyle, her projeye özel çözümler sunarak güvenli,
                estetik ve uzun ömürlü asansör sistemleri üretiriz. Müşteri
                memnuniyetini her zaman ön planda tutar; montajdan bakıma,
                revizyondan servise kadar tüm süreçlerde titizlikle
                çalışırız.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="bg-gray-50 p-4 rounded border-l-4 border-yellow-500 shadow-sm font-bold">
                  Güvenlik standartlarına (EN 81-20/50) tam uyumlu.
                </div>
                <div className="bg-gray-50 p-4 rounded border-l-4 border-yellow-500 shadow-sm font-bold">
                  Alanında uzman sertifikalı teknik ekip.
                </div>
                <div className="bg-gray-50 p-4 rounded border-l-4 border-yellow-500 shadow-sm font-bold">
                  Modern, enerji tasarruflu ve yenilikçi çözümler.
                </div>
                <div className="bg-gray-50 p-4 rounded border-l-4 border-yellow-500 shadow-sm font-bold">
                  7/24 Kesintisiz teknik destek hattı.
                </div>
              </div>
            </div>
          </div>
        </section>

        <Hero />
        <InfoTabs />
        <GeneralServices />
        <TalepFormu />
        <HeroWelcome />
        <CustomerJoin />
        <LogoShowcase />
        <Footer />
        <LiveChat />
      </div>
    </main>
  );
}
