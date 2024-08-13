import { createContext, Dispatch, SetStateAction } from "react"

export interface PageDisplayContextValue {
  isMainBlur: boolean;
  isDisplayMenu: boolean;
}

export interface PageDisplayContextInterface {
  pageDisplayContext: PageDisplayContextValue;
  setPageDisplayContext: Dispatch<SetStateAction<PageDisplayContextValue>>;
}

export const PageDisplayContext = createContext<PageDisplayContextInterface | null>(null);