import { ArrowUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Chatbot = () => {
  return (
    <div className="fixed bottom-5 right-4">
      <Button variant="default" size="icon" className="rounded-full">
        <ArrowUpIcon />
      </Button>
    </div>
  );
};
