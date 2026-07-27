"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { lessons } from "@/app/lib/lessonData";

export default function LessonPage() {
  const params = useParams();

  const lesson = lessons.find(
    (l) => l.slug === params.slug
  );

  if (!lesson) {
    return (
      <main className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Lesson Not Found
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 p-8">

      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 shadow-xl">

        <h1 className="text-5xl font-bold text-green-700">
          {lesson.title}
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Read the lesson carefully before taking the quiz.
        </p>

        <div className="mt-10 space-y-6">

          {lesson.content.map((point, index) => (

            <div
              key={index}
              className="rounded-2xl border border-green-100 bg-green-50 p-6"
            >
              <h2 className="mb-2 text-xl font-bold text-green-700">
                Topic {index + 1}
              </h2>

              <p className="leading-8 text-gray-700">
                {point}
              </p>

            </div>

          ))}

        </div>

        <div className="mt-12 flex justify-between">

          <Link
            href="/roadmap"
            className="rounded-xl border border-green-600 px-8 py-3 font-semibold text-green-700 hover:bg-green-50"
          >
            ← Back to Roadmap
          </Link>

          <Link
            href={lesson.quiz}
            className="rounded-xl bg-green-600 px-8 py-3 font-semibold text-white hover:bg-green-700"
          >
            Take Quiz →
          </Link>

        </div>

      </div>

    </main>
  );
}