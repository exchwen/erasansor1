'use client';
import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const TalepFormu = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const SCRIPT_URL = "/api/send-google";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: '', message: '' });

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const payload = {
      ...data,
      form_source: 'Detayli Talep Formu'
    };

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Talebiniz ve adres bilgileriniz başarıyla iletildi! En kısa sürede döneceğiz.',
        });
        e.target.reset();
      } else {
        throw new Error('Sunucu hatası');
      }

    } catch (error) {
      console.error('Hata:', error);
      setStatus({
        type: 'error',
        message: 'Bir hata oluştu. Lütfen tekrar deneyin.',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="iletisim-formu"
      className="relative py-12 md:py-20 min-h-screen lg:min-h-[650px] flex items-center overflow-hidden"
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

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center justify-between">
          
          {/* Sol Taraf */}
          <div className="w-full lg:w-1/2 text-white space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="w-16 h-1 bg-[#fee123] mx-auto lg:mx-0"></div>
              <div className="h-12 md:h-16 overflow-hidden relative">
                {slides.map((text, index) => (
                  <h2
                    key={index}
                    className={`absolute inset-0 text-2xl sm:text-4xl md:text-4xl font-black uppercase transition-all duration-1000 ease-in-out ${
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

            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 font-medium">
              Güvenilir ve etkili çözümlerimizle, müşterilerimizin asansör
              sistemlerini sorunsuz bir şekilde işler durumda tutmayı
              hedefliyoruz.
            </p>

            <a
              href="https://wa.me/905312331711"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 border-2 border-[#fee123] bg-[#fee123]/10 hover:bg-[#fee123] text-white hover:text-black px-8 md:px-10 py-3 md:py-4 rounded-full font-bold transition-all group shadow-xl active:scale-95 text-sm md:text-base"
            >
              <Phone size={20} className="group-hover:animate-pulse" />
              İLETİŞİM HATTI
            </a>
          </div>

          {/* Sağ Taraf: Form */}
          <div className="w-full lg:w-[480px] bg-white p-6 md:p-10 rounded-2xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              
              {/* Ad Soyad */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="user_name"
                  placeholder="Adınız *"
                  required
                  className="p-3 border-b-2 border-gray-100 focus:border-[#fee123] outline-none text-sm font-semibold transition-all text-black"
                />
                <input
                  name="user_surname"
                  placeholder="Soyadınız *"
                  required
                  className="p-3 border-b-2 border-gray-100 focus:border-[#fee123] outline-none text-sm font-semibold transition-all text-black"
                />
              </div>

              {/* Konu Seçimi */}
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

              {/* Adres Alanı */}
              <div className="space-y-1">
                 <input
                  name="address"
                  placeholder="Açık Adres (Mahalle, Sokak, No) *"
                  required
                  className="w-full p-3 border-b-2 border-gray-100 focus:border-[#fee123] outline-none text-sm font-semibold transition-all text-black"
                />
              </div>

              {/* Email ve Telefon */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="user_email"
                  type="email"
                  placeholder="E-Posta *"
                  required
                  className="p-3 border-b-2 border-gray-100 focus:border-[#fee123] outline-none text-sm font-semibold transition-all text-black"
                />
                <input
                  name="user_phone"
                  type="tel"
                  placeholder="Telefon *"
                  required
                  className="p-3 border-b-2 border-gray-100 focus:border-[#fee123] outline-none text-sm font-semibold transition-all text-black"
                />
              </div>

              {/* Mesaj */}
              <textarea
                name="message"
                rows="3"
                placeholder="Mesajınız *"
                required
                className="w-full p-3 border-b-2 border-gray-100 focus:border-[#fee123] outline-none text-sm font-semibold resize-none text-black"
              ></textarea>

              <button
                type="submit"
                disabled={isSending}
                className={`w-full py-4 rounded-lg font-black tracking-widest uppercase transition-all shadow-xl ${
                  isSending
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-black text-white hover:bg-[#fee123] hover:text-black active:scale-95'
                }`}
              >
                {isSending ? 'KAYDEDİLİYOR...' : 'TALEP GÖNDER'}
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
