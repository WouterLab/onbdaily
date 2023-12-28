import { createContext } from "react";

export const RefetchContext = createContext<{
  updated: boolean;
  setUpdated: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);
