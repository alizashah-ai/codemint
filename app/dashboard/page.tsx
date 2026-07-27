"use client";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [completedLessons, setCompletedLessons] = useState(0);
  const [vaultItems, setVaultItems] = useState(0);
  const [progress, setProgress] = useState(0);
  const [dailyCompleted, setDailyCompleted] = useState(false);

  useEffect(() => {
    const roadmap = localStorage.getItem("roadmapProgress");

    if (roadmap) {
      const lessons: boolean[] = JSON.parse(roadmap);
      const completed = lessons.filter(Boolean).length;

      setCompletedLessons(completed);
      setProgress(Math.round((completed / lessons.length) * 100));
    }

    const vault = localStorage.getItem("codemintVault");

    if (vault) {
      const items = JSON.parse(vault);
      setVaultItems(items.length);
    }

    const today = new Date().toDateString();

    if (localStorage.getItem("dailyCompleted") === today) {
      setDailyCompleted(true);
    }
  }, []);

  return (
    <main className="min-h-screen bg-gray-100">

      <div className="mx-auto flex max-w-7xl">
        <Navbar />


        {/* Main Content */}

        <section className="flex-1 p-8">

          <div className="rounded-3xl bg-gradient-to-r from-green-600 to-emerald-500 p-8 text-white shadow-xl">

            <h1 className="text-4xl font-bold">
              👋 Welcome Back!
            </h1>

            <p className="mt-3 text-lg text-green-100">
              Continue your learning journey and improve your programming skills.
            </p>

          </div>
                    {/* Statistics */}

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">

              <div className="text-4xl">📈</div>

              <h3 className="mt-3 text-lg font-semibold text-gray-500">
                Overall Progress
              </h3>

              <p className="mt-2 text-4xl font-bold text-orange-500">
                {progress}%
              </p>

            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">

              <div className="text-4xl">📚</div>

              <h3 className="mt-3 text-lg font-semibold text-gray-500">
                Lessons Completed
              </h3>

              <p className="mt-2 text-4xl font-bold text-green-600">
                {completedLessons}
              </p>

            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">

              <div className="text-4xl">💾</div>

              <h3 className="mt-3 text-lg font-semibold text-gray-500">
                Code Vault
              </h3>

              <p className="mt-2 text-4xl font-bold text-blue-600">
                {vaultItems}
              </p>

            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">

              <div className="text-4xl">🔥</div>

              <h3 className="mt-3 text-lg font-semibold text-gray-500">
                Today's Challenge
              </h3>

              {dailyCompleted ? (

                <p className="mt-2 text-2xl font-bold text-green-600">
                  Completed ✅
                </p>

              ) : (

                <>
                  <p className="mt-2 text-2xl font-bold text-orange-500">
                    Ready
                  </p>

                  <Link
                    href="/daily"
                    className="mt-4 inline-block rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
                  >
                    Start Challenge
                  </Link>
                </>

              )}

            </div>

          </div>

          {/* AI Tip */}

          <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6 shadow">

            <h2 className="text-2xl font-bold text-green-700">
              💡 AI Tip of the Day
            </h2>

            <p className="mt-3 leading-7 text-gray-700">
              Focus on understanding programming concepts instead of memorizing
              syntax. Practice every day, even for 15 minutes. Small consistent
              progress leads to big improvements.
            </p>

          </div>
                    {/* Recent Activity */}

          <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg">

            <h2 className="text-2xl font-bold text-gray-800">
              📈 Recent Activity
            </h2>

            <div className="mt-6 space-y-5">

              <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">

                <div>

                  <h3 className="font-semibold">
                    📚 Learning Progress
                  </h3>

                  <p className="text-sm text-gray-500">
                    {completedLessons} lessons completed
                  </p>

                </div>

                <span className="font-bold text-green-600">
                  {progress}%
                </span>

              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">

                <div>

                  <h3 className="font-semibold">
                    💾 Code Vault
                  </h3>

                  <p className="text-sm text-gray-500">
                    Saved notes and code snippets
                  </p>

                </div>

                <span className="font-bold text-blue-600">
                  {vaultItems}
                </span>

              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">

                <div>

                  <h3 className="font-semibold">
                    🔥 Daily Challenge
                  </h3>

                  <p className="text-sm text-gray-500">
                    {dailyCompleted
                      ? "Completed today"
                      : "Not completed yet"}
                  </p>

                </div>

                <Link
                  href="/daily"
                  className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
                >
                  Open
                </Link>

              </div>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}