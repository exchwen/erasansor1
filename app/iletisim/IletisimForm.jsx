// components/IletisimForm.jsx
'use client'; // Bu dosya istemci tarafında çalışacak
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../components/emailConfig';

const IletisimForm = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Gönderiliyor...');

    emailjs
      .sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      .then(() => {
        setStatus('Başarıyla gönderildi! En kısa sürede döneceğiz.');
        formRef.current.reset();
      })
      .catch(() => setStatus('Hata oluştu. Lütfen tekrar deneyin veya telefonla ulaşın.'));
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
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

      <div className="space-y-1">
        <label className="text-gray-500 text-[11px] font-bold pl-1 uppercase">Konu *</label>
        <select name="subject" defaultValue="" required className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:border-[#fee123] outline-none text-sm cursor-pointer transition-all text-black">
          <option value="" disabled>Konu Seçiniz *</option>
          <option value="satin-alma">Satın Alma / Teklif</option>
          <option value="teknik-destek">Teknik Destek</option>
          <option value="asansor-bakim">Asansör Bakım</option>
          <option value="asansor-ariza">Asansör Arıza</option>
        </select>
      </div>

      <div className="space-y-1">
        <label className="text-gray-500 text-[11px] font-bold pl-1 uppercase">Mesajınız *</label>
        <textarea name="message" rows="4" required className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:border-[#fee123] outline-none resize-none text-sm transition-all text-black"></textarea>
      </div>

      <button className="w-full bg-black text-white font-black py-4 rounded-xl hover:bg-[#fee123] hover:text-black transition-all duration-300 shadow-lg uppercase tracking-widest text-base mt-4 active:scale-95">
        TALEP GÖNDER!
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
