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

type AnotherAIContextType = {
  generatedImage: string | null;
  imageCreatorTextarea: string;
  imageCreatorLoading: boolean;
  isImageCreated: boolean;
  chatbotTextarea: string;
  setIsImageCreated: Dispatch<SetStateAction<boolean>>;
  setImageCreatorTextarea: Dispatch<SetStateAction<string>>;
  handleTextToImage: () => Promise<void>;
  handleImageCreatorTextareaChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleChatbotTextarea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const AnotherAIContext = createContext<AnotherAIContextType | undefined>(
  undefined
);

export const useAnotherAIContext = () => {
  const context = useContext(AnotherAIContext);

  if (!context) {
    throw new Error(
      "useImageCreatorContext must be used inside <ImageCreatorProvider>"
    );
  }

  return context;
};

export const AnotherAIProvider = ({ children }: { children: ReactNode }) => {
  const [imageCreatorTextarea, setImageCreatorTextarea] = useState(``);
  const [chatbotTextarea, setChatbotTextarea] = useState(``);
  const [imageCreatorLoading, setImageCreatorLoading] = useState(false);
  const [chatbotLoading, setChatbotLoading] = useState(false);
  const [isImageCreated, setIsImageCreated] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [chatbotResponse, setChatbotResponse] = useState(``);

  const handleImageCreatorTextareaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setImageCreatorTextarea(value);
    console.log(value);
  };

  const handleChatbotTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setChatbotTextarea(value);
  };

  const handleTextToImage = async () => {
    setImageCreatorLoading(true);
    setIsImageCreated(false);

    try {
      const response = await axios.post(
        "http://localhost:777/authentication/imageCreator",
        { contents: imageCreatorTextarea }
      );

      if (response.data.success) {
        console.log("Success:", response.data);
        setGeneratedImage(response.data.image);
        setIsImageCreated(true);
        setImageCreatorLoading(false);
        return response.data.image;
      } else {
        throw new Error(response.data.image);
      }
    } catch (err) {
      console.log(err, `your connection to API ain't working`);
    } finally {
      setImageCreatorLoading(false);
    }
  };

  const handleChatbotResponse = async () => {
    setChatbotLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:777/authentication/Chatbot",
        {
          chat: chatbotTextarea,
        }
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AnotherAIContext.Provider
      value={{
        chatbotTextarea,
        generatedImage,
        imageCreatorTextarea,
        handleTextToImage,
        handleImageCreatorTextareaChange,
        setImageCreatorTextarea,
        setIsImageCreated,
        handleChatbotTextarea,
        imageCreatorLoading,
        isImageCreated,
      }}
    >
      {children}
    </AnotherAIContext.Provider>
  );
};
