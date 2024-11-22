"use client";

import React from "react";
import {useState} from "react";
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";
import {useStore} from "@/app/store";
import {Button} from "./ui/button";

export default function App() {
  const [isKnowledgeBase, setIsKnowledgeBase] = useState(true);
  const {generatedCode, isProcessing, setIsProcessing} = useStore();
  const router = useRouter();

  const toggleSwitch = () => {
    // if (!generatedCode) return;

    setIsKnowledgeBase(!isKnowledgeBase);
    setIsProcessing(true);

    if (isKnowledgeBase) {
      return router.push("/build");
    }

    return router.push("/");
  };

  const getWidth = () => {
    console.log({isKnowledgeBase, isProcessing});

    if (isKnowledgeBase) {
      return isProcessing ? "w-[300px]" : "w-[300px]";
    }
    return "w-[300px]";
  };

  const getSliderWidth = () => {
    if (isKnowledgeBase) {
      return isProcessing ? "w-[180px]" : "w-[180px]";
    }
    return "w-[124px]";
  };

  const getSliderPosition = () => {
    if (isKnowledgeBase) {
      return "justify-start";
    }
    return "justify-end";
  };

  return (
    <Button
      type="submit"
      form="hook-form"
      className={`${getWidth()} h-[42px] bg-light_black border border-black flex ${getSliderPosition()} rounded-full  items-center relative data-is-on=${isProcessing}`}
      onClick={toggleSwitch}
    >
      <div className="absolute left-8 z-10 text-white">
        <Label text="KNOWLEDGE BASE" />
      </div>
      <motion.div
        className={`${getSliderWidth()} h-[40px] bg-regal_green rounded-full`}
        layout
        transition={spring}
      />
      <div className="absolute right-6 z-10 text-white">
        <Label text={isProcessing ? "PROCESSING" : "PROTOTYPE"} />
      </div>
    </Button>
  );
}

const Label = ({text}: {text: string}) => {
  return <p className="text-white text-[12px] tracking-wide">{text}</p>;
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
