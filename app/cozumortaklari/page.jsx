'use client';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

const CozumOrtaklariPage = () => {
  // --- ÇÖZÜM ORTAKLARI LİSTESİ ---
  const partners = [
    { name: 'ÖNERSAN', url: 'https://onersan.com.tr/logo.png' },
    { name: 'AKIŞ LİFT', url: 'https://www.akislift.com.tr/img/logo.png' },
    { name: 'BUTCON', url: 'https://butcon.com.tr/wp-content/uploads/2021/01/logo.png' },
    { name: 'GENEMEK', url: 'https://genemek.com/logo.png' },
    { name: 'ARKEL', url: 'https://arkel.com.tr/assets/img/logo.png' },
    { name: 'MİKEL', url: 'https://mikel.com.tr/img/logo.png' },
    { name: 'MİKROLİFT', url: 'https://mikrolift.com.tr/logo.png' },
    { name: 'iLİFT', url: 'https://ilift.com.tr/logo.png' },
    { name: 'ÖZBEŞLER', url: 'https://ozbesler.com/logo.png' },
    // EKSTRALAR (Global Markalar)
    { name: 'WITTUR', url: 'https://www.wittur.com/logo.png' },
    { name: 'KLEEMANN', url: 'https://www.kleemannlifts.com/logo.png' },
    { name: 'MERİH ASANSÖR', url: 'https://merihasansor.com/logo.png' }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* --- KURUMSAL BAŞLIK ALANI --- */}
      <section className="pt-48 pb-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-black text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            ÇÖZÜM ORTAKLARIMIZ
          </h1>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.4em] mb-6">
            BİRLİKTE DAHA YÜKSEĞE
          </p>
          <div className="w-16 h-1 bg-[#fee123] mx-auto shadow-[0_0_10px_rgba(254,225,35,0.5)]"></div>
        </div>
      </section>

      {/* --- MARKA GRİD ALANI --- */}
      <section className="py-24 bg-gray-50 container mx-auto px-4 max-w-6xl mb-20 rounded-[40px] shadow-inner border border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:border-[#fee123] flex items-center justify-center h-48 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group relative overflow-hidden"
            >
              {/* Resim için Relative Container */}
              <div className="relative w-full h-full">
                <Image
                  src={partner.url}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
                />
              </div>
              {/* Alt Bilgi */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#fee123] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </section>

      {/* --- GÜVEN VURGUSU --- */}
      <section className="py-20 bg-black text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6 tracking-tight">
            DÜNYA STANDARTLARINDA <span className="text-[#fee123]">BİLEŞENLER</span>
          </h2>
          <p className="text-gray-400 font-medium leading-relaxed">
            ER Asansör olarak, projelerimizde sadece güvenilirliği kanıtlanmış ve teknolojik olarak en gelişmiş markaların ürünlerini kullanarak, müşterilerimize emniyetli ve konforlu bir sürüş deneyimi sunuyoruz.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CozumOrtaklariPage;
