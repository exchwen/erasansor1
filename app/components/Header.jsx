'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaChevronDown,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSubMenuOpen, setIsMobileSubMenuOpen] = useState(false);

  // --- DİL DEĞİŞTİRME FONKSİYONU 1 ---
  const changeLanguage = (lang) => {
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event('change'));
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = 'auto';
      document.body.classList.remove('menu-open');
      setIsMobileSubMenuOpen(false);
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="w-full shadow-md fixed top-0 z-[100]">
      {/* Üst Bilgi Çubuğu (Siyah - Kontrast İçin) */}
      <div className="bg-black text-white py-2 text-xs font-medium border-b border-gray-800">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <a href="tel:02126071010" className="flex items-center gap-2 hover:text-[#fee123] transition shrink-0">
              <FaPhoneAlt className="text-[#fee123]" /> 
              <span className="hidden sm:inline">0 (212) 607 1010</span>
            </a>
            <a href="https://wa.me/905312331711" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#fee123] transition shrink-0">
              <FaWhatsapp className="text-lg text-[#fee123]" /> 
              <span className="hidden sm:inline">0 (531) 233 17 11</span>
            </a>
            <a href="mailto:erasansor.tr@gmail.com" className="flex items-center gap-2 hover:text-[#fee123] transition shrink-0">
              <FaEnvelope className="text-[#fee123]" /> 
              <span className="hidden md:inline">erasansor.tr@gmail.com</span>
            </a>
          </div>

          <div className="flex gap-3 md:gap-4 items-center">
            <a href="https://instagram.com/erasansor" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#fee123] transition shrink-0">
              <FaInstagram className="text-[#fee123]" /> 
              <span className="hidden lg:inline notranslate">erasansor</span>
            </a>
            <a href="https://wa.me/905312331711" target="_blank" rel="noopener noreferrer" className="bg-green-600 px-3 py-1 rounded text-white font-bold flex items-center gap-2 hover:bg-green-500 transition shadow-sm text-[10px] sm:text-xs">
              <FaWhatsapp /> <span className="hidden xs:inline">Teklif Al</span><span className="xs:hidden">Teklif</span>
            </a>

            {/* --- BAYRAK BUTONLARI --- */}
            <div className="flex items-center gap-2 ml-2 pl-2 border-l border-gray-700">
              <button onClick={() => changeLanguage('tr')} className="hover:scale-110 transition-transform duration-200" title="Türkçe">
                <img src="https://flagcdn.com/w40/tr.png" alt="TR" className="w-5 h-auto rounded-[2px] shadow-sm opacity-90 hover:opacity-100" />
              </button>
              <button onClick={() => changeLanguage('en')} className="hover:scale-110 transition-transform duration-200" title="English">
                <img src="https://flagcdn.com/w40/gb.png" alt="EN" className="w-5 h-auto rounded-[2px] shadow-sm opacity-90 hover:opacity-100" />
              </button>
              <button onClick={() => changeLanguage('ar')} className="hover:scale-110 transition-transform duration-200" title="Arabic">
                <img src="https://flagcdn.com/w40/sa.png" alt="AR" className="w-5 h-auto rounded-[2px] shadow-sm opacity-90 hover:opacity-100" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigasyon Alanı (BEYAZ) */}
      <div className="bg-white py-3 border-b border-gray-100 relative z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          {/* --- LOGO ALANI GÜNCELLENDİ --- */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            {/* DÜZELTME: group-hover:bg-white ve group-hover:border-white kaldırıldı */}
            {/* Logo Kutusu: Her zaman SİYAH zemin ve SARI çerçeve */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 bg-black border-2 border-[#fee123] rounded-md p-1 transition-all duration-300">
              <Image
                src="/logo.png"
                alt="ER ASANSÖR"
                fill
                sizes="(max-width: 768px) 40px, 48px"
                className="object-contain"
                priority
              />
            </div>
            {/* Metin Alanı: Sadece ASANSÖR yazısı */}
            <span className="text-black text-xl md:text-3xl font-black tracking-tighter uppercase">
              ASANSÖR
            </span>
          </Link>
          {/* --- LOGO ALANI SONU --- */}

          {/* Masaüstü Menü (Linkler SİYAH) */}
          <nav className="hidden md:flex gap-6 lg:gap-8 font-bold uppercase text-sm items-center text-black">
            <Link href="/" className="hover:text-[#d4af37] transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#d4af37] after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">Ana Sayfa</Link>
            <Link href="/hakkimizda" className="hover:text-[#d4af37] transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#d4af37] after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">Hakkımızda</Link>
            
            <div className="relative group py-2" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
              <Link href="/hizmetlerimiz" className="flex items-center gap-1 hover:text-[#d4af37] transition-colors">
                Hizmetlerimiz <FaChevronDown size={10} className={`text-[#d4af37] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white border-t-4 border-[#d4af37] shadow-xl rounded-b-xl overflow-hidden animate-in fade-in slide-in-from-top-2 border-x border-b border-gray-100">
                  <Link href="/hizmetlerimiz/periyodik-bakim" className="block px-6 py-4 text-black hover:bg-gray-50 hover:text-[#d4af37] border-b border-gray-100 uppercase text-xs font-bold tracking-tight">Periyodik Bakım</Link>
                  <Link href="/hizmetlerimiz/ariza-servisi" className="block px-6 py-4 text-black hover:bg-gray-50 hover:text-[#d4af37] border-b border-gray-100 uppercase text-xs font-bold tracking-tight">Arıza Servisi</Link>
                  <Link href="/hizmetlerimiz/revizyon" className="block px-6 py-4 text-black hover:bg-gray-50 hover:text-[#d4af37] border-b border-gray-100 uppercase text-xs font-bold tracking-tight">Revizyon (Yenileme)</Link>
                  <Link href="/hizmetlerimiz/asansor-montaj" className="block px-6 py-4 text-black hover:bg-gray-50 hover:text-[#d4af37] border-b border-gray-100 uppercase text-xs font-bold tracking-tight">Asansör Montaj</Link>
                  <Link href="/hizmetlerimiz/asansor-projelendirme" className="block px-6 py-4 text-black hover:bg-gray-50 hover:text-[#d4af37] uppercase text-xs font-bold tracking-tight">Asansör Projelendirme</Link>
                </div>
              )}
            </div>

            <Link href="/referanslar" className="hover:text-[#d4af37] transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#d4af37] after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">Referanslar</Link>
            <Link href="/cozumortaklari" className="hover:text-[#d4af37] transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#d4af37] after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">Çözüm Ortaklarımız</Link>
            <Link href="/iletisim" className="text-white bg-black border-2 border-black px-6 py-2.5 rounded-lg font-black hover:bg-white hover:text-black hover:border-black transition-all shadow-lg hover:shadow-xl text-xs">İLETİŞİM</Link>
          </nav>

          {/* Mobil Menü Butonu (SİYAH) */}
          <button className="md:hidden text-black text-2xl p-2 hover:bg-gray-100 rounded-lg transition" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes className="text-[#d4af37]" /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* --- MOBİL MENÜ (BEYAZ ARKA PLAN) --- */}
      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[-1]" onClick={() => setIsMobileMenuOpen(false)} />
          
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl animate-in slide-in-from-top duration-300 max-h-[85vh] overflow-y-auto">
            <nav className="flex flex-col p-5 font-bold uppercase text-xs md:text-sm text-black">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="py-4 border-b border-gray-100 hover:text-[#d4af37]">Ana Sayfa</Link>
              <Link href="/hakkimizda" onClick={() => setIsMobileMenuOpen(false)} className="py-4 border-b border-gray-100 hover:text-[#d4af37]">Hakkımızda</Link>
              
              <div className="flex flex-col border-b border-gray-100">
                <div className="flex items-center justify-between py-4">
                  <Link 
                    href="/hizmetlerimiz" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex-grow hover:text-[#d4af37]"
                  >
                    HİZMETLERİMİZ
                  </Link>
                  <button 
                    onClick={() => setIsMobileSubMenuOpen(!isMobileSubMenuOpen)}
                    className="p-3 -mr-3"
                  >
                    <FaChevronDown size={14} className={`text-[#d4af37] transition-transform duration-300 ${isMobileSubMenuOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                
                {isMobileSubMenuOpen && (
                  <div className="bg-gray-50 flex flex-col pl-6 pr-2 rounded-lg mb-4 animate-in slide-in-from-top-2">
                    <Link href="/hizmetlerimiz/periyodik-bakim" onClick={() => setIsMobileMenuOpen(false)} className="py-3 text-gray-600 text-[11px] border-b border-gray-200 hover:text-black">Periyodik Bakım</Link>
                    <Link href="/hizmetlerimiz/ariza-servisi" onClick={() => setIsMobileMenuOpen(false)} className="py-3 text-gray-600 text-[11px] border-b border-gray-200 hover:text-black">Arıza Servisi</Link>
                    <Link href="/hizmetlerimiz/revizyon" onClick={() => setIsMobileMenuOpen(false)} className="py-3 text-gray-600 text-[11px] border-b border-gray-200 hover:text-black">Revizyon (Yenileme)</Link>
                    <Link href="/hizmetlerimiz/asansor-montaj" onClick={() => setIsMobileMenuOpen(false)} className="py-3 text-gray-600 text-[11px] border-b border-gray-200 hover:text-black">Asansör Montaj</Link>
                    <Link href="/hizmetlerimiz/asansor-projelendirme" onClick={() => setIsMobileMenuOpen(false)} className="py-3 text-gray-600 text-[11px] hover:text-black">Asansör Projelendirme</Link>
                  </div>
                )}
              </div>

              <Link href="/referanslar" onClick={() => setIsMobileMenuOpen(false)} className="py-4 border-b border-gray-100 hover:text-[#d4af37]">Referanslar</Link>
              <Link href="/cozumortaklari" onClick={() => setIsMobileMenuOpen(false)} className="py-4 border-b border-gray-100 hover:text-[#d4af37]">Çözüm Ortaklarımız</Link>
              
              <Link href="/iletisim" onClick={() => setIsMobileMenuOpen(false)} className="mt-6 text-center bg-black text-white border-2 border-black py-3.5 rounded-lg font-black text-sm shadow-lg active:scale-95 transition-transform">
                İLETİŞİM
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
