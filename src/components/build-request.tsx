import {handleLlm} from "@/app/server/llm";

export const BuildRequest = ({
  setGeneratedCode,
}: {
  setGeneratedCode: (code: string) => void;
}) => {
  const handler = async (formData: FormData) => {
    const response = await handleLlm({
      input: formData.get("input") as string,
    });

    console.log("resy", response);

    if (!response) {
      // error toast
      return;
    }

    setGeneratedCode(response);
  };

  return (
    <form action={handler} className="w-1/3 flex flex-col gap-4 bg-dark_black">
      <textarea
        className="text-dark_black"
        name="input"
        placeholder="Enter your prompt"
        defaultValue="Build a simple button that says 'Click me' and changes color when hovered over."
      />
      <button type="submit">Submit</button>
    </form>
  );
};
