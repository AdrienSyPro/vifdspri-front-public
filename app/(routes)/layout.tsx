import "@assets/globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { headers } from "next/headers";
import ContainerMobile from "../_components/mobile/ContainerMobile";
import ContainerBrowser from "../_components/browser/ContainerBrowser";

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
          {isMobile && (
            <ContainerMobile>
              {children}
            </ContainerMobile>
          )}
          {!isMobile && (
            <ContainerBrowser>
              {children}
            </ContainerBrowser>
          )}
        </div>
      </body>
    </html>
  );
}
