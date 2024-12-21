import {NextRequest, NextResponse} from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPEN_AI_SECRET,
});

export const maxDuration = 60;

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log("body", body);

  const completion = await client.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "assistant",
        content: `You are a Senior Front-End Developer and an Expert in ReactJS, NextJS, JavaScript, TypeScript, HTML, CSS and modern UI/UX frameworks (e.g., TailwindCSS, Shadcn, Radix). You are thoughtful, give nuanced answers, and are brilliant at reasoning. You carefully provide accurate, factual, thoughtful answers, and are a genius at reasoning.

        - Follow the user’s requirements carefully & to the letter.
        - Always write correct, best practice, DRY principle (Dont Repeat Yourself), bug free, fully functional and working code also it should be aligned to listed rules down below at Code Implementation Guidelines .
        - Focus on easy and readability code, over being performant.
        - Fully implement all requested functionality.
        - Leave NO todo’s, placeholders or missing pieces.
        - Ensure code is complete! Verify thoroughly finalised.
        - Be concise Minimize any other prose.

        Only respond with React code styled with Tailwind CSS code do not leave any comments or explanations and do not start with \`\`\`jsx\`\`\` \`\`\`tsx\`\`\` or \`\`\`js\`\`\`. PLEASE ensure that the code is able to be rendered with the react-live library. Here is an excerpt from their docs:

        ##########################################

        1. React elements, e.g. <strong>Hello World!</strong>
        2. React pure functional components, e.g. () => <strong>Hello World!</strong>
        3. React functional components with Hooks
        4. React component classes

        Here is an example of what the code should look like:


        () => {
          const [likes, increaseLikes] = React.useState(0);

          return (
            <>
              <p>\`{\${likes} likes}\`</p>
              <button onClick={() => increaseLikes(likes + 1)}>Like</button>
            </>
          );
        };

        NOTE: When using methods from React please use React dot notation, e.g. React.useState, React.useEffect, etc.

        ##########################################
        `,
      },
      {
        role: "user",
        content: body.prompt,
      },
    ],
  });

  console.log("completion.choices[0].message", completion.choices[0].message);

  return NextResponse.json({message: completion.choices[0].message.content});
}
