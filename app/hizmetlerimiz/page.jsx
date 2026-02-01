import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GeneralServices from '../components/GeneralServices';

// --- BU SAYFAYA ÖZEL SEO AYARLARI ---
export const metadata = {
  title: 'Hizmetlerimiz | ER Asansör - Montaj, Bakım ve Revizyon',
  description: 'İstanbul genelinde sunduğumuz profesyonel asansör hizmetleri: Periyodik bakım, asansör montajı, arıza servisi, revizyon ve mühendislik projelendirme.',
  keywords: ['asansör hizmetleri', 'asansör montaj fiyatları', 'asansör bakım ücretleri', 'asansör revizyon', 'istanbul asansör servisi'],
  openGraph: {
    title: 'Hizmetlerimiz | ER Asansör',
    description: 'Güvenli, yasal mevzuata uygun ve ekonomik asansör çözümlerimizle tanışın.',
  },
};

// --- SCHEMA MARKUP (GOOGLE İÇİN HİZMET LİSTESİ) ---
// Bu kod Google'a "Ben bu hizmetleri satıyorum" der.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Asansör Hizmetleri',
  provider: {
    '@type': 'LocalBusiness',
    name: 'ER Asansör'
  },
  areaServed: {
    '@type': 'City',
    name: 'İstanbul'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Asansör Hizmetleri',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Periyodik Asansör Bakımı'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Asansör Montajı'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Asansör Revizyonu'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Arıza Servisi'
        }
      }
    ]
  }
};

/**
 * ER ASANSÖR - Kurumsal Hizmetlerimiz Sayfası
 */
export default function HizmetlerimizPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Schema Verisini Sayfaya Gömüyoruz */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <div className="pt-20 md:pt-32 pb-10">
        <GeneralServices />
      </div>

      <Footer />
    </main>
  );
}
