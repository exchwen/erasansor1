'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
// --- YENİ ---
import { EMAILJS_CONFIG } from './emailConfig';

const Hero = () => {
  const [formData, setFormData] = useState({
    ad: '',
    soyad: '',
    email: '',
    telefon: '',
    mesaj: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Gönderiliyor...');

    // --- ESKİ: const serviceID = 'service_xxxx'; ... ---
    // --- YENİ: Bilgiler EMAILJS_CONFIG üzerinden geliyor ---
    const templateParams = {
      from_name: `${formData.ad} ${formData.soyad}`,
      from_email: formData.email,
      to_name: EMAILJS_CONFIG.TO_NAME,
      message: formData.mesaj,
      phone: formData.telefon,
      user_email: formData.email,
    };

    emailjs
      .send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      .then(
        (response) => {
          setStatus('Başvurunuz başarıyla gönderildi!');
          setFormData({ ad: '', soyad: '', email: '', telefon: '', mesaj: '' });
        },
        (err) => {
          console.error('EmailJS Hatası:', err);
          setStatus('Gönderim sırasında bir hata oluştu.');
        }
      );
  };

  return (
    <div className="relative h-[650px] w-full bg-gray-900 flex items-center">
      <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-white max-w-2xl pt-10 md:pt-0">
          {/* --- YENİ: Başlık Fontu Black ve Uppercase yapıldı --- */}
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight uppercase tracking-tighter">
            Güven ve Kaliteyi <br />
            <span className="text-[#fee123]">Yukarı Taşıyoruz</span>
          </h1>
          <p className="text-lg mb-8 text-gray-200">
            ER Asansör, her projeye özel çözümler sunarak güvenli, estetik ve
            uzun ömürlü asansör sistemleri üretir.
          </p>

          <Link
            href="/hizmetlerimiz"
            className="bg-[#fee123] text-black px-8 py-3 font-bold rounded hover:bg-white transition uppercase"
          >
            Hizmetleri İncele
          </Link>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border-t-4 border-[#fee123] w-full max-w-md shadow-2xl">
          <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-2 h-6 bg-[#fee123] block"></span>
            HIZLI SERVİS FORMU
          </h3>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3">
              <input
                name="ad"
                type="text"
                placeholder="Ad"
                value={formData.ad}
                onChange={handleChange}
                required
                className="p-3 bg-white/90 rounded text-black outline-none focus:ring-2 ring-[#fee123]"
              />
              <input
                name="soyad"
                type="text"
                placeholder="Soyad"
                value={formData.soyad}
                onChange={handleChange}
                required
                className="p-3 bg-white/90 rounded text-black outline-none focus:ring-2 ring-[#fee123]"
              />
            </div>
            <input
              name="email"
              type="email"
              placeholder="E-Mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-white/90 rounded text-black outline-none focus:ring-2 ring-[#fee123]"
            />
            <input
              name="telefon"
              type="tel"
              placeholder="Telefon No"
              value={formData.telefon}
              onChange={handleChange}
              required
              className="w-full p-3 bg-white/90 rounded text-black outline-none focus:ring-2 ring-[#fee123]"
            />
            <textarea
              name="mesaj"
              placeholder="Adres / Sorun Tanımı"
              rows="2"
              value={formData.mesaj}
              onChange={handleChange}
              required
              className="w-full p-3 bg-white/90 rounded text-black outline-none focus:ring-2 ring-[#fee123]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#fee123] text-black font-bold py-3 rounded hover:bg-white transition uppercase"
            >
              BAŞVURU YAP
            </button>

            {status && (
              <p
                className={`text-center text-sm font-bold mt-2 animate-pulse ${
                  status.includes('hata') ? 'text-red-500' : 'text-[#fee123]'
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
