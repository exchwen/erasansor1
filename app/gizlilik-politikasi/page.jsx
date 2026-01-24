'use client';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GizlilikPolitikasi = () => {
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
            GİZLİLİK POLİTİKASI
          </p>
          <div className="w-16 h-1 bg-[#fee123] mx-auto"></div>
        </div>
      </section>

      {/* İÇERİK ALANI */}
      <section className="py-20 container mx-auto px-4 max-w-4xl text-gray-700 leading-relaxed">
        <div className="space-y-12">
          <div>
            <p className="text-lg font-medium">
              ER Asansör olarak, müşterilerimizin ve ziyaretçilerimizin
              gizliliğini korumayı taahhüt ederiz. Kişisel verilerin korunması,
              hizmet kalitemizin bir parçasıdır ve 6698 sayılı Kişisel Verilerin
              Korunması Kanunu (KVKK) başta olmak üzere ilgili mevzuata uygun
              hareket etmekteyiz.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-black text-[#1a3a4a] uppercase">
              Toplanan Bilgiler
            </h3>
            <p>
              Hizmetlerimiz kapsamında aşağıdaki kişisel veriler toplanabilir:
            </p>
            <ul className="list-disc pl-6 space-y-2">
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
            <h3 className="text-2xl font-black text-[#1a3a4a] uppercase">
              Verilerin Toplanma Amaçları
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hizmet taleplerinizi değerlendirmek ve karşılamak</li>
              <li>Servis, bakım veya teklif süreçlerini yürütmek</li>
              <li>Müşteri ilişkilerini yönetmek ve geliştirmek</li>
              <li>Yasal yükümlülüklerimizi yerine getirmek</li>
              <li>Geri bildirimlerinizi almak ve iyileştirmeler yapmak</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-black text-[#1a3a4a] uppercase">
              Veri Paylaşımı
            </h3>
            <p>
              Toplanan kişisel veriler, yasal zorunluluklar dışında üçüncü
              kişilerle kesinlikle paylaşılmaz. Ancak, hizmetlerin
              sağlanabilmesi amacıyla anlaşmalı olduğumuz güvenilir iş
              ortaklarıyla paylaşım yapılabilir.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-black text-[#1a3a4a] uppercase">
              Güvenlik
            </h3>
            <p>
              Verilerinizin güvenliğini sağlamak için gerekli teknik ve idari
              tedbirleri almaktayız. Yetkisiz erişim, veri kaybı veya kötüye
              kullanımın önlenmesi amacıyla sistemlerimiz düzenli olarak
              denetlenmektedir.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-black text-[#1a3a4a] uppercase">
              Haklarınız
            </h3>
            <p>
              KVKK kapsamında kişisel verilerinizin işlenip işlenmediğini
              öğrenme, bilgi talep etme, düzeltilmesini veya silinmesini isteme
              haklarına sahipsiniz.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border-l-8 border-[#fee123]">
            <h3 className="text-xl font-black text-[#1a3a4a] uppercase mb-4">
              İletişim
            </h3>
            <p className="font-bold">ER ASANSÖR</p>
            <p>Telefon: 0 (531) 233 1711</p>
            <p>E-posta: info@erasansor.com</p>
            <p>Adres: Avcılar, Reşitpaşa Cad, 34361 İstanbul</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default GizlilikPolitikasi;
