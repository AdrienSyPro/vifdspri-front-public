import "@assets/globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { headers } from "next/headers";
import NavBrowser from "../_components/browser/NavBrowser";
import HeaderBrowser from "../_components/browser/HeaderBrowser";
import HeaderMobile from "../_components/mobile/HeaderMobile";
import FooterBrowser from "../_components/browser/FooterBrowser";

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
  const isMobile = (headers().get("user-agent") ?? '').indexOf('Mobi') > -1;

  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="mainContainer">
          <header>
            {!isMobile && <HeaderBrowser />}
            {isMobile && <HeaderMobile />}
          </header>

          {!isMobile && (
            <nav>
              <NavBrowser />
            </nav>
          )}
          
          <main>
            {children}
          </main>

          {!isMobile && (
            <footer>
              <FooterBrowser />
            </footer>
          )}
        </div>
      </body>
    </html>
  );
}
