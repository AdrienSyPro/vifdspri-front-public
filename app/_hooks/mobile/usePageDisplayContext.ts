import { useContext } from "react";
import { PageDisplayContext } from "@contexts/mobile/PageDisplayContext";

export default function usePageDisplayContext() {
  const context = useContext(PageDisplayContext);

  if (!context) {
    throw new Error('The component must be used within a PageDisplayContext.Provider');
  }

  return context;
}