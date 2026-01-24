'use client';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Phone } from 'lucide-react';

const AsansorMontaj = () => {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="pt-48 pb-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-black text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            ASANSÖR MONTAJ
          </h1>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.4em] mb-6">
            PROFESYONEL MÜHENDİSLİK ÇÖZÜMLERİMİZ
          </p>
          <div className="w-16 h-1 bg-[#fee123] mx-auto"></div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 max-w-4xl">
        <h3 className="text-2xl font-black text-[#1a3a4a] mb-6">
          Projeye Özel Çözümler
        </h3>
        <p className="mb-6">
          Yeni bir yapı için ilk adım, güvenli ve kaliteli bir asansör
          sistemidir. ER Asansör olarak, bina yapısına ve kullanım ihtiyaçlarına
          uygun, uzun ömürlü ve yüksek standartlarda asansör montaj hizmetleri
          sunuyoruz.
        </p>

        <h4 className="text-xl font-bold mb-4">
          Montaj Hizmetimizde Neler Var?
        </h4>
        <ul className="grid md:grid-cols-2 gap-4 list-none p-0 mb-10">
          <li className="bg-gray-50 p-4 border-l-4 border-[#fee123]">
            Detaylı keşif ve analiz
          </li>
          <li className="bg-gray-50 p-4 border-l-4 border-[#fee123]">
            TSE uyumlu kurulum
          </li>
          <li className="bg-gray-50 p-4 border-l-4 border-[#fee123]">
            Enerji verimli sistemler
          </li>
          <li className="bg-gray-50 p-4 border-l-4 border-[#fee123]">
            Ruhsatlandırma desteği
          </li>
        </ul>

        <p className="text-center font-bold text-xl text-[#1a3a4a]">
          ER Asansör – Katları değil, güveni taşıyoruz.
        </p>

        <div className="flex justify-center pt-16">
          <a
            href="https://wa.me/905312331711"
            target="_blank"
            className="bg-[#25d366] text-white px-10 py-4 rounded-full font-black flex items-center gap-3 hover:scale-105 transition-transform shadow-xl"
          >
            <Phone size={24} /> BİLGİ HATTI
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default AsansorMontaj;
