'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaChevronDown,
} from 'react-icons/fa';

const Header = () => {
  // Dropdown durum yönetimi
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="w-full shadow-md fixed top-0 z-50">
      {/* Üst Bilgi Çubuğu - İrtibat Bilgileri */}
      <div className="bg-black text-white py-2 text-xs sm:text-sm font-medium border-b border-gray-800">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          {/* SOL TARAFTAKİ İLETİŞİM BİLGİLERİ */}
          <div className="flex gap-4 items-center">
            <a
              href="tel:02126071010"
              className="flex items-center gap-2 hover:text-[#fee123] transition"
            >
              <FaPhoneAlt className="text-[#fee123]" /> 0 (212) 607 1010
            </a>

            <a
              href="https://wa.me/905312331711"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#fee123] transition"
            >
              <FaWhatsapp className="text-lg text-[#fee123]" /> 0 (531) 233 17 11
            </a>

            <a
              href="mailto:info@erasansor.com"
              className="hidden md:flex items-center gap-2 hover:text-[#fee123] transition"
            >
              <FaEnvelope className="text-[#fee123]" /> info@erasansor.com
            </a>
          </div>

          {/* SAĞ TARAFTAKİ SOSYAL MEDYA VE BUTON */}
          <div className="flex gap-4 items-center mt-2 sm:mt-0">
            <a
              href="https://instagram.com/erasansor"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 hover:text-[#fee123] transition"
            >
              <FaInstagram className="text-[#fee123]" /> erasansor
            </a>
            
            {/* WHATSAPP TEKLİF AL - Orijinal renginde bırakıldı */}
            <a
              href="https://wa.me/905312331711"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 px-3 py-1 rounded text-white font-bold flex items-center gap-2 hover:bg-green-500 transition shadow-sm"
            >
              <FaWhatsapp /> Teklif Al
            </a>
          </div>
        </div>
      </div>

      {/* Navigasyon Alanı */}
      <div className="bg-black py-4 border-b border-gray-800">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo Alanı - ER ASANSÖR */}
          <Link
            href="/"
            className="text-3xl font-black tracking-tighter flex items-center gap-2 group"
          >
            <span className="bg-[#fee123] text-black px-2 py-1 group-hover:bg-white transition-colors">
              ER
            </span>
            <span className="text-white uppercase">ASANSÖR</span>
          </Link>

          {/* Ana Menü */}
          <nav className="hidden md:flex gap-8 font-bold uppercase text-sm items-center">
            <Link
              href="/"
              className="text-white hover:text-[#fee123] transition"
            >
              Ana Sayfa
            </Link>

            <Link
              href="/hakkimizda"
              className="text-white hover:text-[#fee123] transition"
            >
              Hakkımızda
            </Link>

            {/* HİZMETLERİMİZ DROP DOWN */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link
                href="/hizmetlerimiz"
                className="flex items-center gap-1 text-white hover:text-[#fee123] transition"
              >
                Hizmetlerimiz{' '}
                <FaChevronDown
                  size={10}
                  className={`text-[#fee123] transition-transform duration-300 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </Link>

              {/* Açılır Menü Kutusu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-[#111] border-t-4 border-[#fee123] shadow-2xl rounded-b-xl overflow-hidden animate-in fade-in slide-in-from-top-2">
                  <Link
                    href="/hizmetlerimiz/periyodik-bakim"
                    className="block px-6 py-4 text-white hover:bg-gray-900 hover:text-[#fee123] transition-colors border-b border-gray-800 text-xs font-bold uppercase tracking-tight"
                  >
                    Periyodik Bakım
                  </Link>
                  <Link
                    href="/hizmetlerimiz/ariza-servisi"
                    className="block px-6 py-4 text-white hover:bg-gray-900 hover:text-[#fee123] transition-colors border-b border-gray-800 text-xs font-bold uppercase tracking-tight"
                  >
                    Arıza Servisi
                  </Link>
                  <Link
                    href="/hizmetlerimiz/revizyon"
                    className="block px-6 py-4 text-white hover:bg-gray-900 hover:text-[#fee123] transition-colors border-b border-gray-800 text-xs font-bold uppercase tracking-tight"
                  >
                    Revizyon (Yenileme)
                  </Link>
                  <Link
                    href="/hizmetlerimiz/asansor-montaj"
                    className="block px-6 py-4 text-white hover:bg-gray-900 hover:text-[#fee123] transition-colors border-b border-gray-800 text-xs font-bold uppercase tracking-tight"
                  >
                    Asansör Montaj
                  </Link>
                  <Link
                    href="/hizmetlerimiz/asansor-projelendirme"
                    className="block px-6 py-4 text-white hover:bg-gray-900 hover:text-[#fee123] transition-colors text-xs font-bold uppercase tracking-tight"
                  >
                    Asansör Projelendirme
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/referanslar"
              className="text-white hover:text-[#fee123] transition"
            >
              Referanslar
            </Link>

            {/* İLETİŞİM BUTONU */}
            <Link
              href="/iletisim"
              className="text-white border-2 border-[#fee123] px-5 py-2 rounded-lg font-black hover:bg-[#fee123] hover:text-black transition-all duration-300 active:scale-95"
            >
              İLETİŞİM
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;