'use client';
import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  // --- REFERANS LOGOLARI ---
  const referenceLogos = [
    { name: 'PARC', url: 'https://belge.alrafidainschools.com/parc.PNG' },
    { name: 'AL NAHDA', url: 'https://media.licdn.com/dms/image/v2/D560BAQEpgbp26ACjpw/company-logo_200_200/company-logo_200_200/0/1690647175922?e=2147483647&v=beta&t=p5AxIJU1v9LRjAo4r1QhDBIC_2_zk9ZpKbzygf_RVv8' },
    { name: 'AL FANAR', url: 'https://i.ytimg.com/vi/8Xra_G-1ZXo/hqdefault.jpg' },
    { name: 'AKADEMİ ROYAL', url: 'https://avatars.mds.yandex.net/get-altay/4632172/2a00000177b5a654c050db051fcabff1e59a/S_height' },
    { name: 'FİNAL AKADEMİ', url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRpQf14yRmo8HGdM4Rsi9xJJwgPE6W_GPazuwp1sFVXo1iqXv7Q' },
    { name: 'IBB', url: 'https://www.freelogovectors.net/wp-content/uploads/2022/01/ibb_istanbul-buyuksehir-belediyesi-logo-freelogovectors.net_-400x400.png' },
    { name: 'MEB', url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTT_nxYHsbFPkKn-JtQ8w64S1aDgZik13Vld9X263NRt8JoUKv0' },
    { name: 'TOKI', url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRrwuC02EInZSpl6gOn4g45VhcbttutFaaZXFHWjBhrWnqMTK7C' },
    { name: 'SEFAİ HÜRREM', url: 'https://www.butaworld.com/storage/medias/jy80SistKLE3DQdTNaPJVCsPtRX4V0uTzk6re4xm.jpeg' },
    { name: 'FEN BİLİMLERİ', url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRL62VjnjJTklUNYo6z1hhVNxjoH3Nub-VLP1_brocg0iVlEtWx' },
    { name: 'HERMANOS HOTEL', url: 'https://www.hermanoshotel.com/tema/genel/uploads/logo/logo.png' },
    { name: 'BURGER YİYELİM', url: 'https://ams3.digitaloceanspaces.com/cinebrand/images/brand/brand_logo/3f86f8f2-afd2-468d-9d1e-7a3fcbadbbfb.png?1623928571577' },
    { name: 'AVRUPA SİSTEM', url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQC220ZwM_fokGW_n3G7FEL1tbViG5I1uZ2KEcPzjM5AzPjHzU' },
    { name: 'IQS', url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTk7GiXOKTbnLNGXBtVcAxaRh99cq0XcHA9CmAZ8hTKW7QvxSlD' },
  ];

  const mapAddress = 'Merkez, Reşit Paşa Cd., 34310 Avcılar/İstanbul';
  const googleMapsExternalUrl = `http://googleusercontent.com/maps.google.com/maps?q=${encodeURIComponent(mapAddress)}`;
  const googleMapsEmbedUrl = "https://maps.google.com/maps?q=Merkez%2C%20Re%C5%9Fit%20Pa%C5%9Fa%20Cd.%2C%2034310%20Avc%C4%B1lar%2F%C4%B0stanbul&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    // DÜZELTME: bg-black yerine bg-white, text-white yerine text-gray-800
    <footer id="iletisim" className="bg-white text-gray-800 pt-16 md:pt-20 pb-8 md:pb-10 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16">
          
          {/* 1. KOLON: İLETİŞİM VE HARİTA */}
          <div className="space-y-6 md:space-y-8">
            {/* LOGO VE BAŞLIK ALANI */}
            <div className="flex items-center gap-3 border-b-4 border-[#fee123] inline-flex pb-2">
              {/* Logo Kutusu: SİYAH zemin (Logo beyaz/sarı olduğu için) */}
              <div className="relative w-10 h-10 bg-black border-2 border-[#fee123] rounded-md p-1 shrink-0">
                <Image
                  src="/logo.png"
                  alt="ER ASANSÖR"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              {/* Metin: SİYAH */}
              <span className="text-2xl font-black tracking-widest uppercase text-black">ASANSÖR</span>
            </div>

            <div className="space-y-4 text-gray-600 font-semibold text-sm">
              <a href="tel:05312331711" className="flex items-center gap-4 hover:text-[#fee123] transition-colors group">
                {/* İkon Arkası: Açık Gri */}
                <div className="bg-gray-100 p-2.5 rounded-full group-hover:bg-[#fee123] group-hover:text-black transition-all shrink-0 text-black">
                  <Phone size={18} />
                </div>
                <span className="group-hover:text-black">0 (531) 233 1711</span>
              </a>
              <a href="tel:02126071010" className="flex items-center gap-4 hover:text-[#fee123] transition-colors group">
                <div className="bg-gray-100 p-2.5 rounded-full group-hover:bg-[#fee123] group-hover:text-black transition-all shrink-0 text-black">
                  <Phone size={18} />
                </div>
                <span className="group-hover:text-black">0 (212) 607 1010</span>
              </a>
              <a href="mailto:info@erasansor.com" className="flex items-center gap-4 hover:text-[#fee123] transition-colors group">
                <div className="bg-gray-100 p-2.5 rounded-full group-hover:bg-[#fee123] group-hover:text-black transition-all shrink-0 text-black">
                  <Mail size={18} />
                </div>
                <span className="break-all group-hover:text-black">info@erasansor.com</span>
              </a>
              <a href={googleMapsExternalUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 hover:text-[#fee123] transition-colors group">
                <div className="bg-gray-100 p-2.5 rounded-full group-hover:bg-[#fee123] group-hover:text-black transition-all shrink-0 text-black">
                  <MapPin size={18} />
                </div>
                <span className="leading-relaxed group-hover:text-black">Avcılar, Reşitpaşa cad., İstanbul 34310 Türkiye</span>
              </a>
            </div>

            {/* HARİTA GÖRÜNÜMÜ */}
            <div className="relative w-full h-40 md:h-44 rounded-xl overflow-hidden border border-gray-200 shadow-lg group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500 z-10" />
              <iframe
                title="ER ASANSÖR Konum"
                src={googleMapsEmbedUrl}
                className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <a href={googleMapsExternalUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 font-black text-[10px] md:text-xs bg-black/70 text-[#fee123] uppercase tracking-widest">
                Navigasyonu Aç <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* 2. KOLON: REFERANSLAR */}
          <div className="text-left">
            <h3 className="text-xl font-black tracking-widest uppercase mb-8 md:mb-10 text-black border-b-4 border-[#fee123] inline-block pb-2">
              REFERANSLARIMIZ
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-2 md:gap-3">
              {referenceLogos.slice(0, 12).map((logo, index) => (
                // Logo Kutusu: Açık gri zemin ve gri kenarlık
                <div key={index} className="bg-gray-50 p-2 rounded-lg flex items-center justify-center h-16 md:h-20 border border-gray-100 hover:border-[#fee123] transition-all group hover:shadow-md">
                  <Image
                    src={logo.url}
                    alt={logo.name}
                    width={80}
                    height={50}
                    className="max-h-full max-w-full object-contain opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
            <Link href="/referanslar" className="inline-block mt-6 text-black text-[10px] font-bold uppercase tracking-widest border-b border-[#fee123] hover:text-[#d4af37] transition-all">
              Tüm Referansları Gör →
            </Link>
          </div>

          {/* 3. KOLON: HİZMETLERİMİZ */}
          <div className="md:pl-12 lg:pl-16">
            <h3 className="text-xl font-black tracking-widest uppercase mb-8 md:mb-10 border-b-4 border-[#fee123] inline-block pb-2 text-black">
              HİZMETLERİMİZ
            </h3>
            <ul className="space-y-4 md:space-y-5 font-bold text-gray-600 text-sm">
              {[
                { name: 'Periyodik Bakım', path: '/hizmetlerimiz/periyodik-bakim' },
                { name: 'Arıza Servisi', path: '/hizmetlerimiz/ariza-servisi' },
                { name: 'Revizyon (Yenileme)', path: '/hizmetlerimiz/revizyon' },
                { name: 'Asansör Montaj', path: '/hizmetlerimiz/asansor-montaj' },
                { name: 'Asansör Projelendirme', path: '/hizmetlerimiz/asansor-projelendirme' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="hover:text-black hover:translate-x-2 transition-all inline-block uppercase tracking-tight relative hover:before:content-['-'] hover:before:mr-1">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ALT BAR (BEYAZ ZEMİNDE KOYU GRİ ÇİZGİ) */}
        <div className="mt-12 md:mt-20 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] md:tracking-[0.3em] text-center md:text-left">
          <div className="space-y-1">
            <p>
              © 2009 <span className="notranslate text-black">ER</span> ASANSÖR
            </p>
            <p className="text-gray-400">TÜM HAKLARI SAKLIDIR.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <Link href="/gizlilik-politikasi" className="hover:text-black transition-colors">Gizlilik Politikası</Link>
            <Link href="/erisebilirlik-bildirimi" className="hover:text-black transition-colors">Erişilebilirlik</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
