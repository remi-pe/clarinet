"use client";

import {useStore} from "@/app/store";
import {LiveProvider, LivePreview, LiveEditor} from "react-live";

export default function BuildPage() {
  const {generatedCode} = useStore();

  if (!generatedCode) return null;

  return (
    <LiveProvider code={generatedCode}>
      <div className="grid grid-cols-2 gap-4">
        <LiveEditor />

        <div className="flex flex-col gap-4 bg-slate-50">
          <LivePreview />
        </div>
      </div>
    </LiveProvider>
  );
}
