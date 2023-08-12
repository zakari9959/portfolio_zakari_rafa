import './globals.css';
import { Inter } from 'next/font/google';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio Zakari Rafa',
  description:
    "Voici mon portfolio de Développeur Web, venez voir les projets que j'ai réalisés !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
