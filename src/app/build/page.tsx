"use client";

import {useStore} from "@/app/store";
import parse from "html-react-parser";

export default function BuildPage() {
  const {generatedCode} = useStore();

  if (!generatedCode) return null;

  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div>{parse(generatedCode)}</div>
      </div>
    </>
  );
}
