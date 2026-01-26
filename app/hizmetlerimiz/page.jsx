'use client';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GeneralServices from '../components/GeneralServices';

/**
 * ER ASANSÖR - Kurumsal Hizmetlerimiz Sayfası
 * Duplikasyon giderildi; sayfa doğrudan GeneralServices içindeki 
 * kurumsal siyah başlık ile başlar.
 */
export default function HizmetlerimizPage() {
  return (
    <main className="min-h-screen bg-black"> {/* Sayfa arka planı siyah yapıldı */}
      <Header />

      {/* NOT: Buradaki manuel başlık (beyaz alan) tamamen kaldırıldı. 
        GeneralServices bileşeni zaten kendi başlığını (Siyah) içeriyor.
      */}

      <div className="pt-20 md:pt-32 pb-10">
        <GeneralServices />
      </div>

      <Footer />
    </main>
  );
}
