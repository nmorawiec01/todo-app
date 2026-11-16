export default function HomePage() {
  // 1. We are creating a text variable named appName
  const appName: string = "Nathan's To-Do App";

  return (
    <main className="p-8">
      {/* 2. Show the appName variable on the screen */}
      <h1 className="text-4xl font-bold">Welcome to {appName}</h1>

      <p>A simple place to track my daily tasks.</p>

      {/* 3. Create a clickable link that goes to /login */}
      <a href="/login" className="text-blue-600 underline">
        Go to Login
      </a>
    </main>
  );
}