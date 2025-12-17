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
  generatedImageAnalysisText: string;
  setGeneratedImageAnalysisText: Dispatch<SetStateAction<string>>;
  setTextArea: Dispatch<SetStateAction<string>>;
  setActiveTab: Dispatch<SetStateAction<string>>;
  handleImageAnalysisTab: () => void;
  handleImageCreator: () => void;
  handleGenerated: () => void;
  handleIngredientRecognition: () => void;
  handleTextAreaChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  sendIngredientTextToBackend: () => Promise<void>;
  loading: boolean;
  generated: boolean;
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
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [generatedImageAnalysisText, setGeneratedImageAnalysisText] =
    useState(`Test Test Test`);

  const handleImageAnalysisTab = () => setActiveTab(`ImageAnalysis`);
  const handleImageCreator = () => setActiveTab(`ImageCreator`);
  const handleIngredientRecognition = () =>
    setActiveTab(`IngredientRecognition`);
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setTextArea(value);
    console.log(value);
  };

  const handleGenerated = () => setGenerated(true);

  const sendIngredientTextToBackend = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:777/authentication/ingredients",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ingredients: ingredientTextarea,
          }),
        }
      );

      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // const handleGeneratedImageAnalysisText =

  return (
    <EverythingContext.Provider
      value={{
        generatedImageAnalysisText,
        activeTab,
        ingredientTextarea,

        setGeneratedImageAnalysisText,
        setTextArea,
        setActiveTab,

        handleImageAnalysisTab,
        handleImageCreator,
        handleIngredientRecognition,
        handleTextAreaChange,
        handleGenerated,
        sendIngredientTextToBackend,
        loading,
        generated,
      }}
    >
      {children}
    </EverythingContext.Provider>
  );
};
