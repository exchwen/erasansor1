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
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        {/* Başlık Alanı */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            ASANSÖR HİZMETLERİ
          </h2>
          <p className="text-[#fee123] font-bold text-sm md:text-base uppercase tracking-[0.3em] italic">
            PROFESYONEL MÜHENDİSLİK ÇÖZÜMLERİMİZ
          </p>
          <div className="w-24 h-1.5 bg-[#fee123] mx-auto mt-6 shadow-[0_0_15px_rgba(254,225,35,0.4)]"></div>
        </div>

        {/* 4'lü Kart Izgarası */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {servicesData.map((service, index) => (
            <Link
              href={service.path}
              key={index}
              className="relative group overflow-hidden h-[380px] border-2 border-gray-900 shadow-2xl transition-all duration-500 hover:border-[#fee123] cursor-pointer rounded-sm"
            >
              <Image
                src={service.img}
                className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                alt={service.title}
              />
              {/* Overlay Karartma */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-all flex items-center justify-center p-6">
                <div className="border border-[#fee123]/30 p-4 w-full h-full flex flex-col items-center justify-center transition-all group-hover:border-[#fee123]">
                  <h3 className="text-white font-black text-xl md:text-2xl text-center uppercase tracking-tighter leading-none mb-2">
                    {service.title}
                  </h3>
                  <div className="w-0 group-hover:w-12 h-1 bg-[#fee123] transition-all duration-500"></div>
                </div>
              </div>
              {/* Küçük İpucu Yazısı */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#fee123] text-black text-[10px] font-black px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                İNCELE
              </div>
            </Link>
          ))}
        </div>

        {/* Projelendirme Bölümü */}
        <div className="flex flex-col lg:flex-row items-stretch gap-0 bg-[#0a0a0a] rounded-2xl border border-gray-900 shadow-2xl overflow-hidden transition-all duration-500 group/project">
          <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-[#0a0a0a]">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 border-l-8 border-[#fee123] pl-6 tracking-tighter uppercase">
              ASANSÖR <span className="text-[#fee123]">PROJELENDİRME</span>
            </h2>
            <p className="text-gray-400 text-lg font-medium leading-relaxed mb-10 italic">
              ER Asansör, uzman mühendis kadrosuyla her türlü bina yapısına
              uygun, güvenilir ve efektif projeleri başarıyla hayata
              geçirmektedir.
            </p>

            <div className="flex flex-wrap gap-6">
              {/* WhatsApp Butonu */}
              <a
                href="https://wa.me/905312331711"
                target="_blank"
                className="bg-green-600 text-white px-10 py-4 rounded-lg font-black flex items-center justify-center gap-4 hover:bg-green-500 transition-all text-lg uppercase tracking-wider shadow-lg active:scale-95"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  height="1.2em"
                  width="1.2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.5 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                </svg>
                BİLGİ HATTI
              </a>

              {/* Sayfa Linki Butonu */}
              <Link
                href="/hizmetlerimiz/asansor-projelendirme"
                className="bg-white text-black px-10 py-4 rounded-lg font-black hover:bg-[#fee123] transition-all text-lg uppercase tracking-wider shadow-lg active:scale-95"
              >
                PROJE DETAYI
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 min-h-[400px] overflow-hidden relative">
            <div className="absolute inset-0 bg-black/20 group-hover/project:bg-transparent transition-all duration-700 z-10"></div>
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200"
              className="w-full h-full object-cover group-hover/project:scale-105 transition-transform duration-1000 grayscale-[30%] group-hover/project:grayscale-0"
              alt="Asansör Projelendirme"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralServices;