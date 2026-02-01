'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const [formData, setFormData] = useState({
    ad: '',
    soyad: '',
    email: '',
    telefon: '',
    adres: '', 
    mesaj: '',
  });
  const [status, setStatus] = useState('');

  // 🔴 DÜZELTME: Google linki yerine kendi API yolumuzu yazıyoruz
  const SCRIPT_URL = "/api/send-google";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Gönderiliyor...');

    const payload = {
      ...formData,
      form_source: 'Hero Hizli Servis Formu', // Kaynak etiketi
    };

    try {
      // 🔴 DÜZELTME: 'no-cors' kaldırıldı, kendi sunucumuzdan net yanıt bekliyoruz
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('Başvurunuz başarıyla gönderildi!');
        // Formu temizle
        setFormData({ ad: '', soyad: '', email: '', telefon: '', adres: '', mesaj: '' });
        
        // 3 saniye sonra mesajı kaldır
        setTimeout(() => setStatus(''), 3000);
      } else {
        throw new Error('Sunucu hatası');
      }

    } catch (err) {
      console.error('Hata:', err);
      setStatus('Gönderim sırasında bir hata oluştu.');
    }
  };

  return (
    // MOBİL ÇÖZÜM: h-[650px] yerine min-h-screen ve py-20 kullanarak içeriğin taşmasını önledik.
    <section className="relative min-h-screen md:h-[700px] w-full bg-black flex items-center overflow-hidden">
      
      {/* ARKA PLAN */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5?q=80&w=2000"
          alt="ER Asansör Modern Proje"
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-40"
          priority
        />
        {/* Karartma Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 pt-24 md:pt-0 pb-12 md:pb-0">
        
        {/* SOL METİN ALANI */}
        <div className="text-white text-center md:text-left max-w-2xl">
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-[1.1] uppercase tracking-tighter">
            Güven ve Kaliteyi <br />
            <span className="text-[#fee123] drop-shadow-[0_0_15px_rgba(254,225,35,0.3)]">Yukarı Taşıyoruz</span>
          </h1>
          <p className="text-base md:text-xl mb-10 text-gray-200 font-medium max-w-xl mx-auto md:mx-0">
            <span className="notranslate">ER</span>&nbsp;Asansör, her projeye özel çözümler sunarak güvenli, estetik ve
            uzun ömürlü asansör sistemleri üretir.
          </p>

          <Link
            href="/hizmetlerimiz"
            className="inline-block bg-[#fee123] text-black px-10 py-4 font-black rounded-sm hover:bg-white transition-all uppercase tracking-wider shadow-lg active:scale-95"
          >
            Hizmetleri İncele
          </Link>
        </div>

        {/* SAĞ FORM ALANI */}
        <div className="bg-black/40 backdrop-blur-xl p-6 md:p-8 rounded-sm border-t-4 border-[#fee123] w-full max-w-md shadow-2xl animate-fade-in-up">
          <h3 className="text-white text-xl font-black mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#fee123] block"></span>
            HIZLI SERVİS FORMU
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            
            {/* Ad & Soyad */}
            <div className="grid grid-cols-2 gap-4">
              <input
                name="ad"
                type="text"
                placeholder="Ad"
                value={formData.ad}
                onChange={handleChange}
                required
                className="p-3.5 bg-white rounded-sm text-black outline-none focus:ring-2 ring-[#fee123] transition-all"
              />
              <input
                name="soyad"
                type="text"
                placeholder="Soyad"
                value={formData.soyad}
                onChange={handleChange}
                required
                className="p-3.5 bg-white rounded-sm text-black outline-none focus:ring-2 ring-[#fee123] transition-all"
              />
            </div>

            {/* Email */}
            <input
              name="email"
              type="email"
              placeholder="E-Mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3.5 bg-white rounded-sm text-black outline-none focus:ring-2 ring-[#fee123] transition-all"
            />

            {/* Telefon */}
            <input
              name="telefon"
              type="tel"
              placeholder="Telefon No"
              value={formData.telefon}
              onChange={handleChange}
              required
              className="w-full p-3.5 bg-white rounded-sm text-black outline-none focus:ring-2 ring-[#fee123] transition-all"
            />

            {/* ✨ YENİ ADRES ALANI ✨ */}
            <input
              name="adres"
              type="text"
              placeholder="Adres (İlçe / Mahalle)"
              value={formData.adres}
              onChange={handleChange}
              className="w-full p-3.5 bg-white rounded-sm text-black outline-none focus:ring-2 ring-[#fee123] transition-all"
            />

            {/* Mesaj */}
            <textarea
              name="mesaj"
              placeholder="Sorun Tanımı / Mesajınız"
              rows="3"
              value={formData.mesaj}
              onChange={handleChange}
              required
              className="w-full p-3.5 bg-white rounded-sm text-black outline-none focus:ring-2 ring-[#fee123] transition-all resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#fee123] text-black font-black py-4 rounded-sm hover:bg-white transition-all uppercase tracking-widest shadow-lg active:scale-95"
            >
              BAŞVURU YAP
            </button>

            {status && (
              <p
                className={`text-center text-sm font-black mt-3 px-4 py-2 rounded ${
                  status.includes('hata') ? 'bg-red-500/20 text-red-500' : 'bg-[#fee123]/20 text-[#fee123]'
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
