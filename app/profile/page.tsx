"use client";

import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [lessonCount, setLessonCount] = useState(0);
  const [noteCount, setNoteCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const roadmap = JSON.parse(
      localStorage.getItem("roadmapProgress") || "[]"
    );

    const notes = JSON.parse(
      localStorage.getItem("codemintVault") || "[]"
    );

    const completed = roadmap.filter(
      (x: boolean) => x
    ).length;

    setLessonCount(completed);

    setProgress(
      roadmap.length
        ? Math.round(
            (completed / roadmap.length) * 100
          )
        : 0
    );

    setNoteCount(notes.length);

    setStreak(
      Number(
        localStorage.getItem("dailyStreak") || "0"
      )
    );
  }, []);

  return (
    <main className="min-h-screen bg-gray-100">

      <div className="mx-auto flex max-w-7xl">

        <Navbar />

        <section className="flex-1 p-8">

          <div className="mx-auto max-w-6xl">

            <div className="rounded-3xl bg-gradient-to-r from-green-600 to-emerald-500 p-8 text-white shadow-xl">

              <div className="flex items-center justify-between">

                <div>

                  <h1 className="text-5xl font-bold">
                   👤 Learning Profile
                  </h1>

                  <p className="mt-3 text-lg text-green-100">
                    Monitor your progress, celebrate achievements,
                    and keep improving your programming skills.
                  </p>

                </div>

                <div className="flex items-center gap-2 rounded-full bg-white/20 px-5 py-3 text-sm font-semibold whitespace-nowrap">

  <span className="h-3 w-3 rounded-full bg-lime-300"></span>

  <span>Active Learner</span>

</div>

              </div>

            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

              <div className="rounded-2xl bg-white p-6 shadow-lg">

                <div className="text-4xl">
                  📚
                </div>

                <h3 className="mt-3 text-lg font-semibold text-gray-500">
                  Lessons Completed
                </h3>

                <p className="mt-2 text-4xl font-bold text-green-600">
                  {lessonCount}
                </p>

              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg">

                <div className="text-4xl">
                  🏆
                </div>

                <h3 className="mt-3 text-lg font-semibold text-gray-500">
                  Roadmap Progress
                </h3>

                <p className="mt-2 text-4xl font-bold text-orange-500">
                  {progress}%
                </p>

              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg">

                <div className="text-4xl">
                  🔥
                </div>

                <h3 className="mt-3 text-lg font-semibold text-gray-500">
                  Daily Streak
                </h3>

                <p className="mt-2 text-4xl font-bold text-red-500">
                  {streak}
                </p>

              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg">

                <div className="text-4xl">
                  💾
                </div>

                <h3 className="mt-3 text-lg font-semibold text-gray-500">
                  Vault Notes
                </h3>

                <p className="mt-2 text-4xl font-bold text-blue-600">
                  {noteCount}
                </p>

              </div>

            </div>
                        <div className="mt-10 grid gap-6 lg:grid-cols-2">

              {/* Learning Goals */}

              <div className="rounded-2xl bg-white p-8 shadow-lg">

                <h2 className="text-2xl font-bold text-green-700">
                  🎯 Learning Goals
                </h2>

                <div className="mt-6 space-y-5">

                  <div className="rounded-xl bg-green-50 p-5">

                    <h3 className="font-bold text-green-700">
                      Current Goal
                    </h3>

                    <p className="mt-2 text-gray-700">
                      Complete Python Fundamentals and strengthen problem-solving skills.
                    </p>

                  </div>

                  <div className="rounded-xl bg-blue-50 p-5">

                    <h3 className="font-bold text-blue-700">
                      Next Milestone
                    </h3>

                    <p className="mt-2 text-gray-700">
                      Finish 5 roadmap lessons and solve daily coding challenges consistently.
                    </p>

                  </div>

                </div>

              </div>

              {/* Achievements */}

              <div className="rounded-2xl bg-white p-8 shadow-lg">

                <h2 className="text-2xl font-bold text-green-700">
                  🏅 Achievements
                </h2>

                <div className="mt-6 grid grid-cols-2 gap-4">

                  <div className="rounded-xl bg-yellow-50 p-5 text-center">
                    <div className="text-4xl">🥇</div>
                    <p className="mt-2 font-semibold">
                      First Lesson
                    </p>
                  </div>

                  <div className="rounded-xl bg-red-50 p-5 text-center">
                    <div className="text-4xl">🔥</div>
                    <p className="mt-2 font-semibold">
                      Daily Challenge
                    </p>
                  </div>

                  <div className="rounded-xl bg-blue-50 p-5 text-center">
                    <div className="text-4xl">💾</div>
                    <p className="mt-2 font-semibold">
                      Vault User
                    </p>
                  </div>

                  <div className="rounded-xl bg-green-50 p-5 text-center">
                    <div className="text-4xl">🤖</div>
                    <p className="mt-2 font-semibold">
                      AI Explorer
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Learning Activity */}

            <div className="mt-10 rounded-2xl bg-white p-8 shadow-lg">

              <h2 className="text-2xl font-bold text-green-700">
                📈 Learning Activity
              </h2>

              <div className="mt-6 space-y-5">

                <div className="flex items-center justify-between rounded-xl bg-gray-50 p-5">

                  <div>

                    <h3 className="font-semibold">
                      📚 Lessons Completed
                    </h3>

                    <p className="text-gray-500">
                      Progress through the roadmap.
                    </p>

                  </div>

                  <span className="font-bold text-green-600">
                    {lessonCount}
                  </span>

                </div>

                <div className="flex items-center justify-between rounded-xl bg-gray-50 p-5">

                  <div>

                    <h3 className="font-semibold">
                      💾 Saved Notes
                    </h3>

                    <p className="text-gray-500">
                      Programming notes stored safely.
                    </p>

                  </div>

                  <span className="font-bold text-blue-600">
                    {noteCount}
                  </span>

                </div>

                <div className="flex items-center justify-between rounded-xl bg-gray-50 p-5">

                  <div>

                    <h3 className="font-semibold">
                      🏆 Overall Progress
                    </h3>

                    <p className="text-gray-500">
                      Learning roadmap completion.
                    </p>

                  </div>

                  <span className="font-bold text-orange-500">
                    {progress}%
                  </span>

                </div>

              </div>

            </div>

            {/* Motivation */}

            <div className="mt-10 rounded-3xl bg-gradient-to-r from-green-600 to-emerald-500 p-8 text-center text-white shadow-xl">

              <h2 className="text-3xl font-bold">
                ✨ Keep Learning
              </h2>

              <p className="mt-4 text-lg text-green-100">
                "Small progress every day leads to big achievements."
              </p>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}