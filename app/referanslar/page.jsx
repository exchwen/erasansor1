import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

// --- BU SAYFAYA ÖZEL SEO METADATA ---
export const metadata = {
  title: 'Referanslar | ER Asansör - Bize Güvenen Kurumlar',
  description: 'İBB, MEB, TOKİ ve daha birçok saygın kurumun asansör projelerinde ER Asansör kalitesini tercih ettiğini referanslarımız sayfasında inceleyebilirsiniz.',
  keywords: ['er asansör referanslar', 'asansör firma referansları', 'ibb asansör ihalesi', 'okul asansör bakımı', 'kamu asansör projeleri'],
  openGraph: {
    title: 'Referanslarımız | ER Asansör',
    description: 'Güçlü iş ortaklarımız ve başarıyla tamamladığımız projelerimiz.',
  },
};

const referenceLogos = [
  { name: 'PARC', url: 'https://belge.alrafidainschools.com/parc.PNG' },
  { name: 'AL NAHDA', url: 'https://media.licdn.com/dms/image/v2/D560BAQEpgbp26ACjpw/company-logo_200_200/company-logo_200_200/0/1690647175922?e=2147483647&v=beta&t=p5AxIJU1v9LRjAo4r1QhDBIC_2_zk9ZpKbzygf_RVv8' },
  { name: 'AL FANAR', url: 'https://i.ytimg.com/vi/8Xra_G-1ZXo/hqdefault.jpg' },
  { name: 'AKADEMİ ROYAL', url: 'https://avatars.mds.yandex.net/get-altay/4632172/2a00000177b5a654c050db051fcabff1e59a/S_height' },
  { name: 'FİNAL AKADEMİ', url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRpQf14yRmo8HGdM4Rsi9xJJwgPE6W_GPazuwp1sFVXo1iqXv7Q' },
  { name: 'IBB', url: 'https://www.freelogovectors.net/wp-content/uploads/2022/01/ibb_istanbul-buyuksehir-belediyesi-logo-freelogovectors.net_-400x400.png' },
  { name: 'MEB', url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTT_nxYHsbFPkKn-JtQ8w64S1aDgZik13Vld9X263NRt8JoUKv0' },
  { name: 'TOKI', url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRrwuC02EInZSpl6gOn4g45VhcbttutFaaZXFHWjBhrWnqMTK7C' },
  { name: 'SEFAİ HÜRREM', url: 'https://www.butaworld.com/storage/medias/jy80SistKLE3DQdTNaPJVCsPtRX4V0uTzk6re4xm.jpeg' },
  { name: 'FEN BİLİMLERİ', url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRL62VjnjJTklUNYo6z1hhVNxjoH3Nub-VLP1_brocg0iVlEtWx' },
  { name: 'HERMANOS HOTEL', url: 'https://www.hermanoshotel.com/tema/genel/uploads/logo/logo.png' },
  { name: 'BURGER YİYELİM', url: 'https://ams3.digitaloceanspaces.com/cinebrand/images/brand/brand_logo/3f86f8f2-afd2-468d-9d1e-7a3fcbadbbfb.png?1623928571577' },
  { name: 'AVRUPA SİSTEM', url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQC220ZwM_fokGW_n3G7FEL1tbViG5I1uZ2KEcPzjM5AzPjHzU' },
  { name: 'IQS', url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTk7GiXOKTbnLNGXBtVcAxaRh99cq0XcHA9CmAZ8hTKW7QvxSlD' },
];

// --- SCHEMA MARKUP (REFERANS LİSTESİ) ---
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'ER Asansör Referansları',
  description: 'ER Asansör tarafından hizmet verilen kurum ve kuruluşlar.',
  itemListElement: referenceLogos.map((logo, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Organization',
      name: logo.name
    }
  }))
};

const ReferanslarPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Schema Verisi */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      {/* --- BAŞLIK ALANI --- */}
      {/* Mobilde pt-32, masaüstünde pt-48 */}
      <section className="pt-32 md:pt-48 pb-12 md:pb-16 bg-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
            GÜÇLÜ İŞ ORTAKLARIMIZ
          </h1>
          <p className="text-gray-500 text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] mb-6">
            REFERANSLARIMIZ
          </p>
          <div className="w-16 h-1 bg-[#fee123] mx-auto shadow-[0_2px_10px_rgba(254,225,35,0.3)]"></div>
        </div>
      </section>

      {/* LOGO GRİD ALANI */}
      <section className="py-12 md:py-24 container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8">
          {referenceLogos.map((logo, index) => (
            <div
              key={index}
              className="bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center h-32 md:h-48 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
            >
              {/* DÜZELTME: Image bileşeni fill özelliği ile kapsayıcıya oturtuldu */}
              <div className="relative w-full h-full">
                <Image
                  src={logo.url}
                  alt={`${logo.name} - ER Asansör Referans`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                  className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ReferanslarPage;
