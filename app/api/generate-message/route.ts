import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

// susun ikut priority — letak yang paling reliable dulu
const MODELS = [
  "anthropic/claude-haiku-4-5",
  "openrouter/fusion",
  "qwen/qwen3-8b:free",
  "meta-llama/llama-3.1-8b-instruct:free",
  "mistralai/mistral-7b-instruct:free",
  "google/gemma-3-4b-it:free",
  "openrouter/auto", // last resort
];

const HEADERS = {
  "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  "X-Title": "Portfolio Contact Form",
};

async function tryGenerate(model: string, subject: string, name: string) {
  const completion = await client.chat.completions.create({
    model,
    max_tokens: 300,
    messages: [
      {
        role: "user",
        content: `You are helping a visitor write a casual and friendly message to send through a developer's portfolio contact form.

          Based on this subject: "${subject}"
          ${name ? `The person contacting is: ${name}` : ""}

          Write a message FROM the visitor TO the developer. Rules:
          - Remove the opening greeting like "This is a straightforward creative writing task with no factual accuracy requirements, so I'll write it directly."
          - Casual and friendly tone, like texting a colleague
          - Written in first person (the visitor speaking)
          - Directly address the subject — if it's about hiring, say they want to hire the developer
          - End with a light, open-ended question to invite a reply (e.g. "Would you be up for a quick chat?", "Let me know if you're interested!")
          - 2-4 sentences only, keep it short and natural
          - No formal greetings or sign-offs
          - Return the message text only`,
      },
    ],
  });

  const text = completion.choices[0]?.message?.content ?? "";
  if (!text) throw new Error("Empty response");
  return text;
}

export async function POST(req: Request) {
  if (!process.env.OPENROUTER_API_KEY) {
    return new NextResponse("Please configure OPENROUTER_API_KEY", { status: 500 });
  }

  try {
    const body = await req.json();
    const { subject, name } = body;

    let generated = "";
    let lastError = null;

    for (const model of MODELS) {
      try {
        console.log(`Trying model: ${model}`);
        generated = await tryGenerate(model, subject, name);
        console.log(`Success with model: ${model}`);
        break; // berjaya, stop loop
      } catch (err: any) {
        console.warn(`Model ${model} failed:`, err?.message ?? err);
        lastError = err;
        continue; // cuba model seterusnya
      }
    }

    if (!generated) {
      console.error("All models failed. Last error:", lastError);
      return new NextResponse("All models failed to generate. Please try again later.", { status: 500 });
    }

    return NextResponse.json({ message: generated }, { status: 200 });

  } catch (error) {
    console.error("Unexpected error:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}