"use client";

import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import Sidebar from "./components/Sidebar";
import { useEffect } from "react";

export default function AdminLayout({ children }) {
      const { user, loading } = useAuth();
      const router = useRouter();

      useEffect(() => {
            // Temporary fix: Allow USER role to access admin dashboard
            if (!loading && !user) {
                  router.push('/login');
            }
      }, [user, loading, router]);

      if (loading || !user) {
            return (
                  <div className="flex items-center justify-center min-h-screen bg-white">
                        <p className="text-gray-900">Loading or redirecting...</p>
                  </div>
            );
      }

      return (
            <div className="flex min-h-screen bg-gray-50 text-gray-900">
                  <Sidebar />
                  <main className="flex-1 p-4 md:p-8 ml-0 md:ml-64">
                        {children}
                  </main>
            </div>
      );
}