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
import LiveChat from './components/LiveChat';
import Image from 'next/image';

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
                  {/* Logo Alanı */}
                  <div className="w-64 h-64 bg-black flex items-center justify-center border-4 border-yellow-500 shadow-2xl rounded-xl overflow-hidden p-8 relative">
                    {/* OPTİMİZASYON: <img> yerine Next.js <Image> kullanıldı */}
                    <Image 
                      src="/logo.png" 
                      alt="ER Asansör Logo" 
                      fill
                      style={{ objectFit: 'contain' }}
                      className="p-8"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold mb-4 border-l-8 border-yellow-500 pl-4 uppercase">
                    {/* DÜZELTME 1: Başlıktaki marka ismi kilitlendi */}
                    NEDEN <span className="notranslate">ER</span>&nbsp;ASANSÖR?
                  </h2>
                  <p className="mb-4 italic font-semibold text-gray-700 text-lg">
                    Çünkü biz sadece asansör üretmiyoruz, güveni ve kaliteyi
                    yukarı taşıyoruz.
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {/* DÜZELTME 2: Cümle başındaki marka ismi kilitlendi */}
                    <span className="notranslate">ER</span>&nbsp;Asansör, mühendislik odaklı yaklaşımıyla projelerinizde
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
            <LiveChat />
            
          </div>
        </div>
      )}
    </main>
  );
}
