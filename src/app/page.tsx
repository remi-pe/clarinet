"use client";

import {BuildRequest} from "@/components/build-request";
import {useStore} from "./store";

export default function Home() {
  const {setGeneratedCode} = useStore();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <BuildRequest setGeneratedCode={setGeneratedCode} />
    </div>
  );
}
