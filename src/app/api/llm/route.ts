import {NextRequest, NextResponse} from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPEN_AI_SECRET,
});

export const maxDuration = 60;

export async function POST(request: NextRequest) {
  const body = await request.json();

  const completion = await client.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "assistant",
        content: body.systemPrompt,
      },
      {
        role: "user",
        content: body.userPrompt,
      },
    ],
  });

  console.log("completion.choices[0].message", completion.choices[0].message);

  return NextResponse.json({message: completion.choices[0].message.content});
}
