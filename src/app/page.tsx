import Link from "next/link";
import { categoryInfo, titansData, Category } from "@/lib/data";

export default function Home() {
  const categories: Category[] = ["designers", "developers", "researchers", "writers"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <section className="mb-20">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter mb-6">
          LEARN FROM<br />
          <span className="text-accent">THE MASTERS</span>
        </h1>
        <p className="text-xl max-w-2xl text-foreground/70 leading-relaxed">
          The greatest minds in their fields. Their philosophies, quotes, and lessons 
          that shaped industries. Study the titans.
        </p>
      </section>

      {/* Category Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => {
          const info = categoryInfo[category];
          const count = titansData[category].length;
          
          return (
            <Link
              key={category}
              href={`/${category}`}
              className="group industrial-border bg-background p-8 card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{info.icon}</span>
                <span className="label-style bg-foreground text-background px-3 py-1">
                  {count} TITANS
                </span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-accent transition-colors">
                {info.title}
              </h2>
              <p className="text-foreground/60">
                {info.description}
              </p>
              <div className="mt-6 flex items-center gap-2 label-style text-accent">
                EXPLORE
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </Link>
          );
        })}
      </section>

      {/* Stats */}
      <section className="mt-20 industrial-border bg-foreground text-background p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-accent">{titansData.metadata.totalTitans}</div>
            <div className="label-style mt-2">TOTAL TITANS</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent">4</div>
            <div className="label-style mt-2">DISCIPLINES</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent">80+</div>
            <div className="label-style mt-2">QUOTES</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent">48</div>
            <div className="label-style mt-2">LESSONS</div>
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="mt-20 text-center max-w-4xl mx-auto">
        <blockquote className="text-2xl sm:text-3xl font-medium leading-relaxed mb-6">
          &ldquo;Less, but better.&rdquo;
        </blockquote>
        <cite className="label-style text-foreground/60">
          — DIETER RAMS, DESIGNER
        </cite>
      </section>
    </div>
  );
}
