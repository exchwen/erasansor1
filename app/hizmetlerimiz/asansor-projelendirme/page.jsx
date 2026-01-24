'use client';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Phone } from 'lucide-react';

const Projelendirme = () => {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="pt-48 pb-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-black text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            ASANSÖR PROJELENDİRME
          </h1>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.4em] mb-6">
            PROFESYONEL MÜHENDİSLİK ÇÖZÜMLERİMİZ
          </p>
          <div className="w-16 h-1 bg-[#fee123] mx-auto"></div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 max-w-4xl text-gray-700">
        <h3 className="text-2xl font-black text-[#1a3a4a] mb-6">
          Doğru Proje, Güvenli Sistem
        </h3>
        <p className="mb-10 text-lg leading-relaxed">
          Her başarılı asansör sisteminin temelinde doğru ve detaylı bir
          projelendirme süreci yatar. ER Asansör olarak, asansör kurulumuna
          başlamadan önce yapının özelliklerine ve ihtiyaçlarına uygun
          mühendislik temelli projelendirme hizmeti sunuyoruz.
        </p>

        <div className="bg-[#1a3a4a] text-white p-10 rounded-3xl">
          <h4 className="text-[#fee123] text-xl font-bold mb-6 uppercase">
            Hizmet Kapsamımız
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <span>•</span> Yapı keşfi ve ihtiyaç analizi
            </div>
            <div className="flex items-center gap-3">
              <span>•</span> Kapasite ve trafik analizi
            </div>
            <div className="flex items-center gap-3">
              <span>•</span> Teknik şaft ölçüm ve çizim
            </div>
            <div className="flex items-center gap-3">
              <span>•</span> Ruhsat ve teknik belge hazırlığı
            </div>
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
export default Projelendirme;
