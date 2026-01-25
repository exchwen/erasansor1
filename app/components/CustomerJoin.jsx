'use client';
import React from 'react';

const CustomerJoin = () => {
  return (
    // Arka plan beyaz, ana metin siyah
    <section className="bg-white py-12 text-black text-center px-4">
      <div className="container mx-auto max-w-4xl">
        {/* BAŞLIK: 
            - Font boyutları küçültüldü (text-2xl md:text-3xl).
            - 'font-black' yerine ilk koddaki 'font-bold' kullanıldı.
            - 'whitespace-nowrap' kaldırıldı, metin doğal olarak alt satıra geçecek.
        */}
        <h2 className="text-1xl md:text-2xl font-bold mb-4">
          Hizmet Verdiğimiz{' '}
          {/* VURGULANAN KISIM: Font boyutu küçültüldü, 'font-bold' kullanıldı */}
          <span className="text-[#fee123] text-2xl md:text-3xl font-bold">
            Binlerce ER Asansör
          </span>{' '}
          Müşterisi Arasına Katılmak İçin
        </h2>

        {/* ALT METİN: İlk koddaki font stili ve boyutu */}
        <p className="text-gray-600 mb-10 text-sm md:text-base font-medium">
          Aşağıdaki Formu Doldurup Gönderin Sizleri Arayalım.
        </p>

        {/* FORM ALANI */}
        <form className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
            {/* İSİM SOYİSİM */}
            <div className="flex flex-col gap-2">
              <label className="text-xs italic font-semibold text-gray-700 ml-1">
                İsim Soyisim *
              </label>
              <input
                type="text"
                required
                className="w-full p-3 rounded-md bg-[#f4f4f4] text-black outline-none border border-gray-200 focus:border-[#fee123] transition-all"
              />
            </div>

            {/* E-POSTA */}
            <div className="flex flex-col gap-2">
              <label className="text-xs italic font-semibold text-gray-700 ml-1">
                E-posta *
              </label>
              <input
                type="email"
                required
                className="w-full p-3 rounded-md bg-[#f4f4f4] text-black outline-none border border-gray-200 focus:border-[#fee123] transition-all"
              />
            </div>

            {/* TELEFON */}
            <div className="flex flex-col gap-2">
              <label className="text-xs italic font-semibold text-gray-700 ml-1">
                Telefon
              </label>
              <input
                type="tel"
                className="w-full p-3 rounded-md bg-[#f4f4f4] text-black outline-none border border-gray-200 focus:border-[#fee123] transition-all"
                placeholder="+90"
              />
            </div>
          </div>

          {/* GÖNDER BUTONU: 'font-black' yerine 'font-bold' kullanıldı */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#fee123] text-black font-bold py-3 px-16 md:px-20 rounded-full hover:bg-black hover:text-white transition-all tracking-wider uppercase shadow-lg text-sm md:text-base active:scale-95"
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