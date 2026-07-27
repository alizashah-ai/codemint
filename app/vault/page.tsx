"use client";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

interface VaultItem {
  id: number;
  title: string;
  language: string;
  error: string;
  solution: string;
  notes: string;
  date: string;
}

export default function VaultPage() {
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("Python");
  const [error, setError] = useState("");
  const [solution, setSolution] = useState("");
  const [notesText, setNotesText] = useState("");
  const [items, setItems] = useState<VaultItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
  const saved = localStorage.getItem("codemintVault");

  if (saved) {
    setItems(JSON.parse(saved));
  }

  setLoaded(true);
}, []);

  useEffect(() => {
  if (!loaded) return;

  localStorage.setItem(
    "codemintVault",
    JSON.stringify(items)
  );
}, [items, loaded]);
  if (items === null) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        Loading...
      </main>
    );
  }

  function saveItem() {
    if (
      !title.trim() ||
      !error.trim() ||
      !solution.trim()
    )
      return;

    const newItem: VaultItem = {
      id: Date.now(),
      title,
      language,
      error,
      solution,
      notes: notesText,
      date: new Date().toLocaleString(),
    };

    setItems((prev) => [newItem, ...prev]);

    setTitle("");
    setLanguage("Python");
    setError("");
    setSolution("");
    setNotesText("");
  }

  function deleteItem(id: number) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
  <main className="min-h-screen bg-gray-100">
    <div className="mx-auto flex max-w-7xl">

      <Navbar />

      <section className="flex-1 p-8">
    

      <div className="mx-auto max-w-6xl">

        <h1 className="text-center text-5xl font-bold text-green-700">
          💡 Code Vault
        </h1>

        <p className="mt-3 text-center text-gray-600">
          Save coding bugs, fixes, useful concepts and AI solutions for future reference.
        </p>

        {/* Form */}

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl space-y-5">

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Bug / Concept Title"
            className="w-full rounded-xl border p-3 outline-none focus:border-green-600"
          />

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full rounded-xl border p-3 outline-none focus:border-green-600"
          >
            <option>Python</option>
            <option>Java</option>
            <option>C++</option>
            <option>JavaScript</option>
            <option>HTML/CSS</option>
            <option>SQL</option>
            <option>DSA</option>
            <option>Other</option>
          </select>

          <textarea
            value={error}
            onChange={(e) => setError(e.target.value)}
            placeholder="Error / Problem"
            className="h-28 w-full rounded-xl border p-3 outline-none focus:border-green-600"
          />

          <textarea
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
            placeholder="Solution / Fix"
            className="h-28 w-full rounded-xl border p-3 outline-none focus:border-green-600"
          />

          <textarea
            value={notesText}
            onChange={(e) => setNotesText(e.target.value)}
            placeholder="Additional Notes (Optional)"
            className="h-24 w-full rounded-xl border p-3 outline-none focus:border-green-600"
          />

          <button
            onClick={saveItem}
            className="rounded-xl bg-green-600 px-8 py-3 font-semibold text-white hover:bg-green-700"
          >
            Save to Vault
          </button>

        </div>

        {/* Saved Items */}

        <div className="mt-10 space-y-6">

          {items.length === 0 && (
            <div className="rounded-2xl bg-white p-8 text-center shadow-lg text-gray-500">
              Nothing saved in your Code Vault yet.
            </div>
          )}

          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white p-6 shadow-xl"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-2xl font-bold text-green-700">
                    🐞 {item.title}
                  </h2>

                  <p className="mt-1 text-sm text-blue-600 font-semibold">
                    {item.language}
                  </p>

                </div>

                <button
                  onClick={() => deleteItem(item.id)}
                  className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                >
                  Delete
                </button>

              </div>

              <div className="mt-6">

                <h3 className="font-bold text-red-600">
                  Error / Problem
                </h3>

                <p className="mt-2 whitespace-pre-wrap text-gray-700">
                  {item.error}
                </p>

              </div>

              <div className="mt-6">

                <h3 className="font-bold text-green-600">
                  Solution
                </h3>

                <p className="mt-2 whitespace-pre-wrap text-gray-700">
                  {item.solution}
                </p>

              </div>

              {item.notes && (
                <div className="mt-6">

                  <h3 className="font-bold text-blue-600">
                    Notes
                  </h3>

                  <p className="mt-2 whitespace-pre-wrap text-gray-700">
                    {item.notes}
                  </p>

                </div>
              )}

              <p className="mt-6 text-sm text-gray-400">
                Saved on: {item.date}
              </p>

            </div>
          ))}

        </div>

      </div>

          </section>

    </div>

  </main>
);
}