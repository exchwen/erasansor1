'use client';
import React from 'react';

const CustomerJoin = () => {
  return (
    // Mobilde py-12, masaüstünde py-16 yaparak dikey alanı dengeledik
    <section className="bg-white py-12 md:py-16 text-black text-center px-6">
      <div className="container mx-auto max-w-4xl">
        {/* BAŞLIK */}
        <h2 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
          Hizmet Verdiğimiz{' '}
          <span className="text-[#fee123] text-2xl md:text-3xl font-bold block sm:inline">
            Binlerce <span className="notranslate">ER</span> Asansör
          </span>{' '}
          Müşterisi Arasına Katılmak İçin
        </h2>

        {/* ALT METİN */}
        <p className="text-gray-600 mb-8 text-sm md:text-base font-medium">
          Aşağıdaki Formu Doldurup Gönderin Sizleri Arayalım.
        </p>

        {/* FORM ALANI */}
        <form className="max-w-4xl mx-auto">
          {/* grid-cols-1 md:grid-cols-3 sayesinde mobilde alt alta, PC'de yan yana */}
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

          {/* GÖNDER BUTONU */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#fee123] text-black font-bold py-3.5 px-12 md:px-20 rounded-full hover:bg-black hover:text-white transition-all tracking-wider uppercase shadow-lg text-sm md:text-base active:scale-95 w-full sm:w-auto"
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
