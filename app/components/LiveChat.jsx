'use client';
import { useState } from 'react';
import Image from 'next/image';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() === '') return;
    const phoneNumber = "905312331711"; 
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      {isOpen && (
        <div className="mb-4 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header - WhatsApp Yeşili */}
          <div className="bg-[#25D366] p-4 flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <Image 
                  src="/logo.png" 
                  alt="ER Asansör" 
                  width={32} 
                  height={32} 
                  className="w-8 h-8 object-contain" 
                />
              </div>
              <div className="text-white text-sm">
                {/* BURASI GÜNCELLENDİ: ER korumaya alındı */}
                <p className="font-bold"><span className="notranslate">ER</span> ASANSÖR WhatsApp</p>
                <p className="text-[10px] opacity-90">Genellikle anında yanıt verir</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:bg-black/10 rounded-full p-1">✕</button>
          </div>
          
          <div className="h-48 p-4 bg-[#e5ddd5] overflow-y-auto text-sm">
            <div className="bg-white p-3 rounded-lg shadow-sm relative max-w-[85%] before:content-[''] before:absolute before:left-[-10px] before:top-2 before:border-[10px] before:border-transparent before:border-r-white text-black">
              {/* BURASI GÜNCELLENDİ: ER korumaya alındı */}
              Merhaba! 👋 <span className="notranslate">ER</span> Asansör destek hattına hoş geldiniz. Size nasıl yardımcı olabiliriz?
            </div>
          </div>

          <div className="p-3 border-t bg-white flex gap-2">
            <input 
              type="text" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Mesajınızı yazın..." 
              className="flex-1 text-sm border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#25D366] text-black"
            />
            <button onClick={handleSendMessage} className="bg-[#25D366] text-white p-2 rounded-full hover:bg-[#128C7E] transition-colors">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="m21.426 11.097-17-8A.999.999 0 0 0 3.03 4.242L4.969 12 3.03 19.758a.998.998 0 0 0 1.396 1.145l17-8a1.002 1.002 0 0 0 0-1.806z"></path></svg>
            </button>
          </div>
        </div>
      )}

      {/* Tetikleyici Buton */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center text-white
          ${isOpen ? 'bg-gray-800 scale-90' : 'bg-[#25D366] hover:scale-110 animate-bounce'}
        `}
      >
        {isOpen ? (
          <span className="text-xl px-2">✕</span>
        ) : (
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.5 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
          </svg>
        )}
      </button>
    </div>
  );
};

export default LiveChat;
