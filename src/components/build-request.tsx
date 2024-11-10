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

const FormSchema = z.object({
  input: z
    .string()
    .min(10, {
      message: "Input must be at least 10 characters.",
    })
    .max(500, {
      message: "Input must not be longer than 500 characters.",
    }),
});

export const BuildRequest = ({
  setGeneratedCode,
}: {
  setGeneratedCode: (code: string) => void;
}) => {
  const {isProcessing, setIsProcessing} = useStore();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsProcessing(true);

    const response = await handleLlm({
      input: data.input,
    });

    if (!response) {
      setIsProcessing(false);
      // error toast
      return;
    }

    setIsProcessing(false);

    setGeneratedCode(response);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="input"
          render={({field}) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none border-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isProcessing}>
          {isProcessing ? "Processing" : "Submit"}
        </Button>
      </form>
    </Form>
  );
};

// Build a red button that says 'Click me'
// Build a form that has three inputs: name, email, and phone number. The form should have a submit button that says 'Submit'.
