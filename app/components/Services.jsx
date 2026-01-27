'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    label: 'İnsan Asansörü',
    title: 'İnsan Asansörleri: Konfor ve Teknoloji',
    description: 'Konut ve iş merkezleri için tasarladığımız insan asansörleri, EN 81-20/50 standartlarına tam uyumlu olarak üretilmektedir. VVVF frekans kontrollü tahrik sistemleri sayesinde sarsıntısız duruş ve kalkış imkanı sunar.',
    image: 'https://mcaasansor.com/wp-content/uploads/2019/09/insan-asansoru2.jpg',
    icon: '👥',
  },
  {
    id: 2,
    label: 'Yük Asansörü',
    title: 'Yük Asansörü: Güçlü ve Dayanıklı',
    description: 'Ağır sanayi koşullarına dayanıklı yük asansörlerimiz, 500 kg’dan 10.000 kg kapasiteye kadar geniş bir yelpazede sunulmaktadır. Güçlendirilmiş taban yapısına sahiptir.',
    image: 'https://artliftasansor.com.tr/wp-content/uploads/yuk-asansoru.jpg',
    icon: '🏋️',
  },
  {
    id: 3,
    label: 'Hidrolik Asansör',
    title: 'Hidrolik Çözümler: Sessiz ve Verimli',
    description: 'Alçak ve orta katlı binalarda tercih edilen hidrolik asansörlerimiz, makine dairesi ihtiyacını ortadan kaldırarak mimari özgürlük sağlar.',
    image: 'https://abasasansor.com/img/asansor_yeni.jpg',
    icon: '⚙️',
  },
  {
    id: 4,
    label: 'Kaldırma Platformu',
    title: 'Kaldırma Platformları: Maksimum Erişim',
    description: 'Dikey taşıma ihtiyaçlarında kompakt çözümler sunan platformlarımız, her türlü yapıya entegre edilebilir. Kuyu dibi derinliği yetersiz olan projeler için idealdir.',
    image: 'https://www.scissorliftsmanufacturer.com/wp-content/uploads/2019/07/double-scissor-lift-table-platform==1000.jpg',
    icon: '🏗️',
  },
  {
    id: 5,
    label: 'Yemek Asansörü',
    title: 'Yemek Asansörü: Hijyen ve Pratiklik',
    description: 'Monşarj olarak da bilinen yemek asansörlerimiz, restoran, otel ve villalarda servis kalitesini artırmak için tasarlanmıştır. AISI 304 kalite paslanmaz çelikten üretilir.',
    image: 'https://www.hepahidroliklift.com/img/yemek-asansoru/monsarj-asansor.jpg',
    icon: '🍽️',
  },
  {
    id: 6,
    label: 'Engelli Asansörü',
    title: 'Engelsiz Erişim: Herkes İçin Özgürlük',
    description: 'Engelli erişim sistemlerimiz, tekerlekli sandalye kullanıcıları ve hareket kısıtlılığı olan bireyler için özel olarak optimize edilmiştir.',
    image: 'https://ake.com.tr/uploads/images/Koltuktipi_engelliasansor.JPG',
    icon: '♿',
  },
  {
    id: 7,
    label: 'Sedye Asansörü',
    title: 'Sedye Asansörleri: Hayati Hassasiyet',
    description: 'Hastaneler ve tıp merkezleri için geliştirdiğimiz sedye asansörleri, zamanın kritik olduğu anlarda kesintisiz hizmet vermek üzere tasarlanmıştır.',
    image: 'https://vanasansor.net/resimler/1658409-sedye-asansoru.webp',
    icon: '🛌',
  },
  {
    id: 8,
    label: 'Araç Asansörü',
    title: 'Araç Asansörleri: Akıllı Otopark',
    description: 'Şehir merkezlerindeki sınırlı otopark alanlarını verimli kullanmak için tasarlanan araç asansörlerimiz, rampa ihtiyacını ortadan kaldırır.',
    image: 'https://konurayasansor.com.tr/images/asansor/galeri/1875779287-galeri-0.jpg',
    icon: '🚗',
  },
];

const Services = () => {
  const [current, setCurrent] = useState(0);
  // HATA ÇÖZÜMÜ: isMobile state'i eklendi
  const [isMobile, setIsMobile] = useState(false);

  // Otomatik geçiş efekti
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // HATA ÇÖZÜMÜ: Ekran boyutunu sadece Client tarafında kontrol ediyoruz
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // İlk yüklemede kontrol et
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderTitle = (title) => {
    if (!title.includes(':')) return title;
    const [before, after] = title.split(':');
    return (
      <>
        {before}:<span className="block text-white mt-1">{after}</span>
      </>
    );
  };

  return (
    <section id="hizmetler" className="relative w-full min-h-[850px] md:h-[600px] overflow-hidden bg-black py-12 md:py-0">
      {/* ARKA PLAN GÖRSELLERİ */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/80 z-10" />
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            style={{ objectFit: 'cover' }}
            priority={index === 0}
          />
        </div>
      ))}

      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-start md:justify-center md:gap-16">
        
        {/* SOL TARAF: DAİRESEL MENÜ (Mobilde Küçültüldü) */}
        <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] flex items-center justify-center flex-shrink-0 mt-8 md:mt-0">
          
          {/* MERKEZ LOGO */}
          <div className="w-24 h-24 md:w-44 md:h-44 bg-black rounded-full border-[4px] md:border-[6px] border-yellow-500 flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.3)] z-30 overflow-hidden">
            <Image 
              src="/logo.png" 
              alt="ER Asansör Logo" 
              width={150} 
              height={150}
              className="w-4/5 h-auto object-contain"
              priority
            />
          </div>

          {/* Dairesel Hizmet Butonları */}
          {slides.map((slide, index) => {
            const angle = index * (360 / slides.length) * (Math.PI / 180);
            
            // HATA ÇÖZÜMÜ: State kullanılarak değer belirlendi (SSR hatası önlendi)
            const radius = isMobile ? 110 : 150;
            
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <button
                key={slide.id}
                onClick={() => setCurrent(index)}
                style={{ transform: `translate(${x}px, ${y}px)` }}
                className={`absolute w-12 h-12 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center transition-all duration-500 border-2 z-40 group
                  ${
                    index === current
                      ? 'bg-yellow-500 border-black scale-110 shadow-[0_0_20px_rgba(234,179,8,0.5)]'
                      : 'bg-white border-transparent hover:border-yellow-500'
                  }`}
              >
                <span className="text-xl md:text-3xl text-black">{slide.icon}</span>
                <span className="hidden md:block text-[8px] font-black text-center leading-tight mt-0.5 px-0.5 uppercase text-black">
                  {slide.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* SAĞ TARAF: METİNLER (Mobilde Boşluk Ayarlandı) */}
        <div className="flex-1 text-white text-center md:text-left max-w-2xl mt-12 md:mt-0">
          <h2 className="text-2xl md:text-5xl font-black mb-4 md:mb-6 uppercase leading-[1.2] tracking-tight text-yellow-500">
            {renderTitle(slides[current].title)}
          </h2>
          <div className="w-16 md:w-20 h-1.5 bg-yellow-500/50 mb-6 mx-auto md:mx-0"></div>
          <p className="text-sm md:text-lg text-gray-200 leading-relaxed font-medium px-2 md:px-0">
            {slides[current].description}
          </p>

          {/* Sayfa Göstergeleri (Dots) */}
          <div className="mt-8 md:mt-10 flex justify-center md:justify-start gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  i === current ? 'w-10 bg-yellow-500' : 'w-3 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
