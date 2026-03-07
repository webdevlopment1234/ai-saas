export const dynamic = "force-dynamic";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const model_name = process.env.GROQ_API_KEY ? "llama-3.3-70b-versatile" : "gpt-4o-mini";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!process.env.OPENAI_API_KEY && !process.env.GROQ_API_KEY) {
      return new NextResponse("AI API Key not configured", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Missing messages", { status: 400 });
    }

    const isAllowed = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!isAllowed && !isPro) {
      return new NextResponse("API Limit Exceeded", { status: 403 });
    }

    const openai = new OpenAI({
      apiKey: process.env.GROQ_API_KEY || process.env.OPENAI_API_KEY,
      baseURL: process.env.GROQ_API_KEY ? "https://api.groq.com/openai/v1" : undefined,
    });

    try {
      const response = await openai.chat.completions.create({
        model: model_name,
        messages,
      });

      if (!isPro) {
        await increaseApiLimit();
      }

      return NextResponse.json(response.choices[0].message, { status: 200 });
    } catch (apiError: any) {
      const provider = process.env.GROQ_API_KEY ? "Groq" : "OpenAI";
      const errorMessage = apiError?.response?.data?.error?.message || apiError?.message || `${provider} API Error`;
      return new NextResponse(`${provider} Error: ` + errorMessage, { status: 500 });
    }
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal Server Error: " + (error instanceof Error ? error.message : "Unknown error"), { status: 500 });
  }
}
