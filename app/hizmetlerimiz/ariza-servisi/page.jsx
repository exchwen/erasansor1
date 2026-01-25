'use client';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Phone } from 'lucide-react';

const ArizaServisi = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Header />
      
      {/* --- BAŞLIK ALANI --- */}
      {/* Mobilde pt-32, masaüstünde pt-48 ile navbar boşluğu dengelendi */}
      <section className="pt-32 md:pt-48 pb-10 md:pb-16 bg-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-black text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
            ARIZA SERVİSİ
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
          {/* Mavi tonu kurumsal siyah yapıldı */}
          <h3 className="text-2xl font-black text-black mb-6 border-l-8 border-[#fee123] pl-4 uppercase">
            Hızlı Müdahale, Güvenli Çözüm
          </h3>
          <p className="text-gray-700 leading-relaxed font-medium">
            Asansörlerde yaşanabilecek elektriksel, mekanik veya yazılımsal
            arızalarda deneyimli teknik ekibimizle en kısa sürede müdahale
            ediyoruz. 7/24 hizmet verebilen mobil servis ağımız sayesinde
            sorunları yerinde tespit ederek güvenli ve sürdürülebilir çözümler
            sunuyoruz.
          </p>

          <h4 className="text-xl font-bold text-black mt-8 mb-4 uppercase">
            Arıza Servisimizde Neler Var?
          </h4>
          <ul className="list-disc pl-5 space-y-3 text-gray-600">
            <li>Anında müdahale ve yerinde onarım</li>
            <li>
              Marka/model fark etmeksizin tüm asansör sistemlerine teknik destek
            </li>
            <li>Arıza sonrası kapsamlı kontrol ve güvenlik testleri</li>
            <li>Gerekli durumlarda orijinal yedek parça temini</li>
          </ul>

          <p className="italic text-gray-600 border-l-4 border-[#fee123] pl-4 text-sm md:text-base bg-gray-50 py-4 pr-4">
            Zaman kaybetmeyin. Arızalı bir asansör sadece konfor değil, güvenlik
            riski de taşır. ER Asansör olarak, güvenliğinizi önemsiyor ve
            sorunlarınıza hızlıca çözüm üretiyoruz.
          </p>
        </div>

        {/* WHATSAPP BUTONU - Mobilde dokunmatik dostu ölçeklendirme */}
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
export default ArizaServisi;