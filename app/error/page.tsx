"use client"; // Ensure it's client-side


export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>  {/* Display the error message */}
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
