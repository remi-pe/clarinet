"use client";

import {useStore} from "@/app/store";
import parse from "html-react-parser";

export default function BuildPage() {
  const {generatedCode} = useStore();
  console.log(generatedCode);

  if (!generatedCode) return null;

  return <div>{parse(generatedCode)}</div>;
}
