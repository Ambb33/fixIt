// app/error.tsx
"use client"; // If you use client-side hooks here

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
