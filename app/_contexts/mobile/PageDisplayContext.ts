import { createContext, Dispatch, SetStateAction } from "react"

export interface PageDisplayContextValue {
  isMainBlur: boolean;
}

export interface PageDisplayContextInterface {
  pageDisplayContext: PageDisplayContextValue;
  setPageDisplayContext: Dispatch<SetStateAction<PageDisplayContextValue>>;
}

export const PageDisplayContext = createContext<PageDisplayContextInterface | null>(null);