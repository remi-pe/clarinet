"use server";

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPEN_AI_SECRET,
});

export const handleLlm = async ({input}: {input: string}) => {
  const completion = await client.chat.completions.create({
    model: "gpt-4o",
    temperature: 0,
    messages: [
      {
        role: "system",
        content: `You are an expert in TypeScript, Node.js, Next.js App Router, React, and Tailwind. Only respond with raw JSX code, styled with Tailwind CSS, suitable for direct insertion into a return statement within a functional component in React. Respond only with JSX, without wrapping it in quotation marks, backticks, or code fences, and without any additional explanations or comments.

        For example, if a button is requested, your response should look like this:

        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">
          Click me
        </button>`,
      },
      {
        role: "user",
        content: input,
      },
    ],
  });

  console.log(completion.choices[0].message);

  return completion.choices[0].message.content;
};
