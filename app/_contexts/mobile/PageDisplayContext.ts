import { createContext, Dispatch, SetStateAction } from "react"

export interface PageDisplayContextValue {
  isMainBlur: boolean;
}

export interface PageDisplayContextInterface {
  pageDisplayContext: PageDisplayContextValue | null;
  setPageDisplayContext: Dispatch<SetStateAction<PageDisplayContextValue | null>>;
}

export const PageDisplayContext = createContext<PageDisplayContextInterface | null>(null);