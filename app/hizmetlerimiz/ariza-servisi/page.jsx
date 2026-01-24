'use client';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Phone } from 'lucide-react';

const ArizaServisi = () => {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="pt-48 pb-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-black text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            ARIZA SERVİSİ
          </h1>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.4em] mb-6">
            PROFESYONEL MÜHENDİSLİK ÇÖZÜMLERİMİZ
          </p>
          <div className="w-16 h-1 bg-[#fee123] mx-auto"></div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 max-w-4xl">
        <h3 className="text-2xl font-black text-[#1a3a4a] mb-6">
          Hızlı Müdahale, Güvenli Çözüm
        </h3>
        <p className="mb-6">
          Asansörlerde yaşanabilecek elektriksel, mekanik veya yazılımsal
          arızalarda deneyimli teknik ekibimizle en kısa sürede müdahale
          ediyoruz. 7/24 hizmet verebilen mobil servis ağımız sayesinde
          sorunları yerinde tespit ederek güvenli ve sürdürülebilir çözümler
          sunuyoruz.
        </p>

        <h4 className="text-xl font-bold mb-4">
          Arıza Servisimizde Neler Var?
        </h4>
        <ul className="list-disc pl-5 space-y-3 mb-10">
          <li>Anında müdahale ve yerinde onarım</li>
          <li>
            Marka/model fark etmeksizin tüm asansör sistemlerine teknik destek
          </li>
          <li>Arıza sonrası kapsamlı kontrol ve güvenlik testleri</li>
          <li>Gerekli durumlarda orijinal yedek parça temini</li>
        </ul>

        <p className="italic text-gray-600 border-l-4 border-[#fee123] pl-4">
          Zaman kaybetmeyin. Arızalı bir asansör sadece konfor değil, güvenlik
          riski de taşır. ER Asansör olarak, güvenliğinizi önemsiyor ve
          sorunlarınıza hızlıca çözüm üretiyoruz.
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
export default ArizaServisi;
