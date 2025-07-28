// src/pages/Welcome.tsx
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);

export function Welcome() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("rider");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setError(null);

    const { error } = await supabase.from("driver_leads").insert({ email, role });
    if (error) {
      setError(error.message);
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <header className="text-center py-16">
        <h1 className="text-5xl font-bold text-indigo-600">YAIMO</h1>
        <p className="mt-4 text-xl">Your AI Mobility – Ride or Drive with Automation</p>
      </header>

      <section className="max-w-md mx-auto bg-gray-50 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join the movement</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border p-2 rounded"
            placeholder="Your email address"
          />
          <select
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="rider">Rider</option>
            <option value="driver">Driver</option>
          </select>
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
            Sign Up
          </button>
        </form>
        {submitted && !error && <p className="mt-2 text-green-600">Thank you! We'll be in touch soon.</p>}
        {error && <p className="mt-2 text-red-600">Error: {error}</p>}
      </section>
    </main>
  );
}
