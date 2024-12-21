"use client";

import {Button} from "@/components/ui/button";
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
  const [systemPrompt, setSystemPrompt] = useState<string>(
    DEFAULT_SYSTEM_PROMPT
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedSystemPrompt = localStorage.getItem("systemPrompt");

    if (storedSystemPrompt) {
      return setSystemPrompt(storedSystemPrompt);
    }

    localStorage.setItem("systemPrompt", DEFAULT_SYSTEM_PROMPT);
  }, []);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    localStorage.setItem("systemPrompt", data.systemPrompt);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[569px] flex flex-col gap-4"
    >
      <Textarea
        className="text-white border-none p-0"
        {...register("systemPrompt")}
        defaultValue={systemPrompt}
      />
      <Button type="submit">Save</Button>
    </form>
  );
}
