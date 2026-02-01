import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

// --- GELİŞMİŞ SEO AYARLARI ---
export const metadata: Metadata = {
  // Sitenizin ana domain adresi (Vercel domaini yerine kendi domaininiz varsa onu yazın)
  metadataBase: new URL('https://erasansor1.vercel.app'),
  
  // Başlık Şablonu: Alt sayfalarda başlık otomatik olarak "Sayfa Adı | ER ASANSÖR" olur.
  title: {
    default: 'ER ASANSÖR | Asansör Bakım, Montaj ve Revizyon',
    template: '%s | ER ASANSÖR',
  },
  
  description: 'İstanbul asansör firması ER Asansör; montaj, periyodik bakım, revizyon ve arıza servisi hizmetleri sunar. 7/24 teknik destek.',
  
  // Anahtar Kelimeler (Google artık çok önemsemese de diğer motorlar için iyidir)
  keywords: ['asansör', 'asansör bakımı', 'asansör montaj', 'asansör revizyon', 'istanbul asansör', 'er asansör', 'yük asansörü', 'insan asansörü'],
  
  // Yazarlar / Oluşturan
  authors: [{ name: 'ER Asansör' }],
  creator: 'ER Asansör',
  publisher: 'ER Asansör',

  // Robotlar (Google Botları) için talimatlar
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Canonical URL (Kopya içerik sorununu çözer)
  alternates: {
    canonical: '/',
  },

  // Sosyal Medya Paylaşımları (Facebook, LinkedIn, WhatsApp vb.)
  openGraph: {
    title: 'ER ASANSÖR | İstanbul Asansör Bakım, Montaj ve Revizyon',
    description: 'Güvenli, estetik ve yasal yönetmeliklere uygun asansör çözümleri.',
    url: 'https://erasansor1.vercel.app',
    siteName: 'ER Asansör',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/logo.png', // Paylaşıldığında çıkacak resim
        width: 800,
        height: 600,
        alt: 'ER Asansör Logo',
      },
    ],
  },

  // Twitter / X Paylaşımları
  twitter: {
    card: 'summary_large_image',
    title: 'ER ASANSÖR',
    description: 'İstanbul profesyonel asansör bakım ve montaj hizmetleri.',
    images: ['/logo.png'], // Twitter için görsel
  },

  // Favicon Ayarları (Eğer app klasöründe icon.png varsa burası otomatik de çalışır ama garanti olsun)
  icons: {
    icon: '/favicon.ico', // Veya '/favicon.ico'
    shortcut: '/favicon.ico',
    apple: '/favicon.ico', // Varsa ekleyin
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        {/* Google Translate Barını Gizleyen GÜÇLÜ CSS */}
        <style>{`
          /* Google Banner Frame'ini gizle */
          .goog-te-banner-frame.skiptranslate {
            display: none !important;
          }
          iframe.goog-te-banner-frame {
            display: none !important;
          }
          
          /* Body'nin aşağı kaymasını engelle */
          body {
            top: 0px !important;
            margin-top: 0px !important;
            position: static !important;
          }

          /* Google logolarını ve araç ipuçlarını gizle */
          .goog-logo-link {
            display: none !important;
          }
          .goog-te-gadget {
            color: transparent !important;
            font-size: 0 !important;
          }
          
          /* Gizli dropdown kutusunun yer kaplamasını engelle */
          #google_translate_element {
            display: none !important;
          }
          
          /* Kaymaları önle */
          .skiptranslate {
            display: none !important;
          }
        `}</style>
      </head>
      
      {/* suppressHydrationWarning={true}: 
         Google Translate sayfayı çevirdiğinde DOM yapısını değiştirir.
         Next.js'in "Sunucu ile İstemci uyuşmuyor" hatası verip çökmesini engeller.
      */}
      <body className={inter.className} suppressHydrationWarning={true}>
        
        {/* Çeviri motorunun bağlandığı görünmez element */}
        <div id="google_translate_element"></div>
        
        {/* Google Translate Scripti */}
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'tr',
                includedLanguages: 'tr,en,ar',
                autoDisplay: false
              }, 'google_translate_element');
            }
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
