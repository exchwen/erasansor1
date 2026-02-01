// components/IletisimForm.jsx
'use client'; 
import React, { useState } from 'react';

const IletisimForm = () => {
  const [status, setStatus] = useState('');

  // 🔴 DÜZELTME: Kendi API yolumuzu kullanıyoruz
  const API_URL = "/api/send-google";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Gönderiliyor...');

    // Form verilerini otomatik topla
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Google Script için payload (Kaynak belirttik)
    const payload = {
      ...data,
      form_source: 'Iletisim Sayfasi Formu'
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('Başarıyla gönderildi! En kısa sürede döneceğiz.');
        e.target.reset(); // Formu temizle
        
        // 3 saniye sonra mesajı temizle
        setTimeout(() => setStatus(''), 4000);
      } else {
        throw new Error('Sunucu hatası');
      }

    } catch (error) {
      console.error('Hata:', error);
      setStatus('Hata oluştu. Lütfen tekrar deneyin veya telefonla ulaşın.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      
      {/* İSİM & SOYİSİM */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-gray-500 text-[11px] font-bold pl-1 uppercase">Adınız *</label>
          <input name="user_name" type="text" required className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:border-[#fee123] outline-none text-sm transition-all text-black" />
        </div>
        <div className="space-y-1">
          <label className="text-gray-500 text-[11px] font-bold pl-1 uppercase">Soyadınız *</label>
          <input name="user_surname" type="text" required className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:border-[#fee123] outline-none text-sm transition-all text-black" />
        </div>
      </div>

      {/* ✨ YENİ: E-POSTA & TELEFON (Eksikti, eklendi) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-gray-500 text-[11px] font-bold pl-1 uppercase">E-Posta *</label>
          <input name="user_email" type="email" required className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:border-[#fee123] outline-none text-sm transition-all text-black" />
        </div>
        <div className="space-y-1">
          <label className="text-gray-500 text-[11px] font-bold pl-1 uppercase">Telefon *</label>
          <input name="user_phone" type="tel" required className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:border-[#fee123] outline-none text-sm transition-all text-black" />
        </div>
      </div>

      {/* ✨ YENİ: ADRES ALANI (Eksikti, eklendi) */}
      <div className="space-y-1">
        <label className="text-gray-500 text-[11px] font-bold pl-1 uppercase">Adres (İlçe / Mahalle)</label>
        <input name="address" type="text" placeholder="Örn: Çankaya, Ayrancı Mah..." className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:border-[#fee123] outline-none text-sm transition-all text-black" />
      </div>

      {/* KONU */}
      <div className="space-y-1">
        <label className="text-gray-500 text-[11px] font-bold pl-1 uppercase">Konu *</label>
        <select name="subject" defaultValue="" required className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:border-[#fee123] outline-none text-sm cursor-pointer transition-all text-black">
          <option value="" disabled>Konu Seçiniz *</option>
          <option value="satin-alma">Satın Alma / Teklif</option>
          <option value="teknik-destek">Teknik Destek</option>
          <option value="asansor-bakim">Asansör Bakım</option>
          <option value="asansor-ariza">Asansör Arıza</option>
          <option value="diger">Diğer</option>
        </select>
      </div>

      {/* MESAJ */}
      <div className="space-y-1">
        <label className="text-gray-500 text-[11px] font-bold pl-1 uppercase">Mesajınız *</label>
        <textarea name="message" rows="4" required className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:border-[#fee123] outline-none resize-none text-sm transition-all text-black"></textarea>
      </div>

      <button className="w-full bg-black text-white font-black py-4 rounded-xl hover:bg-[#fee123] hover:text-black transition-all duration-300 shadow-lg uppercase tracking-widest text-base mt-4 active:scale-95">
        {status === 'Gönderiliyor...' ? 'GÖNDERİLİYOR...' : 'TALEP GÖNDER!'}
      </button>
      
      {status && (
        <p className={`text-center text-sm font-bold mt-4 animate-bounce ${status.includes('Hata') ? 'text-red-600' : 'text-green-600'}`}>
          {status}
        </p>
      )}
    </form>
  );
};

export default IletisimForm;
