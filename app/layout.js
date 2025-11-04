import './globals.css';
import './components.css';
import Navbar from '@/Components/navbar';
import { Courgette, Parisienne } from 'next/font/google';

const courgette = Courgette({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-courgette',
  display: 'swap',
});

const parisienne = Parisienne({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-parisienne',
  display: 'swap',
});

export const metadata = {
  title: 'Happy Anniversary 💖',
  description: 'A romantic page of love and memories',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${courgette.variable} ${parisienne.variable}`}>
      <body className="font-[var(--font-courgette)]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
