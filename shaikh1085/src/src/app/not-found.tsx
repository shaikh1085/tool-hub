import Link from "next/link";

/**
 * This only fires for requests middleware.ts didn't redirect into a
 * /[lang]/ segment (edge cases like malformed paths). The real,
 * fully-designed 404 experience lives at app/[lang]/not-found.tsx
 * (Part 5) and is what users actually see in normal navigation.
 */
export default function RootNotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#F7F8FA] font-sans text-[#14181F]">
        <p className="text-sm font-medium text-[#2F6FED]">404</p>
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <Link href="/en" className="text-sm underline underline-offset-4">
          Go to homepage
        </Link>
      </body>
    </html>
  );
}
