'use client';
import Header from '../components/Header';
import Footer from '../components/Footer'; // Manual footer yerine kurumsal footer
import GeneralServices from '../components/GeneralServices';

export default function HizmetlerimizPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* --- STANDART BAŞLIK STİLİ (image_236154.png Referanslı) --- */}
      <section className="pt-48 pb-8 bg-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-black text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            ASANSÖR HİZMETLERİ
          </h1>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.4em] mb-6">
            PROFESYONEL MÜHENDİSLİK ÇÖZÜMLERİMİZ
          </p>
          <div className="w-16 h-1 bg-[#fee123] mx-auto"></div>
        </div>
      </section>

      <div className="pb-10">
        <GeneralServices />
      </div>

      <Footer />
    </main>
  );
}
