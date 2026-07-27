"use client";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { lessons } from "../lib/lessonData";

export default function RoadmapPage() {
  const [completed, setCompleted] = useState<boolean[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("roadmapProgress");

    if (saved) {
      setCompleted(JSON.parse(saved));
    } else {
      setCompleted(new Array(lessons.length).fill(false));
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem(
      "roadmapProgress",
      JSON.stringify(completed)
    );
  }, [completed, loaded]);

  if (!loaded) {
    return (
      <main className="min-h-screen flex items-center justify-center text-2xl">
        Loading...
      </main>
    );
  }

  const completedCount = completed.filter(Boolean).length;
  const progress =
    (completedCount / lessons.length) * 100;

  return (
  <main className="min-h-screen bg-gray-100">
    <div className="mx-auto flex max-w-7xl">

      <Navbar />

      <section className="flex-1 p-8">

      <div className="mx-auto max-w-5xl">

        <h1 className="text-center text-5xl font-bold text-green-700">
          📚 Learning Roadmap
        </h1>

        <p className="mt-3 text-center text-gray-600">
          Complete every lesson and pass its quiz to unlock the next one.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 text-center shadow-lg">

            <div className="text-4xl">✅</div>

            <h3 className="mt-3 font-semibold text-gray-500">
              Completed
            </h3>

            <p className="mt-2 text-4xl font-bold text-green-600">
              {completedCount}
            </p>

          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow-lg">

            <div className="text-4xl">📖</div>

            <h3 className="mt-3 font-semibold text-gray-500">
              Total Lessons
            </h3>

            <p className="mt-2 text-4xl font-bold text-blue-600">
              {lessons.length}
            </p>

          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow-lg">

            <div className="text-4xl">🏆</div>

            <h3 className="mt-3 font-semibold text-gray-500">
              Progress
            </h3>

            <p className="mt-2 text-4xl font-bold text-orange-500">
              {Math.round(progress)}%
            </p>

          </div>

        </div>

        <div className="mt-10">

          <div className="mb-3 flex justify-between">

            <span className="font-semibold">
              Course Progress
            </span>

            <span className="font-bold text-green-700">
              {Math.round(progress)}%
            </span>

          </div>

          <div className="h-5 overflow-hidden rounded-full bg-gray-200">

            <div
              className="h-full rounded-full bg-green-600 transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

        <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6">

          <h2 className="text-2xl font-bold text-green-700">
            🎯 Keep Going!
          </h2>

          <p className="mt-3 text-gray-700">
            Read every lesson carefully and pass the quiz to unlock the next lesson.
          </p>

        </div>

        <div className="mt-10 space-y-4">

          {lessons.map((lesson, index) => {

            const unlocked =
              index === 0 || completed[index - 1];

            return (

              <div
                key={lesson.slug}
                className="flex items-center justify-between rounded-2xl bg-white p-6 shadow-lg"
              >

                <div className="flex items-center gap-4">

                  {completed[index] ? (

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white">
                      ✓
                    </div>

                  ) : unlocked ? (

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                      ▶
                    </div>

                  ) : (

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300">
                      🔒
                    </div>

                  )}

                  <div>

                    <h2
                      className={`text-xl font-bold ${
                        completed[index]
                          ? "line-through text-gray-400"
                          : "text-gray-800"
                      }`}
                    >
                      {lesson.title}
                    </h2>

                    <p className="mt-1 text-gray-500">
                      {completed[index]
                        ? "Lesson Completed"
                        : unlocked
                        ? "Ready to Start"
                        : "Locked"}
                    </p>

                  </div>

                </div>
                                {completed[index] ? (

                  <span className="rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">
                    Completed
                  </span>

                ) : unlocked ? (

                  <Link
                    href={`/lesson/${lesson.slug}`}
                    className="rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
                  >
                    Start Lesson
                  </Link>

                ) : (

                  <button
                    disabled
                    className="cursor-not-allowed rounded-xl bg-gray-300 px-5 py-3 font-semibold text-gray-600"
                  >
                    Locked
                  </button>

                )}

              </div>

            );

          })}

        </div>

      </div>

          </section>

    </div>

  </main>
);
}