'use client';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ErisebilirlikBildirimi = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Header />

      {/* --- BAŞLIK ALANI --- */}
      <section className="pt-32 md:pt-48 pb-12 md:pb-16 bg-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
            {/* DÜZELTME 1: ER ve ASANSÖR kelimeleri &nbsp; ile birbirine kilitlendi */}
            <span className="notranslate">ER</span>&nbsp;ASANSÖR
          </h1>
          <p className="text-gray-500 text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] mb-6">
            ERİŞİLEBİLİRLİK BİLDİRİMİ
          </p>
          <div className="w-16 h-1 bg-[#fee123] mx-auto shadow-[0_2px_10px_rgba(254,225,35,0.3)]"></div>
        </div>
      </section>

      {/* İÇERİK ALANI */}
      <section className="py-12 md:py-20 container mx-auto px-6 max-w-4xl text-gray-700 leading-relaxed">
        <div className="space-y-12">
          <div>
            <p className="text-base md:text-lg font-medium">
              {/* DÜZELTME 2: Cümle başındaki marka ismi kilitlendi */}
              <span className="notranslate">ER</span>&nbsp;Asansör olarak, herkesin eşit erişim hakkına sahip olduğuna
              inanıyor ve sunduğumuz tüm hizmetlerin herkes için erişilebilir
              olmasını hedefliyoruz. Web sitemiz, dijital içeriklerimiz ve
              müşteri hizmetlerimiz dahil olmak üzere tüm platformlarımızda
              erişilebilirlik standartlarını karşılamak için çalışıyoruz.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-black text-black uppercase border-l-4 border-[#fee123] pl-4">
              Hedefimiz
            </h3>
            <p className="text-sm md:text-base">
              Engelli bireyler de dahil olmak üzere tüm kullanıcıların
              hizmetlerimize kolayca ulaşabilmesini sağlamak amacıyla şu
              adımları atıyoruz:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
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
            <h3 className="text-xl md:text-2xl font-black text-black uppercase border-l-4 border-[#fee123] pl-4">
              Sürekli İyileştirme
            </h3>
            <p className="text-sm md:text-base">
              Erişilebilirlik uygulamalarımızı düzenli olarak gözden geçiriyor,
              geri bildirimleri dikkate alarak iyileştirmeler yapıyoruz.
              Teknolojik gelişmeleri yakından takip ederek kapsayıcı çözümler
              üretiyoruz.
            </p>
          </div>

          {/* Geri Bildirim Kutusu */}
          <div className="bg-black text-white p-6 md:p-10 rounded-2xl border-t-8 border-[#fee123] shadow-xl">
            <h3 className="text-[#fee123] text-xl font-black uppercase mb-4">
              Geri Bildirim
            </h3>
            <p className="mb-6 text-sm md:text-base">
              Web sitemiz veya hizmetlerimizle ilgili erişilebilirlik konusunda
              karşılaştığınız herhangi bir sorun varsa, bize bildirmenizi rica
              ederiz.
            </p>
            <div className="space-y-1">
              <p className="font-bold uppercase tracking-widest text-[10px] opacity-60 mb-2">
                İletişim Bilgilerimiz:
              </p>
              {/* Telefon numarasını korumaya aldık */}
              <p className="font-bold text-sm md:text-base">Telefon: <span className="notranslate">0 (531) 233 1711</span></p>
              {/* E-posta adresini korumaya aldık (info kelimesi çevrilmesin diye) */}
              <p className="font-bold text-sm md:text-base">E-posta: <span className="notranslate">info@erasansor.com</span></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ErisebilirlikBildirimi;
