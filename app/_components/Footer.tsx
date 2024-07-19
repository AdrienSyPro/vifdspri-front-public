'use client';

import { BrowserView, MobileView } from "react-device-detect";
import FooterBrowser from "./browser/FooterBrowser";

export default function Footer() {
  return (
    <footer>
      <BrowserView>
        <FooterBrowser />
      </BrowserView>
    </footer>
  )
}