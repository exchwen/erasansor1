'use client';
import React from 'react';

const WelcomeBottom = () => {
  return (
    <section className="bg-black py-20 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* --- LOGO VE MARKA YAN YANA --- */}
      <div className="flex flex-col items-center mb-10 z-10">
        <div className="flex items-center justify-center gap-4 md:gap-8 transition-transform hover:scale-105 duration-500">
          {/* LOGO GÖRSELİ */}
          <img
            src="/logo.png"
            alt="ER ASANSÖR"
            className="h-20 md:h-32 w-auto object-contain drop-shadow-[0_0_15px_rgba(254,225,35,0.2)]"
          />

          {/* LOGO YANINDAKİ MARKA İSMİ - #fee123 RENGİYLE */}
          <h1 className="text-[#fee123] text-4xl md:text-7xl font-black tracking-tighter leading-none uppercase">
            ASANSÖR
          </h1>
        </div>

        {/* SLOGAN - MAVİ RENK SARIYA ÇEVRİLDİ */}
        <p className="text-[#fee123] text-[14px] md:text-[18px] tracking-[0.5em] font-black uppercase mt-8 opacity-90">
          Güvenliğiniz Bizimle Yükseliyor
        </p>
      </div>

      {/* Üst Ayıraç - Altın Işıltılı */}
      <div className="w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-[#fee123]/50 to-transparent mb-12"></div>

      {/* --- MESAJ ALANI --- */}
      <div className="space-y-6 z-10">
        <h2 className="text-white text-3xl md:text-5xl font-black tracking-tight uppercase">
          ER ASANSÖR ile yeni güne merhaba
        </h2>
        <p className="text-gray-400 text-lg md:text-2xl font-medium tracking-wide max-w-3xl mx-auto leading-relaxed">
          Güvenilir asansörler için <span className="text-[#fee123] font-bold">7/24 servis</span> hizmeti alabilirsiniz.
        </p>
      </div>

      {/* Alt Ayıraç */}
      <div className="w-48 h-[2px] bg-[#fee123] mt-16 shadow-[0_0_10px_rgba(254,225,35,0.5)]"></div>
      
      {/* Hafif Arka Plan Dokusu */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white select-none">
          ER
        </div>
      </div>
    </section>
  );
};

export default WelcomeBottom;