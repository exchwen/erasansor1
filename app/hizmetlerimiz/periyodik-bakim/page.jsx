import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Phone } from 'lucide-react';

// --- BU SAYFAYA ÖZEL SEO METADATA ---
export const metadata = {
  title: 'Periyodik Asansör Bakımı | ER Asansör - Güvenli ve Yasal',
  description: 'İstanbul geneli periyodik asansör bakım hizmetleri. Aylık bakım, güvenlik kontrolleri, yağlama ve temizlik işlemleri ile asansörünüzü koruyun.',
  keywords: ['periyodik asansör bakımı', 'asansör bakım ücretleri', 'aylık asansör bakımı', 'asansör yeşil etiket', 'istanbul asansör bakım servisi'],
  openGraph: {
    title: 'Periyodik Asansör Bakımı | Güvenliğiniz İçin Düzenli Kontrol',
    description: 'Yasal zorunluluklara uygun, garantili ve profesyonel periyodik asansör bakım hizmeti.',
  },
};

// --- SCHEMA MARKUP (BAKIM HİZMETİ İÇİN) ---
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Periyodik Asansör Bakımı',
  provider: {
    '@type': 'LocalBusiness',
    name: 'ER Asansör',
    telephone: '+905312331711'
  },
  areaServed: {
    '@type': 'City',
    name: 'İstanbul'
  },
  description: 'Asansörlerin güvenli çalışması için gerekli aylık periyodik bakım, yağlama ve teknik kontrol hizmetleri.',
  offers: {
    '@type': 'Offer',
    description: 'Bina tipine ve asansör sayısına göre özel fiyatlandırma.'
  }
};

const PeriyodikBakim = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Schema Verisi */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      
      {/* --- BAŞLIK ALANI --- */}
      {/* Mobilde pt-32, masaüstünde pt-48 */}
      <section className="pt-32 md:pt-48 pb-10 md:pb-16 bg-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-black text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
            PERİYODİK BAKIM
          </h1>
          <p className="text-gray-500 text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] mb-6">
            PROFESYONEL MÜHENDİSLİK ÇÖZÜMLERİMİZ
          </p>
          <div className="w-16 h-1 bg-[#fee123] mx-auto shadow-[0_2px_10px_rgba(254,225,35,0.3)]"></div>
        </div>
      </section>

      {/* İÇERİK SEKSİYONU */}
      <section className="py-12 md:py-20 container mx-auto px-6 max-w-4xl space-y-12">
        <div className="prose prose-base md:prose-lg max-w-none">
          {/* Mavi tonu siyah yapıldı */}
          <h3 className="text-2xl font-black text-black mb-6 border-l-8 border-[#fee123] pl-4 uppercase">
            Periyodik Bakım Hizmetleri
          </h3>
          <p className="text-gray-700 leading-relaxed font-medium">
            Asansörler, günlük yaşamın vazgeçilmez bir parçası haline gelmiştir.
            Bu nedenle, güvenli ve kesintisiz bir kullanım için düzenli bakım
            şarttır. {/* Çeviri Koruması */}
            <span className="notranslate">ER</span>&nbsp;Asansör olarak, asansörlerinizin uzun ömürlü, güvenli ve
            yasal yönetmeliklere uygun şekilde çalışmasını sağlamak amacıyla
            profesyonel periyodik bakım hizmetleri sunuyoruz.
          </p>

          <h4 className="text-xl font-bold text-black mt-8 mb-4 uppercase">
            Neden Periyodik Bakım?
          </h4>
          <ul className="list-disc pl-5 space-y-3 text-gray-600">
            <li>Kullanıcı güvenliği için hayati öneme sahiptir.</li>
            <li>Arızaların erken tespiti ile büyük masrafların önüne geçilir.</li>
            <li>Yönetmeliklere ve yasal zorunluluklara tam uyum sağlanır.</li>
            <li>Asansörün verimli ve uzun ömürlü çalışması garanti altına alınır.</li>
          </ul>

          <h4 className="text-xl font-bold text-black mt-8 mb-4 uppercase">Neler Yapıyoruz?</h4>
          <p className="text-gray-700 leading-relaxed">
            Her bakım sürecinde; mekanik ve elektronik aksamların genel
            kontrolü, halatlar, fren sistemi, kapılar ve kabin donanımlarının
            test edilmesi, yağlama, temizlik ve ayar işlemleri gibi işlemleri
            özenle gerçekleştiriyoruz.
          </p>

          {/* Çeviri Koruması */}
          <h4 className="text-xl font-bold text-black mt-8 mb-4 uppercase">
            Neden <span className="notranslate">ER</span>&nbsp;Asansör?
          </h4>
          <ul className="list-disc pl-5 space-y-3 text-gray-600">
            <li>Uzman ve deneyimli teknik kadro</li>
            <li>Orijinal yedek parça ve kaliteli malzeme kullanımı</li>
            <li>Hızlı servis, zamanında müdahale</li>
            <li>Şeffaf hizmet anlayışı ve uygun fiyat politikası</li>
          </ul>
        </div>

        {/* WHATSAPP BUTONU */}
        <div className="flex justify-center pt-6 md:pt-10">
          <a
            href="https://wa.me/905312331711"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25d366] text-white px-8 md:px-12 py-4 rounded-full font-black flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-2xl active:scale-95 w-full sm:w-auto text-sm md:text-base"
          >
            <Phone size={24} /> WHATSAPP BİLGİ HATTI
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default PeriyodikBakim;
