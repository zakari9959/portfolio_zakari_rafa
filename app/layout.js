import './globals.css';
import { Roboto } from 'next/font/google';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const roboto = Roboto({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap',
});
export const metadata = {
  title: 'Portfolio Zakari Rafa',
  description:
    "Voici mon portfolio de Développeur Web, venez voir les projets que j'ai réalisés !",
  openGraph: {
    title: 'Portfolio Zakari Rafa',
    description:
      "Voici mon portfolio de Développeur Web, venez voir les projets que j'ai réalisés !",
    images: [
      {
        url: '/og-image.png',
        width: 800,
        height: 600,
        alt: 'Portfolio Zakari Rafa',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
