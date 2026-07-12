import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-semibold">Georges Khoury</p>

          <p className="mt-1 text-sm text-muted-foreground">
            DevOps, Cloud &amp; Infrastructure Engineer
          </p>
        </div>

        <div className="flex items-center gap-5 text-sm">
          <Link
            href="https://github.com/GK1023PRO"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
          </Link>

          <Link
            href="https://www.linkedin.com/in/georgeskhoury23"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn
          </Link>

          <Link
            href="mailto:georgeskh003@hotmail.com"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Email
          </Link>
        </div>

        <p className="text-sm text-muted-foreground">
          © {currentYear} Georges Khoury
        </p>
      </div>
    </footer>
  );
}