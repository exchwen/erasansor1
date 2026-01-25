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
  const googleMapsExternalUrl = `https://www.google.com/maps/search/${encodeURIComponent(mapAddress)}`;

  return (
    <footer id="iletisim" className="bg-black text-white pt-20 pb-10 border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          
          {/* 1. KOLON: İLETİŞİM VE HARİTA */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black tracking-widest uppercase border-b-4 border-[#fee123] inline-block pb-2">
              ER ASANSÖR
            </h3>
            <div className="space-y-5 text-gray-400 font-semibold text-sm">
              <a
                href="tel:05312331711"
                className="flex items-center gap-4 hover:text-[#fee123] transition-colors group"
              >
                <div className="bg-gray-900 p-2 rounded-full group-hover:bg-[#fee123] group-hover:text-black transition-all">
                  <Phone size={18} />
                </div>
                <span>0 (531) 233 1711</span>
              </a>
              <a
                href="tel:02126071010"
                className="flex items-center gap-4 hover:text-[#fee123] transition-colors group"
              >
                <div className="bg-gray-900 p-2 rounded-full group-hover:bg-[#fee123] group-hover:text-black transition-all">
                  <Phone size={18} />
                </div>
                <span>0 (212) 607 1010</span>
              </a>
              <a
                href="mailto:info@erasansor.com"
                className="flex items-center gap-4 hover:text-[#fee123] transition-colors group"
              >
                <div className="bg-gray-900 p-2 rounded-full group-hover:bg-[#fee123] group-hover:text-black transition-all">
                  <Mail size={18} />
                </div>
                <span>info@erasansor.com</span>
              </a>
              <a
                href={googleMapsExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 hover:text-[#fee123] transition-colors group"
              >
                <div className="bg-gray-900 p-2 rounded-full group-hover:bg-[#fee123] group-hover:text-black transition-all flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <span className="leading-relaxed">Avcılar, Reşitpaşa cad., İstanbul 34310 Türkiye</span>
              </a>
            </div>

            {/* HARİTA GÖRÜNÜMÜ */}
            <div className="relative w-full h-44 rounded-xl overflow-hidden border border-gray-800 shadow-2xl group">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10" />
              <iframe
                title="ER ASANSÖR Konum"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6502!2d28.7186!3d40.9901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU5JzI0LjQiTiAyOMKwNDMnMDcuMCJF!5e0!3m2!1str!2str!4v1640000000000!5m2!1str!2str"
                className="w-full h-full grayscale-[80%] contrast-[1.2] brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <a
                href={googleMapsExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 font-black text-xs bg-black/60 text-[#fee123]"
              >
                NAVİGASYONU AÇ <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* 2. KOLON: REFERANSLAR */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-black tracking-widest uppercase mb-10 text-[#fee123]">
              REFERANSLARIMIZ
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {referenceLogos.map((logo, index) => (
                <div
                  key={index}
                  className="bg-gray-950 p-3 rounded-lg flex items-center justify-center h-20 border border-gray-900 hover:border-[#fee123]/40 transition-all group"
                >
                  <Image
                    src={logo.url}
                    alt={logo.name}
                    className="max-h-full max-w-full object-contain opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 3. KOLON: HİZMETLERİMİZ */}
          <div className="md:pl-16">
            <h3 className="text-xl font-black tracking-widest uppercase mb-10 border-b-4 border-[#fee123] inline-block pb-2">
              HİZMETLERİMİZ
            </h3>
            <ul className="space-y-5 font-black text-gray-400 text-sm">
              {[
                { name: 'Periyodik Bakım', path: '/hizmetlerimiz/periyodik-bakim' },
                { name: 'Arıza Servisi', path: '/hizmetlerimiz/ariza-servisi' },
                { name: 'Revizyon (Yenileme)', path: '/hizmetlerimiz/revizyon' },
                { name: 'Asansör Montaj', path: '/hizmetlerimiz/asansor-montaj' },
                { name: 'Asansör Projelendirme', path: '/hizmetlerimiz/asansor-projelendirme' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="hover:text-[#fee123] hover:translate-x-3 transition-all block uppercase tracking-tighter"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ALT BAR - TELİF VE HUKUKİ */}
        <div className="mt-20 pt-10 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black text-gray-600 uppercase tracking-[0.3em]">
          <p>© 2026 ER ASANSÖR. Tüm hakları saklıdır.</p>
          <div className="flex gap-10">
            <Link href="/gizlilik-politikasi" className="hover:text-[#fee123] transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/erisebilirlik-bildirimi" className="hover:text-[#fee123] transition-colors">
              Erişilebilirlik
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;