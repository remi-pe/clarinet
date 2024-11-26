import React from "react";
import {useForm, useFieldArray} from "react-hook-form";
import {Textarea} from "@/components/ui/textarea";
import {CrossIcon} from "./icons/cross";
import {Button} from "./button";
import {PlusIcon} from "./icons/plus";
import {useStore} from "@/app/store";
import {handleLlm} from "@/app/server/llm";

type FormData = {
  requirements: {
    requirement: string;
  }[];
};
export const BuildRequest = () => {
  const {setIsProcessing, setGeneratedCode} = useStore();
  const {register, control, handleSubmit} = useForm({
    defaultValues: {
      requirements: [{requirement: ""}],
    },
  });

  const construeRequirements = (data: FormData) => {
    console.log("construeRequirements", data);

    return data.requirements.map((item) => item.requirement).join("\n");
  };

  const {fields, append, remove} = useFieldArray({
    control,
    name: "requirements",
  });

  const onSubmit = async (data: FormData) => {
    setIsProcessing(true);
    const prompt = construeRequirements(data);
    const response = await handleLlm({input: prompt});

    setIsProcessing(false);

    console.log(response);

    if (!response) return;

    setGeneratedCode(response);
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
              className="flex gap-4 items-end flex-col p-5 bg-grey-100 rounded-xl w-full border-grey-400 border-2"
            >
              <Button
                renderIcon={(size) => <CrossIcon size={size} />}
                onClickHandler={() => remove(index)}
                size="xs"
                theme="dark"
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
      />
    </form>
  );
};
