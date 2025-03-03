// app/not-found.tsx
"use client"; // If you use client-side hooks here
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}
