export default function Loading() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-muted border-t-primary" />

        <p className="mt-4 font-mono text-sm text-muted-foreground">
          Loading...
        </p>
      </div>
    </main>
  );
}