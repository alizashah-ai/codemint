import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <Image
          src="/logo.png"
          alt="CodeMint Logo"
          width={280}
          height={75}
          priority
          className="h-auto w-[280px]"
        />
      </nav>

      {/* Hero Section */}
      <section className="mx-auto flex max-w-5xl flex-col items-center px-8 pt-8 pb-20 text-center">
        <h1 className="text-5xl font-extrabold leading-tight text-gray-900 md:text-7xl">
          Learn Smarter with
          <span className="mt-2 block text-green-600">CodeMint AI</span>
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-9 text-gray-600">
          Master Python through AI-powered guidance, interactive roadmaps,
          daily coding challenges, and a personal code vault—all in one place.
         
        </p>

        <div className="mt-10 flex gap-5">
          <Link
            href="/dashboard"
            className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
          >
            Get Started
          </Link>

          <a
  href="#features"
  className="rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold transition hover:bg-gray-100"
>
  Learn More
</a> 
        </div>
      </section>

      {/* Why Choose CodeMint */}
<section
  id="features"
  className="mx-auto max-w-6xl px-8 pb-20"
>

  <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
    Why Choose CodeMint?
  </h2>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

    <div className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
      <div className="text-5xl">🤖</div>

      <h3 className="mt-5 text-2xl font-bold">
        AI Powered
      </h3>

      <p className="mt-3 text-gray-600">
        Get instant programming guidance whenever you need help.
      </p>
    </div>

    <div className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
      <div className="text-5xl">📚</div>

      <h3 className="mt-5 text-2xl font-bold">
        Structured Learning
      </h3>

      <p className="mt-3 text-gray-600">
        Follow a clear roadmap from beginner to advanced topics.
      </p>
    </div>

    <div className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
      <div className="text-5xl">🔥</div>

      <h3 className="mt-5 text-2xl font-bold">
        Daily Practice
      </h3>

      <p className="mt-3 text-gray-600">
        Improve your coding skills through daily challenges.
      </p>
    </div>

    <div className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
      <div className="text-5xl">💾</div>

      <h3 className="mt-5 text-2xl font-bold">
        Personal Code Vault
      </h3>

      <p className="mt-3 text-gray-600">
        Save notes, code snippets and AI solutions in one place.
      </p>
    </div>

  </div>

</section>
      
    </main>
  );
}