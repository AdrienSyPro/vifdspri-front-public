'use client';

import { BrowserView, MobileView } from "react-device-detect";
import HeaderBrowser from "./browser/HeaderBrowser";
import HeaderMobile from "./mobile/HeaderMobile";

export default function Header() {
  return (
    <header>
      <BrowserView>
        <HeaderBrowser />
      </BrowserView>
      <MobileView>
        <HeaderMobile />
      </MobileView>
    </header>
  )
}