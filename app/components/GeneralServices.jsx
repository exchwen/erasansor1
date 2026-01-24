'use client';
import React from 'react';
import Link from 'next/link'; // Yönlendirme için eklendi

const servicesData = [
  {
    title: 'PERİYODİK BAKIM',
    img: 'https://pemasansor.com/wp-content/uploads/2024/07/EsenlerAsansorBakimFiyatlari-1024x576.webp',
    path: '/hizmetlerimiz/periyodik-bakim', // İlgili sayfa yolu
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Başlık Alanı */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tighter mb-3">
            ASANSÖR HİZMETLERİ
          </h2>
          <p className="text-gray-600 font-bold text-sm md:text-base uppercase tracking-widest italic">
            PROFESYONEL MÜHENDİSLİK ÇÖZÜMLERİMİZ
          </p>
          <div className="w-16 h-1 bg-[#f3921f] mx-auto mt-4"></div>
        </div>

        {/* 4'lü Kart Izgarası */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {servicesData.map((service, index) => (
            <Link
              href={service.path}
              key={index}
              className="relative group overflow-hidden h-[320px] border-4 border-white shadow-lg transition-all duration-500 hover:border-[#f3921f] cursor-pointer"
            >
              <img
                src={service.img}
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                alt={service.title}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center p-6">
                <div className="border-2 border-white/30 p-4 w-full h-full flex items-center justify-center transition-all group-hover:border-white">
                  <h3 className="text-white font-black text-xl md:text-2xl text-center uppercase tracking-tighter drop-shadow-lg">
                    {service.title}
                  </h3>
                </div>
              </div>
              {/* Küçük İpucu Yazısı */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#f3921f] text-black text-[10px] font-black px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                DETAYLI BİLGİ
              </div>
            </Link>
          ))}
        </div>

        {/* Projelendirme Bölümü */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8 bg-gray-50 hover:bg-white rounded-xl border border-gray-100 hover:border-[#f3921f]/30 shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 group/project cursor-default">
          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-black text-[#1a3a4a] mb-6 border-b-4 border-[#1a3a4a] inline-block pb-2 self-start tracking-tighter group-hover/project:text-[#f3921f] group-hover/project:border-[#f3921f] transition-colors duration-300">
              ASANSÖR PROJELENDİRME
            </h2>
            <p className="text-gray-700 text-lg font-medium leading-relaxed mb-8 italic">
              ER Asansör, uzman mühendis kadrosuyla her türlü bina yapısına
              uygun, güvenilir ve efektif projeleri başarıyla hayata
              geçirmektedir.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* WhatsApp Butonu */}
              <a
                href="https://wa.me/905312331711"
                target="_blank"
                className="bg-[#3e7d58] text-white px-8 py-4 rounded-lg font-black flex items-center justify-center gap-4 hover:bg-[#2d5c41] transition-all text-lg uppercase tracking-wider shadow-md active:scale-95"
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
                className="bg-[#1a3a4a] text-white px-8 py-4 rounded-lg font-black hover:bg-[#f3921f] hover:text-black transition-all text-lg uppercase tracking-wider shadow-md active:scale-95"
              >
                PROJE DETAYI
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 min-h-[350px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200"
              className="w-full h-full object-cover group-hover/project:scale-105 transition-transform duration-700"
              alt="Asansör Projelendirme"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralServices;
