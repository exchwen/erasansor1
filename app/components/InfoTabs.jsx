'use client';
import React, { useState } from 'react';

const tabs = [
  {
    id: 1,
    title: 'TEKNOLOJİ',
    fullTitle: 'TEKNOLOJİLERİ TAKİP EDİYORUZ',
    content:
      'Asansör sektöründeki tüm yenilikleri yakından takip ediyoruz. Müşterilerimizin ihtiyaçlarını güncel ve güvenilir teknolojilerle karşılıyoruz. Günün ihtiyaçları doğrultusunda alternatif çözümler üretiyoruz.',
  },
  {
    id: 2,
    title: 'KADROMUZ',
    fullTitle: 'KADROMUZ',
    content:
      'Hizmet verdiğimiz asansör sayısına uygun uzman personel ile 7/24 kesintisiz hizmet sunuyoruz. İletişim seçeneklerimiz ile muhatap bulma sorunu yaşamazsınız.',
  },
  {
    id: 3,
    title: 'TECRÜBE',
    fullTitle: 'TECRÜBE',
    content:
      '2002 yılından bu yana sektörün her kademesinde yer aldık. 2009 yılında ER Asansör’ün kurulumu ile kazandığımız tecrübeyi modern mühendislik ile birleştiriyoruz.',
  },
  {
    id: 4,
    title: 'HEDEFİMİZ',
    fullTitle: 'HEDEFİMİZ',
    content:
      'Markamızın kalite ve güven ile birlikte anılmasıdır. Bu hedefe ulaşmak ve markamızı en iyi şekilde temsil etmek için durmaksızın çalışmaya devam ediyoruz.',
  },
];

const InfoTabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeContent = tabs.find((t) => t.id === activeTab);

  return (
    <section
      id="bizden-bilgiler"
      className="container mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row gap-12 lg:gap-20 bg-white"
    >
      {/* SOL TARAF: Kurumsal Metin */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl md:text-5xl font-black mb-8 border-l-8 border-[#fee123] pl-6 uppercase tracking-tighter text-black">
          YÜKSEK STANDARTLARDA <span className="text-[#fee123]">HİZMET</span>
        </h2>
        <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed">
          {/* DÜZELTME 1: Kelimeler birbirine yapıştırıldı */}
          <span className="notranslate">ER</span>&nbsp;Asansör, sektördeki tüm yeterlilik sertifikalarına sahiptir. Kaliteli hizmeti bir standart haline getirmek için mühendislik disipliniyle çalışıyoruz.
        </p>
        
        <ul className="space-y-5 mb-10">
          {[
            { bold: 'Uluslararası standartlar', text: 'Tüm ürünlerimiz CE belgelidir.' },
            { bold: 'Sürekli eğitim', text: 'Personelimiz düzenli teknik eğitim alır.' },
            { bold: 'Önceliğimiz insan', text: 'Güvenlik protokollerini tavizsiz uygularız.' }
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-4 group">
              <span className="w-5 h-5 bg-[#fee123] rounded-full flex-shrink-0 shadow-[0_0_10px_rgba(254,225,35,0.4)] mt-1 group-hover:scale-110 transition-transform"></span>
              <span className="text-gray-800 font-medium">
                <strong className="font-black uppercase text-sm md:text-base">{item.bold}</strong> – {item.text}
              </span>
            </li>
          ))}
        </ul>
        
        <p className="text-gray-500 italic border-t border-gray-100 pt-8 text-sm md:text-base">
          Müşterilerimizden aldığımız destekle geleceğe güvenle bakıyoruz. 
          {/* DÜZELTME 2: Kelimeler birbirine yapıştırıldı */}
          Sizleri de <span className="text-black font-black"><span className="notranslate">ER</span>&nbsp;Asansör</span> ailesinde görmekten mutluluk duyarız.
        </p>
      </div>

      {/* SAĞ TARAF: Tab Menü */}
      <div className="lg:w-1/2 flex flex-col bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-50 overflow-hidden">
        {/* Üst Başlık */}
        <div className="bg-black text-[#fee123] text-center py-6 font-black text-xl md:text-2xl tracking-[0.2em] uppercase border-b-2 border-[#fee123]">
          BİZDEN BİLGİLER
        </div>

        {/* Tab Butonları */}
        <div className="grid grid-cols-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-6 px-4 text-xs md:text-sm font-black transition-all duration-300 border-b-4 flex items-center justify-center text-center uppercase tracking-tight
                ${activeTab === tab.id
                  ? 'bg-black text-[#fee123] border-[#fee123] z-10'
                  : 'bg-white text-gray-400 border-gray-100 hover:text-black hover:bg-gray-50'
                }`}
            >
              {/* Mobilde kısa başlık, masaüstünde tam başlık */}
              <span className="md:hidden">{tab.title}</span>
              <span className="hidden md:block">{tab.fullTitle}</span>
            </button>
          ))}
        </div>

        {/* İçerik Alanı */}
        <div className="p-8 md:p-12 bg-white flex-grow flex flex-col justify-center min-h-[300px] relative">
          {/* Arka Plan "ER" Yazısı */}
          <div className="absolute top-6 right-8 text-7xl md:text-9xl text-gray-50 font-black select-none pointer-events-none transition-opacity notranslate">
            ER
          </div>
          
          <div className="relative z-10">
            <div className="w-12 h-1 bg-[#fee123] mb-6"></div>
            <p className="text-gray-700 leading-relaxed text-lg md:text-2xl font-bold animate-fade-in italic">
              "{activeContent?.content}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoTabs;
