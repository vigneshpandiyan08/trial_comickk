"use client";
import { useRouter } from "next/navigation";


export default function Landing() {
  const router = useRouter();
  return (
    <div className="min-h-screen w-full bg-mist-100 dark:bg-gray-900 flex flex-col">
        <main className="flex-1 container mx-auto p-4 sm:p-6 lg:p-12 flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 text-center mb-6">
          Welcome to Comickk
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-center max-w-2xl mb-6 sm:text-lg md:text-xl">
          Discover, read, and track your favorite comics all in one place.
        </p>
        {/* Placeholder for call-to-action / hero buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-stone-800 text-white px-6 py-3 rounded-md hover:bg-stone-600 transition" onClick={()=>router.push('/')}>
            Explore Comics
          </button>
          <button className="bg-zinc-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-md hover:bg-zinc-400 dark:hover:bg-gray-600 transition">
            Learn More
          </button>
        </div>
      </main>
    </div>
  );
}