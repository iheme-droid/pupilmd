import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PupilMD - Learning Medicine By First Understanding',
  description: 'Have a grasp of medical concepts (in under 90 mins) with narrative-based explanations sponsored by Marable™',
  manifest: '/manifest.json',
  themeColor: '#2563eb',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'PupilMD',
  },
  applicationName: 'PupilMD',
  openGraph: {
    type: 'website',
    siteName: 'PupilMD',
    title: 'PupilMD - Learning Medicine By First Understanding',
    description: 'Have a grasp of medical concepts (in under 90 mins) with narrative-based explanations sponsored by Marable™',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PupilMD - Learning Medicine By First Understanding',
    description: 'Have a grasp of medical concepts (in under 90 mins) with narrative-based explanations sponsored by Marable™',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PupilMD" />
      </head>
      <body className={inter.className}>
        <SplashScreen />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}