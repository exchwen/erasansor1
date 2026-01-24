import React from 'react';

const CustomerJoin = () => {
  return (
    // Görseldeki koyu lacivert/füme zemin (#1a3a4a civarı)
    <section className="bg-[#1a3a4a] py-12 text-white text-center px-4">
      <div className="container mx-auto max-w-5xl">
        {/* BAŞLIK - ER ASANSÖR olarak güncellendi */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
          Hizmet Verdiğimiz{' '}
          <span className="text-[#fee123]">Binlerce ER Asansör</span> Müşterisi
          Arasına Katılmak İçin
        </h2>

        {/* ALT METİN */}
        <p className="text-gray-300 mb-10 text-sm md:text-lg font-medium">
          Aşağıdaki Formu Doldurup Gönderin Sizleri Arayalım.
        </p>

        {/* FORM ALANI - 3'lü Grid yapısı */}
        <form className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* İSİM SOYİSİM */}
            <div className="flex flex-col items-start gap-2">
              <label className="text-xs italic font-semibold ml-1">
                İsim Soyisim *
              </label>
              <input
                type="text"
                required
                className="w-full p-3 rounded-md bg-[#e9ecef] text-black outline-none focus:ring-2 focus:ring-[#00bcd4] transition-all"
              />
            </div>

            {/* E-POSTA */}
            <div className="flex flex-col items-start gap-2">
              <label className="text-xs italic font-semibold ml-1">
                E-posta *
              </label>
              <input
                type="email"
                required
                className="w-full p-3 rounded-md bg-[#e9ecef] text-black outline-none focus:ring-2 focus:ring-[#00bcd4] transition-all"
              />
            </div>

            {/* TELEFON */}
            <div className="flex flex-col items-start gap-2">
              <label className="text-xs italic font-semibold ml-1">
                Telefon
              </label>
              <input
                type="tel"
                className="w-full p-3 rounded-md bg-[#e9ecef] text-black outline-none focus:ring-2 focus:ring-[#00bcd4] transition-all"
                placeholder="+90"
              />
            </div>
          </div>

          {/* GÖNDER BUTONU - Görseldeki Turkuaz/Cyan rengi (#00bcd4) */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#fee123] text-black font-black py-3 px-20 rounded-full hover:bg-white hover:scale-105 transition-all tracking-[0.2em] uppercase shadow-lg text-sm md:text-base"
            >
              GÖNDER
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CustomerJoin;
