'use client';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Phone } from 'lucide-react';

const PeriyodikBakim = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Header />
      <section className="pt-48 pb-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-black text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            PERİYODİK BAKIM
          </h1>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.4em] mb-6">
            PROFESYONEL MÜHENDİSLİK ÇÖZÜMLERİMİZ
          </p>
          <div className="w-16 h-1 bg-[#fee123] mx-auto"></div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 max-w-4xl space-y-12">
        <div className="prose prose-lg max-w-none">
          <h3 className="text-2xl font-black text-[#1a3a4a] mb-6">
            Periyodik Bakım Hizmetleri
          </h3>
          <p>
            Asansörler, günlük yaşamın vazgeçilmez bir parçası haline gelmiştir.
            Bu nedenle, güvenli ve kesintisiz bir kullanım için düzenli bakım
            şarttır. ER Asansör olarak, asansörlerinizin uzun ömürlü, güvenli ve
            yasal yönetmeliklere uygun şekilde çalışmasını sağlamak amacıyla
            profesyonel periyodik bakım hizmetleri sunuyoruz.
          </p>

          <h4 className="text-xl font-bold mt-8 mb-4">
            Neden Periyodik Bakım?
          </h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Kullanıcı güvenliği için hayati öneme sahiptir.</li>
            <li>
              Arızaların erken tespiti ile büyük masrafların önüne geçilir.
            </li>
            <li>Yönetmeliklere ve yasal zorunluluklara tam uyum sağlanır.</li>
            <li>
              Asansörün verimli ve uzun ömürlü çalışması garanti altına alınır.
            </li>
          </ul>

          <h4 className="text-xl font-bold mt-8 mb-4">Neler Yapıyoruz?</h4>
          <p>
            Her bakım sürecinde; mekanik ve elektronik aksamların genel
            kontrolü, halatlar, fren sistemi, kapılar ve kabin donanımlarının
            test edilmesi, yağlama, temizlik ve ayar işlemleri gibi işlemleri
            özenle gerçekleştiriyoruz.
          </p>

          <h4 className="text-xl font-bold mt-8 mb-4">Neden ER Asansör?</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Uzman ve deneyimli teknik kadro</li>
            <li>Orijinal yedek parça ve kaliteli malzeme kullanımı</li>
            <li>Hızlı servis, zamanında müdahale</li>
            <li>Şeffaf hizmet anlayışı ve uygun fiyat politikası</li>
          </ul>
        </div>

        <div className="flex justify-center pt-10">
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
export default PeriyodikBakim;
