'use client'

import { useState } from "react";
import HeaderMobile from "./HeaderMobile"
import MainMobile from "./MainMobile";
import { PageDisplayContext, PageDisplayContextValue } from "@contexts/mobile/PageDisplayContext";

export interface Props {
  children: React.ReactNode;
}

export default function ContainerMobile({ children }: Props) {
  const [pageDisplayContext, setPageDisplayContext] = useState<PageDisplayContextValue | null>(null);
  return (
    <PageDisplayContext.Provider value={{
      pageDisplayContext,
      setPageDisplayContext
    }}>
      <HeaderMobile />

      <MainMobile>
        {children}
      </MainMobile>      
    </PageDisplayContext.Provider>
  );
} 