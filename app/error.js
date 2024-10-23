"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <div className="flex items-center justify-center gap-x-2">
        <button
          className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
          onClick={reset}
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-block border border-accent-500 text-accent-500 hover:border-primary-100 hover:bg-primary-100 hover:text-primary-800 transition-colors px-6 py-3 text-lg"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}
