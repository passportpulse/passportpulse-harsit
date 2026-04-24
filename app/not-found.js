"use client";

import Link from "next/link";
import { useEffect } from "react";

export const dynamic = 'force-dynamic';

export default function NotFound() {
  useEffect(() => {
    // Redirect to home page after 3 seconds
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-deep-space text-white flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-[var(--neon-cyan)] mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <p className="text-sm text-gray-500 mb-8">
          You will be redirected to the home page in a few seconds...
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 font-semibold text-black bg-[var(--neon-cyan)] rounded-lg transition-all duration-300 ease-in-out hover:bg-[var(--darker-cyan)] hover:text-white"
        >
          Go Home Now
        </Link>
      </div>
    </main>
  );
}
