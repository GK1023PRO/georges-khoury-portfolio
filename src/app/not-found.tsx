import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-sm tracking-[0.3em] text-primary">
          ERROR 404
        </p>

        <h1 className="mt-4 text-4xl font-bold">
          Page not found
        </h1>

        <p className="mt-4 text-muted-foreground">
          The page you requested does not exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}