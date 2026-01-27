'use client';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GizlilikPolitikasi = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Header />

      {/* --- BAŞLIK ALANI --- */}
      <section className="pt-32 md:pt-48 pb-12 md:pb-16 bg-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
            {/* DÜZELTME 1: Başlıkta marka ismi birbirine yapıştırıldı */}
            <span className="notranslate">ER</span>&nbsp;ASANSÖR
          </h1>
          <p className="text-gray-500 text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] mb-6">
            GİZLİLİK POLİTİKASI
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
              <span className="notranslate">ER</span>&nbsp;Asansör olarak, müşterilerimizin ve ziyaretçilerimizin
              gizliliğini korumayı taahhüt ederiz. Kişisel verilerin korunması,
              hizmet kalitemizin bir parçasıdır ve 6698 sayılı Kişisel Verilerin
              Korunması Kanunu (KVKK) başta olmak üzere ilgili mevzuata uygun
              hareket etmekteyiz.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-black text-black uppercase border-l-4 border-[#fee123] pl-4">
              Toplanan Bilgiler
            </h3>
            <p className="text-sm md:text-base">
              Hizmetlerimiz kapsamında aşağıdaki kişisel veriler toplanabilir:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
              <li>İsim, soyisim</li>
              <li>Telefon numarası</li>
              <li>E-posta adresi</li>
              <li>Adres bilgisi</li>
              <li>Teknik servis talepleri veya form yanıtları</li>
              <li>
                Web sitemiz ya da WhatsApp gibi dijital iletişim kanallarımız
                aracılığıyla sağlanan diğer bilgiler
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-black text-black uppercase border-l-4 border-[#fee123] pl-4">
              Verilerin Toplanma Amaçları
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
              <li>Hizmet taleplerinizi değerlendirmek ve karşılamak</li>
              <li>Servis, bakım veya teklif süreçlerini yürütmek</li>
              <li>Müşteri ilişkilerini yönetmek ve geliştirmek</li>
              <li>Yasal yükümlülüklerimizi yerine getirmek</li>
              <li>Geri bildirimlerinizi almak ve iyileştirmeler yapmak</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-black text-black uppercase border-l-4 border-[#fee123] pl-4">
              Veri Paylaşımı
            </h3>
            <p className="text-sm md:text-base">
              Toplanan kişisel veriler, yasal zorunluluklar dışında üçüncü
              kişilerle kesinlikle paylaşılmaz. Ancak, hizmetlerin
              sağlanabilmesi amacıyla anlaşmalı olduğumuz güvenilir iş
              ortaklarıyla paylaşım yapılabilir.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-black text-black uppercase border-l-4 border-[#fee123] pl-4">
              Güvenlik
            </h3>
            <p className="text-sm md:text-base">
              Verilerinizin güvenliğini sağlamak için gerekli teknik ve idari
              tedbirleri almaktayız. Yetkisiz erişim, veri kaybı veya kötüye
              kullanımın önlenmesi amacıyla sistemlerimiz düzenli olarak
              denetlenmektedir.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-black text-black uppercase border-l-4 border-[#fee123] pl-4">
              Haklarınız
            </h3>
            <p className="text-sm md:text-base">
              KVKK kapsamında kişisel verilerinizin işlenip işlenmediğini
              öğrenme, bilgi talep etme, düzeltilmesini veya silinmesini isteme
              haklarına sahipsiniz.
            </p>
          </div>

          {/* İletişim Kutusu */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border-l-8 border-[#fee123] shadow-sm">
            <h3 className="text-lg md:text-xl font-black text-black uppercase mb-4">
              İletişim
            </h3>
            <div className="space-y-1 text-sm md:text-base">
               {/* DÜZELTME 3: İletişim alanındaki marka ismi kilitlendi */}
               <p className="font-bold text-black"><span className="notranslate">ER</span>&nbsp;ASANSÖR</p>
               
               {/* Telefon numarası korundu */}
               <p><span className="font-semibold">Telefon:</span> <span className="notranslate">0 (531) 233 1711</span></p>
               
               {/* E-posta adresi korundu */}
               <p><span className="font-semibold">E-posta:</span> <span className="notranslate">info@erasansor.com</span></p>
               
               <p><span className="font-semibold">Adres:</span> Avcılar, Reşitpaşa Cad, 34361 İstanbul</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default GizlilikPolitikasi;
