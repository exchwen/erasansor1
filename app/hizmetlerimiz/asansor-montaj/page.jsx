'use client';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Phone } from 'lucide-react';

const AsansorMontaj = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Header />
      
      {/* --- BAŞLIK ALANI --- */}
      {/* Mobilde pt-32, masaüstünde pt-48 yaparak üstteki beyaz boşluk sorununu çözdük */}
      <section className="pt-32 md:pt-48 pb-10 md:pb-16 bg-white text-center">
        <div className="container mx-auto px-6">
          {/* Font boyutları mobilde text-3xl'e çekilerek taşmalar önlendi */}
          <h1 className="text-black text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
            ASANSÖR MONTAJ
          </h1>
          <p className="text-gray-500 text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] mb-6">
            PROFESYONEL MÜHENDİSLİK ÇÖZÜMLERİMİZ
          </p>
          <div className="w-16 h-1 bg-[#fee123] mx-auto shadow-[0_2px_10px_rgba(254,225,35,0.3)]"></div>
        </div>
      </section>

      {/* İÇERİK SEKSİYONU */}
      <section className="py-12 md:py-20 container mx-auto px-6 max-w-4xl space-y-12">
        <div className="prose prose-base md:prose-lg max-w-none">
          {/* Mavi tonu (#1a3a4a) tamamen silindi, kurumsal siyah ve sarı şerit eklendi */}
          <h3 className="text-2xl font-black text-black mb-6 border-l-8 border-[#fee123] pl-4 uppercase">
            Projeye Özel Çözümler
          </h3>
          <p className="text-gray-700 leading-relaxed font-medium">
            Yeni bir yapı için ilk adım, güvenli ve kaliteli bir asansör
            sistemidir. ER Asansör olarak, bina yapısına ve kullanım ihtiyaçlarına
            uygun, uzun ömürlü ve yüksek standartlarda asansör montaj hizmetleri
            sunuyoruz.
          </p>

          <h4 className="text-xl font-bold text-black mt-8 mb-4 uppercase leading-tight">
            Montaj Hizmetimizde Neler Var?
          </h4>
          
          {/* Grid yapısı mobilde alt alta, md sonrası yan yana */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 mb-10">
            <li className="bg-gray-50 p-4 border-l-4 border-[#fee123] text-gray-700 font-bold text-sm md:text-base">
              Detaylı keşif ve analiz
            </li>
            <li className="bg-gray-50 p-4 border-l-4 border-[#fee123] text-gray-700 font-bold text-sm md:text-base">
              TSE uyumlu kurulum
            </li>
            <li className="bg-gray-50 p-4 border-l-4 border-black text-gray-700 font-bold text-sm md:text-base">
              Enerji verimli sistemler
            </li>
            <li className="bg-gray-50 p-4 border-l-4 border-black text-gray-700 font-bold text-sm md:text-base">
              Ruhsatlandırma desteği
            </li>
          </ul>

          <p className="text-center font-black text-lg md:text-2xl text-black py-6 border-y border-gray-100 italic">
            "ER Asansör – Katları değil, güveni taşıyoruz."
          </p>
        </div>

        {/* WHATSAPP BUTONU - Mobilde tam genişlik (w-full) ile kolay dokunmatik erişim */}
        <div className="flex justify-center pt-6 md:pt-10">
          <a
            href="https://wa.me/905312331711"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25d366] text-white px-8 md:px-12 py-4 rounded-full font-black flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-2xl active:scale-95 w-full sm:w-auto text-sm md:text-base"
          >
            <Phone size={24} /> WHATSAPP BİLGİ HATTI
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AsansorMontaj;