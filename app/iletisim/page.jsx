import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IletisimForm from './IletisimForm'; // Formu buradan çağırdık
import { Phone, Mail, MapPin } from 'lucide-react';

// --- BU SAYFAYA ÖZEL SEO METADATA ---
export const metadata = {
  title: 'İletişim | ER Asansör - Teknik Servis ve Ofis Bilgileri',
  description: 'İstanbul Avcılar merkezli ER Asansör iletişim bilgileri. 7/24 asansör arıza servisi, bakım teklifi ve proje danışmanlığı için bize ulaşın.',
  keywords: ['er asansör iletişim', 'asansör teknik servis numarası', 'avcılar asansör firması', 'asansör arıza telefon'],
  openGraph: {
    title: 'ER Asansör İletişim | Bize Ulaşın',
    description: '7/24 Teknik destek ve mühendislik çözümleri için iletişim kanallarımız.',
  },
};

// --- SCHEMA MARKUP (KOLAY BULUNABİLİRLİK İÇİN) ---
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'ER Asansör',
    telephone: '+905312331711',
    email: 'info@erasansor.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Merkez, Reşit Paşa Cd.',
      addressLocality: 'Avcılar',
      addressRegion: 'İstanbul',
      postalCode: '34310',
      addressCountry: 'TR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.9799', // Avcılar koordinatları (Yaklaşık)
      longitude: '28.7217'
    }
  }
};

const IletisimPage = () => {
  // Google Maps URL'i düzeltildi (Standart Embed)
  const mapSrc = "https://maps.google.com/maps?q=Avcılar+Reşitpaşa+Cd&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Schema Verisi */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      {/* --- BAŞLIK ALANI --- */}
      <section className="pt-32 md:pt-48 pb-12 md:pb-16 bg-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
            İLETİŞİM
          </h1>
          <p className="text-gray-500 text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] mb-6">
            PROFESYONEL MÜHENDİSLİK ÇÖZÜMLERİMİZ
          </p>
          <div className="w-16 h-1 bg-[#fee123] mx-auto shadow-[0_2px_10px_rgba(254,225,35,0.3)]"></div>
        </div>
      </section>

      <div className="pb-16 md:pb-24 container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-2xl md:rounded-[32px] shadow-2xl overflow-hidden flex flex-col lg:flex-row max-w-6xl mx-auto border border-white">
          
          {/* SOL PANEL: İRTİBAT BİLGİLERİ */}
          <div className="bg-black lg:w-[380px] p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter flex items-center gap-3 mb-10">
                <span className="w-1 h-6 bg-[#fee123]"></span>
                İRTİBAT BİLGİLERİ
              </h3>

              <div className="space-y-8">
                {/* 7/24 Teknik Servis */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-white/10 p-2.5 rounded-full shrink-0 group-hover:bg-[#fee123]/20 transition-colors">
                    <Phone size={20} className="text-[#fee123]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">7/24 TEKNİK SERVİS</p>
                    <a href="tel:05312331711" className="text-white text-lg font-bold hover:text-[#fee123] transition-colors">0 (531) 233 1711</a>
                  </div>
                </div>

                {/* Sabit Hat */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-white/10 p-2.5 rounded-full shrink-0 group-hover:bg-[#fee123]/20 transition-colors">
                    <Phone size={20} className="text-[#fee123]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">SABİT HAT</p>
                    <a href="tel:02126071010" className="text-white text-lg font-bold hover:text-[#fee123] transition-colors">0 (212) 607 1010</a>
                  </div>
                </div>

                {/* E-Posta */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-white/10 p-2.5 rounded-full shrink-0 group-hover:bg-[#fee123]/20 transition-colors">
                    <Mail size={20} className="text-[#fee123]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">E-POSTA</p>
                    <a href="mailto:info@erasansor.com" className="text-white text-base font-bold hover:text-[#fee123] transition-colors">info@erasansor.com</a>
                  </div>
                </div>

                {/* Adres */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-white/10 p-2.5 rounded-full shrink-0 group-hover:bg-[#fee123]/20 transition-colors">
                    <MapPin size={20} className="text-[#fee123]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">MERKEZ OFİS</p>
                    <p className="text-white text-base font-bold leading-tight">Avcılar, Reşitpaşa cad., İstanbul</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Alanı */}
            <div className="mt-10 rounded-2xl overflow-hidden h-40 border border-white/5 shadow-inner grayscale opacity-80 hover:grayscale-0 transition-all duration-500">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="ER ASANSÖR Konum"
              ></iframe>
            </div>
          </div>

          {/* SAĞ PANEL: SERVİS TALEP FORMU */}
          <div className="flex-grow p-8 lg:p-12">
            <h3 className="text-black text-2xl font-black uppercase tracking-tight mb-2">
              SİZİ ARAYALIM
            </h3>
            <p className="text-gray-400 text-sm mb-8 font-medium">
              Güvenilir ve hızlı çözümlerimiz için formu doldurun.
            </p>

            {/* Form Bileşeni Buraya Eklendi */}
            <IletisimForm />
            
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default IletisimPage;

