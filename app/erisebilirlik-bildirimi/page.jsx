'use client';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ErisebilirlikBildirimi = () => {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* --- STANDART BAŞLIK STİLİ (image_236154.png Referanslı) --- */}
      <section className="pt-48 pb-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-black text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            ER ASANSÖR
          </h1>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.4em] mb-6">
            ERİŞİLEBİLİRLİK BİLDİRİMİ
          </p>
          <div className="w-16 h-1 bg-[#fee123] mx-auto"></div>
        </div>
      </section>

      {/* İÇERİK ALANI */}
      <section className="py-20 container mx-auto px-4 max-w-4xl text-gray-700 leading-relaxed">
        <div className="space-y-12">
          <div>
            <p className="text-lg font-medium">
              ER Asansör olarak, herkesin eşit erişim hakkına sahip olduğuna
              inanıyor ve sunduğumuz tüm hizmetlerin herkes için erişilebilir
              olmasını hedefliyoruz. Web sitemiz, dijital içeriklerimiz ve
              müşteri hizmetlerimiz dahil olmak üzere tüm platformlarımızda
              erişilebilirlik standartlarını karşılamak için çalışıyoruz.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-black text-[#1a3a4a] uppercase">
              Hedefimiz
            </h3>
            <p>
              Engelli bireyler de dahil olmak üzere tüm kullanıcıların
              hizmetlerimize kolayca ulaşabilmesini sağlamak amacıyla şu
              adımları atıyoruz:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Web sitemizi ekran okuyucularla uyumlu hale getirmeye,</li>
              <li>
                Renk kontrastlarını ve yazı boyutlarını erişilebilir
                standartlara göre düzenlemeye,
              </li>
              <li>
                Görsel içeriklerimize açıklayıcı metinler (alt metinler)
                eklemeye,
              </li>
              <li>Mobil uyumluluğu güçlendirmeye öncelik veriyoruz.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-black text-[#1a3a4a] uppercase">
              Sürekli İyileştirme
            </h3>
            <p>
              Erişilebilirlik uygulamalarımızı düzenli olarak gözden geçiriyor,
              geri bildirimleri dikkate alarak iyileştirmeler yapıyoruz.
              Teknolojik gelişmeleri yakından takip ederek kapsayıcı çözümler
              üretiyoruz.
            </p>
          </div>

          <div className="bg-[#1a3a4a] text-white p-8 rounded-2xl">
            <h3 className="text-[#fee123] text-xl font-black uppercase mb-4">
              Geri Bildirim
            </h3>
            <p className="mb-6">
              Web sitemiz veya hizmetlerimizle ilgili erişilebilirlik konusunda
              karşılaştığınız herhangi bir sorun varsa, bize bildirmenizi rica
              ederiz.
            </p>
            <p className="font-bold uppercase tracking-widest text-xs opacity-60 mb-2">
              İletişim Bilgilerimiz:
            </p>
            <p className="font-bold">Telefon: 0 (531) 233 1711</p>
            <p className="font-bold">E-posta: info@erasansor.com</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ErisebilirlikBildirimi;
