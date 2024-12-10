"use client";

import {Textarea} from "@/components/ui/textarea";
import {DEFAULT_SYSTEM_PROMPT} from "@/consts";
import {useEffect} from "react";
import {useState} from "react";
import {useForm, SubmitHandler} from "react-hook-form";

interface IFormInput {
  systemPrompt: string;
}

export default function EditSystemPrompt() {
  const {register, handleSubmit} = useForm<IFormInput>();
  const [systemPrompt, setSystemPrompt] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const systemPrompt = window.localStorage.getItem("systemPrompt");

    setSystemPrompt(systemPrompt || DEFAULT_SYSTEM_PROMPT);

    if (!systemPrompt) {
      localStorage.setItem("systemPrompt", DEFAULT_SYSTEM_PROMPT);
    }
  }, []);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    localStorage.setItem("systemPrompt", data.systemPrompt);
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[569px] flex flex-col gap-4"
        id="system-prompt-hook-form"
      >
        <div className="flex gap-4 items-end flex-col p-5 bg-grey-100 rounded-xl w-full border-grey-400 border">
          <Textarea
            className="text-white border-none p-0"
            {...register("systemPrompt", {required: true, maxLength: 20})}
            defaultValue={systemPrompt ?? DEFAULT_SYSTEM_PROMPT}
          />
        </div>
        <button
          type="submit"
          className={
            "p-1.5 w-fit rounded-md border px-4 text-white cursor-pointer"
          }
        >
          <p className="text-white text-sm font-semibold">Save</p>
        </button>
      </form>
    </div>
  );
}
