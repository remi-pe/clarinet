"use client";

import {useStore} from "@/app/store";
import {LiveProvider, LivePreview, LiveEditor} from "react-live";
import {Button} from "@/components/ui/button";
import {LoadingIcon} from "@/components/icons/loading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {Label} from "@/components/ui/label";

export default function BuildPage() {
  const {generatedCode} = useStore();

  if (!generatedCode) return null;

  const scope = {
    Button,
    LoadingIcon,
    Label,
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  };

  return (
    <LiveProvider code={generatedCode} scope={scope}>
      <div className="grid grid-cols-2 gap-4">
        <LiveEditor />

        <div className="flex flex-col gap-4 bg-slate-50">
          <LivePreview />
        </div>
      </div>
    </LiveProvider>
  );
}
