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
        {' '}
        {/* Bölümün altına 96px dış boşluk eklendi */}
        <h2 className="text-3xl font-bold mb-6">YÜKSEK STANDARTLARDA HİZMET</h2>
        <p className="text-gray-600 mb-6">
          ER Asansör hizmet verdiği sektördeki tüm yeterlilik sertifikalarına
          sahiptir. Daha fazlası için çalışıyoruz ve kaliteli hizmeti standart
          haline getirmek için çaba sarf ediyoruz.
        </p>
        <ul className="space-y-3 mb-6">
          {' '}
          {/* Liste altına boşluk için mb-6 eklendi */}
          <li className="flex items-center gap-3">
            <span className="w-3 h-3 bg-er-yellow rounded-full flex-shrink-0"></span>
            <span>
              <strong>Uluslararası standartlarda</strong> – tüm ürünlerimiz CE
              belgelidir
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-3 h-3 bg-er-yellow rounded-full flex-shrink-0"></span>
            <span>
              <strong>Sürekli eğitim</strong> – çalışanlarımız düzenli
              eğitimlere katılırlar
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-3 h-3 bg-er-yellow rounded-full flex-shrink-0"></span>
            <span>
              <strong>Önceliğimiz insan</strong> – güvenliğe öncelik veriyoruz
            </span>
          </li>
        </ul>
        <p className="text-gray-600">
          Müşterilerimizden aldığımız destekle geleceğe güvenle bakıyoruz.
          Sizleri de Er Asansör ailesinin bir parçası olarak görmekten mutluluk
          duyarız.
        </p>
      </div>

      {/* Sağ Taraf: Tab Menü */}
      <div className="lg:w-1/2 border border-gray-200 shadow-lg rounded-lg overflow-hidden flex flex-col">
        <div className="bg-er-dark text-white text-center py-4 font-bold text-xl tracking-wide">
          BİZDEN BİLGİLER
        </div>

        {/* Butonlar */}
        <div className="grid grid-cols-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-2 text-xs sm:text-sm md:text-base font-bold transition-colors border-b-2 h-full flex items-center justify-center text-center ${
                activeTab === tab.id
                  ? 'bg-gray-700 text-er-yellow border-er-yellow'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-200'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* İçerik */}
        <div className="p-8 bg-gray-50 flex-grow flex items-center min-h-[200px]">
          <p className="text-gray-700 leading-relaxed text-lg animate-fade-in">
            {activeContent ? activeContent.content : ''}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoTabs;
