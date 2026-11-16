"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function HomePage() {
  const appName = "TaskFlow";
  const tagLine = "One task at a time."
  const [status, setStatus] = useState("Checking Supabase connection...");

  useEffect(() => {
    const checkConnection = async () => {
      const supabase = createClient();
      const { error } = await supabase.auth.getSession();

      if (error) {
        setStatus("Connection failed: " + error.message);
      } else {
        setStatus("Connected to Supabase successfully!");
      }
    };

    checkConnection();
  }, []);

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-4xl font-bold">Welcome to {appName}</h1>
      <p>{tagLine}</p>

      <div className="p-4 border rounded bg-gray-50 text-black">
        <strong>Database Status:</strong> {status}
      </div>

      <a href="/login" className="inline-block text-blue-600 underline">
        Go to Login
      </a>
    </main>
  );
}