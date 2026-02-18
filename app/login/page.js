"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const dynamic = 'force-dynamic';

export default function LoginPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, user, loading: authLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && user) {
      if (user.role === "SUPER_ADMIN" || user.role === "ADMIN") {
        router.push("/admin");
      } else {
        router.push("/");
      }
    }
  }, [user, authLoading, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const result = await login(email, password);
      if (!result.success) {
        setError(result.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (authLoading || user) {
    return (
      <main className="min-h-screen bg-deep-space text-white flex items-center justify-center">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-deep-space text-white flex items-center justify-center p-4">
      <div className="glass-card w-full max-w-md p-8 rounded-lg text-center">
        <Image width="100" height="100" src="/pp-logo-1.png" alt="Passport Pulse Logo" className=" w-44 mb-4 brightness-0 invert-0 contrast-0 mx-auto"/>
        <p className="text-gray-400 mb-6">
          Welcome back! Please log in to your account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email Address"
              className="w-full p-3 rounded-lg bg-black/30 border border-white/10 focus:border-[var(--neon-cyan)] focus:ring-1 focus:ring-[var(--primary-glow)] focus:outline-none transition-colors text-white"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Password"
              className="w-full p-3 rounded-lg bg-black/30 border border-white/10 focus:border-[var(--neon-cyan)] focus:ring-1 focus:ring-[var(--primary-glow)] focus:outline-none transition-colors text-white"
            />
          </div>
          {error && (
            <p className="text-red-400 text-center">{error}</p>
          )}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-block px-10 py-4 text-lg font-semibold text-black bg-[var(--neon-cyan)] rounded-lg transition-all duration-300 ease-in-out hover:bg-white disabled:bg-gray-600"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}