import {NextResponse} from "next/server";

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

export async function POST() {
  // get the body
  // call open ai model with the prompt aka the body

  const llmResponse = await client.chat.completions.create({
    messages: [
      {
        role: "user",
        content:
          "write some react code that draws a red square on the screen. Only reply with react component code. Please use tailwind. and only reply with code that will be in the return statement of the component. Also do not add \n line breaks or / or backslashes to the code. Here is an example of the response I want you to return. Please only use this format. <p className='text-red-500'>hello</p>",
      },
    ],
    model: "gpt-4o-mini",
  });

  return NextResponse.json({message: llmResponse});
}

// http://localhost:3000/api/thing
