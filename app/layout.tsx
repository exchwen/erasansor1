import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://erasansor1.vercel.app'),
  title: 'ER ASANSÖR | Güven ve Kaliteyi Yukarı Taşıyoruz',
  description: 'ER Asansör, modern asansör sistemleri, periyodik bakım ve revizyon hizmetleri sunan öncü bir firmadır.',
  openGraph: {
    title: 'ER ASANSÖR',
    description: 'Güvenli ve estetik asansör çözümleri.',
    images: [
      {
        url: '/logo.png',
      },
    ],
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
          /* Google Banner Frame'ini (üstteki mavi çubuk) tamamen gizle */
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
          
          /* Bazı tarayıcılarda oluşan body üst boşluğunu sıfırla */
          .skiptranslate {
            display: none !important;
          }
          /* Ancak widget'ın çalışması için gerekli olan container'ı gizleme (sadece içeriğini gizle) */
          /* Bu satır riskli olabilir, yukarıdakiler yetmezse body > .skiptranslate'i hedefleyebiliriz */
        `}</style>
      </head>
      <body className={inter.className}>
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
                includedLanguages: 'tr,en,ar', // Türkçe, İngilizce, Arapça
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