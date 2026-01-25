'use client';
import React from 'react';

const LogoShowcase = () => {
  // Marka logo bilgisi
  const brandLogo = {
    name: 'ER ASANSÖR',
    url: '/logo.png', 
  };

  return (
    // Arka plan tamamen siyah yapıldı
    <section className="py-20 bg-black border-t border-gray-900">
      <div className="container mx-auto px-4">
        {/* Slogan veya Üst Metin (İhtiyaç duyarsan diye görünür bıraktım) */}
        <p className="text-center text-[#fee123] text-xs font-black uppercase tracking-[0.5em] mb-12 opacity-80">
          GÜVENİN MARKASI
        </p>

        {/* Logoyu sayfada ortalayan alan */}
        <div className="flex justify-center items-center">
          <div
            // Logo boyutu ve geçiş efektleri
            className="w-full max-w-[280px] transition-all duration-700 cursor-pointer hover:scale-110 group"
          >
            <img
              src={brandLogo.url}
              alt={brandLogo.name}
              /** * CSS FILTRE AÇIKLAMASI: 
               * Logo görselin ne renk olursa olsun, bu filtre onu #fee123 tonlarına yaklaştırır.
               * Eğer logon zaten bu renkse, sadece drop-shadow kısmını tutman yeterlidir.
               */
              className="w-full h-auto object-contain transition-all duration-500 
                         drop-shadow-[0_0_20px_rgba(254,225,35,0.4)] 
                         group-hover:drop-shadow-[0_0_35px_rgba(254,225,35,0.6)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoShowcase;