export interface Lesson {
  slug: string;
  title: string;
  content: string[];
  quiz: string;
}

export const lessons: Lesson[] = [
  {
    slug: "python-basics",
    title: "Python Basics",
    quiz: "/quiz/python-basics",
    content: [
      "Python is a high-level programming language.",
      "It is simple, readable and beginner-friendly.",
      "Python is widely used in AI, Web Development, Data Science and Automation.",
      "Every Python program is made of instructions executed from top to bottom.",
      "The print() function displays output on the screen.",
    ],
  },

  {
    slug: "variables",
    title: "Variables & Data Types",
    quiz: "/quiz/variables",
    content: [
      "Variables store information.",
      "Python automatically detects the data type.",
      "Common types are int, float, string and boolean.",
      "Variables are created using the = operator.",
      "Variable names should be meaningful.",
    ],
  },

  {
    slug: "if-statements",
    title: "If Statements",
    quiz: "/quiz/if-statements",
    content: [
      "If statements make decisions.",
      "Conditions return True or False.",
      "elif allows multiple conditions.",
      "else runs when every condition is false.",
      "Indentation is required in Python.",
    ],
  },

  {
    slug: "loops",
    title: "Loops",
    quiz: "/quiz/loops",
    content: [
      "Loops repeat code.",
      "Python has for and while loops.",
      "range() generates sequences.",
      "break exits a loop.",
      "continue skips one iteration.",
    ],
  },

  {
    slug: "functions",
    title: "Functions",
    quiz: "/quiz/functions",
    content: [
      "Functions organize code.",
      "They are created using def.",
      "Functions can accept parameters.",
      "Functions may return values.",
      "They improve code reusability.",
    ],
  },

  {
    slug: "lists-tuples",
    title: "Lists & Tuples",
    quiz: "/quiz/lists-tuples",
    content: [
      "Lists are mutable.",
      "Tuples are immutable.",
      "Both store multiple values.",
      "Lists use [].",
      "Tuples use ().",
    ],
  },

  {
    slug: "dictionaries",
    title: "Dictionaries",
    quiz: "/quiz/dictionaries",
    content: [
      "Dictionaries store key-value pairs.",
      "Keys are unique.",
      "Values are accessed using keys.",
      "Curly braces {} create dictionaries.",
      "Useful for structured data.",
    ],
  },

  {
    slug: "oop",
    title: "Object-Oriented Programming",
    quiz: "/quiz/oop",
    content: [
      "Classes define objects.",
      "Objects have attributes and methods.",
      "Inheritance reuses code.",
      "Encapsulation hides implementation.",
      "OOP improves organization.",
    ],
  },

  {
    slug: "file-handling",
    title: "File Handling",
    quiz: "/quiz/file-handling",
    content: [
      "Files are opened using open().",
      "Modes include r, w and a.",
      "Always close files.",
      "with automatically closes files.",
      "Useful for saving data.",
    ],
  },

  {
    slug: "mini-project",
    title: "Mini Project",
    quiz: "/quiz/mini-project",
    content: [
      "Combine everything you've learned.",
      "Build a small Python application.",
      "Practice problem solving.",
      "Apply functions, loops and conditions.",
      "Complete the project to finish the roadmap.",
    ],
  },
];