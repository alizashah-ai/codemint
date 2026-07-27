"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const quizzes: Record<
  string,
  {
    question: string;
    options: string[];
    answer: string;
  }[]
> = {
  "python-basics": [
    {
      question: "Python is a ____ language.",
      options: [
        "Programming",
        "Database",
        "Browser",
        "Operating System",
      ],
      answer: "Programming",
    },
    {
      question: "Which function prints output?",
      options: ["echo()", "print()", "printf()", "show()"],
      answer: "print()",
    },
    {
      question: "Which symbol is used for comments?",
      options: ["//", "#", "/* */", "<!-- -->"],
      answer: "#",
    },
    {
      question: "Python variables are created by:",
      options: [
        "Declaring data type first",
        "Assigning a value",
        "Using var keyword",
        "Using let keyword",
      ],
      answer: "Assigning a value",
    },
    {
      question: "Python is case sensitive.",
      options: ["True", "False"],
      answer: "True",
    },
  ],

  variables: [
    {
      question: "Variables are used to:",
      options: [
        "Store data",
        "Delete files",
        "Compile code",
        "Browse internet",
      ],
      answer: "Store data",
    },
    {
      question: "Which operator assigns a value?",
      options: ["=", "==", "+", ":"],
      answer: "=",
    },
    {
      question: "Which is a floating-point number?",
      options: ["3.14", "10", "True", '"Hello"'],
      answer: "3.14",
    },
    {
      question: "Which data type stores text?",
      options: ["String", "Integer", "Float", "Boolean"],
      answer: "String",
    },
    {
      question: "Python automatically detects data type.",
      options: ["True", "False"],
      answer: "True",
    },
  ],

  "if-statements": [
    {
      question: "If statements are used for:",
      options: [
        "Decision making",
        "Loops",
        "Printing",
        "Variables",
      ],
      answer: "Decision making",
    },
    {
      question: "Which keyword checks another condition?",
      options: [
        "repeat",
        "elif",
        "continue",
        "pass",
      ],
      answer: "elif",
    },
    {
      question: "Which block executes if all conditions fail?",
      options: [
        "finally",
        "except",
        "else",
        "break",
      ],
      answer: "else",
    },
    {
      question: "Python uses ____ instead of braces.",
      options: [
        "Semicolons",
        "Indentation",
        "Tabs only",
        "Quotes",
      ],
      answer: "Indentation",
    },
    {
      question: "Conditions return:",
      options: [
        "True/False",
        "Numbers only",
        "Strings",
        "Lists",
      ],
      answer: "True/False",
    },
  ],

  loops: [
    {
      question: "Which loop repeats a fixed number of times?",
      options: [
        "for",
        "switch",
        "goto",
        "case",
      ],
      answer: "for",
    },
    {
      question: "Which loop continues while a condition is true?",
      options: [
        "while",
        "switch",
        "case",
        "elif",
      ],
      answer: "while",
    },
    {
      question: "range() is commonly used with:",
      options: [
        "for",
        "if",
        "print",
        "return",
      ],
      answer: "for",
    },
    {
      question: "Which keyword exits a loop?",
      options: [
        "continue",
        "exit",
        "break",
        "stop",
      ],
      answer: "break",
    },
    {
      question: "continue means:",
      options: [
        "Exit loop",
        "Skip current iteration",
        "Restart program",
        "Stop Python",
      ],
      answer: "Skip current iteration",
    },
  ],

  functions: [
    {
      question: "Functions are created using:",
      options: [
        "function",
        "def",
        "create",
        "make",
      ],
      answer: "def",
    },
    {
      question: "Functions help by:",
      options: [
        "Reducing repeated code",
        "Deleting variables",
        "Stopping loops",
        "Installing Python",
      ],
      answer: "Reducing repeated code",
    },
    {
      question: "Functions may:",
      options: [
        "Return values",
        "Only print",
        "Only input",
        "Only loop",
      ],
      answer: "Return values",
    },
    {
      question: "Data passed into functions are:",
      options: [
        "Parameters",
        "Classes",
        "Modules",
        "Packages",
      ],
      answer: "Parameters",
    },
    {
      question: "Functions improve:",
      options: [
        "Code reusability",
        "Internet speed",
        "RAM size",
        "Monitor quality",
      ],
      answer: "Code reusability",
    },
  ],
    "lists-tuples": [
    {
      question: "Lists are:",
      options: ["Mutable", "Immutable", "Numbers", "Functions"],
      answer: "Mutable",
    },
    {
      question: "Tuples are:",
      options: ["Mutable", "Immutable", "Strings", "Loops"],
      answer: "Immutable",
    },
    {
      question: "Lists are created using:",
      options: ["[]", "()", "{}", "<>"],
      answer: "[]",
    },
    {
      question: "Tuples use:",
      options: ["()", "[]", "{}", "<>"],
      answer: "()",
    },
    {
      question: "Both lists and tuples store:",
      options: [
        "Multiple values",
        "Only numbers",
        "Only text",
        "Functions",
      ],
      answer: "Multiple values",
    },
  ],

  dictionaries: [
    {
      question: "Dictionaries store:",
      options: [
        "Key-value pairs",
        "Loops",
        "Functions",
        "Classes",
      ],
      answer: "Key-value pairs",
    },
    {
      question: "Dictionary keys must be:",
      options: [
        "Unique",
        "Repeated",
        "Numbers only",
        "Strings only",
      ],
      answer: "Unique",
    },
    {
      question: "Dictionaries are created using:",
      options: ["{}", "[]", "()", "<>"],
      answer: "{}",
    },
    {
      question: "Values are accessed using:",
      options: [
        "Keys",
        "Indexes only",
        "Loops",
        "Functions",
      ],
      answer: "Keys",
    },
    {
      question: "Dictionaries are useful for:",
      options: [
        "Structured data",
        "Printing only",
        "Drawing",
        "Gaming",
      ],
      answer: "Structured data",
    },
  ],

  oop: [
    {
      question: "OOP stands for:",
      options: [
        "Object-Oriented Programming",
        "Open Online Program",
        "Object Operating Process",
        "Online Output Program",
      ],
      answer: "Object-Oriented Programming",
    },
    {
      question: "A blueprint for objects is called:",
      options: [
        "Class",
        "Function",
        "Variable",
        "Loop",
      ],
      answer: "Class",
    },
    {
      question: "Objects are created from:",
      options: [
        "Classes",
        "Variables",
        "Strings",
        "Lists",
      ],
      answer: "Classes",
    },
    {
      question: "Inheritance is used for:",
      options: [
        "Code reuse",
        "Printing",
        "Deleting files",
        "Comments",
      ],
      answer: "Code reuse",
    },
    {
      question: "Encapsulation means:",
      options: [
        "Hiding implementation",
        "Looping forever",
        "Creating variables",
        "Printing output",
      ],
      answer: "Hiding implementation",
    },
  ],

  "file-handling": [
    {
      question: "Files are opened using:",
      options: [
        "open()",
        "file()",
        "read()",
        "load()",
      ],
      answer: "open()",
    },
    {
      question: "Which mode reads files?",
      options: [
        "r",
        "w",
        "a",
        "x",
      ],
      answer: "r",
    },
    {
      question: "Which mode writes files?",
      options: [
        "w",
        "r",
        "a",
        "t",
      ],
      answer: "w",
    },
    {
      question: "Which statement closes files automatically?",
      options: [
        "with",
        "while",
        "for",
        "return",
      ],
      answer: "with",
    },
    {
      question: "File handling is mainly used for:",
      options: [
        "Saving data",
        "Creating loops",
        "Variables",
        "Functions",
      ],
      answer: "Saving data",
    },
  ],

  "mini-project": [
    {
      question: "A mini project combines:",
      options: [
        "Everything learned",
        "Only variables",
        "Only loops",
        "Nothing",
      ],
      answer: "Everything learned",
    },
    {
      question: "Projects improve:",
      options: [
        "Problem solving",
        "Typing speed",
        "Internet speed",
        "RAM",
      ],
      answer: "Problem solving",
    },
    {
      question: "Projects use:",
      options: [
        "Functions, loops and conditions",
        "Only print()",
        "Only comments",
        "Only variables",
      ],
      answer: "Functions, loops and conditions",
    },
    {
      question: "Projects help build:",
      options: [
        "Real applications",
        "Games only",
        "Nothing",
        "Operating systems",
      ],
      answer: "Real applications",
    },
    {
      question: "Completing the mini project finishes:",
      options: [
        "The roadmap",
        "Python",
        "Windows",
        "VS Code",
      ],
      answer: "The roadmap",
    },
  ],
};

export default function QuizPage() {
  const params = useParams();
  const slug = params.slug as string;

  const questions = quizzes[slug];

  if (!questions) {
    return (
      <main className="flex min-h-screen items-center justify-center text-3xl font-bold">
        Quiz Coming Soon
      </main>
    );
  }

  const [answers, setAnswers] = useState<string[]>(
    new Array(questions.length).fill("")
  );

  const [submitted, setSubmitted] = useState(false);

  function choose(index: number, option: string) {
    if (submitted) return;

    const updated = [...answers];
    updated[index] = option;
    setAnswers(updated);
  }

  const score = questions.reduce(
    (total, q, i) =>
      total + (answers[i] === q.answer ? 1 : 0),
    0
  );

  function submitQuiz() {
    setSubmitted(true);

    if (score >= 4) {
      const roadmap = JSON.parse(
        localStorage.getItem("roadmapProgress") ||
          JSON.stringify(new Array(10).fill(false))
      );

      const lessonOrder = [
        "python-basics",
        "variables",
        "if-statements",
        "loops",
        "functions",
        "lists-tuples",
        "dictionaries",
        "oop",
        "file-handling",
        "mini-project",
      ];

      roadmap[lessonOrder.indexOf(slug)] = true;

      localStorage.setItem(
        "roadmapProgress",
        JSON.stringify(roadmap)
      );
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 p-8">

      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-xl">

        <h1 className="text-5xl font-bold text-green-700">
          {slug.replace(/-/g, " ")} Quiz
        </h1>

        <p className="mt-3 text-gray-600">
          Score at least <b>4 / 5</b> to unlock the next lesson.
        </p>

        <div className="mt-10 space-y-8">

          {questions.map((q, i) => (
            <div key={i} className="rounded-xl border p-6">

              <h2 className="text-xl font-bold">
                {i + 1}. {q.question}
              </h2>

              <div className="mt-5 space-y-3">

                {q.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => choose(i, option)}
                    className={`block w-full rounded-xl border p-3 text-left ${
                      answers[i] === option
                        ? "bg-green-600 text-white"
                        : "hover:bg-green-50"
                    }`}
                  >
                    {option}
                  </button>
                ))}

              </div>

            </div>
          ))}

        </div>

        {!submitted ? (
          <button
            onClick={submitQuiz}
            className="mt-10 rounded-xl bg-green-600 px-8 py-3 font-semibold text-white hover:bg-green-700"
          >
            Submit Quiz
          </button>
        ) : (
          <div className="mt-10 rounded-2xl bg-green-50 p-6">

            <h2 className="text-3xl font-bold text-green-700">
              Score: {score} / 5
            </h2>

            {score >= 4 ? (
              <>
                <p className="mt-4 text-lg text-green-700">
                  🎉 Lesson Completed!
                </p>

                <Link
                  href="/roadmap"
                  className="mt-6 inline-block rounded-xl bg-green-600 px-8 py-3 font-semibold text-white hover:bg-green-700"
                >
                  Back to Roadmap
                </Link>
              </>
            ) : (
              <>
                <p className="mt-4 text-lg text-red-600">
                  You need at least 4 correct answers.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setAnswers(new Array(questions.length).fill(""));
                  }}
                  className="mt-6 rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700"
                >
                  Try Again
                </button>
              </>
            )}

          </div>
        )}

      </div>

    </main>
  );
}