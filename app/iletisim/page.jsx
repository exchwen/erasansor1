'use client';
import React, { useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
// --- YENİ ---
import { EMAILJS_CONFIG } from '../components/emailConfig';

const IletisimPage = () => {
  // --- YENİ: Form referansı ve EmailJS bağlantısı eklendi ---
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const address = 'Merkez, Reşit Paşa Cd., 34310 Avcılar/İstanbul';
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=$1{encodeURIComponent(
    address
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

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
        setStatus('Başarıyla gönderildi!');
        formRef.current.reset();
      })
      .catch(() => setStatus('Hata oluştu. Tekrar deneyin.'));
  };

  return (
    <main className="min-h-screen bg-[#f3f4f6]">
      <Header />

      {/* --- YENİ: STANDART BAŞLIK STİLİ (image_236154.png Referanslı) --- */}
      <section className="pt-48 pb-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-black text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            İLETİŞİM
          </h1>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.4em] mb-6">
            PROFESYONEL MÜHENDİSLİK ÇÖZÜMLERİMİZ
          </p>
          <div className="w-16 h-1 bg-[#fee123] mx-auto"></div>
        </div>
      </section>

      <div className="pb-20 container mx-auto px-4">
        <div className="bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col lg:flex-row max-w-6xl mx-auto border border-white">
          {/* SOL PANEL: İRTİBAT BİLGİLERİ */}
          <div className="bg-[#1a3a4a] lg:w-[360px] p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-white text-2xl font-black uppercase tracking-tighter flex items-center gap-3 mb-10">
                <span className="w-1 h-6 bg-[#fee123]"></span>
                İRTİBAT BİLGİLERİ
              </h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2.5 rounded-full shrink-0">
                    <Phone size={20} className="text-[#fee123]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                      7/24 TEKNİK SERVİS
                    </p>
                    <a
                      href="tel:05312331711"
                      className="text-white text-lg font-bold hover:text-[#fee123] transition-colors"
                    >
                      0 (531) 233 1711
                    </a>
                  </div>
                </div>
                {/* Diğer numaralar ve bilgiler tam olarak burada duruyor */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2.5 rounded-full shrink-0">
                    <Phone size={20} className="text-[#fee123]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                      SABİT HAT
                    </p>
                    <a
                      href="tel:02126071010"
                      className="text-white text-lg font-bold hover:text-[#fee123]"
                    >
                      0 (212) 607 1010
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2.5 rounded-full shrink-0">
                    <Mail size={20} className="text-[#fee123]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                      E-POSTA
                    </p>
                    <a
                      href="mailto:info@erasansor.com"
                      className="text-white text-base font-bold hover:text-[#fee123]"
                    >
                      info@erasansor.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2.5 rounded-full shrink-0">
                    <MapPin size={20} className="text-[#fee123]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                      MERKEZ OFİS
                    </p>
                    <p className="text-white text-base font-bold leading-tight">
                      Avcılar, Reşitpaşa cad., İstanbul
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl overflow-hidden h-36 border border-white/5 shadow-inner grayscale opacity-90">
              <iframe
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="ER ASANSÖR Konum"
              ></iframe>
            </div>
          </div>

          {/* SAĞ PANEL: SERVİS TALEP FORMU */}
          <div className="flex-grow p-8 lg:p-12">
            <h3 className="text-[#1a3a4a] text-2xl font-black uppercase tracking-tight mb-2">
              SİZİ ARAYALIM
            </h3>
            <p className="text-gray-400 text-sm mb-8 font-medium">
              Güvenilir ve hızlı çözümlerimiz için formu doldurun.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-gray-500 text-[11px] font-bold pl-1 uppercase">
                    Adınız *
                  </label>
                  <input
                    name="user_name"
                    type="text"
                    required
                    className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:border-[#fee123] outline-none text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-gray-500 text-[11px] font-bold pl-1 uppercase">
                    Soyadınız *
                  </label>
                  <input
                    name="user_surname"
                    type="text"
                    required
                    className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:border-[#fee123] outline-none text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-gray-500 text-[11px] font-bold pl-1 uppercase">
                  Konu *
                </label>
                <select
                  name="subject"
                  defaultValue=""
                  required
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:border-[#fee123] outline-none text-sm cursor-pointer"
                >
                  <option value="" disabled>
                    Konu Seçiniz *
                  </option>
                  <option value="satin-alma">Satın Alma</option>
                  <option value="teknik-destek">Teknik Destek</option>
                  <option value="asansor-bakim">Asansör Bakım</option>
                  <option value="asansor-ariza">Asansör Arıza</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-gray-500 text-[11px] font-bold pl-1 uppercase">
                  Mesajınız *
                </label>
                <textarea
                  name="message"
                  rows="3"
                  required
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:border-[#fee123] outline-none resize-none text-sm"
                ></textarea>
              </div>

              <button className="w-full bg-[#1a3a4a] text-white font-black py-4 rounded-xl hover:bg-[#fee123] hover:text-black transition-all duration-300 shadow-lg uppercase tracking-widest text-base mt-4">
                TALEP GÖNDER!
              </button>
              {status && (
                <p className="text-center text-sm font-bold text-[#1a3a4a] mt-2">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default IletisimPage;
