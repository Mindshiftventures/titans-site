"use client";

import Image from "next/image";
import Link from "next/link";
import { Titan, Category, categoryInfo } from "@/lib/data";
import { useState } from "react";

interface TitanProfileProps {
  titan: Titan;
  category: Category;
}

export function TitanProfile({ titan, category }: TitanProfileProps) {
  const [imageError, setImageError] = useState(false);
  const info = categoryInfo[category];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 label-style text-foreground/60">
        <Link href="/" className="hover:text-accent transition-colors">HOME</Link>
        <span>/</span>
        <Link href={`/${category}`} className="hover:text-accent transition-colors">
          {info.title}
        </Link>
        <span>/</span>
        <span className="text-foreground">{titan.name.toUpperCase()}</span>
      </nav>

      {/* Hero Section */}
      <header className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Portrait */}
        <div className="lg:col-span-1">
          <div className="aspect-[3/4] relative industrial-border overflow-hidden bg-foreground/10">
            {!imageError ? (
              <Image
                src={titan.imageUrl}
                alt={titan.name}
                fill
                className="object-cover object-top"
                onError={() => setImageError(true)}
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-8xl font-bold text-foreground/20">
                {titan.name.charAt(0)}
              </div>
            )}
          </div>
        </div>

        {/* Name and Bio */}
        <div className="lg:col-span-2">
          <div className="label-style text-accent mb-2">{info.icon} {info.title.slice(0, -1)}</div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-6">
            {titan.name}
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed">
            {titan.bio}
          </p>
        </div>
      </header>

      {/* Philosophy */}
      <section className="mb-16">
        <h2 className="label-style text-accent mb-4">PHILOSOPHY</h2>
        <div className="industrial-border bg-foreground text-background p-8">
          <p className="text-xl leading-relaxed">
            {titan.philosophy}
          </p>
        </div>
      </section>

      {/* Quotes */}
      <section className="mb-16">
        <h2 className="label-style text-accent mb-6">NOTABLE QUOTES</h2>
        <div className="space-y-6">
          {titan.quotes.map((quote, index) => (
            <blockquote
              key={index}
              className="industrial-border border-l-4 border-l-accent border-t-0 border-r-0 border-b-0 pl-6 py-2"
            >
              <p className="text-lg italic">
                &ldquo;{quote}&rdquo;
              </p>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Lessons */}
      <section className="mb-16">
        <h2 className="label-style text-accent mb-6">KEY LESSONS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {titan.lessons.map((lesson, index) => (
            <div key={index} className="industrial-border p-6">
              <div className="text-4xl font-bold text-accent mb-4">
                {String(index + 1).padStart(2, "0")}
              </div>
              <p className="text-foreground/80">
                {lesson}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Books */}
      <section className="mb-16">
        <h2 className="label-style text-accent mb-6">RECOMMENDED READING</h2>
        <div className="space-y-4">
          {titan.books.map((book, index) => (
            <div key={index} className="industrial-border p-6 flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-16 industrial-border bg-foreground flex items-center justify-center text-background text-xs font-bold">
                  BOOK
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg">{book.title}</h3>
                <p className="text-foreground/60 mt-1">{book.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <nav className="pt-8 border-t-2 border-foreground">
        <Link 
          href={`/${category}`}
          className="inline-flex items-center gap-2 label-style text-foreground hover:text-accent transition-colors"
        >
          <span>←</span>
          BACK TO ALL {info.title}
        </Link>
      </nav>
    </div>
  );
}
