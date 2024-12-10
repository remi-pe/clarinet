"use client";

import {BuildRequest} from "@/components/build-request";
import {DEFAULT_SYSTEM_PROMPT} from "@/consts";
import {useEffect} from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") return;

    const systemPrompt = localStorage.getItem("systemPrompt");

    if (!systemPrompt) {
      localStorage.setItem("systemPrompt", DEFAULT_SYSTEM_PROMPT);
    }
  }, []);

  return (
    <div className="flex w-full text-white p-8">
      <BuildRequest />
    </div>
  );
}
