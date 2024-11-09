"use client";

import {useStore} from "@/app/store";

export default function BuildPage() {
  const {generatedCode} = useStore();

  const extractClassNameFromJSX = (jsxString: string): string | null => {
    const classNameMatch = jsxString.match(/className="([^"]+)"/);
    return classNameMatch ? classNameMatch[1] : null;
  };

  if (!generatedCode) return null;

  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div
          className={extractClassNameFromJSX(generatedCode) ?? undefined}
          dangerouslySetInnerHTML={{
            __html: generatedCode,
          }}
        />
      </div>
    </>
  );
}
