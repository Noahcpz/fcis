import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="fr"className={``}>
      <Header />

      <body>{children}</body>

      <Footer />

    </html>
  );
}
