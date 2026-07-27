import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-50 via-white to-emerald-100">
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">
        <h1 className="text-center text-4xl font-bold text-gray-900">
          Welcome Back
        </h1>

        <p className="mt-2 text-center text-gray-600">
          Sign in to continue learning.
        </p>

        <form className="mt-8 space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border p-4 outline-none focus:border-green-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border p-4 outline-none focus:border-green-500"
          />

          <button
            className="w-full rounded-xl bg-green-600 py-4 font-semibold text-white hover:bg-green-700"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-green-600"
          >
            Sign Up
          </Link>
        </p>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-gray-500 hover:text-green-600"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}