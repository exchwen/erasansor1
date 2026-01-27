'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const servicesData = [
  {
    title: 'PERİYODİK BAKIM',
    img: 'https://pemasansor.com/wp-content/uploads/2024/07/EsenlerAsansorBakimFiyatlari-1024x576.webp',
    path: '/hizmetlerimiz/periyodik-bakim',
  },
  {
    title: 'ARIZA SERVİSİ',
    img: 'https://vimmer.com.tr/images/services/6606486909511-565-Asans%C3%B6r%20Servis%20&%20Bak%C4%B1m.jpg',
    path: '/hizmetlerimiz/ariza-servisi',
  },
  {
    title: 'REVİZYON (YENİLEME)',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800',
    path: '/hizmetlerimiz/revizyon',
  },
  {
    title: 'ASANSÖR MONTAJ',
    img: 'https://www.gaziantepasansor.com.tr/wp-content/uploads/2021/02/gaziantep-asansor-montaji-2.jpg',
    path: '/hizmetlerimiz/asansor-montaj',
  },
];

const GeneralServices = () => {
  return (
    // MOBİL ÇÖZÜM: py-24 yerine py-16 md:py-24 kullanarak mobil boşlukları daralttık.
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        
        {/* Başlık Alanı */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            ASANSÖR HİZMETLERİ
          </h2>
          <p className="text-[#fee123] font-bold text-xs md:text-base uppercase tracking-[0.2em] md:tracking-[0.3em] italic">
            PROFESYONEL MÜHENDİSLİK ÇÖZÜMLERİMİZ
          </p>
          <div className="w-20 md:w-24 h-1.5 bg-[#fee123] mx-auto mt-6 shadow-[0_0_15px_rgba(254,225,35,0.4)]"></div>
        </div>

        {/* 4'lü Kart Izgarası */}
        {/* MOBİL ÇÖZÜM: Kart yüksekliğini h-[340px] yaparak mobilde ekranı daha verimli kullandık. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
          {servicesData.map((service, index) => (
            <Link
              href={service.path}
              key={index}
              className="relative group overflow-hidden h-[340px] md:h-[380px] border-2 border-gray-900 shadow-2xl transition-all duration-500 hover:border-[#fee123] cursor-pointer rounded-sm"
            >
              <Image
                src={service.img}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                style={{ objectFit: 'cover' }}
                className="grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
              {/* Overlay Karartma */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-all flex items-center justify-center p-6 z-10">
                <div className="border border-[#fee123]/30 p-4 w-full h-full flex flex-col items-center justify-center transition-all group-hover:border-[#fee123]">
                  <h3 className="text-white font-black text-xl md:text-2xl text-center uppercase tracking-tighter leading-none mb-2">
                    {service.title}
                  </h3>
                  <div className="w-0 group-hover:w-12 h-1 bg-[#fee123] transition-all duration-500"></div>
                </div>
              </div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#fee123] text-black text-[10px] font-black px-4 py-2 rounded-sm opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                İNCELE
              </div>
            </Link>
          ))}
        </div>

        {/* Projelendirme Bölümü */}
        <div className="flex flex-col lg:flex-row items-stretch gap-0 bg-[#0a0a0a] rounded-xl md:rounded-2xl border border-gray-900 shadow-2xl overflow-hidden transition-all duration-500 group/project">
          
          {/* Metin Alanı */}
          <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-6 md:mb-8 border-l-8 border-[#fee123] pl-5 md:pl-6 tracking-tighter uppercase">
              ASANSÖR <span className="text-[#fee123]">PROJELENDİRME</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed mb-8 md:mb-10 italic">
              {/* DÜZELTME BURADA YAPILDI: &nbsp; eklendi */}
              <span className="notranslate">ER</span>&nbsp;Asansör, uzman mühendis kadrosuyla her türlü bina yapısına
              uygun, güvenilir ve efektif projeleri başarıyla hayata
              geçirmektedir.
            </p>

            {/* Butonlar - MOBİL ÇÖZÜM: Butonlar mobilde alt alta gelerek daha rahat tıklama alanı sağlar. */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <a
                href="https://wa.me/905312331711"
                target="_blank"
                className="bg-green-600 text-white px-6 md:px-10 py-4 rounded-lg font-black flex items-center justify-center gap-4 hover:bg-green-500 transition-all text-sm md:text-lg uppercase tracking-wider shadow-lg active:scale-95"
              >
                BİLGİ HATTI
              </a>

              <Link
                href="/hizmetlerimiz/asansor-projelendirme"
                className="bg-white text-black px-6 md:px-10 py-4 rounded-lg font-black flex items-center justify-center hover:bg-[#fee123] transition-all text-sm md:text-lg uppercase tracking-wider shadow-lg active:scale-95"
              >
                PROJE DETAYI
              </Link>
            </div>
          </div>

          {/* Görsel Alanı */}
          <div className="lg:w-1/2 min-h-[300px] md:min-h-[400px] overflow-hidden relative">
            <div className="absolute inset-0 bg-black/20 group-hover/project:bg-transparent transition-all duration-700 z-10"></div>
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200"
              alt="Asansör Projelendirme"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              className="group-hover/project:scale-105 transition-transform duration-1000 grayscale-[30%] group-hover/project:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralServices;
