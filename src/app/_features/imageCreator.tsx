"use client";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
export const ImageCreator = () => {
  return (
    <div aria-label="Every content" className="flex flex-col gap-6">
      <div aria-label="" className="flex flex-col gap-2">
        <div aria-label="Header" className="flex justify-between">
          <div
            aria-label="The icon and text"
            className="flex gap-2 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 3V7M19 17V21M3 5H7M17 19H21M12 3L10.088 8.813C9.99015 9.11051 9.82379 9.38088 9.60234 9.60234C9.38088 9.82379 9.11051 9.99015 8.813 10.088L3 12L8.813 13.912C9.11051 14.0099 9.38088 14.1762 9.60234 14.3977C9.82379 14.6191 9.99015 14.8895 10.088 15.187L12 21L13.912 15.187C14.0099 14.8895 14.1762 14.6191 14.3977 14.3977C14.6191 14.1762 14.8895 14.0099 15.187 13.912L21 12L15.187 10.088C14.8895 9.99015 14.6191 9.82379 14.3977 9.60234C14.1762 9.38088 14.0099 9.11051 13.912 8.813L12 3Z"
                stroke="#09090B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className="text-[#09090B] text-[20px] font-semibold">
              Food image creator
            </h1>
          </div>
          <Button variant="outline" className="cursor-pointer opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M7.09375 0.5C10.1924 0.500192 11.8005 2.66267 12.5254 3.94043L13.1221 4.99316H10.293C10.2748 4.99295 10.2598 4.97821 10.2598 4.95996C10.2598 4.94174 10.2748 4.92697 10.293 4.92676H12.9805L12.5869 4.19043C11.9447 2.99026 10.3518 0.566611 7.09375 0.566406C3.11381 0.566406 0.566406 3.82873 0.566406 7.09375C0.566621 10.3586 3.11398 13.6201 7.09375 13.6201C9.00881 13.62 10.591 12.8652 11.7178 11.7188C12.3231 11.1029 12.7977 10.3737 13.1211 9.58789C13.1281 9.57101 13.1471 9.56249 13.1641 9.56934C13.181 9.57631 13.1896 9.59625 13.1826 9.61328C12.8561 10.4069 12.3771 11.1434 11.7656 11.7656C10.6268 12.9242 9.02745 13.6864 7.09375 13.6865C3.07234 13.6865 0.500215 10.3904 0.5 7.09375C0.5 3.79693 3.07217 0.5 7.09375 0.5ZM13.4932 1.72656C13.5115 1.72656 13.5262 1.7415 13.5264 1.75977V4.95996C13.5264 4.97834 13.5116 4.99316 13.4932 4.99316H13.46V1.75977C13.4601 1.74157 13.4749 1.72667 13.4932 1.72656Z"
                fill="#09090B"
                stroke="#18181B"
              />
            </svg>
          </Button>
        </div>
        <Label
          htmlFor="nothing"
          className="text-[#71717A] text-[14px] font-normal"
        >
          What food image do you want? Describe it briefly.
        </Label>
        <div aria-label="Textrea and button" className="flex flex-col gap-2">
          <Textarea placeholder="Хоолны тайлбар" className="h-31 py-2 px-4" />
          <Button className="h-10 w-23.5 py-2 px-4 flex items-center justify-center ml-122 cursor-pointer opacity-25 hover:opacity-100">
            Generate
          </Button>
        </div>
        <div
          aria-label="Generated image section"
          className="flex flex-col gap-2"
        >
          <div aria-label="Summary Header" className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M19 13L15.914 9.914C15.5389 9.53906 15.0303 9.32843 14.5 9.32843C13.9697 9.32843 13.4611 9.53906 13.086 9.914L4 19M3 1H17C18.1046 1 19 1.89543 19 3V17C19 18.1046 18.1046 19 17 19H3C1.89543 19 1 18.1046 1 17V3C1 1.89543 1.89543 1 3 1ZM9 7C9 8.10457 8.10457 9 7 9C5.89543 9 5 8.10457 5 7C5 5.89543 5.89543 5 7 5C8.10457 5 9 5.89543 9 7Z"
                stroke="#09090B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className="text-[#09090B] text-[20px] font-semibold">Result</h1>
          </div>
          <Label className="text-[#71717A] text-[14px] font-normal">
            First, enter your text to generate an image
          </Label>
        </div>
      </div>
    </div>
  );
};
