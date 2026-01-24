'use client';
import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

const Intro = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Intro'yu bitiren ana fonksiyon
  const finishIntro = () => {
    setIsVisible(false);
    onFinish();
  };

  if (!isVisible) return null;

  return (
    <div
      // onClick: Ekrana tıklandığında veya dokunulduğunda çalışır
      onClick={finishIntro}
      className="fixed top-0 left-0 w-full h-screen z-[9999] bg-black overflow-hidden cursor-pointer"
      title="Atlamak için tıklayın"
    >
      <div className="absolute w-[115%] h-[115%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <Spline
          scene="https://prod.spline.design/Tq5aol9KZvxVYhL7/scene.splinecode"
          onLoad={() => setTimeout(finishIntro, 8000)}
          onError={finishIntro}
        />
      </div>

      {/* Sağ üstte ufak bir bilgilendirme yazısı (isteğe bağlı) */}
      <div className="absolute top-10 right-10 text-white/30 text-xs font-light tracking-widest animate-pulse">
        ATLAMAK İÇİN TIKLAYIN
      </div>
    </div>
  );
};

export default Intro;
