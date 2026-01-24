'use client';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Phone } from 'lucide-react';

const Revizyon = () => {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="pt-48 pb-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-black text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            REVİZYON (YENİLEME)
          </h1>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.4em] mb-6">
            PROFESYONEL MÜHENDİSLİK ÇÖZÜMLERİMİZ
          </p>
          <div className="w-16 h-1 bg-[#fee123] mx-auto"></div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 max-w-4xl">
        <h3 className="text-2xl font-black text-[#1a3a4a] mb-6">
          Revizyon (Yenileme) Hizmeti
        </h3>
        <p className="mb-8">
          ER Asansör olarak, mevcut asansör sistemlerinizi modern teknolojiyle
          buluşturarak hem daha güvenli hem de daha estetik hale getiriyoruz.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h4 className="text-lg font-bold mb-4">Neden Revizyon?</h4>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Güvenlik risklerini ortadan kaldırmak</li>
              <li>Enerji verimliliğini artırmak</li>
              <li>Yönetmeliklere uygun hale getirmek</li>
              <li>Kullanıcı konforunu iyileştirmek</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Kapsamda Neler Var?</h4>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Kabin içi modernizasyon</li>
              <li>Makine dairesi ve motor yenilemeleri</li>
              <li>Emniyet sistemlerinin güncellenmesi</li>
              <li>Dijital gösterge çözümleri</li>
            </ul>
          </div>
        </div>

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
export default Revizyon;
