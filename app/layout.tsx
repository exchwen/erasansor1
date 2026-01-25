import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  // 1. KRİTİK: Vercel uyarısını çözen satır
  metadataBase: new URL('https://erasansor1.vercel.app'), 
  
  // 2. Kurumsal Başlıklar
  title: 'ER ASANSÖR | Güven ve Kaliteyi Yukarı Taşıyoruz',
  description: 'ER Asansör, modern asansör sistemleri, periyodik bakım ve revizyon hizmetleri sunan öncü bir firmadır.',
  
  openGraph: {
    title: 'ER ASANSÖR',
    description: 'Güvenli ve estetik asansör çözümleri.',
    images: [
      {
        url: '/logo.png', // Sitedeki logonu kullanır
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
    <html lang="tr"> {/* Dil ayarını Türkçe yaptık */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}