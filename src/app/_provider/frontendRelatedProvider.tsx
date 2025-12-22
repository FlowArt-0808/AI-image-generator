"use client";

import {
  useContext,
  createContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";

type FrontendContextType = {
  activeTab: string;
  chatbotTab: boolean;
  setChatbotTab: Dispatch<SetStateAction<boolean>>;
  handleChatbotClose: () => void;
  handleImageAnalysisTab: () => void;
  handleImageCreator: () => void;
  handleIngredientRecognition: () => void;
};

const FrontendContext = createContext<FrontendContextType | undefined>(
  undefined
);

export const useFrontendContext = () => {
  const context = useContext(FrontendContext);

  if (!context) {
    throw new Error(
      "UseFrontendContext must be used inside <FrontendProvider>"
    );
  }

  return context;
};

export const FrontendProvider = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState(`ImageAnalysis`);
  const [chatbotTab, setChatbotTab] = useState(false);
  const handleImageAnalysisTab = () => setActiveTab(`ImageAnalysis`);
  const handleImageCreator = () => setActiveTab(`ImageCreator`);
  const handleIngredientRecognition = () =>
    setActiveTab(`IngredientRecognition`);
  const handleChatbotClose = () => {
    () => setChatbotTab(false);
  };

  return (
    <FrontendContext.Provider
      value={{
        chatbotTab,
        activeTab,

        setChatbotTab,
        handleChatbotClose,

        handleImageAnalysisTab,
        handleImageCreator,
        handleIngredientRecognition,
      }}
    >
      {" "}
      {children}
    </FrontendContext.Provider>
  );
};
