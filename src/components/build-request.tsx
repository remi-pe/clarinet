"use client";

import React, {useEffect, useRef} from "react";
import {useForm, useFieldArray} from "react-hook-form";
import {Textarea} from "@/components/ui/textarea";
import {CrossIcon} from "./icons/cross";
import {Button} from "./button";
import {PlusIcon} from "./icons/plus";
import {useStore} from "@/app/store";
import {useRouter} from "next/navigation";
import useFormPersist from "react-hook-form-persist";
import {DEFAULT_SYSTEM_PROMPT} from "@/consts";

type FormData = {
  requirements: {
    requirement: string;
  }[];
};

const defaultValue = {
  requirements: [
    {
      requirement: "",
    },
  ],
};

const fetchLlmResponse = async ({
  userPrompt,
  systemPrompt,
}: {
  userPrompt: string;
  systemPrompt: string;
}): Promise<{message: string}> => {
  const response = await fetch("/api/llm", {
    method: "POST",
    body: JSON.stringify({userPrompt, systemPrompt}),
  });

  return response.json();
};

export const BuildRequest = () => {
  const router = useRouter();
  const {setIsProcessing, setGeneratedCode, userPrompt, setUserPrompt} =
    useStore();
  const storage = useRef<Storage | undefined>(undefined);

  useEffect(() => {
    storage.current = localStorage;
    const value = storage.current.getItem("user_prompt");

    storage.current.setItem(
      "user_prompt",
      value ?? JSON.stringify(defaultValue.requirements)
    );
  }, []);

  const {register, control, handleSubmit, setValue, watch} = useForm({
    defaultValues: defaultValue,
  });

  useFormPersist("user_prompt", {
    watch,
    setValue,
    storage: storage.current,
  });

  const createPrompt = (data: FormData) => {
    const prompt = data.requirements.map((item) => item.requirement).join("\n");

    setUserPrompt(prompt);

    return prompt;
  };

  const {fields, append, remove} = useFieldArray({
    control,
    name: "requirements",
  });

  const onSubmit = async (data: FormData) => {
    const newPrompt = createPrompt(data);

    const systemPrompt = localStorage.getItem("systemPrompt");

    if (newPrompt === userPrompt) {
      router.push("/build");
      return;
    }

    setIsProcessing(true);

    const response = await fetchLlmResponse({
      userPrompt: newPrompt,
      systemPrompt: systemPrompt ?? DEFAULT_SYSTEM_PROMPT,
    }).finally(() => {
      setIsProcessing(false);
    });

    // render error toast here
    if (!response.message) return;

    setGeneratedCode(response.message);

    router.push("/build");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[569px] flex flex-col gap-4"
      id="hook-form"
    >
      <ul className="flex flex-col gap-5 w-full">
        {fields.map((item, index) => {
          return (
            <li
              key={item.id}
              className="flex gap-4 items-end flex-col p-5 bg-grey-100 rounded-xl w-full border-grey-400 border"
            >
              <Button
                renderIcon={(size) => <CrossIcon size={size} />}
                onClickHandler={() => remove(index)}
                size="xs"
                theme="dark"
                className="grey-100 grey-400"
              />

              <Textarea
                className="text-white border-none p-0"
                {...register(`requirements.${index}.requirement`, {
                  required: true,
                })}
                placeholder="write some react code that draws a red square on the screen."
              />
            </li>
          );
        })}
      </ul>
      <Button
        renderIcon={(size) => <PlusIcon size={size} />}
        onClickHandler={() => append({requirement: ""})}
        size="m"
        theme="dark"
        className="grey-100 grey-400"
      />
    </form>
  );
};
