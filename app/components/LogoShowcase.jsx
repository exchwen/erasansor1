import React from 'react';

const LogoShowcase = () => {
  // Sadece senin marka logonun bilgisi
  const brandLogo = {
    name: 'ER ASANSÖR',
    url: '/logo.png', // Public klasöründeki logonun dosya yolunu buraya yazdım.
  };

  return (
    // Üstteki koyu bölümden sonra temiz bir geçiş için beyaz arka plan
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        {/* Başlığı tekil ve daha güçlü hale getirdim */}
        <p className="text-center text-gray-400 text-sm font-bold uppercase tracking-widest mb-10"></p>

        {/* Tek logoyu sayfada ortalamak için Flexbox kullandım */}
        <div className="flex justify-center items-center">
          <div
            // Logoyu biraz daha büyüttüm (max-w-[240px])
            // Gri tonlama ve opaklık efektlerini korudum, üzerine gelince canlanacak.
            className="w-full max-w-[240px] grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer hover:scale-105"
          >
            <img
              src={brandLogo.url}
              alt={brandLogo.name}
              // Gölgeyi biraz daha belirginleştirdim (drop-shadow-md)
              className="w-full h-auto object-contain filter drop-shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoShowcase;
