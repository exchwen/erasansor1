'use client';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

const CozumOrtaklariPage = () => {
  // --- ÇÖZÜM ORTAKLARI LİSTESİ ---
  const partners = [
    { name: 'ÖNERSAN', url: 'https://media.licdn.com/dms/image/v2/C4D0BAQHMyPWLVNHjmg/company-logo_200_200/company-logo_200_200/0/1679234371244?e=2147483647&v=beta&t=LK_FL_JB91zg6pyWaFYyQ_fteCa4gJGgxiBysObWZmI' },
    { name: 'AKIŞ LİFT', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfhlOWXkt4xYJq3X51dB2mhx3IQyhM28Qi6A&s' },
    { name: 'BUTCON', url: 'https://www.butkon.com/images/butkon/logo.png' },
    { name: 'GENEMEK', url: 'https://media.licdn.com/dms/image/v2/D4E0BAQGAV5sAEsC1Tg/company-logo_200_200/company-logo_200_200/0/1700216418921/gen_elektromekanik_san_ve_tic_ltd_ti__logo?e=2147483647&v=beta&t=-mA4bZLcKzycaXFjZZsUMFh4ZbFYsbKvdN9XbivWmpE' },
    { name: 'ARKEL', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTktjdB2j3sRzck8adtvTufmAhmxMSSbuXxSQ&s' },
    { name: 'MİKEL', url: 'https://media.licdn.com/dms/image/v2/C4D0BAQEZHP2lkXf61Q/company-logo_200_200/company-logo_200_200/0/1630459187095/mik_el_elektronik_san_ve_tic_ltd_sti_logo?e=2147483647&v=beta&t=SvIEXs99FkDkMfzC_tIdVShjp4A9pX5QeRoAJx4FdCo' },
    { name: 'MİKROLİFT', url: 'https://www.mikrolift.com/images/logo.png' },
    { name: 'iLİFT', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8RqrZMj5aQdNgx-kJvZWDis7E-dwPaYQhng&s' },
    { name: 'ÖZBEŞLER', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyjyrSRczt9komZVLrSB_X_0FE04l4MYQWtg&s' },
    { name: 'MERİH ASANSÖR', url: 'https://erbaasansor.com/wp-content/uploads/2018/09/Merih-Asansor-logo.jpg' }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* --- KURUMSAL BAŞLIK ALANI --- */}
      {/* MOBİL DÜZELTME: pt-48 yerine mobilde pt-32 kullanıldı */}
      <section className="pt-32 md:pt-48 pb-12 md:pb-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-black text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            ÇÖZÜM ORTAKLARIMIZ
          </h1>
          <p className="text-gray-500 text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] mb-6">
            BİRLİKTE DAHA YÜKSEĞE
          </p>
          <div className="w-16 h-1 bg-[#fee123] mx-auto shadow-[0_0_10px_rgba(254,225,35,0.5)]"></div>
        </div>
      </section>

      {/* --- MARKA GRİD ALANI --- */}
      {/* MOBİL DÜZELTME: Padding ve rounded değerleri mobilde küçültüldü */}
      <section className="py-12 md:py-24 bg-gray-50 container mx-auto px-4 max-w-6xl mb-12 md:mb-20 rounded-2xl md:rounded-[40px] shadow-inner border border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-4 md:p-8 rounded-xl md:rounded-2xl shadow-sm border border-transparent hover:border-[#fee123] flex items-center justify-center h-32 md:h-48 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group relative overflow-hidden"
            >
              {/* Resim için Relative Container */}
              <div className="relative w-full h-full">
                <Image
                  src={partner.url}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100 p-2"
                />
              </div>
              {/* Alt Bilgi */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#fee123] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </section>

      {/* --- GÜVEN VURGUSU --- */}
      <section className="py-16 md:py-20 bg-black text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6 tracking-tight">
            DÜNYA STANDARTLARINDA <span className="text-[#fee123]">BİLEŞENLER</span>
          </h2>
          <p className="text-gray-400 font-medium leading-relaxed text-sm md:text-base">
            {/* ÇEVİRİ DÜZELTMESİ: Marka ismi kilitlendi */}
            <span className="notranslate">ER</span>&nbsp;Asansör olarak, projelerimizde sadece güvenilirliği kanıtlanmış ve teknolojik olarak en gelişmiş markaların ürünlerini kullanarak, müşterilerimize emniyetli ve konforlu bir sürüş deneyimi sunuyoruz.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CozumOrtaklariPage;
