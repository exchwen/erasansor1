'use client';
import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    label: 'İnsan Asansörü',
    title: 'İnsan Asansörleri: Konfor ve Teknoloji',
    description:
      'Konut ve iş merkezleri için tasarladığımız insan asansörleri, EN 81-20/50 standartlarına tam uyumlu olarak üretilmektedir. VVVF frekans kontrollü tahrik sistemleri sayesinde sarsıntısız duruş ve kalkış imkanı sunarken, yüksek enerji tasarrufu sağlar. Modern iç tasarım seçenekleri, LED aydınlatma sistemleri ve dokunmatik buton panelleriyle estetiği, gelişmiş aşırı yük sensörleri ve acil kurtarma sistemleriyle güvenliği en üst seviyeye taşıyoruz.',
    image:
      'https://mcaasansor.com/wp-content/uploads/2019/09/insan-asansoru2.jpg',
    icon: '👥',
  },
  {
    id: 2,
    label: 'Yük Asansörü',
    title: 'Yük Asansörü: Güçlü ve Dayanıklı',
    description:
      'Ağır sanayi koşullarına dayanıklı yük asansörlerimiz, 500 kg’dan 10.000 kg kapasiteye kadar geniş bir yelpazede sunulmaktadır. Fabrikalar, depolar ve lojistik merkezlerinde kesintisiz operasyon için tasarlanan bu sistemler, çarpışmalara dayanıklı kabin içi koruma bariyerleri ve güçlendirilmiş taban yapısına sahiptir. Hidrolik veya elektrikli tahrik seçenekleriyle, yükleme ve boşaltma sırasında milimetrik hassasiyetle kat hizalaması gerçekleştirir.',
    image: 'https://artliftasansor.com.tr/wp-content/uploads/yuk-asansoru.jpg',
    icon: '🏋️',
  },
  {
    id: 3,
    label: 'Hidrolik Asansör',
    title: 'Hidrolik Çözümler: Sessiz ve Verimli',
    description:
      'Özellikle alçak ve orta katlı binalarda tercih edilen hidrolik asansörlerimiz, makine dairesi ihtiyacını ortadan kaldırarak mimari özgürlük sağlar. Enerjiyi sadece yukarı çıkış yönünde tüketen bu sistemler, aşağı inişte yerçekiminden faydalanarak maliyetleri minimize eder. Yağ soğutma üniteleri sayesinde yoğun trafikte bile stabil performans sunan hidrolik sistemlerimiz, villa içi kullanımlardan orta ölçekli iş yerlerine kadar konforlu bir sürüş deneyimi vadeder.',
    image: 'https://abasasansor.com/img/asansor_yeni.jpg',
    icon: '⚙️',
  },
  {
    id: 4,
    label: 'Kaldırma Platformu',
    title: 'Kaldırma Platformları: Maksimum Erişim',
    description:
      'Dikey taşıma ihtiyaçlarında kompakt çözümler sunan kaldırma platformlarımız, makaslı veya pistonlu mekanizmalarıyla her türlü yapıya entegre edilebilir. Kuyu dibi derinliği veya son kat yüksekliği yetersiz olan projeler için idealdir. Dış cephe kullanımına uygun korozyon direnci yüksek malzemelerle üretilen platformlar, emniyet valfleri ve acil durdurma butonlarıyla endüstriyel iş güvenliği protokollerine %100 uyumludur.',
    image:
      'https://www.scissorliftsmanufacturer.com/wp-content/uploads/2019/07/double-scissor-lift-table-platform==1000.jpg',
    icon: '🏗️',
  },
  {
    id: 5,
    label: 'Yemek Asansörü',
    title: 'Yemek Asansörü: Hijyen ve Pratiklik',
    description:
      'Monşarj olarak da bilinen yemek asansörlerimiz, restoran, otel ve villalarda servis kalitesini artırmak için tasarladanmıştır. Tamamı AISI 304 kalite paslanmaz çelikten üretilen kabin ve kapılar, gıda güvenliği ve hijyen standartlarını karşılar. Giyotin tip kapı sistemi sayesinde yerden tasarruf sağlar, sessiz çalışma özelliğiyle müşteri konforunu bozmaz. İçerisinde bulunan ayarlanabilir raf sistemleri, farklı boyutlardaki servis ekipmanlarının taşınmasına olanak tanır.',
    image:
      'https://www.hepahidroliklift.com/img/yemek-asansoru/monsarj-asansor.jpg',
    icon: '🍽️',
  },
  {
    id: 6,
    label: 'Engelli Asansörü',
    title: 'Engelsiz Erişim: Herkes İçin Özgürlük',
    description:
      'Engelli erişim sistemlerimiz, tekerlekli sandalye kullanıcıları ve hareket kısıtlılığı olan bireyler için özel olarak optimize edilmiştir. Merdiven tipi platformlar veya dikey engelli kaldırıcıları, mevcut binalarda yapısal tadilat gerektirmeden kolayca monte edilebilir. Yumuşak kalkış-duruş özelliği, emniyet sensörleri ve kullanıcı dostu kontrol panelleriyle bağımsız hareket imkanı sağlar. Kamu binaları ve özel konutlarda erişilebilirlik mevzuatına tam uyum garantisi sunuyoruz.',
    image: 'https://ake.com.tr/uploads/images/Koltuktipi_engelliasansor.JPG',
    icon: '♿',
  },
  {
    id: 7,
    label: 'Sedye Asansörü',
    title: 'Sedye Asansörleri: Hayati Hassasiyet',
    description:
      'Hastaneler ve tıp merkezleri için geliştirdiğimiz sedye asansörleri, zamanın kritik olduğu anlarda kesintisiz hizmet vermek üzere tasarlanmıştır. Geniş kabin ölçüleri sedye ve refakatçi geçişine tam uygunluk sağlarken, antibakteriyel iç kaplamalar sterilizasyonu kolaylaştırır. Elektrik kesintilerine karşı UPS destekli acil kata getirme sistemi ve öncelikli kullanım modu gibi özelliklerle, sağlık personeline en güvenilir çalışma ortamını sunar.',
    image: 'https://vanasansor.net/resimler/1658409-sedye-asansoru.webp',
    icon: '🛌',
  },
  {
    id: 8,
    label: 'Araç Asansörü',
    title: 'Araç Asansörleri: Akıllı Otopark',
    description:
      'Şehir merkezlerindeki sınırlı otopark alanlarını verimli kullanmak için tasarlanan araç asansörlerimiz, rampa ihtiyacını ortadan kaldırarak alandan %40’a varan tasarruf sağlar. Çift kontrol paneli sayesinde sürücü araçtan inmeden asansörü kumanda edebilir. Yüksek tonajlı taşıma kapasitesi, fotosel koruma sistemleri ve araç lastiklerini koruyan özel zemin yapısıyla, lüks konutlardan ticari otoparklara kadar prestijli ve fonksiyonel bir çözüm sunar.',
    image:
      'https://konurayasansor.com.tr/images/asansor/galeri/1875779287-galeri-0.jpg',
    icon: '🚗',
  },
];

const Services = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
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
    <section
      id="hizmetler"
      className="relative w-full h-[550px] overflow-hidden bg-black"
    >
      {/* ARKA PLAN GÖRSELLERİ */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/75 z-10" />
          <Image
            src={slide.image}
            className="w-full h-full object-cover"
            alt={slide.title}
          />
        </div>
      ))}

      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-center md:gap-16">
        {/* SOL TARAF: DAİRESEL MENÜ */}
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center flex-shrink-0">
          
          {/* MERKEZ LOGO - ARKA PLAN SİYAH YAPILDI */}
          <div className="w-32 h-32 md:w-44 md:h-44 bg-black rounded-full border-[6px] border-yellow-500 flex items-center justify-center shadow-[0_0_50px_rgba(234,179,8,0.3)] z-30 overflow-hidden">
            <Image 
              src="/logo.png" 
              alt="ER Asansör Logo" 
              className="w-4/5 h-auto object-contain"
            />
          </div>

          {/* Dairesel Hizmet Butonları */}
          {slides.map((slide, index) => {
            const angle = index * (360 / slides.length) * (Math.PI / 180);
            const radius = 150;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <button
                key={slide.id}
                onClick={() => setCurrent(index)}
                style={{ transform: `translate(${x}px, ${y}px)` }}
                className={`absolute w-14 h-14 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center transition-all duration-500 border-2 z-40 group
                  ${
                    index === current
                      ? 'bg-yellow-500 border-black scale-110 shadow-[0_0_30px_rgba(234,179,8,0.6)]'
                      : 'bg-white border-transparent hover:border-yellow-500 hover:scale-105'
                  }`}
              >
                <span className="text-lg md:text-2xl group-hover:scale-110 transition-transform text-black">
                  {slide.icon}
                </span>
                <span className="text-[6px] md:text-[8px] font-black text-center leading-tight mt-0.5 px-0.5 uppercase text-black">
                  {slide.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* SAĞ TARAF: METİNLER */}
        <div className="flex-1 text-white text-center md:text-left max-w-2xl mt-8 md:mt-0">
          <h2 className="text-2xl md:text-5xl font-black mb-6 uppercase leading-[1.1] tracking-tight text-yellow-500">
            {renderTitle(slides[current].title)}
          </h2>
          <div className="w-20 h-1.5 bg-yellow-500/50 mb-6 mx-auto md:mx-0"></div>
          <p className="text-sm md:text-lg text-gray-100 leading-relaxed font-medium animate-fade-in">
            {slides[current].description}
          </p>

          <div className="mt-10 flex justify-center md:justify-start gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  i === current
                    ? 'w-12 bg-yellow-500'
                    : 'w-4 bg-white/20 hover:bg-white/40'
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