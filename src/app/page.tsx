"use client";

import {BuildRequest} from "@/components/build-request";
import {useStore} from "./store";

export default function Home() {
  const {setGeneratedCode} = useStore();

  return (
    <div className="flex w-full text-white p-8">
      <BuildRequest setGeneratedCode={setGeneratedCode} />
    </div>
  );
}
