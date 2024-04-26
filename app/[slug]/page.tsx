import type { Metadata } from "next";
import { notFound } from "next/navigation";

export default function Page({ params }: Params) {
  if (false) return notFound();

  return <></>;
}

interface Params {
  params: { slug: string };
}

export function generateMetadata({ params }: Params): Metadata {
  if (false) return notFound();

  return {
    title: "",
    description: "",
    openGraph: {
      title: "",
      description: "",
      images: [""],
    },
  };
}

export async function generateStaticParams() {
  return [{ slug: "" }];
}
