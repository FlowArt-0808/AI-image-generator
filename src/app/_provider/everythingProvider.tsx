"use client";

import {
  useContext,
  createContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";

import React from "react";

type EverythingContextType = {
  ingredientTextarea: string;
  activeTab: string;
  setTextArea: Dispatch<SetStateAction<string>>;
  setActiveTab: Dispatch<SetStateAction<string>>;
  handleImageAnalysisTab: () => void;
  handleImageCreator: () => void;
  handleIngredientRecognition: () => void;
  handleTextAreaChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  // loading: boolean;
};

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
  const [ingredientTextarea, setTextArea] = useState(``);
  // const [loading, setLoading] = useState(false);

  const handleImageAnalysisTab = () => setActiveTab(`ImageAnalysis`);
  const handleImageCreator = () => setActiveTab(`ImageCreator`);
  const handleIngredientRecognition = () =>
    setActiveTab(`IngredientRecognition`);
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setTextArea(value);
    console.log(value);
  };

  return (
    <EverythingContext.Provider
      value={{
        activeTab,
        ingredientTextarea,
        setTextArea,
        setActiveTab,
        handleImageAnalysisTab,
        handleImageCreator,
        handleIngredientRecognition,
        handleTextAreaChange,
      }}
    >
      {children}
    </EverythingContext.Provider>
  );
};
