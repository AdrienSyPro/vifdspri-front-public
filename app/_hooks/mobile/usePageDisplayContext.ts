import { useContext } from "react";
import { PageDisplayContext, PageDisplayContextInterface } from "@contexts/mobile/PageDisplayContext";

export default function usePageDisplayContext(): PageDisplayContextInterface {
  const context = useContext(PageDisplayContext);

  if (!context) {
    throw new Error('The component must be used within a PageDisplayContext.Provider');
  }

  return context;
}