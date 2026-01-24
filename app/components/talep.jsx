'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
// --- YENİ ---
import { EMAILJS_CONFIG } from './emailConfig';

const TalepFormu = () => {
  const form = useRef();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const slides = [
    '7/24 BİLGİ HATTI',
    'SİZİ ARAYALIM',
    'SERVİS TALEP FORMU',
    'HIZLI BİLGİ FORMU',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // --- ESKİ: emailjs.sendForm('YOUR_SERVICE_ID', ...) ---
    // --- YENİ: EMAILJS_CONFIG kullanılıyor ---
    emailjs
      .sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      .then(() => {
        setStatus({
          type: 'success',
          message: 'Talebiniz başarıyla iletildi! En kısa sürede döneceğiz.',
        });
        form.current.reset();
      })
      .catch((error) => {
        console.error('Hata:', error);
        setStatus({
          type: 'error',
          message: 'Bir hata oluştu. Lütfen tekrar deneyin.',
        });
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section
      id="iletisim-formu"
      className="relative py-20 min-h-[650px] flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://cdn.gazetepencere.com/news/8821.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-[1px]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          <div className="w-full lg:w-1/2 text-white space-y-8">
            <div className="space-y-4">
              <div className="w-16 h-1 bg-[#fee123]"></div>
              <div className="h-16 overflow-hidden relative">
                {slides.map((text, index) => (
                  <h2
                    key={index}
                    className={`absolute inset-0 text-4xl md:text-5xl font-black uppercase transition-all duration-1000 ease-in-out ${
                      index === activeSlide
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    }`}
                  >
                    {text}
                  </h2>
                ))}
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-md font-medium">
              Güvenilir ve etkili çözümlerimizle, müşterilerimizin asansör
              sistemlerini sorunsuz bir şekilde işler durumda tutmayı
              hedefliyoruz.
            </p>

            <a
              href="https://wa.me/905312331711"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 border-2 border-[#fee123] bg-[#fee123]/10 hover:bg-[#fee123] text-white hover:text-black px-10 py-4 rounded-full font-bold transition-all group shadow-xl active:scale-95"
            >
              <Phone size={22} className="group-hover:animate-pulse" />
              İLETİŞİM HATTI
            </a>
          </div>

          <div className="w-full lg:w-[480px] bg-white p-10 rounded-2xl shadow-2xl">
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="user_name"
                  placeholder="Adınız *"
                  required
                  className="p-3 border-b-2 border-gray-100 focus:border-[#fee123] outline-none text-sm font-semibold transition-all"
                />
                <input
                  name="user_surname"
                  placeholder="Soyadınız *"
                  required
                  className="p-3 border-b-2 border-gray-100 focus:border-[#fee123] outline-none text-sm font-semibold transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                  Konu Seçiniz *
                </label>
                <select
                  name="subject"
                  required
                  className="w-full p-3 border-b-2 border-gray-100 focus:border-[#fee123] outline-none bg-transparent text-sm font-bold cursor-pointer text-gray-700"
                >
                  <option value="">Birini seçin</option>
                  <option value="Satin Alma">Satın Alma</option>
                  <option value="Teknik Destek">Teknik Destek</option>
                  <option value="Asansor Bakim">Asansör Bakım</option>
                  <option value="Asansor Ariza">Asansör Arıza</option>
                  <option value="Diger">Diğer</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  name="user_email"
                  type="email"
                  placeholder="E-Posta *"
                  required
                  className="p-3 border-b-2 border-gray-100 focus:border-[#fee123] outline-none text-sm font-semibold transition-all"
                />
                <input
                  name="user_phone"
                  type="tel"
                  placeholder="Telefon *"
                  required
                  className="p-3 border-b-2 border-gray-100 focus:border-[#fee123] outline-none text-sm font-semibold transition-all"
                />
              </div>

              <textarea
                name="message"
                rows="3"
                placeholder="Mesajınız *"
                required
                className="w-full p-3 border-b-2 border-gray-100 focus:border-[#fee123] outline-none text-sm font-semibold resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={isSending}
                className={`w-full py-4 rounded-lg font-black tracking-widest uppercase transition-all shadow-xl ${
                  isSending
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-[#1a3a4a] text-white hover:bg-[#fee123] hover:text-black hover:-translate-y-1'
                }`}
              >
                {isSending ? 'İŞLENİYOR...' : 'TALEP GÖNDER'}
              </button>

              {status.message && (
                <div
                  className={`text-center text-xs font-black p-3 rounded-lg border-2 animate-fade-in ${
                    status.type === 'success'
                      ? 'bg-green-50 border-green-200 text-green-700'
                      : 'bg-red-50 border-red-200 text-red-700'
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalepFormu;
