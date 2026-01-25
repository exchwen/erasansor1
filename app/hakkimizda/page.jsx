'use client';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Target, Eye, ShieldCheck, Zap, Users, Award } from 'lucide-react';
import Image from 'next/image';

const HakkimizdaPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* --- BAŞLIK ALANI --- */}
      <section className="pt-32 md:pt-48 pb-12 md:pb-16 bg-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
            ER ASANSÖR
          </h1>
          <p className="text-gray-500 text-[10px] md:text-sm font-bold uppercase tracking-[0.4em] mb-6">
            HAKKIMIZDA
          </p>
          <div className="w-16 h-1 bg-[#fee123] mx-auto shadow-[0_2px_10px_rgba(254,225,35,0.3)]"></div>
        </div>
      </section>

      {/* ANA İÇERİK - TARİHÇE */}
      <section className="py-12 md:py-20 container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-6 text-center md:text-left order-2 md:order-1">
            {/* Mavi tonu siyah yapıldı */}
            <h3 className="text-2xl md:text-3xl font-black text-black border-l-8 border-[#fee123] pl-6 uppercase">
              Kurumsal
            </h3>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg font-medium">
              ER Asansör, asansör sektöründeki yolculuğuna 2002 yılında
              başlamış, sektörde edindiği bilgi ve tecrübeyi 2009 yılında
              kurumsal bir yapıya taşıyarak faaliyetlerine resmen başlamıştır.
              Güvenilirlik, kalite ve müşteri memnuniyetini temel ilke edinerek uzman çözümler sunmaktayız.
            </p>
          </div>
          
          <div className="relative bg-black rounded-3xl h-[250px] md:h-[400px] flex items-center justify-center p-8 md:p-12 overflow-hidden border-4 border-[#fee123] shadow-2xl group order-1 md:order-2">
            <Image
              src="/logo.png"
              alt="ER ASANSÖR"
              width={350}
              height={350}
              className="max-h-full w-auto object-contain transition-transform group-hover:scale-110 duration-500"
              priority
            />
          </div>
        </div>
      </section>

      {/* VİZYON & MİSYON */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border-t-8 border-[#fee123]">
            <div className="flex items-center gap-4 mb-6">
              {/* İkon rengi siyah yapıldı */}
              <Eye className="text-black shrink-0" size={32} />
              <h3 className="text-xl md:text-2xl font-black text-black uppercase">
                Vizyonumuz
              </h3>
            </div>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed italic">
              "Güvenli, yenilikçi ve sürdürülebilir çözümlerle Türkiye’nin en çok
              tercih edilen asansör firmalarından biri olmak."
            </p>
          </div>
          {/* Mavi border siyah yapıldı */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border-t-8 border-black">
            <div className="flex items-center gap-4 mb-6">
              <Target className="text-[#fee123] shrink-0" size={32} />
              <h3 className="text-xl md:text-2xl font-black text-black uppercase">
                Misyonumuz
              </h3>
            </div>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed italic">
              "Müşteri ihtiyaçlarını doğru analiz ederek, her projeye özel
              kaliteli ve güvenli asansör çözümleri sunmak."
            </p>
          </div>
        </div>
      </section>

      {/* DEĞERLERİMİZ */}
      <section className="py-12 md:py-20 container mx-auto px-6 max-w-6xl">
        <h3 className="text-2xl md:text-3xl font-black text-center text-black uppercase mb-12">
          Değerlerimiz
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { title: 'Güvenilirlik', desc: 'Tüm süreçlerimizde şeffaf hizmet sunarız.', icon: ShieldCheck },
            { title: 'Kalite', desc: 'Daima yüksek kalite standartlarıyla çalışırız.', icon: Award },
            { title: 'İş Ahlakı', desc: 'Etik değerlere bağlı, uzman bir ekip.', icon: Users },
            { title: 'Sürekli Gelişim', desc: 'İnovasyonla kendimizi sürekli geliştiririz.', icon: Zap },
            { title: 'Müşteri Odaklılık', desc: 'Müşteri güvenliğini önceliklendiririz.', icon: Users },
          ].map((val, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-8 bg-white border border-gray-100 rounded-xl hover:shadow-2xl transition-all hover:border-[#fee123]"
            >
              <val.icon className="text-[#fee123] mb-4 shadow-sm" size={40} />
              {/* Başlık rengi siyah yapıldı */}
              <h4 className="text-lg md:text-xl font-bold text-black mb-2 uppercase">
                {val.title}
              </h4>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HEDEFLERİMİZ - Mavi arka plan siyah yapıldı */}
      <section className="py-12 md:py-20 bg-black text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h3 className="text-2xl md:text-3xl font-black uppercase mb-10 text-[#fee123]">Hedeflerimiz</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left">
            {[
              'Hizmet ağımızı ulusal düzeyde genişletmek',
              'Yeni nesil teknolojilerine yatırım yapmak',
              'Sürdürülebilir bir marka haline gelmek',
              'Her projede mükemmeli hedeflemek',
            ].map((goal, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-8 h-8 bg-[#fee123] rounded-full shrink-0 flex items-center justify-center text-black font-black text-sm">
                  {i + 1}
                </div>
                <span className="text-sm md:text-base font-medium leading-tight">{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default HakkimizdaPage;