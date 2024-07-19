import "@assets/globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "../_components/Header";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";

const inter = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VIF-D-SPRI",
  description: "VIF D SPRI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="mainContainer">
          <Header />
          <Nav />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
