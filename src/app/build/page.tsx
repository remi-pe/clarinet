"use client";

import {useStore} from "@/app/store";
// import {LiveProvider, LivePreview} from "react-live";
import parse from "html-react-parser";

export default function BuildPage() {
  const {generatedCode} = useStore();

  if (!generatedCode) return null;

  return (
    // <LiveProvider code={generatedCode}>
    //   {/* <LiveEditor /> */}
    //   {/* <LiveError /> */}
    //   <LivePreview />
    // </LiveProvider>

    <div>
      <p className="text-white">build page</p>
      {parse(generatedCode)}
    </div>
  );
}
