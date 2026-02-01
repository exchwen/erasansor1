'use client';
import React, { useState } from 'react';

const CustomerJoin = () => {
  // Veri takibi için State
  const [formData, setFormData] = useState({
    isim_soyisim: '',
    email: '',
    telefon: '',
    adres: '', 
  });
  const [status, setStatus] = useState(''); // Gönderim durumu (loading, success, error)

  // 🔴 DÜZELTME: Doğrudan Google linki yerine oluşturduğumuz API yolunu kullanıyoruz
  const SCRIPT_URL = "/api/send-google";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Google Script'in beklediği format
    const payload = {
      ...formData,
      form_source: 'Musteri Katilim Formu', // Kaynak etiketi
    };

    try {
      // 🔴 DÜZELTME: 'no-cors' modunu sildik, kendi API'mızdan yanıt bekliyoruz
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Sunucudan (API'dan) olumlu yanıt gelirse
      if (response.ok) {
        setStatus('success');
        setFormData({ isim_soyisim: '', email: '', telefon: '', adres: '' }); // Formu temizle
        
        // 3 saniye sonra butonu eski haline getir
        setTimeout(() => setStatus(''), 3000);
      } else {
        throw new Error('Sunucu hatası');
      }

    } catch (error) {
      console.error('Hata:', error);
      setStatus('error');
    }
  };

  return (
    <section className="bg-white py-12 md:py-16 text-black text-center px-6">
      <div className="container mx-auto max-w-4xl">
        {/* BAŞLIK */}
        <h2 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
          Hizmet Verdiğimiz{' '}
          <span className="text-[#fee123] text-2xl md:text-3xl font-bold block sm:inline">
            Binlerce&nbsp;<span className="notranslate">ER</span>&nbsp;Asansör
          </span>{' '}
          Müşterisi Arasına Katılmak İçin
        </h2>

        {/* ALT METİN */}
        <p className="text-gray-600 mb-8 text-sm md:text-base font-medium">
          Aşağıdaki Formu Doldurup Gönderin Sizleri Arayalım.
        </p>

        {/* FORM ALANI */}
        <form className="max-w-4xl mx-auto" onSubmit={handleSubmit}>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 text-left">
            {/* İSİM SOYİSİM */}
            <div className="flex flex-col gap-2">
              <label className="text-xs italic font-semibold text-gray-700 ml-1">
                İsim Soyisim *
              </label>
              <input
                name="isim_soyisim"
                type="text"
                required
                value={formData.isim_soyisim}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-[#f4f4f4] text-black outline-none border border-gray-200 focus:border-[#fee123] transition-all"
              />
            </div>

            {/* E-POSTA */}
            <div className="flex flex-col gap-2">
              <label className="text-xs italic font-semibold text-gray-700 ml-1">
                E-posta *
              </label>
              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-[#f4f4f4] text-black outline-none border border-gray-200 focus:border-[#fee123] transition-all"
              />
            </div>

            {/* TELEFON */}
            <div className="flex flex-col gap-2">
              <label className="text-xs italic font-semibold text-gray-700 ml-1">
                Telefon
              </label>
              <input
                name="telefon"
                type="tel"
                value={formData.telefon}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-[#f4f4f4] text-black outline-none border border-gray-200 focus:border-[#fee123] transition-all"
                placeholder="+90"
              />
            </div>

            {/* ADRES ALANI */}
            <div className="flex flex-col gap-2 md:col-span-3">
              <label className="text-xs italic font-semibold text-gray-700 ml-1">
                Adres (İlçe / Mahalle)
              </label>
              <input
                name="adres"
                type="text"
                value={formData.adres}
                onChange={handleChange}
                placeholder="Örn: Çankaya, Ayrancı Mah..."
                className="w-full p-3 rounded-md bg-[#f4f4f4] text-black outline-none border border-gray-200 focus:border-[#fee123] transition-all"
              />
            </div>
          </div>

          {/* GÖNDER BUTONU */}
          <div className="flex justify-center flex-col items-center gap-3">
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className={`font-bold py-3.5 px-12 md:px-20 rounded-full transition-all tracking-wider uppercase shadow-lg text-sm md:text-base active:scale-95 w-full sm:w-auto ${
                status === 'success' 
                  ? 'bg-green-500 text-white cursor-default' 
                  : 'bg-[#fee123] text-black hover:bg-black hover:text-white'
              }`}
            >
              {status === 'loading' ? 'GÖNDERİLİYOR...' : status === 'success' ? 'BAŞARIYLA GÖNDERİLDİ ✓' : 'GÖNDER'}
            </button>
            
            {status === 'error' && (
               <p className="text-red-600 text-sm font-bold">Bir hata oluştu, lütfen tekrar deneyin.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default CustomerJoin;
