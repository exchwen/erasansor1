import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Phone } from 'lucide-react';

// --- BU SAYFAYA ÖZEL SEO METADATA ---
export const metadata = {
  title: 'Asansör Projelendirme ve Mühendislik | ER Asansör',
  description: 'Asansör avan ve uygulama projeleri, trafik analizi, şaft ölçümü ve ruhsatlandırma hizmetleri. Yönetmeliklere uygun profesyonel mühendislik çözümleri.',
  keywords: ['asansör projesi', 'asansör avan proje', 'asansör ruhsat', 'asansör trafik hesabı', 'asansör mühendislik hizmetleri'],
  openGraph: {
    title: 'Asansör Projelendirme | Mühendislik ve Ruhsat',
    description: 'Doğru proje, güvenli sistem. Yapınız için en uygun asansör projelendirme hizmetleri.',
  },
};

// --- SCHEMA MARKUP (MÜHENDİSLİK HİZMETİ İÇİN) ---
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Asansör Projelendirme ve Mühendislik',
  provider: {
    '@type': 'LocalBusiness',
    name: 'ER Asansör',
    telephone: '+905312331711'
  },
  areaServed: {
    '@type': 'City',
    name: 'İstanbul'
  },
  description: 'Bina yapısına uygun asansör kuyu ölçümleri, trafik analizleri, avan ve uygulama projelerinin çizimi ve ruhsatlandırma süreçleri.',
  offers: {
    '@type': 'Offer',
    description: 'Proje kapsamına göre fiyatlandırma.'
  }
};

const Projelendirme = () => {
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
            ASANSÖR PROJELENDİRME
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
          {/* Mavi tonu siyah yapıldı ve sarı şerit ile vurgulandı. */}
          <h3 className="text-2xl font-black text-black mb-6 border-l-8 border-[#fee123] pl-4 uppercase">
            Doğru Proje, Güvenli Sistem
          </h3>
          <p className="text-gray-700 leading-relaxed font-medium">
            Her başarılı asansör sisteminin temelinde doğru ve detaylı bir
            projelendirme süreci yatar. {/* Çeviri Koruması */}
            <span className="notranslate">ER</span>&nbsp;Asansör olarak, asansör kurulumuna
            başlamadan önce yapının özelliklerine ve ihtiyaçlarına uygun
            mühendislik temelli projelendirme hizmeti sunuyoruz.
          </p>
        </div>

        {/* Mavi arka plan siyah yapıldı, mobilde padding daraltıldı. */}
        <div className="bg-black text-white p-6 md:p-10 rounded-2xl md:rounded-3xl border-t-8 border-[#fee123] shadow-2xl">
          <h4 className="text-[#fee123] text-xl font-bold mb-6 uppercase tracking-wider">
            Hizmet Kapsamımız
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="flex items-center gap-3 text-sm md:text-base border-b border-white/10 pb-2 md:border-none">
              <span className="text-[#fee123] font-bold">•</span> Yapı keşfi ve ihtiyaç analizi
            </div>
            <div className="flex items-center gap-3 text-sm md:text-base border-b border-white/10 pb-2 md:border-none">
              <span className="text-[#fee123] font-bold">•</span> Kapasite ve trafik analizi
            </div>
            <div className="flex items-center gap-3 text-sm md:text-base border-b border-white/10 pb-2 md:border-none">
              <span className="text-[#fee123] font-bold">•</span> Teknik şaft ölçüm ve çizim
            </div>
            <div className="flex items-center gap-3 text-sm md:text-base">
              <span className="text-[#fee123] font-bold">•</span> Ruhsat ve teknik belge hazırlığı
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

export default Projelendirme;
