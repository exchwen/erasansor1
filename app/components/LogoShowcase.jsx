'use client';
import React from 'react';
import Image from 'next/image';

const LogoShowcase = () => {
  // Marka logo bilgisi
  const brandLogo = {
    name: 'ER ASANSÖR',
    url: '/logo.png', 
  };

  return (
    // Arka plan tamamen siyah yapıldı
    <section className="py-20 bg-black border-t border-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Slogan */}
        <p className="text-center text-[#fee123] text-xs font-black uppercase tracking-[0.5em] mb-12 opacity-80 animate-pulse">
          GÜVENİN MARKASI
        </p>

        {/* Logoyu sayfada ortalayan alan */}
        <div className="flex justify-center items-center">
          <div
            // Logo boyutu ve geçiş efektleri
            className="w-full max-w-[280px] transition-all duration-700 cursor-pointer hover:scale-110 group"
          >
            {/* ÇÖZÜM: Width ve Height eklendi */}
            <Image
              src={brandLogo.url}
              alt={brandLogo.name}
              width={280}
              height={280}
              priority // Marka logosu olduğu için öncelikli yüklenmesi performans artırır
              className="w-full h-auto object-contain transition-all duration-500 
                         drop-shadow-[0_0_20px_rgba(254,225,35,0.4)] 
                         group-hover:drop-shadow-[0_0_40px_rgba(254,225,35,0.7)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoShowcase;