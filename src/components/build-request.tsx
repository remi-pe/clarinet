"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";

import {Button} from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {Textarea} from "@/components/ui/textarea";
import {handleLlm} from "@/app/server/llm";
import {useStore} from "@/app/store";
import {PlusIcon} from "./icons/plus";
import {useState} from "react";

const FormSchema = z.object({
  requirement1: z
    .string()
    .min(5, {
      message: "Requirement must be at least 5 characters.",
    })
    .max(500, {
      message: "Requirement must not be longer than 500 characters.",
    }),
  requirement2: z
    .string()
    .min(5, {
      message: "Requirement must be at least 5 characters.",
    })
    .max(500, {
      message: "Requirement must not be longer than 500 characters.",
    })
    .optional(),
  requirement3: z
    .string()
    .min(5, {
      message: "Requirement must be at least 5 characters.",
    })
    .max(500, {
      message: "Requirement must not be longer than 500 characters.",
    })
    .optional(),
  requirement4: z
    .string()
    .min(5, {
      message: "Requirement must be at least 5 characters.",
    })
    .max(500, {
      message: "Requirement must not be longer than 500 characters.",
    })
    .optional(),
  requirement5: z
    .string()
    .min(5, {
      message: "Requirement must be at least 5 characters.",
    })
    .max(500, {
      message: "Requirement must not be longer than 500 characters.",
    })
    .optional(),
});

export const BuildRequest = ({
  setGeneratedCode,
}: {
  setGeneratedCode: (code: string) => void;
}) => {
  const {isProcessing, setIsProcessing} = useStore();
  const [numberOfRequirements, setNumberOfRequirements] = useState(1);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  console.log("numberOfRequirements", numberOfRequirements);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsProcessing(true);

    const response = await handleLlm({
      input: data.requirement1,
    });

    if (!response) {
      setIsProcessing(false);
      // error toast
      return;
    }

    setIsProcessing(false);

    setGeneratedCode(response);
  }

  const addEmptyRequirement = () => {
    setNumberOfRequirements((prev) => prev + 1);
  };

  return (
    <div className="w-2/3">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="requirement1"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Add requirement" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {numberOfRequirements > 1 && (
            <FormField
              control={form.control}
              name="requirement2"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Add requirement" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {numberOfRequirements > 2 && (
            <FormField
              control={form.control}
              name="requirement3"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Add requirement" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {numberOfRequirements > 3 && (
            <FormField
              control={form.control}
              name="requirement4"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Add requirement" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {numberOfRequirements > 4 && (
            <FormField
              control={form.control}
              name="requirement5"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Add requirement" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {numberOfRequirements < 5 && (
            <div
              onClick={addEmptyRequirement}
              className="w-12 h-12 cursor-pointer bg-lightest_black border border-border_stroke flex items-center justify-center rounded-md"
            >
              <PlusIcon />
            </div>
          )}
          <Button disabled={isProcessing}>
            {isProcessing ? "Processing" : "Submit"}
          </Button>
        </form>
      </Form>

      {/* {requirements.map((requirement, index) => (
        <Textarea
          key={index}
          placeholder="Add requirement"
          value={requirement.input ?? ""}
          onChange={(e) => {
            setRequirements((prev) =>
              prev.map((prev) =>
                prev.id === requirement.id
                  ? {...requirement, input: e.target.value}
                  : prev
              )
            );
          }}
        />
      ))} */}
    </div>
  );
};

// Build a red button that says 'Click me'
// Build a form that has three inputs: name, email, and phone number. The form should have a submit button that says 'Submit'.
