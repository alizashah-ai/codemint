"use client";
import Navbar from "../components/Navbar";
import { useState } from "react";

type ChatMessage = {
  role: "user" | "ai";
  text: string;
};

export default function MentorPage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "ai",
      text: "👋 Hi! I'm CodeMint AI. Ask me anything about programming.",
    },
  ]);

  async function askAI() {
    if (!message.trim()) return;

    const userMessage = message;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: data.reply,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Something went wrong.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gray-100">
    <div className="mx-auto flex max-w-7xl">

      <Navbar />

      <section className="flex-1 p-8">
        <div className="mx-auto max-w-5xl">

         <h1 className="mb-8 text-center text-5xl font-bold text-green-700">
          CodeMint AI Mentor
         </h1>

        <div className="h-[500px] overflow-y-auto rounded-2xl bg-white p-6 shadow-lg">

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-5 flex ${
                msg.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-5 py-4 whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="text-gray-500">
              CodeMint AI is thinking...
            </div>
          )}

        </div>

        <div className="mt-6 flex gap-4">

          <input
            className="flex-1 rounded-xl border p-4 outline-none focus:border-green-600"
            placeholder="Ask a programming question..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                askAI();
              }
            }}
          />

          <button
            onClick={askAI}
            disabled={loading}
            className="rounded-xl bg-green-600 px-8 font-semibold text-white hover:bg-green-700"
          >
            Send
          </button>

                </div>

        </div>

      </section>

    </div>

  </main>
);
}