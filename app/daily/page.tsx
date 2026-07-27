"use client";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

const challenges = [
  {
    title: "Python Variables",
    difficulty: "Easy",
    time: "10 min",
    xp: 10,
    hint: "Remember that variables store values.",
    question:
      "Write a Python program that stores your name in a variable and prints it.",
  },
  {
    title: "If Statements",
    difficulty: "Easy",
    time: "10 min",
    xp: 10,
    hint: "Use an if statement.",
    question:
      "Write a Python program to check whether a number is even or odd.",
  },
  {
    title: "Loops",
    difficulty: "Medium",
    time: "15 min",
    xp: 15,
    hint: "Use range().",
    question:
      "Print numbers from 1 to 20 using a for loop.",
  },
  {
    title: "Functions",
    difficulty: "Medium",
    time: "20 min",
    xp: 20,
    hint: "Use def.",
    question:
      "Create a function that returns the square of a number.",
  },
  {
    title: "Lists",
    difficulty: "Medium",
    time: "20 min",
    xp: 20,
    hint: "Lists use square brackets [].",
    question:
      "Create a list of five fruits and print the third fruit.",
  },
  {
    title: "Dictionary",
    difficulty: "Medium",
    time: "20 min",
    xp: 20,
    hint: "Use key-value pairs.",
    question:
      "Create a dictionary containing your name, age and city.",
  },
  {
    title: "Object-Oriented Programming",
    difficulty: "Hard",
    time: "30 min",
    xp: 30,
    hint: "Create a Student class.",
    question:
      "Create a Student class with name and age attributes.",
  },
];

export default function DailyPage() {
  const today = new Date();

  const challenge =
    challenges[today.getDate() % challenges.length];

  const todayKey = today.toDateString();

  const [completed, setCompleted] = useState(false);

  const [code, setCode] = useState("");

  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const savedDay =
      localStorage.getItem("dailyCompleted");

    if (savedDay === todayKey) {
      setCompleted(true);
    }

    const savedStreak = Number(
      localStorage.getItem("dailyStreak") || 0
    );

    setStreak(savedStreak);
  }, []);

  function runCode() {
    if (!code.trim()) {
      alert("Please write your solution first.");
      return;
    }

    alert(
      "Code execution will be added in a future update.\n\nYour code is ready to submit."
    );
  }

  function submitSolution() {
    if (!code.trim()) {
      alert("Please write your solution first.");
      return;
    }

    if (completed) return;

    setCompleted(true);

    localStorage.setItem(
      "dailyCompleted",
      todayKey
    );

    const newStreak = streak + 1;

    setStreak(newStreak);

    localStorage.setItem(
      "dailyStreak",
      newStreak.toString()
    );}
      return (
    <main className="min-h-screen bg-gray-100">
    <div className="mx-auto flex max-w-7xl">

      <Navbar />

      <section className="flex-1 p-8">
    

      <div className="mx-auto max-w-5xl">

        <h1 className="text-center text-5xl font-bold text-green-700">
          🔥 Daily Challenge
        </h1>

        <p className="mt-4 text-center text-gray-600 text-lg">
          A new coding challenge unlocks automatically every day.
          Complete it to maintain your streak and earn XP.
        </p>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">

          <div className="flex flex-wrap gap-4">

            <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
              {challenge.difficulty}
            </span>

            <span className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700">
              ⏱ {challenge.time}
            </span>

            <span className="rounded-full bg-yellow-100 px-4 py-2 font-semibold text-yellow-700">
              ⭐ {challenge.xp} XP
            </span>

          </div>

          <h2 className="mt-8 text-3xl font-bold text-gray-800">
            {challenge.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            {challenge.question}
          </p>

          <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5">

            <h3 className="text-xl font-bold text-green-700">
              💡 Hint
            </h3>

            <p className="mt-3 text-gray-700">
              {challenge.hint}
            </p>

          </div>

          <div className="mt-8">

            <label className="mb-3 block text-xl font-bold text-gray-800">
              💻 Write Your Python Solution
            </label>

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder={`# Write your Python solution here...

name = "CodeMint"

print(name)`}
              className="h-72 w-full rounded-2xl border-2 border-gray-300 bg-gray-900 p-5 font-mono text-green-400 outline-none focus:border-green-600"
            />

          </div>

          <div className="mt-8 rounded-2xl bg-orange-50 p-5">

            <h3 className="text-xl font-bold text-orange-600">
              🔥 Current Streak
            </h3>

            <p className="mt-3 text-4xl font-bold text-orange-500">
              {streak} Days
            </p>

          </div>

          <div className="mt-8 flex flex-wrap gap-4">

            <button
              onClick={runCode}
              className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              ▶ Run Code
            </button>

            {!completed && (
              <button
                onClick={submitSolution}
                className="rounded-xl bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                ✅ Submit Solution
              </button>
            )}            {completed && (
              <div className="w-full rounded-2xl bg-green-100 p-6">

                <h2 className="text-3xl font-bold text-green-700">
                  🎉 Challenge Submitted!
                </h2>

                <p className="mt-3 text-lg text-green-700">
                  Excellent work! Your solution has been saved successfully.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">

                  <div className="rounded-xl bg-white p-5 text-center shadow">

                    <p className="text-gray-500">
                      XP Earned
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-yellow-600">
                      +{challenge.xp}
                    </h3>

                  </div>

                  <div className="rounded-xl bg-white p-5 text-center shadow">

                    <p className="text-gray-500">
                      Current Streak
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-orange-500">
                      🔥 {streak} Days
                    </h3>

                  </div>

                  <div className="rounded-xl bg-white p-5 text-center shadow">

                    <p className="text-gray-500">
                      Status
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-green-600">
                      Completed ✅
                    </h3>

                  </div>

                </div>

                <div className="mt-8 rounded-xl border border-green-300 bg-white p-5">

                  <h3 className="text-xl font-bold text-green-700">
                    📅 See You Tomorrow!
                  </h3>

                  <p className="mt-3 text-gray-700 leading-7">
                    A brand-new coding challenge will automatically appear
                    tomorrow. Complete it to continue your learning streak and
                    earn more XP.
                  </p>

                </div>

              </div>
            )}

          </div>

        </div>

      </div>

            

      </section>

    </div>

  </main>
);
}