"use client";

import H1 from "@/components/h1";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <H1>Error</H1>
      <p>{error.message}</p>
    </div>
  );
}
