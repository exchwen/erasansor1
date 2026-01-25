'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
      {/* Üst Bilgi Çubuğu */}
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
            <a href="mailto:info@erasansor.com" className="flex items-center gap-2 hover:text-[#fee123] transition shrink-0">
              <FaEnvelope className="text-[#fee123]" /> 
              <span className="hidden md:inline">info@erasansor.com</span>
            </a>
          </div>

          <div className="flex gap-3 md:gap-4 items-center">
            <a href="https://instagram.com/erasansor" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#fee123] transition shrink-0">
              <FaInstagram className="text-[#fee123]" /> 
              <span className="hidden lg:inline">erasansor</span>
            </a>
            <a href="https://wa.me/905312331711" target="_blank" rel="noopener noreferrer" className="bg-green-600 px-3 py-1 rounded text-white font-bold flex items-center gap-2 hover:bg-green-500 transition shadow-sm text-[10px] sm:text-xs">
              <FaWhatsapp /> <span className="hidden xs:inline">Teklif Al</span><span className="xs:hidden">Teklif</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navigasyon Alanı */}
      <div className="bg-black py-3 border-b border-gray-800 relative z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl md:text-3xl font-black tracking-tighter flex items-center gap-2 group shrink-0">
            <span className="bg-[#fee123] text-black px-2 py-1 group-hover:bg-white transition-colors">ER</span>
            <span className="text-white uppercase">ASANSÖR</span>
          </Link>

          {/* Masaüstü Menü */}
          <nav className="hidden md:flex gap-6 lg:gap-8 font-bold uppercase text-sm items-center">
            <Link href="/" className="text-white hover:text-[#fee123] transition">Ana Sayfa</Link>
            <Link href="/hakkimizda" className="text-white hover:text-[#fee123] transition">Hakkımızda</Link>
            <div className="relative group py-2" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
              <Link href="/hizmetlerimiz" className="flex items-center gap-1 text-white hover:text-[#fee123] transition">
                Hizmetlerimiz <FaChevronDown size={10} className={`text-[#fee123] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-[#111] border-t-4 border-[#fee123] shadow-2xl rounded-b-xl overflow-hidden animate-in fade-in slide-in-from-top-2">
                  <Link href="/hizmetlerimiz/periyodik-bakim" className="block px-6 py-4 text-white hover:bg-gray-900 hover:text-[#fee123] border-b border-gray-800 uppercase text-xs font-bold tracking-tight">Periyodik Bakım</Link>
                  <Link href="/hizmetlerimiz/ariza-servisi" className="block px-6 py-4 text-white hover:bg-gray-900 hover:text-[#fee123] border-b border-gray-800 uppercase text-xs font-bold tracking-tight">Arıza Servisi</Link>
                  <Link href="/hizmetlerimiz/revizyon" className="block px-6 py-4 text-white hover:bg-gray-900 hover:text-[#fee123] border-b border-gray-800 uppercase text-xs font-bold tracking-tight">Revizyon (Yenileme)</Link>
                  <Link href="/hizmetlerimiz/asansor-montaj" className="block px-6 py-4 text-white hover:bg-gray-900 hover:text-[#fee123] border-b border-gray-800 uppercase text-xs font-bold tracking-tight">Asansör Montaj</Link>
                  <Link href="/hizmetlerimiz/asansor-projelendirme" className="block px-6 py-4 text-white hover:bg-gray-900 hover:text-[#fee123] uppercase text-xs font-bold tracking-tight">Asansör Projelendirme</Link>
                </div>
              )}
            </div>
            <Link href="/referanslar" className="text-white hover:text-[#fee123] transition">Referanslar</Link>
            <Link href="/iletisim" className="text-white border-2 border-[#fee123] px-5 py-2 rounded-lg font-black hover:bg-[#fee123] hover:text-black transition-all">İLETİŞİM</Link>
          </nav>

          <button className="md:hidden text-white text-2xl p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes className="text-[#fee123]" /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* --- MOBİL MENÜ --- */}
      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[-1]" onClick={() => setIsMobileMenuOpen(false)} />
          
          <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-gray-900 shadow-2xl animate-in slide-in-from-top duration-300 max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col p-5 font-bold uppercase text-xs md:text-sm">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="py-3 text-white border-b border-gray-900">Ana Sayfa</Link>
              <Link href="/hakkimizda" onClick={() => setIsMobileMenuOpen(false)} className="py-3 text-white border-b border-gray-900">Hakkımızda</Link>
              
              <div className="flex flex-col border-b border-gray-900">
                {/* MOBİL HİZMETLERİMİZ: Hem yönlendirme hem açma özelliği eklendi */}
                <div className="flex items-center justify-between py-3">
                  <Link 
                    href="/hizmetlerimiz" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white hover:text-[#fee123] flex-grow"
                  >
                    HİZMETLERİMİZ
                  </Link>
                  <button 
                    onClick={() => setIsMobileSubMenuOpen(!isMobileSubMenuOpen)}
                    className="p-2 -mr-2"
                  >
                    <FaChevronDown size={14} className={`text-[#fee123] transition-transform duration-300 ${isMobileSubMenuOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                
                {isMobileSubMenuOpen && (
                  <div className="bg-gray-950/50 flex flex-col pl-4 animate-in slide-in-from-top-2">
                    <Link href="/hizmetlerimiz/periyodik-bakim" onClick={() => setIsMobileMenuOpen(false)} className="py-2.5 text-gray-400 text-[10px] border-b border-gray-900/50 italic">Periyodik Bakım</Link>
                    <Link href="/hizmetlerimiz/ariza-servisi" onClick={() => setIsMobileMenuOpen(false)} className="py-2.5 text-gray-400 text-[10px] border-b border-gray-900/50 italic">Arıza Servisi</Link>
                    <Link href="/hizmetlerimiz/revizyon" onClick={() => setIsMobileMenuOpen(false)} className="py-2.5 text-gray-400 text-[10px] border-b border-gray-900/50 italic">Revizyon (Yenileme)</Link>
                    <Link href="/hizmetlerimiz/asansor-montaj" onClick={() => setIsMobileMenuOpen(false)} className="py-2.5 text-gray-400 text-[10px] border-b border-gray-900/50 italic">Asansör Montaj</Link>
                    <Link href="/hizmetlerimiz/asansor-projelendirme" onClick={() => setIsMobileMenuOpen(false)} className="py-2.5 text-gray-400 text-[10px] italic">Asansör Projelendirme</Link>
                  </div>
                )}
              </div>

              <Link href="/referanslar" onClick={() => setIsMobileMenuOpen(false)} className="py-3 text-white border-b border-gray-900">Referanslar</Link>
              <Link href="/iletisim" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 text-center bg-[#fee123] text-black py-3 rounded-lg font-black">İLETİŞİM</Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;