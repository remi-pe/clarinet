"use client";

import {useStore} from "@/app/store";
import parse from "html-react-parser";

export default function BuildPage() {
  const {generatedCode} = useStore();

  if (!generatedCode) return null;

  console.log("generatedCode", generatedCode);
  console.log("parsed", parse(generatedCode));

  return <div>{parse(generatedCode)}</div>;
}
