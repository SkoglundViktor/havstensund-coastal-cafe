
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define language type
export type LanguageCode = "se" | "no" | "dk" | "en" | "de";

// Create language context type
type LanguageContextType = {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
};

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create a hook for using the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// Create the provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>("se");

  const value = {
    language,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
