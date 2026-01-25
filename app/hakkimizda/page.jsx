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

      {/* --- STANDART BAŞLIK STİLİ (image_236154.png Referanslı) --- */}
      <section className="pt-48 pb-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-black text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            ER ASANSÖR
          </h1>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.4em] mb-6">
            HAKKIMIZDA
          </p>
          <div className="w-16 h-1 bg-[#fee123] mx-auto"></div>
        </div>
      </section>

      {/* ANA İÇERİK - TARİHÇE */}
      <section className="py-20 container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-[#1a3a4a] border-l-8 border-[#fee123] pl-6 uppercase">
              Hakkımızda
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              ER Asansör, asansör sektöründeki yolculuğuna 2002 yılında
              başlamış, sektörde edindiği bilgi ve tecrübeyi 2009 yılında
              kurumsal bir yapıya taşıyarak faaliyetlerine resmen başlamıştır.
              Kuruluşumuzdan bu yana güvenilirlik, kalite ve müşteri
              memnuniyetini temel ilke edinerek; montaj, bakım, arıza giderme,
              revizyon ve modernizasyon hizmetlerinde uzman çözümler
              sunmaktayız.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Bugün, hem bireysel hem de kurumsal müşterilere hizmet veren,
              teknolojik gelişmeleri yakından takip eden, kalite standartlarına
              bağlı bir marka olmanın gururunu yaşıyoruz.
            </p>
          </div>
          <div className="relative bg-black rounded-3xl h-[400px] flex items-center justify-center p-12 overflow-hidden border-4 border-[#fee123] shadow-2xl group">
            <Image
              src="/logo.png"
              alt="ER ASANSÖR"
              className="max-h-full w-auto object-contain opacity-20 grayscale"
            />
          </div>
        </div>
      </section>

      {/* VİZYON & MİSYON */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-2xl shadow-xl border-t-8 border-[#fee123]">
            <div className="flex items-center gap-4 mb-6">
              <Eye className="text-[#1a3a4a]" size={40} />
              <h3 className="text-2xl font-black text-[#1a3a4a] uppercase">
                Vizyonumuz
              </h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Güvenli, yenilikçi ve sürdürülebilir çözümlerle Türkiye’nin en çok
              tercih edilen asansör firmalarından biri olmak; sektörde kalite ve
              güvenin simgesi haline gelmek.
            </p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-xl border-t-8 border-[#1a3a4a]">
            <div className="flex items-center gap-4 mb-6">
              <Target className="text-[#fee123]" size={40} />
              <h3 className="text-2xl font-black text-[#1a3a4a] uppercase">
                Misyonumuz
              </h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Müşteri ihtiyaçlarını doğru analiz ederek, her projeye özel
              kaliteli ve güvenli asansör çözümleri sunmak. Teknolojiyi takip
              eden bir anlayışla, sürdürülebilir hizmetler üretmek ve müşteri
              memnuniyetini daima en üst düzeyde tutmak.
            </p>
          </div>
        </div>
      </section>

      {/* DEĞERLERİMİZ */}
      <section className="py-20 container mx-auto px-4 max-w-6xl">
        <h3 className="text-3xl font-black text-center text-[#1a3a4a] uppercase mb-16">
          Değerlerimiz
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Güvenilirlik',
              desc: 'Tüm süreçlerimizde şeffaf ve güvenilir hizmet sunarız.',
              icon: ShieldCheck,
            },
            {
              title: 'Kalite',
              desc: 'Malzeme ve işçilikte daima yüksek kalite standartlarıyla çalışırız.',
              icon: Award,
            },
            {
              title: 'İş Ahlakı',
              desc: 'Etik değerlere bağlı, sorumluluk sahibi bir ekip anlayışıyla hareket ederiz.',
              icon: Users,
            },
            {
              title: 'Sürekli Gelişim',
              desc: 'Eğitim, teknoloji ve inovasyonla kendimizi sürekli geliştiririz.',
              icon: Zap,
            },
            {
              title: 'Müşteri Odaklılık',
              desc: 'Her zaman müşteri memnuniyetini ve güvenliğini önceliklendiririz.',
              icon: Users,
            },
          ].map((val, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-8 bg-white border border-gray-100 rounded-xl hover:shadow-2xl transition-all"
            >
              <val.icon className="text-[#fee123] mb-4" size={48} />
              <h4 className="text-xl font-bold text-[#1a3a4a] mb-2 uppercase">
                {val.title}
              </h4>
              <p className="text-gray-500">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HEDEFLERİMİZ */}
      <section className="py-20 bg-[#1a3a4a] text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="text-3xl font-black uppercase mb-12">Hedeflerimiz</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              'Hizmet ağımızı ulusal düzeyde genişletmek',
              'Yeni nesil asansör teknolojilerine yatırım yapmak',
              'Sektörde örnek gösterilen, sürdürülebilir bir marka haline gelmek',
              'Eğitimli ve uzman kadromuzla her projede mükemmeli hedeflemek',
            ].map((goal, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10"
              >
                <div className="w-8 h-8 bg-[#fee123] rounded-full flex items-center justify-center text-black font-black">
                  {i + 1}
                </div>
                <span className="font-medium">{goal}</span>
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

