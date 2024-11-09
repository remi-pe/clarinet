"use client";

import {handleLlm} from "@/app/server/llm";
import {useStore} from "@/app/store";
import {useEffect} from "react";
import {useFormStatus} from "react-dom";

function SubmitButton() {
  const {isBuilding, setIsBuilding} = useStore();
  const status = useFormStatus();

  useEffect(() => {
    if (status.pending && !isBuilding) {
      setIsBuilding(true);
    }

    if (!status.pending && isBuilding) {
      setIsBuilding(false);
    }
  }, [status.pending, isBuilding, setIsBuilding]);

  return (
    <button disabled={status.pending}>
      {status.pending ? "Building..." : "Submit"}
    </button>
  );
}

export const BuildRequest = ({
  setGeneratedCode,
}: {
  setGeneratedCode: (code: string) => void;
}) => {
  const handler = async (formData: FormData) => {
    const response = await handleLlm({
      input: formData.get("input") as string,
    });

    if (!response) {
      // error toast
      return;
    }

    setGeneratedCode(response);
  };

  return (
    <form
      action={(formData) => handler(formData)}
      className="w-1/3 flex flex-col gap-4 bg-dark_black"
    >
      <textarea
        className="text-dark_black"
        name="input"
        placeholder="Enter your prompt"
        defaultValue="Build a form that has three inputs: name, email, and phone number. The form should have a submit button that says 'Submit'."
      />
      <SubmitButton />
    </form>
  );
};

// Build a red button that says 'Click me'. On hover, the button should change color to blue.
// Build a form that has three inputs: name, email, and phone number. The form should have a submit button that says 'Submit'.
