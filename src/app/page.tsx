"use client";

import { Header } from "./_features/header";

import * as React from "react";

import { Button } from "@/components/ui/button";

import { ImageAnalysis } from "./_features/(1)imageAnalysis";
import { ImageCreator } from "./_features/(3)imageCreator";
import { IngredientRecognition } from "./_features/(2)ingredientRecognition";
import { useFrontendContext } from "./_provider/frontendRelatedProvider";
import { Chatbot } from "./_features/chatbot";

export default function Home() {
  const {
    activeTab,
    handleImageAnalysisTab,
    handleImageCreator,
    handleIngredientRecognition,
  } = useFrontendContext();

  return (
    <div>
      <div className=" flex flex-col gap-6 items-center ">
        <Header />
        <div className="w-145 flex flex-col gap-6 items-center">
          {" "}
          <div className="bg-[#f4f4f5] p-1 rounded-lg w-fit gap-1">
            <Button
              variant="ghost"
              className={`rounded-lg ${
                activeTab === "ImageAnalysis"
                  ? "bg-white shadow-sm font-semibold text-black hover:bg-white"
                  : "text-gray-400 font-normal hover:bg-transparent cursor-pointer"
              }`}
              onClick={handleImageAnalysisTab}
            >
              Image analysis
            </Button>
            <Button
              variant="ghost"
              className={`rounded-lg ${
                activeTab === "IngredientRecognition"
                  ? "bg-white shadow-sm font-semibold text-black hover:bg-white"
                  : "text-gray-400 font-normal hover:bg-transparent cursor-pointer"
              }`}
              onClick={handleIngredientRecognition}
            >
              Ingredient recognition
            </Button>
            <Button
              variant="ghost"
              className={`rounded-lg ${
                activeTab === "ImageCreator"
                  ? "bg-white shadow-sm font-semibold text-black hover:bg-white"
                  : "text-gray-400 font-normal hover:bg-transparent cursor-pointer"
              }`}
              onClick={handleImageCreator}
            >
              Image creator
            </Button>
          </div>
          {activeTab === "ImageAnalysis" && <ImageAnalysis />}
          {activeTab === "ImageCreator" && <ImageCreator />}
          {activeTab === "IngredientRecognition" && <IngredientRecognition />}
        </div>{" "}
      </div>

      <Chatbot />
    </div>
  );
}
