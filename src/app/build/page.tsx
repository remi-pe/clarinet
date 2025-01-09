"use client";

import {useStore} from "@/app/store";
import {LiveProvider, LivePreview, LiveEditor, LiveError} from "react-live";
import {Button} from "@/components/ui/button";
import {LoadingIcon} from "@/components/icons/loading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {Label} from "@/components/ui/label";
import {Badge} from "@/components/ui/badge";
import {Alert, AlertTitle, AlertDescription} from "@/components/ui/alert";
import {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";

export default function BuildPage() {
  const {generatedCode} = useStore();

  const scope = {
    Button,
    LoadingIcon,
    Label,
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    Badge,
    Alert,
    AlertTitle,
    AlertDescription,
    Pagination,
    PaginationContent,
    PaginationLink,
    PaginationItem,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis,
  };

  if (!generatedCode) {
    return <p>No code generated</p>;
  }

  return (
    <>
      <LiveProvider enableTypeScript code={generatedCode} scope={scope}>
        <div className="grid grid-cols-2 gap-4">
          <LiveEditor />
          <div className="bg-white">
            <LivePreview />
          </div>
        </div>
        <LiveError className="text-red-800 bg-red-100 mt-2" />
      </LiveProvider>
    </>
  );
}
