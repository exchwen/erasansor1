import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Phone } from 'lucide-react';

// --- BU SAYFAYA ÖZEL SEO METADATA ---
export const metadata = {
  title: 'Asansör Montajı ve Kurulumu | ER Asansör - Projeye Özel Çözümler',
  description: 'İstanbul genelinde yeni binalar için TSE standartlarına uygun, güvenli ve garantili asansör montaj hizmeti. Ücretsiz keşif ve projelendirme için arayın.',
  keywords: ['asansör montajı', 'asansör kurulum', 'yeni bina asansör', 'istanbul asansör montaj fiyatları', 'tse uyumlu asansör'],
  openGraph: {
    title: 'Asansör Montajı | Güvenli ve Estetik Kurulum',
    description: 'Binanızın değerini artıran, güvenli ve sessiz çalışan asansör montaj çözümleri.',
  },
};

// --- SCHEMA MARKUP (MONTAJ HİZMETİ İÇİN) ---
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Asansör Montaj ve Kurulum Hizmeti',
  provider: {
    '@type': 'LocalBusiness',
    name: 'ER Asansör',
    telephone: '+905312331711'
  },
  areaServed: {
    '@type': 'City',
    name: 'İstanbul'
  },
  description: 'Yeni binalar ve mevcut yapılar için yasal mevzuata uygun anahtar teslim asansör montajı.',
  offers: {
    '@type': 'Offer',
    description: 'Ücretsiz keşif sonrası proje bazlı fiyatlandırma.'
  }
};

const AsansorMontaj = () => {
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
            ASANSÖR MONTAJ
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
          <h3 className="text-2xl font-black text-black mb-6 border-l-8 border-[#fee123] pl-4 uppercase">
            Projeye Özel Çözümler
          </h3>
          <p className="text-gray-700 leading-relaxed font-medium">
            Yeni bir yapı için ilk adım, güvenli ve kaliteli bir asansör
            sistemidir. {/* Çeviri Koruması */}
            <span className="notranslate">ER</span>&nbsp;Asansör olarak, bina yapısına ve kullanım ihtiyaçlarına
            uygun, uzun ömürlü ve yüksek standartlarda asansör montaj hizmetleri
            sunuyoruz.
          </p>

          <h4 className="text-xl font-bold text-black mt-8 mb-4 uppercase leading-tight">
            Montaj Hizmetimizde Neler Var?
          </h4>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 mb-10">
            <li className="bg-gray-50 p-4 border-l-4 border-[#fee123] text-gray-700 font-bold text-sm md:text-base">
              Detaylı keşif ve analiz
            </li>
            <li className="bg-gray-50 p-4 border-l-4 border-[#fee123] text-gray-700 font-bold text-sm md:text-base">
              TSE uyumlu kurulum
            </li>
            <li className="bg-gray-50 p-4 border-l-4 border-black text-gray-700 font-bold text-sm md:text-base">
              Enerji verimli sistemler
            </li>
            <li className="bg-gray-50 p-4 border-l-4 border-black text-gray-700 font-bold text-sm md:text-base">
              Ruhsatlandırma desteği
            </li>
          </ul>

          <p className="text-center font-black text-lg md:text-2xl text-black py-6 border-y border-gray-100 italic">
            {/* Çeviri Koruması */}
            "<span className="notranslate">ER</span>&nbsp;Asansör – Katları değil, güveni taşıyoruz."
          </p>
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

export default AsansorMontaj;
