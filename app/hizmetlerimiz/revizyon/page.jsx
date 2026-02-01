import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Phone } from 'lucide-react';

// --- BU SAYFAYA ÖZEL SEO METADATA ---
export const metadata = {
  title: 'Asansör Revizyon ve Modernizasyon | ER Asansör - Yenileme Hizmetleri',
  description: 'Eskiyen asansörlerinizi modern teknolojiyle yeniliyoruz. Kabin revizyonu, motor değişimi, güvenlik modernizasyonu ve yeşil etiket işlemleri.',
  keywords: ['asansör revizyon', 'asansör yenileme', 'asansör modernizasyon', 'asansör yeşil etiket', 'istanbul asansör revizyon fiyatları'],
  openGraph: {
    title: 'Asansör Revizyonu | Güvenli ve Modern Asansörler',
    description: 'Mevcut asansörünüzü en yeni güvenlik standartlarına ve estetik trendlere uygun hale getiriyoruz.',
  },
};

// --- SCHEMA MARKUP (REVİZYON HİZMETİ İÇİN) ---
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Asansör Revizyon ve Modernizasyon',
  provider: {
    '@type': 'LocalBusiness',
    name: 'ER Asansör',
    telephone: '+905312331711'
  },
  areaServed: {
    '@type': 'City',
    name: 'İstanbul'
  },
  description: 'Eski ve güvensiz asansörlerin A3 standartlarına uygun hale getirilmesi, kabin ve motor yenileme işlemleri.',
  offers: {
    '@type': 'Offer',
    description: 'Keşif sonrası modernizasyon teklifi.'
  }
};

const Revizyon = () => {
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
            REVİZYON (YENİLEME)
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
          {/* Mavi tonu siyah yapıldı ve kurumsal şerit eklendi */}
          <h3 className="text-2xl font-black text-black mb-6 border-l-8 border-[#fee123] pl-4 uppercase">
            Revizyon (Yenileme) Hizmeti
          </h3>
          <p className="text-gray-700 leading-relaxed font-medium">
            {/* Çeviri Koruması */}
            <span className="notranslate">ER</span>&nbsp;Asansör olarak, mevcut asansör sistemlerinizi modern teknolojiyle
            buluşturarak hem daha güvenli hem de daha estetik hale getiriyoruz.
            Eskiyen aksamların yenilenmesi, asansörünüzün performansını artırırken enerji maliyetlerinizi de düşürür.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-10">
            <div className="bg-gray-50 p-6 rounded-xl border-t-4 border-[#fee123]">
              <h4 className="text-lg font-bold text-black mb-4 uppercase">Neden Revizyon?</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                <li>Güvenlik risklerini ortadan kaldırmak</li>
                <li>Enerji verimliliğini artırmak</li>
                <li>Yönetmeliklere uygun hale getirmek</li>
                <li>Kullanıcı konforunu iyileştirmek</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border-t-4 border-black">
              <h4 className="text-lg font-bold text-black mb-4 uppercase">Kapsamda Neler Var?</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                <li>Kabin içi modernizasyon</li>
                <li>Makine dairesi ve motor yenilemeleri</li>
                <li>Emniyet sistemlerinin güncellenmesi</li>
                <li>Dijital gösterge çözümleri</li>
              </ul>
            </div>
          </div>
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
export default Revizyon;
