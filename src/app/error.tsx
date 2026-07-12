"use client";

interface ErrorPageProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <p className="font-mono text-sm text-destructive">
          APPLICATION ERROR
        </p>

        <h1 className="mt-4 text-3xl font-bold">
          Something went wrong
        </h1>

        <p className="mt-4 text-muted-foreground">
          {error.message || "An unexpected error occurred."}
        </p>

        <button
          type="button"
          onClick={reset}
          className="mt-8 rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground"
        >
          Try again
        </button>
      </div>
    </main>
  );
}