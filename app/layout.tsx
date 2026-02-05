import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PupilMD - Applying Medicine Simply",
  description: "Master pathophysiology through Marable™-first learning. Understand medicine in 20-25 minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-600">
            <p>© 2025 PupilMD. Marable™ is a trademark of PupilMD.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}