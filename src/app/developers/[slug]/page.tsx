import { notFound } from "next/navigation";
import { getTitanBySlug, titansData, slugify } from "@/lib/data";
import { TitanProfile } from "@/components/TitanProfile";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return titansData.developers.map((titan) => ({
    slug: slugify(titan.name),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const titan = getTitanBySlug("developers", slug);
  
  if (!titan) {
    return { title: "Not Found" };
  }

  return {
    title: `${titan.name} | TITANS`,
    description: titan.bio,
  };
}

export default async function DeveloperPage({ params }: Props) {
  const { slug } = await params;
  const titan = getTitanBySlug("developers", slug);

  if (!titan) {
    notFound();
  }

  return <TitanProfile titan={titan} category="developers" />;
}
