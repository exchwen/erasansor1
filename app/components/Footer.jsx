'use client';
import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  // --- REFERANS LOGOLARI ---
  const referenceLogos = [
    { name: 'PARC', url: 'https://belge.alrafidainschools.com/parc.PNG' },
    {
      name: 'AL NAHDA',
      url: 'https://media.licdn.com/dms/image/v2/D560BAQEpgbp26ACjpw/company-logo_200_200/company-logo_200_200/0/1690647175922?e=2147483647&v=beta&t=p5AxIJU1v9LRjAo4r1QhDBIC_2_zk9ZpKbzygf_RVv8',
    },
    {
      name: 'AL FANAR',
      url: 'https://i.ytimg.com/vi/8Xra_G-1ZXo/hqdefault.jpg',
    },
    {
      name: 'AKADEMİ ROYAL',
      url: 'https://avatars.mds.yandex.net/get-altay/4632172/2a00000177b5a654c050db051fcabff1e59a/S_height',
    },
    {
      name: 'FİNAL AKADEMİ',
      url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRpQf14yRmo8HGdM4Rsi9xJJwgPE6W_GPazuwp1sFVXo1iqXv7Q',
    },
    {
      name: 'IBB',
      url: 'https://www.freelogovectors.net/wp-content/uploads/2022/01/ibb_istanbul-buyuksehir-belediyesi-logo-freelogovectors.net_-400x400.png',
    },
    {
      name: 'MEB',
      url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTT_nxYHsbFPkKn-JtQ8w64S1aDgZik13Vld9X263NRt8JoUKv0',
    },
    {
      name: 'TOKI',
      url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRrwuC02EInZSpl6gOn4g45VhcbttutFaaZXFHWjBhrWnqMTK7C',
    },
    {
      name: 'SEFAİ HÜRREM',
      url: 'https://www.butaworld.com/storage/medias/jy80SistKLE3DQdTNaPJVCsPtRX4V0uTzk6re4xm.jpeg',
    },
    {
      name: 'FEN BİLİMLERİ',
      url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRL62VjnjJTklUNYo6z1hhVNxjoH3Nub-VLP1_brocg0iVlEtWx',
    },
    {
      name: 'HERMANOS HOTEL',
      url: 'https://www.hermanoshotel.com/tema/genel/uploads/logo/logo.png',
    },
    {
      name: 'BURGER YİYELİM',
      url: 'https://ams3.digitaloceanspaces.com/cinebrand/images/brand/brand_logo/3f86f8f2-afd2-468d-9d1e-7a3fcbadbbfb.png?1623928571577',
    },
    {
      name: 'AVRUPA SİSTEM',
      url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQC220ZwM_fokGW_n3G7FEL1tbViG5I1uZ2KEcPzjM5AzPjHzU',
    },
    {
      name: 'IQS',
      url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTk7GiXOKTbnLNGXBtVcAxaRh99cq0XcHA9CmAZ8hTKW7QvxSlD',
    },
  ];

  const mapAddress = 'Merkez, Reşit Paşa Cd., 34310 Avcılar/İstanbul';
  // Düzeltilmiş Çivili Harita URL'si
  const googleMapsUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    mapAddress
  )}&output=embed`;
  const googleMapsExternalUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    mapAddress
  )}`;

  return (
    <footer id="iletisim" className="bg-[#1a3a4a] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* 1. KOLON: İLETİŞİM VE HARİTA */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-wider uppercase border-b-2 border-[#fee123] inline-block pb-1">
              ER ASANSÖR
            </h3>
            <div className="space-y-4 text-gray-300 font-medium text-sm">
              <a
                href="tel:05312331711"
                className="flex items-center gap-3 hover:text-[#fee123] transition-colors"
              >
                <Phone size={18} className="text-[#fee123]" /> 0 (531) 233 1711
              </a>
              <a
                href="tel:02126071010"
                className="flex items-center gap-3 hover:text-[#fee123] transition-colors"
              >
                <Phone size={18} className="text-[#fee123]" /> 0 (212) 607 1010
              </a>
              <a
                href="mailto:info@erasansor.com"
                className="flex items-center gap-3 hover:text-[#fee123] transition-colors"
              >
                <Mail size={18} className="text-[#fee123]" /> info@erasansor.com
              </a>
              <a
                href={googleMapsExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-[#fee123] transition-colors group"
              >
                <MapPin
                  size={22}
                  className="text-[#fee123] flex-shrink-0 group-hover:scale-110 transition-transform"
                />
                <span>Avcılar, Reşitpaşa cad., İstanbul 34310 Türkiye</span>
              </a>
            </div>

            {/* DÜZELTİLMİŞ IFRAME */}
            <div className="relative w-full h-40 rounded-lg overflow-hidden border border-white/10 shadow-lg group">
              <iframe
                title="ER ASANSÖR Konum"
                src={googleMapsUrl}
                className="w-full h-full grayscale-[30%] contrast-[1.1] brightness-[0.9]"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <a
                href={googleMapsExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 font-bold text-sm"
              >
                YOL TARİFİ AL <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* 2. KOLON: DİNAMİK REFERANSLAR */}
          <div className="text-center">
            <h3 className="text-xl font-bold tracking-wider uppercase mb-8">
              REFERANSLARIMIZ
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {referenceLogos.map((logo, index) => (
                <div
                  key={index}
                  className="bg-white/5 p-2 rounded flex items-center justify-center h-16 border border-white/5 hover:border-[#fee123]/50 transition-all group"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-h-full max-w-full object-contain opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 3. KOLON: HİZMETLERİMİZ */}
          <div className="md:pl-12">
            <h3 className="text-xl font-bold tracking-wider uppercase mb-8 border-b-2 border-[#fee123] inline-block pb-1">
              HİZMETLERİMİZ
            </h3>
            <ul className="space-y-4 font-bold text-gray-300 text-sm">
              {[
                {
                  name: 'Periyodik Bakım',
                  path: '/hizmetlerimiz/periyodik-bakim',
                },
                { name: 'Arıza Servisi', path: '/hizmetlerimiz/ariza-servisi' },
                {
                  name: 'Revizyon (Yenileme)',
                  path: '/hizmetlerimiz/revizyon',
                },
                {
                  name: 'Asansör Montaj',
                  path: '/hizmetlerimiz/asansor-montaj',
                },
                {
                  name: 'Asansör Projelendirme',
                  path: '/hizmetlerimiz/asansor-projelendirme',
                },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="hover:text-[#fee123] hover:translate-x-2 transition-all block uppercase tracking-tight"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ALT BAR - HUKUKİ LİNKLER */}
        <div className="mt-16 pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">
          <p>© 2026 ER ASANSÖR. Tüm hakları saklıdır.</p>
          <div className="flex gap-8">
            <Link
              href="/gizlilik-politikasi"
              className="hover:text-white transition-colors"
            >
              Gizlilik Politikası
            </Link>
            <Link
              href="/erisebilirlik-bildirimi"
              className="hover:text-white transition-colors"
            >
              Erişilebilirlik Bildirimi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
