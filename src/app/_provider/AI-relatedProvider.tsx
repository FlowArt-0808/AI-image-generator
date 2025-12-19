"use client";

import {
  useContext,
  createContext,
  useState,
  type ReactNode,
  type SetStateAction,
  type Dispatch,
} from "react";

import axios from "axios";

import React from "react";

type AIContextType = {
  imageAnalysisLoading: boolean;
  imageCreatorLoading: boolean;
  generatedIngredientRecognitionText: string; // frontend and backend
  ingredientTextarea: string; //backend
  imageCreatorTextarea: string;
  generatedImageAnalysisTextarea: string;
  setIsImageCreated: Dispatch<SetStateAction<boolean>>;
  setIngredientTextarea: Dispatch<SetStateAction<string>>;
  setImageCreatorTextarea: Dispatch<SetStateAction<string>>;
  setIsImageAnalyzedTextareaGenerated: Dispatch<SetStateAction<boolean>>;
  setIsIngredientTextareaGenerated: Dispatch<SetStateAction<boolean>>;
  setGeneratedImageAnalysisTextarea: Dispatch<SetStateAction<string>>;
  setGeneratedIngredientRecognitionText: Dispatch<SetStateAction<string>>;
  DummyHandleGenerated: () => void; //backend and frontend
  handleTextareaChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; //frontend and backend
  handleImageCreatorTextareaChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  sendIngredientTextToBackend: () => Promise<void>; // backend
  ingredientTextareaLoading: boolean; //frontend and backend
  isImageAnalyzedTextareaGenerated: boolean;
  isIngredientTextareaGenerated: boolean; // frontend and backend
  isImageCreated: boolean;
};

const AIContext = createContext<AIContextType | undefined>(undefined);

export const useAIContext = () => {
  const context = useContext(AIContext);

  if (!context) {
    throw new Error("useAIContext must be used inside <AIProvider>");
  }

  return context;
};

export const AIProvider = ({ children }: { children: ReactNode }) => {
  const [ingredientTextarea, setIngredientTextarea] = useState(``);
  const [imageCreatorTextarea, setImageCreatorTextarea] = useState(``);
  const [ingredientTextareaLoading, setIngredientTextareaLoading] =
    useState(false);
  const [imageAnalysisLoading, setImageAnalysisLoading] = useState(false);
  const [imageCreatorLoading, setImageCreatorLoading] = useState(false);
  const [
    isImageAnalyzedTextareaGenerated,
    setIsImageAnalyzedTextareaGenerated,
  ] = useState(false);
  const [isIngredientTextareaGenerated, setIsIngredientTextareaGenerated] =
    useState(false);
  const [isImageCreated, setIsImageCreated] = useState(false);
  const [generatedImageAnalysisTextarea, setGeneratedImageAnalysisTextarea] =
    useState(`Test Test Test`);
  const [
    generatedIngredientRecognitionText,
    setGeneratedIngredientRecognitionText,
  ] = useState(``);

  const handleImageCreatorTextareaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setImageCreatorTextarea(value);
    console.log(value);
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setIngredientTextarea(value);
  };
  const DummyHandleGenerated = () => (
    setIsIngredientTextareaGenerated(false),
    setIsImageAnalyzedTextareaGenerated(false),
    setIsImageCreated(false),
    setGeneratedImageAnalysisTextarea(`Test Test Test`),
    setImageAnalysisLoading(false),
    setImageCreatorLoading(false)
  );

  const sendIngredientTextToBackend = async () => {
    setIngredientTextareaLoading(true);
    setIsIngredientTextareaGenerated(false);
    try {
      const response = await axios.post(
        "http://localhost:777/authentication/ingredients",
        {
          contents: ingredientTextarea,
        }
      );

      if (response.data.success) {
        console.log("Success:", response.data);
        setIsIngredientTextareaGenerated(true);
        setGeneratedIngredientRecognitionText(response.data.message);
        return response.data.message;
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIngredientTextareaLoading(false);
    }
  };

  return (
    <AIContext.Provider
      value={{
        generatedImageAnalysisTextarea,
        generatedIngredientRecognitionText,
        ingredientTextarea,
        imageCreatorTextarea,
        handleTextareaChange,
        handleImageCreatorTextareaChange,
        DummyHandleGenerated,
        setIngredientTextarea,
        setGeneratedImageAnalysisTextarea,
        setIsImageCreated,
        setImageCreatorTextarea,
        setIsImageAnalyzedTextareaGenerated,
        sendIngredientTextToBackend,
        setIsIngredientTextareaGenerated,
        setGeneratedIngredientRecognitionText,
        imageAnalysisLoading,
        ingredientTextareaLoading,
        imageCreatorLoading,
        isImageAnalyzedTextareaGenerated,
        isIngredientTextareaGenerated,
        isImageCreated,
      }}
    >
      {children}
    </AIContext.Provider>
  );
};
