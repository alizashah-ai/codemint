import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const MODELS = [
  "models/gemini-3.5-flash",
  "models/gemini-2.5-flash",
  "models/gemini-flash-latest",
];

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const prompt = `
You are CodeMint AI.

You are a friendly AI coding mentor.

Rules:
- Help beginners learn programming.
- Explain concepts simply.
- Give examples.
- Help with Python, Java, C++, JavaScript, HTML, CSS, SQL and DSA.
- If asked something unrelated to programming, politely say you only help with coding and computer science.

User Question:
${message}
`;

    let lastError: any;

    for (const model of MODELS) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents: prompt,
        });

        return Response.json({
          reply: response.text,
        });
      } catch (err) {
        console.log(`Failed with ${model}`);
        lastError = err;
      }
    }

    throw lastError;
  } catch (error: any) {
    console.error(error);

    return Response.json({
      reply:
        "The AI service is temporarily unavailable. Please try again in a few moments.",
    });
  }
}