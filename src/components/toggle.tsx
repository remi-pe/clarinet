"use client";

import React from "react";
import {useState} from "react";
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";
import {useStore} from "@/app/store";

export default function App() {
  const [isOn, setIsOn] = useState(false);
  const {generatedCode} = useStore();
  const router = useRouter();

  const toggleSwitch = () => {
    if (!generatedCode) return;

    setIsOn(!isOn);

    if (isOn) {
      return router.push("/");
    }

    return router.push("/build");
  };

  return (
    <div
      className={`${
        !generatedCode ? "cursor-not-allowed" : "cursor-pointer"
      } w-[264px] h-[42px] bg-light_black border border-black flex ${
        isOn ? "justify-end" : "justify-start"
      } rounded-full  items-center relative`}
      data-is-on={isOn}
      onClick={toggleSwitch}
    >
      <div className="absolute left-8 z-10 text-white">
        <Label text="KNOWLEDGE BASE" />
      </div>
      <motion.div
        className={`${
          isOn ? "w-[85px]" : "w-[180px]"
        } h-[40px] bg-regal_green rounded-full`}
        layout
        transition={spring}
      />
      <div className="absolute right-6 z-10 text-white">
        <Label text="BUILD" />
      </div>
    </div>
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
