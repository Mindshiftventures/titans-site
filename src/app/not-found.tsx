import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
      <div className="text-8xl font-bold text-accent mb-8">404</div>
      <h1 className="text-3xl font-bold tracking-tighter mb-4">
        TITAN NOT FOUND
      </h1>
      <p className="text-foreground/60 mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block industrial-border bg-foreground text-background px-6 py-3 label-style hover:bg-accent transition-colors"
      >
        RETURN HOME
      </Link>
    </div>
  );
}
