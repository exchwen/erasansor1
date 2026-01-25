'use client';
import { useState } from 'react';

const tabs = [
  {
    id: 1,
    title: 'TEKNOLOJİLERİ TAKİP EDİYORUZ',
    content:
      'Asansör sektöründeki tüm yenilikleri yakından takip ediyoruz. Müşterilerimizin ihtiyaçlarını güncel ve güvenilir teknolojilerle karşılıyoruz. Günün ihtiyaçları doğrultusunda hizmet verdiğimiz müşterilere alternatif çözümler üretiyoruz.',
  },
  {
    id: 2,
    title: 'KADROMUZ',
    content:
      'Hizmet verdiğimiz asansör sayısına uygun personel sayısı ile 7 gün 24 saat kesintisiz hizmet sunuyoruz. Web sayfamızda yer alan iletişim seçenekleri ile muhatap bulma sorunu yaşamazsınız.',
  },
  {
    id: 3,
    title: 'TECRÜBE',
    content:
      '2002 yılından günümüze asansör sektöründe çeşitli kademelerde yer aldık. 2009 yılında ER Asansör’ün kurulumu ile sektördeki yerimizi aldık. Kurulduğumuz günkü prensiplerimiz ile çalışma hayatına devam etmekteyiz.',
  },
  {
    id: 4,
    title: 'HEDEFİMİZ',
    content:
      'Asansör sektöründe markamızın kalite ve güven ile birlikte anılmasıdır. Bu hedefe ulaşmak ve markamızı en iyi şekilde temsil etmek için çalışmalarımızı sürdürüyoruz.',
  },
];

const InfoTabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeContent = tabs.find((t) => t.id === activeTab);

  return (
    <div
      id="bizden-bilgiler"
      className="container mx-auto px-4 py-16 flex flex-col lg:flex-row gap-10"
    >
      {/* Sol Taraf: Yüksek Standartlar */}
      <div className="lg:w-1/2 mb-24">
        <h2 className="text-4xl font-black mb-6 border-l-8 border-[#fee123] pl-6 uppercase">
          YÜKSEK STANDARTLARDA HİZMET
        </h2>
        <p className="text-gray-600 mb-6 text-lg">
          ER Asansör hizmet verdiği sektördeki tüm yeterlilik sertifikalarına
          sahiptir. Daha fazlası için çalışıyoruz ve kaliteli hizmeti standart
          haline getirmek için çaba sarf ediyoruz.
        </p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center gap-4">
            <span className="w-4 h-4 bg-[#fee123] rounded-full flex-shrink-0 shadow-[0_0_10px_rgba(254,225,35,0.5)]"></span>
            <span className="text-gray-800">
              <strong className="font-black">Uluslararası standartlarda</strong> – tüm ürünlerimiz CE belgelidir.
            </span>
          </li>
          <li className="flex items-center gap-4">
            <span className="w-4 h-4 bg-[#fee123] rounded-full flex-shrink-0 shadow-[0_0_10px_rgba(254,225,35,0.5)]"></span>
            <span className="text-gray-800">
              <strong className="font-black">Sürekli eğitim</strong> – çalışanlarımız düzenli eğitimlere katılırlar.
            </span>
          </li>
          <li className="flex items-center gap-4">
            <span className="w-4 h-4 bg-[#fee123] rounded-full flex-shrink-0 shadow-[0_0_10px_rgba(254,225,35,0.5)]"></span>
            <span className="text-gray-800">
              <strong className="font-black">Önceliğimiz insan</strong> – her projede güvenliğe en yüksek önceliği veriyoruz.
            </span>
          </li>
        </ul>
        <p className="text-gray-500 italic border-t pt-6">
          Müşterilerimizden aldığımız destekle geleceğe güvenle bakıyoruz.
          Sizleri de <span className="text-black font-bold">ER Asansör</span> ailesinin bir parçası olarak görmekten mutluluk duyarız.
        </p>
      </div>

      {/* Sağ Taraf: Tab Menü (Maviler Siyah Yapıldı) */}
      <div className="lg:w-1/2 border border-gray-100 shadow-2xl rounded-2xl overflow-hidden flex flex-col bg-white">
        {/* Üst Başlık - Tam Siyah */}
        <div className="bg-black text-white text-center py-6 font-black text-2xl tracking-widest uppercase border-b border-[#fee123]">
          BİZDEN BİLGİLER
        </div>

        {/* Butonlar - Mavi Tonlar Kaldırıldı */}
        <div className="grid grid-cols-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-5 px-4 text-xs sm:text-sm md:text-base font-black transition-all duration-300 border-b-4 h-full flex items-center justify-center text-center uppercase tracking-tighter ${
                activeTab === tab.id
                  ? 'bg-black text-[#fee123] border-[#fee123] scale-[1.02] z-10'
                  : 'bg-white text-gray-400 hover:bg-gray-50 border-gray-100 hover:text-black'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* İçerik Alanı */}
        <div className="p-10 bg-white flex-grow flex items-center min-h-[250px] relative">
          <div className="absolute top-4 right-6 text-6xl text-gray-50 font-black select-none pointer-events-none">
            ER
          </div>
          <p className="text-gray-700 leading-relaxed text-xl animate-fade-in font-medium relative z-10">
            {activeContent ? activeContent.content : ''}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoTabs;