import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TITANS | Greatest Minds in Design, Development, Research & Writing",
  description: "Learn from the masters. Explore the philosophies, quotes, and lessons from the greatest minds in Design, Development, Research, and Writing.",
};

function Navigation() {
  return (
    <nav className="industrial-border bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold tracking-widest hover:text-accent transition-colors">
            TITANS
          </Link>
          <div className="flex gap-6 text-sm label-style">
            <Link href="/designers" className="hover:text-accent transition-colors">
              DESIGNERS
            </Link>
            <Link href="/developers" className="hover:text-accent transition-colors">
              DEVELOPERS
            </Link>
            <Link href="/researchers" className="hover:text-accent transition-colors">
              RESEARCHERS
            </Link>
            <Link href="/writers" className="hover:text-accent transition-colors">
              WRITERS
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="industrial-border border-t-2 border-x-0 border-b-0 mt-20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="label-style text-foreground/60">
            TITANS — LEARNING FROM THE MASTERS
          </p>
          <p className="text-sm text-foreground/40">
            Built with Next.js • Curated with care
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
