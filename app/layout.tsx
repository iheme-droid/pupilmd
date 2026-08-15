import './globals.css'; // This enables Tailwind for the whole app!
import { Sora } from 'next/font/google';

const sora = Sora({ subsets: ['latin'] });

export const metadata = {
  title: 'PupilMD | Neural Synch',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sora.className}>
        {children}
      </body>
    </html>
  );
}