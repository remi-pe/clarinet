import React from "react";
import {useForm, useFieldArray} from "react-hook-form";
import {Textarea} from "@/components/ui/textarea";
import {CrossIcon} from "./icons/cross";

export const BuildRequest = () => {
  const {register, control, handleSubmit} = useForm({
    defaultValues: {
      test: [{requirement: ""}],
    },
  });
  const {fields, append, remove} = useFieldArray({
    control,
    name: "test",
  });

  const onSubmit = (data) => console.log("data", data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[569px] flex flex-col gap-4"
    >
      <ul className="flex flex-col gap-5 w-full">
        {fields.map((item, index) => {
          return (
            <li
              key={item.id}
              className="flex gap-4 items-end flex-col p-5 bg-dark_black rounded-xl w-full border-border_stroke border-2"
            >
              <button
                type="button"
                className="text-white w-fit p-1.5 bg-dark_black rounded-md border-2 border-border_stroke"
                onClick={() => {
                  remove(index);
                }}
              >
                <CrossIcon />
              </button>
              <Textarea
                className="text-white border-none p-0"
                {...register(`test.${index}.requirement`, {required: true})}
                placeholder="write some react code that draws a red square on the screen. Only reply with react component code. Please use tailwind. and only reply with code that will be in the return statement of the component. Also do not add \n line breaks or / or backslashes to the code. Here is an example of the response I want you to return. Please only use this format. <p className='text-red-500'>hello</p"
              />
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className="text-white w-fit p-1.5  bg-dark_black rounded-md border-2 border-border_stroke"
        onClick={() => {
          append({requirement: ""});
        }}
      >
        <CrossIcon size={10} rotate={45} />
      </button>

      {/* <input type="submit" /> */}
    </form>
  );
};
