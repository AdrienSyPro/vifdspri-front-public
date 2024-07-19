'use client';

import { BrowserView, MobileView } from "react-device-detect";
import NavBrowser from "./browser/NavBrowser";

export default function Nav() {
  return (
    <nav>
      <BrowserView>
        <NavBrowser />
      </BrowserView>
    </nav>
  )
}