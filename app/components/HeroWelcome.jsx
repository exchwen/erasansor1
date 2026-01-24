import React from 'react';

const WelcomeBottom = () => {
  return (
    <section className="bg-[#f8fdfc] py-16 flex flex-col items-center justify-center text-center px-4">
      {/* --- LOGO VE MARKA YAN YANA --- */}
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center justify-center gap-4 md:gap-6">
          {/* LOGO GÖRSELİ */}
          <img
            src="/logo.png" // public klasöründeki logonun ismi
            alt="ER ASANSÖR"
            className="h-16 md:h-24 w-auto object-contain"
          />

          {/* LOGO YANINDAKİ MARKA İSMİ - #fee123 RENGİYLE */}
          <h1 className="text-[#fee123] text-3xl md:text-5xl font-black tracking-tighter leading-none uppercase">
            ER ASANSÖR
          </h1>
        </div>

        {/* SLOGAN - image_5bd199.png referanslı */}
        <p className="text-[#2ec4b6] text-[14px] md:text-[16px] tracking-[0.4em] font-bold uppercase mt-6">
          Güvenliğiniz Bizimle Yükseliyor
        </p>
      </div>

      {/* Üst Ayıraç */}
      <div className="w-full max-w-4xl h-[1px] bg-gray-300/50 mb-10"></div>

      {/* --- MESAJ ALANI --- */}
      <div className="space-y-4">
        <h2 className="text-[#0e3a5d] text-2xl md:text-4xl font-medium tracking-tight">
          ER ASANSÖR ile yeni güne merhaba
        </h2>
        <p className="text-[#0e3a5d] text-base md:text-lg font-medium opacity-80">
          Güvenilir asansörler için 7/24 servis hizmeti alabilirsiniz.
        </p>
      </div>

      {/* Alt Ayıraç */}
      <div className="w-64 h-[1px] bg-gray-300/50 mt-12"></div>
    </section>
  );
};

export default WelcomeBottom;
