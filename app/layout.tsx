import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import PWAInstaller from "./components/PWAInstaller";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PupilMD - Applying Medicine Simply",
  description: "Master pathophysiology through Marable™-first learning. Understand medicine in 20-25 minutes with narrative-based explanations.",
  keywords: ["medical education", "pathophysiology", "medical school", "USMLE", "step 1", "medical learning"],
  authors: [{ name: "PupilMD" }],
  creator: "PupilMD",
  publisher: "PupilMD",
  
  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: "PupilMD - Applying Medicine Simply",
    description: "Master pathophysiology through Marable™-first learning. Understand medicine in 20-25 minutes.",
    siteName: "PupilMD",
    locale: "en_US",
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "PupilMD - Applying Medicine Simply",
    description: "Master pathophysiology through Marable™-first learning.",
  },

  // Mobile App Capable
  applicationName: "PupilMD",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "PupilMD",
  },
  formatDetection: {
    telephone: false,
  },

  // Manifest (for PWA)
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        
        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#2563eb" />
        
        {/* Apple Mobile Web App */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PupilMD" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <PWAInstaller />
        <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-600">
            <p>© 2025 PupilMD. Marable™ is a trademark of PupilMD.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}