"use client";

import Link from "next/link";
import Image from "next/image";
import { Titan, Category, slugify } from "@/lib/data";
import { useState } from "react";

interface TitanCardProps {
  titan: Titan;
  category: Category;
}

export function TitanCard({ titan, category }: TitanCardProps) {
  const [imageError, setImageError] = useState(false);
  const slug = slugify(titan.name);

  return (
    <Link
      href={`/${category}/${slug}`}
      className="group industrial-border bg-background overflow-hidden card-hover"
    >
      <div className="aspect-[4/3] relative bg-foreground/10 overflow-hidden">
        {!imageError ? (
          <Image
            src={titan.imageUrl}
            alt={titan.name}
            fill
            className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-foreground/20">
            {titan.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold tracking-tight mb-2 group-hover:text-accent transition-colors">
          {titan.name}
        </h3>
        <p className="text-sm text-foreground/60 line-clamp-2">
          {titan.bio}
        </p>
        <div className="mt-4 flex items-center gap-2 label-style text-accent text-xs">
          VIEW PROFILE
          <span className="group-hover:translate-x-2 transition-transform">→</span>
        </div>
      </div>
    </Link>
  );
}
