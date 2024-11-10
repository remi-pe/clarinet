"use client";

import {BuildRequest} from "@/components/build-request";
import {useStore} from "./store";

export default function Home() {
  const {setGeneratedCode} = useStore();

  return (
    <div className="flex w-1/2 text-white">
      <BuildRequest setGeneratedCode={setGeneratedCode} />
    </div>
  );
}
