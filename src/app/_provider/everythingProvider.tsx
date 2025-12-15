"use client";

import {
  useContext,
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Added: Define the context type
interface EverythingContextType {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  handleImageAnalysisTab: () => void;
  handleImageCreator: () => void;
  handleIngredientRecognition: () => void;
  loading: boolean;
}

// Changed: Properly type the context
const EverythingContext = createContext<EverythingContextType | undefined>(
  undefined
);

export const useEverythingContext = () => {
  const context = useContext(EverythingContext);

  if (!context) {
    throw new Error(
      "useEverythingContext must be used inside <EverythingProvider>"
    );
  }

  return context;
};

export const EverythingProvider = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState(`ImageAnalysis`);
  const [loading, setLoading] = useState(false);

  const handleImageAnalysisTab = () => setActiveTab(`ImageAnalysis`);
  const handleImageCreator = () => setActiveTab(`ImageCreator`);
  const handleIngredientRecognition = () =>
    setActiveTab(`IngredientRecognition`);

  return (
    <EverythingContext.Provider
      value={{
        activeTab,
        setActiveTab,
        handleImageAnalysisTab,
        handleImageCreator,
        handleIngredientRecognition,
      }}
    >
      {children}
    </EverythingContext.Provider>
  );
};
