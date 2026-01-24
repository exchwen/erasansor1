'use client';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoTabs from './components/InfoTabs';
import Services from './components/Services';
import GeneralServices from './components/GeneralServices';
import Intro from './components/Intro';
import TalepFormu from './components/talep';
import HeroWelcome from './components/HeroWelcome';
import CustomerJoin from './components/CustomerJoin';
import LogoShowcase from './components/LogoShowcase';
import Footer from './components/Footer';

// Bu değişken bileşen dışında olduğu için client-side navigasyonda (menü tıklaması)
// hafızada kalır ama sayfa yenilendiğinde (F5) sıfırlanır.
let introHasPlayedGlobal = false;

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // 1. Global kontrol: Bu oturumda (refresh olana kadar) intro oynadı mı?
    if (introHasPlayedGlobal) {
      setIntroFinished(true);
    }
    setIsChecking(false);

    // 2. Body scroll yönetimi
    if (introFinished || introHasPlayedGlobal) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [introFinished]);

  // Intro bittiğinde veya atlandığında çalışacak fonksiyon
  const handleIntroFinish = () => {
    introHasPlayedGlobal = true; // Global değişkeni güncelle
    setIntroFinished(true);
  };

  // Kontrol tamamlanana kadar (Hydration hatasını önlemek için) boş ekran
  if (isChecking) return <div className="min-h-screen bg-black" />;

  return (
    <main className="min-h-screen bg-white">
      {/* 1. ADIM: Intro Animasyonu (Global hafızada yoksa göster) */}
      {!introFinished && <Intro onFinish={handleIntroFinish} />}

      {/* 2. ADIM: Ana Site İçeriği */}
      {introFinished && (
        <div className="animate-fade-in">
          <Header />

          <div className="pt-[100px]">
            {/* Üst Dairesel Hizmetler */}
            <Services />

            {/* Hakkımızda Bölümü */}
            <section id="hakkimizda" className="py-16 container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-64 h-64 bg-black flex items-center justify-center text-yellow-500 font-black text-8xl border-4 border-yellow-500 shadow-2xl rounded-xl">
                    ER
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold mb-4 border-l-8 border-yellow-500 pl-4 uppercase">
                    NEDEN ER ASANSÖR?
                  </h2>
                  <p className="mb-4 italic font-semibold text-gray-700 text-lg">
                    "Çünkü biz sadece asansör üretmiyoruz, güveni ve kaliteyi
                    yukarı taşıyoruz."
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    ER Asansör, mühendislik odaklı yaklaşımıyla projelerinizde
                    güveni en üst seviyeye taşır. Sektördeki yılların
                    tecrübesiyle, her projeye özel çözümler sunarak güvenli,
                    estetik ve uzun ömürlü asansör sistemleri üretiriz. Müşteri
                    memnuniyetini her zaman ön planda tutar; montajdan bakıma,
                    revizyondan servise kadar tüm süreçlerde titizlikle
                    çalışırız.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                    <div className="bg-gray-50 p-4 rounded border-l-4 border-yellow-500 shadow-sm font-bold">
                      Güvenlik standartlarına tam uyumlu.
                    </div>
                    <div className="bg-gray-50 p-4 rounded border-l-4 border-yellow-500 shadow-sm font-bold">
                      Alanında uzman teknik ekip.
                    </div>
                    <div className="bg-gray-50 p-4 rounded border-l-4 border-yellow-500 shadow-sm font-bold">
                      Modern ve yenilikçi çözümler.
                    </div>
                    <div className="bg-gray-50 p-4 rounded border-l-4 border-yellow-500 shadow-sm font-bold">
                      Kesintisiz destek hattı.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Hero />
            <InfoTabs />
            <GeneralServices />
            <TalepFormu />
            <HeroWelcome />
            <CustomerJoin />
            <LogoShowcase />
            <Footer />

            {/* WhatsApp Butonu */}
            <a
              href="https://wa.me/905312331711"
              target="_blank"
              className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all z-50 text-3xl animate-bounce"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.5 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
              </svg>
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
