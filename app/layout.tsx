import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Audioprzewodniki Audiotour.pl - Multimedialne systemy Audio Guide",
  description: "Lider na rynku audioprzewodników. Najlepsze wycieczki audio w Polsce. Systemy multimedialnego zwiedzania audio guide dla muzeów. Audioprzewodniki do Twojej dyspozycji. Posłuchaj przykładowych ścieżek i przenieś się w świat historii z audioprzewodnikami od Audiotour.pl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/mml8gpk.css" />
      </head>
        <body className={inter.className}>
          <Navbar />
              {children}
          {/* <Footer /> */}
          </body>
    </html>
  );
}
