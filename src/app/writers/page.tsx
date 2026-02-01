import { categoryInfo, titansData } from "@/lib/data";
import { TitanCard } from "@/components/TitanCard";
import Link from "next/link";

export const metadata = {
  title: "Writers | TITANS",
  description: "Craftspeople who shape thought through language. Explore the greatest writers.",
};

export default function WritersPage() {
  const category = "writers";
  const info = categoryInfo[category];
  const titans = titansData[category];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link href="/" className="label-style text-foreground/60 hover:text-accent transition-colors">
          ← BACK TO ALL
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl">{info.icon}</span>
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter">
              {info.title}
            </h1>
            <p className="text-foreground/60 mt-2">{info.description}</p>
          </div>
        </div>
        <div className="label-style text-accent mt-4">
          {titans.length} TITANS
        </div>
      </header>

      {/* Titans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {titans.map((titan) => (
          <TitanCard key={titan.name} titan={titan} category={category} />
        ))}
      </div>
    </div>
  );
}
