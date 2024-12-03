"use client";

import {useStore} from "@/app/store";
import parse from "html-react-parser";

export default function BuildPage() {
  const {generatedCode} = useStore();

  if (!generatedCode) return null;

  return (
    <div>
      <p className="text-white">build page</p>
      <p className="text-white">{generatedCode}</p>
      {/* {parse(`<div className="w-16 h-16 bg-orange-500"></div>`)} */}

      {parse(generatedCode)}
    </div>
  );
}
